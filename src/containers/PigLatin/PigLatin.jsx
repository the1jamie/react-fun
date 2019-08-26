import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from './constants';
import { setTitle, setRowsMax, setEnglish, setPigLatin } from './actions'
import { TextField } from '@material-ui/core';
import { CardContainer } from '../../elements/card-container/card-container';


class PigLatin extends React.Component {
  constructor(props) {
    super(props);

    const { title } = constants
    const { setTitle, setRowsMax } = this.props;
    setTitle(title);
    setRowsMax(5);
    this.translateToPigLatin = this.translateToPigLatin.bind(this);
    this.handleEnglishChange = this.handleEnglishChange.bind(this);
  }

  handleEnglishChange(e) {
    e.preventDefault();
    let english = e.target.value;
    this.props.setEnglish(english)
    this.translateToPigLatin(english);
  }

  translateToPigLatin(text) {
    if (text) {
      const words = text.split(' ');
      this.props.setPigLatin(this.parseEng(words))
    }
  }

  parseEng(words) {
    const arr = [];
    let body = '';
    let tail = '';
    let ay = '';
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        switch(words[i].length) {
          case 1:
            body = words[i];
            tail = '';
            ay = 'hay';
            break;
          default:
            if (vowels.includes(words[i][j])) {
              body = words[i].substring(j);
              tail = words[i].substring(0, j);
              ay = (j === 0) ? 'hay': 'ay';
              break;
            }
        }
      }
      arr.push(`${body}-${tail + ay}`);
    }
    return arr.join(' ');
  }

  render() {
    const { title, english, pigLatin, rowsMax } = this.props.pigLatin;

    return (
        <CardContainer title={title}>
          <form align="center">
            <TextField
              multiline
              rowsMax={rowsMax}
              value={english}
              onChange={this.handleEnglishChange}
            />
            >>>
            <TextField
              multiline
              rowsMax={rowsMax}
              value={pigLatin}
            />
          </form>
        </CardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    pigLatin: state.pigLatin
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setTitle, 
    setRowsMax, 
    setEnglish, 
    setPigLatin
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PigLatin)