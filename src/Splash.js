import React, { Component } from 'react';
import Option from './Option.js';
import './main.scss';

export default class Splash extends Component {
  // constructor() {
  //   super();
  //   this.state= {
  //     catArr: null,
  //     uniqueCat: []
  //   }
  // }

  hideSplash = (event) => {
    let splashPage = document.querySelector('.splash');
    let cardContainer = document.querySelector('.card-container');
    
    splashPage.classList.add('display-none');
    cardContainer.classList.remove('display-none');
    this.props.filterCatigory(event);
  }

  
  
  render() {
    return(
      <div className='splash'>    
        <h1 className='title'><i class="fas fa-brain"></i>YouLearn</h1>    
        <button onClick={this.hideSplash}>HTML</button>
        <button onClick={this.hideSplash}>CSS</button>
        <button onClick={this.hideSplash}>Flexbox</button>
        <button onClick={this.hideSplash}>Javascript</button>
        <button onClick={this.hideSplash}>ES6</button>
        <button onClick={this.hideSplash}>git</button>
        <button onClick={this.hideSplash}>Jquery</button>
        <button onClick={this.hideSplash}>This</button>
        <button onClick={this.hideSplash}>OOP</button>
        <button onClick={this.hideSplash}>React</button>
        <button onClick={this.hideSplash}>SASS</button>
        <button onClick={this.hideSplash}>Angular</button>
        <button onClick={this.hideSplash}>Swift</button>
        <button onClick={this.hideSplash}>Debugging</button>
        {/* <select>
          {
            Object.keys(this.props.youLearnVideos).map((currentCat) => {
              return <Option currentCat={currentCat} />;
            })
          }
        </select> */}
        <button onClick={this.hideSplash}>Misc</button>
      </div>
    )
  }
}