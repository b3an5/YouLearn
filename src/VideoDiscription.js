import React, { Component } from 'react';
import './main.scss';

export default class VideoDescription extends Component {

  render() {
    return(
      <div className='vid-desc'>
        <h2>Channel: {this.props.video.channel}</h2>
        <h2>Level: {this.props.video.level}</h2>
        <h2>Time: {this.props.video.time} (in minutes)</h2>
        <h2>View/Like ratio: {(this.props.video.views / this.props.video.likes).toFixed(2)}</h2>
      </div>
    )
  }
}