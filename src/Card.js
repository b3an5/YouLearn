import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    // console.log(this.props.video)
    return(
      <div>
        <p>{this.props.video.title}</p>
        <iframe 
        width="560" 
        height="315" 
        src={this.props.video.url}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>
    )
  }
}