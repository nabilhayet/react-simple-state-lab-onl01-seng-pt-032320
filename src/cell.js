import React, { Component } from 'react';
import Matrix from './Matrix.js';

export default class Cell extends Component {

    constructor(props){
        super()
        this.state = {color: `${this.props.value}`}
    }

    changeColor = () => {
        this.setState({
            color: this.state.color = '#333'
          })
    }

    render(){
        return (
            <div class="cell" style={{backgroundColor: `${this.state.color}`}}>
                onClick={() => {this.changeColor}}
                {this.state.color}
            </div>
                )
    }
}