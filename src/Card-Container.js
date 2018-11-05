import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {

  render() {
    console.log(this.props.allVideos)
    return(
      <div className='display-none card-container'>
        {this.props.filteredVideos.map((vid, index) => {
          return <Card key={index} video={vid} />;
        })}
      </div>
    )
  }
}