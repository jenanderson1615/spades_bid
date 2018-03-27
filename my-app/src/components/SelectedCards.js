import React, { Component } from 'react';
import Card from './Card';

class SelectedCards extends Component {
    render() {
        var column2Style = {
            float: 'left',
            width: '50%',
        };

        var cardColumnStyle = {
            float: 'left',
            width: '33%',
        };

        return (
            <div style={column2Style}>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>

                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>

                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>

                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>
                <span style={cardColumnStyle}><Card /></span>

            </div>
        );
    }
}

export default SelectedCards