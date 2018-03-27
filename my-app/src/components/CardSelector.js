import React, {Component} from 'react';

class CardSelector extends Component {
    render () {
        const cardChooserStyle = {
            float: 'left',
            width: '25%',
        };

        return (
            <div style={cardChooserStyle}>
                    <u>Add a Card</u><br/><br/>
                    <div>Suit</div>
                <select id="dropdown">
                    <option value="1">Spade</option>
                    <option value="2">Club</option>
                    <option value="3">Heart</option>
                    <option value="4">Diamond</option>
                </select>
                <div>Rank</div>
                <select id="dropdown">
                    <option value="1">Ace</option>
                    <option value="2">King</option>
                    <option value="3">Queen</option>
                    <option value="4">Jack</option>
                    <option value="5">Ten</option>
                    <option value="6">Nine</option>
                    <option value="7">Eight</option>
                    <option value="8">Seven</option>
                    <option value="9">Six</option>
                    <option value="10">Five</option>
                    <option value="11">Four</option>
                    <option value="12">Three</option>
                    <option value="13">Two</option>
                </select>
            </div>
        );
    }
}

export default CardSelector