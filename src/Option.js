import React, { Component } from 'react';
// import './main.scss';

export default class Option extends Component {
  render() {
    return (
      <option id='catigory' value={this.props.currentCat}>{this.props.currentCat}</option>
    );
  }
}