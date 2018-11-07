import React, { Component } from 'react';
import Card from './Card';
import './main.scss';

export default class CardContainer extends Component {

  render() {
    return(
      <div className='display-none card-container'>
        {this.props.filteredVideos.map((vid, index) => {
          return <Card key={index} video={vid} />;
        })}
      </div>
    )
  }
}