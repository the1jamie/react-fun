import React from 'react';
import { CardContainer } from '../elements/card-container/card-container';
import { TextField, Button } from '@material-ui/core';

export class PigLatin extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'English >> Pig Latin',
            rowsMax: 5,
        }
        this.translateToPigLatin = this.translateToPigLatin.bind(this);
        this.handleEnglishChange = this.handleEnglishChange.bind(this);
    }

    handleEnglishChange(e) {
        this.setState({ english: e.target.value });
    }

    translateToPigLatin() {
        const text = this.state.english;
        const words = text.split(' ');
        this.setState({ translation: this.parseEng(words) });
    }

    parseEng(words) {
        let ay;
        const arr = [];
        let body;
        let tail;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) { // loop through string
                if (vowels.includes(words[i][j])) {
                    body = words[i].substring(j);
                    tail = words[i].substring(0, j);
                    ay = (j === 0) ? 'hay': 'ay';
                    break;
                }
            }
            arr.push(`${body}-${tail + ay}`);
        }
        return arr.join(' ');
    }

    render() {
        return (
            <div>
            <CardContainer>
                <h1 align="center">{this.state.title}</h1>
                <form align="center" onSubmit={this.translateToPigLatin}>
                    <TextField
                        multiline
                        rowsMax={this.state.rowsMax}
                        value={this.state.english}
                        onChange={this.handleEnglishChange}
                    />
                    <Button type="button" onClick={this.translateToPigLatin}>Translate</Button>
                    <TextField
                        multiline
                        rowsMax={this.state.rowsMax}
                        value={this.state.translation}
                    />
                </form>
            </CardContainer>
            </div>
        );
    }
}