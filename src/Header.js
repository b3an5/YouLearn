import React, { Component } from 'react';
import './main.scss';

export default class Header extends Component {

  displaySplash = (event) => {
    let splashPage = document.querySelector('.splash');
    let cardContainer = document.querySelector('.card-container');
    let header = document.querySelector('.header');
    let card = document.querySelector('.card');
    let sidebar = document.querySelector('.sidebar-wrapper');


    this.props.resetFilter();
    splashPage.classList.remove('display-none');
    cardContainer.classList.add('display-none');
    header.classList.add('display-none');
    card.classList.add('display-none');
    sidebar.classList.add('display-none');
  }

  render() {
    return(
      <div className='header display-none'>
        <h1 onClick={this.displaySplash} className='title main-title'><i className="fab fa-youtube"></i>YouLearn</h1>
      </div>
    )
  }
}