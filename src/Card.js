import React, { Component } from 'react';
import VideoDiscription from './VideoDiscription';
import './main.scss';

export default class Card extends Component {
  render() {
    return(
      <div className='card'>
        <h1 onClick={this.props.savedVideo}>{this.props.video.title}<i className="far fa-bookmark"></i></h1>
        <iframe 
        width="560" 
        height="315" 
        src={this.props.video.url}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
        <VideoDiscription video={this.props.video} />
      </div>
    )
  }
}