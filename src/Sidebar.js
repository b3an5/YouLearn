import React, { Component } from 'react';
import './main.scss';

export default class CardContainer extends Component {



  render() {
    return (
      <div className='sidebar'>
        <h2 className='filter-title'>Video Length</h2>
        <ul className='length'>
          <li onClick={this.props.filterLength} className='short-vid'>Short</li>
          <li onClick={this.props.filterLength} className='long-vid'>Long</li>
        </ul>
        <h2 className='filter-title'>Experence Level</h2>
        <ul className='xp-level'>
          <li
          onClick={this.props.filterLevel} className='beginner'>Beginner</li>
          <li onClick={this.props.filterLevel} className='intermediate'>Intermediate</li>
          <li onClick={this.props.filterLevel} className='advanced'>Advanced</li>
        </ul>
        <h2 className='filter-title'>Like/View</h2>
        <ul className='xp-level'>
          <li
          onClick={this.props.filterLikes} className='beginner'>Choice Cuts</li>
        </ul>
      </div>
    )
  }
}