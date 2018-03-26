import React, {Component} from 'react';

class Card extends Component {
    render() {
        const image = require('./images/daniel.jpg');
        var imageStyle = {
            width: 66, 
            height: 58
        };
        return (
            <div>
                <img style={imageStyle} src={image} alt='this should not show'/>
            </div>
        );
    }
}

export default Card;