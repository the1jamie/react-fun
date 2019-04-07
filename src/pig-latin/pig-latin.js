import React from 'react';
import { TextField, Button, Card } from '@material-ui/core';

export class PigLatin extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'English >> Pig Latin',
            rowsMax: 5,
        }
        this.translateToPigLatin = this.translateToPigLatin.bind(this);
        this.handleEnglishChange = this.handleEnglishChange.bind(this);
    }

    handleEnglishChange(e) {
        this.setState({english: e.target.value});
    }

    translateToPigLatin() {
        const text = this.state.english;
        const words = text.split(' ');
        this.setState({translation: this.parseEng(words)});
    }

    parseEng(words) {
        const ay = 'ay';
        const arr = [];
        let body;
        let tail;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        for(let i = 0; i < words.length; i++) {
            for(let j = 0; j < words[i].length; j++ ) {
                if(vowels.includes(words[i][j])) {
                    body = words[i].substring(j);
                    tail = words[i].substring(0,j);
                    break;
                }
            }
            arr.push(`${body}-${tail+ay}`);
        }
        return arr.join(' ');
    }

    render() {
        return (
            <Card>
                <h1 align="center">{this.state.title}</h1>
                <form align="center" onSubmit={this.translateToPigLatin}>
                    <TextField
                        multiline 
                        rowsMax={ this.state.rowsMax}
                        value={this.state.english}
                        onChange={this.handleEnglishChange}
                    />
                    <Button type="button" onClick={this.translateToPigLatin} >Translate</Button>
                    <TextField
                        multiline
                        rowsMax={ this.state.rowsMax}
                        value={this.state.translation}
                    />
                </form>
            </Card>
        );
    }
}