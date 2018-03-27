import React, {Component} from 'react';

class CalculatedBid extends Component {
    render () {
        const calculateBidStyle = {
            float: 'left',
            width: '25%',
        };
        return (
            <div style={calculateBidStyle}>
                <u>The bid is: 4</u>
            </div>
        );
    }
}

export default CalculatedBid