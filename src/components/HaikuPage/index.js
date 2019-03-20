import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';


class HaikuPage extends Component {

    state = {
        line_2: '',
        line_3: '',
        count_1: 0,
        count_2: 0,
        count_3: 0,

    }

    handleChange = (line) => (event) => {
        console.log('in handle change');
        this.setState({
            [line]: event.target.value,
        });
    }

    // count the number of syllables in each line
    countSyllables = (haikuLine) => {
        console.log('in countSyllables');
        let lineArray = haikuLine.split(" ");
        let totalSyllables = 0;
        lineArray.forEach(word => {
            console.log('word:', word);
            let syllables = this.new_count(word);
            console.log('syllables', syllables);
            totalSyllables = totalSyllables + syllables;
        });
        return totalSyllables;
    }

    // count number of syllables in a word
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
                {/* {JSON.stringify(this.state)} */}
                <h2>Intuitive</h2>
                <Line1 />
                <div>
                    <input
                        type="text"
                        value={this.state.line_2}
                        onChange={this.handleChange('line_2')}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.line_3}
                        onChange={this.handleChange('line_3')}
                    />
                </div>
                <div>
                    <button
                        // onClick={this.handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);