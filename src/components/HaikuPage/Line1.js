import React, { Component } from 'react';
import { connect } from 'react-redux';


class Line1 extends Component {

    state = {
        count: 0,
    }

    handleChange = (event) => {
        console.log('in handle change');
        // set haiku line1 in haikuReducer
        this.props.dispatch({
            type: 'SET_HAIKU_LINE',
            payload: event.target.value,
            propertyName: 'line_1'
        });

        // haiku line 1 from reducer
        let line = this.props.haikuLine.line_1;
        console.log('line', line);

        // count the number of syllables in each line
        // set count state
        console.log('line 1 syllable count:', this.getLineCount(line) );
        this.setState({
            count: this.getLineCount(line)
        }) 
        
    }

    getLineCount = (line) => {
        // line = this.props.haikuLine.line_1;

        console.log('in getLineCount', line);
        let totalSyllables = 0;
        // split is undefined if string is not a character
        // get the sum of syllables in a line
        for (const character in line) {
            if (character !== ' ') {
                let lineArray = line.split(" ");
                for (let word of lineArray) {
                    totalSyllables += this.getWordCount(word);
                }
                return totalSyllables;
                
            }
        }
    }

    // calculate number of syllables in a word
    getWordCount = (word) => {
        console.log('word:', word);
        let syllables = this.new_count(word);
        console.log('syllables', syllables);
        // totalSyllables = totalSyllables + syllables;

        return syllables;
    }

    // define syllable rules in English
    new_count = (word) => {
        word = word.toLowerCase();
        if (word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        return word.match(/[aeiouy]{1,2}/g).length;
    }


    render() {

        return (
            <div>
                <p>{JSON.stringify(this.props.haikuLine.line_1)}</p>
                <input
                    type="text"
                    value={this.props.haikuReducer}
                    onChange={this.handleChange}
                />
                <p>{(this.state.count)}/5</p>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line1);