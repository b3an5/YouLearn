import React, { Component } from 'react';
import './main.scss';

export default class Splash extends Component {


  hideSplash = (event) => {
    let splashPage = document.querySelector('.splash');
    let cardContainer = document.querySelector('.card-container');
    let header = document.querySelector('.header');
    let sidebar = document.querySelector('.sidebar-wrapper');
    
    splashPage.classList.add('display-none');
    cardContainer.classList.remove('display-none');
    header.classList.remove('display-none');
    sidebar.classList.remove('display-none');
    this.props.filterCatigory(event);
  }

  
  
  render() {
    return(
      <div className='splash'>    
        <h1 className='title'><i className="fab fa-youtube"></i>You<i className="fas fa-brain"></i>Learn</h1>    
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
        <button onClick={this.hideSplash}>Misc</button>
      </div>
    )
  }
}