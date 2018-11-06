import React, { Component } from 'react';
import VideoDiscription from './VideoDiscription';
import './main.scss';

export default class Card extends Component {
  render() {
    return(
      <div className='card'>
        <h1>{this.props.video.title}</h1>
        <iframe 
        width="560" 
        height="315" 
        src={this.props.video.url}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        <VideoDiscription video={this.props.video} />
      </div>
    )
  }
}