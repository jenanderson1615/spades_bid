import React, {Component} from 'react';

class Card extends Component {
    render() {
        const image = require('../images/spades_ace.png');
        var imageStyle = {
            width: 75, 
            height: 105
        };
        return (
            <div>
                <img style={imageStyle} src={image} alt='this should not show'/>
            </div>
        );
    }
}

export default Card;