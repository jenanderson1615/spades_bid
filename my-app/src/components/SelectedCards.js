import React, {Component} from 'react';
import Card from './Card';

class SelectedCards extends Component {
    render () {
        var column2Style = {
            float: 'right', 
            width: '50%',
        };

        return (
            <div style = {column2Style}>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
                    <span><Card /></span>
            </div>
        );
    }
}

export default SelectedCards