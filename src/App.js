import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import CardContainer from "./Card-Container";
import Splash from "./Splash";
import Saved from "./Saved";

class App extends Component {
  constructor() {
    super();
    this.state = {
      youLearnVideos: [],
      allVideos: [],
      filteredVideos: [],
      catTitles: []
    }
  }

  componentDidMount = () => {
    fetch('https://memoize-datasets.herokuapp.com/api/v1/youtubevideos')
      .then(response => response.json())
      .then(youTubeVideos => this.setState({
        youLearnVideos: youTubeVideos.youTubeVideos
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(){
    const { filter, filteredVideos} = this.state;
    if(filter && !filteredVideos.length) {
      this.setState({
        filteredVideos: this.state.youLearnVideos[filter]
      })
    }
  }

  getAllVideos = (vids) => {
    Object.keys(vids).forEach(key => {
      vids[key].forEach((vid) => {
        this.state.allVideos.push(vid);
      });
    });
  }
  
  filterVideos = () => {
    // event.preventDefault();
    this.getAllVideos(this.state.youLearnVideos);
    // this.getCheckedRadios();
    // let sizeCheckbox = this.state.checkedBoxes[1].id.toLowerCase();
    let filteredVideos = this.state.allVideos.filter(vid => {
      return vid;
    });
    
    this.setState(
      {
        filteredVideos
      }
    );
  }

  filterCatigory = (event) => {
    this.filterVideos();
    let filter = event.target.innerText;
    let filteredVideos = this.state.youLearnVideos[filter].reduce((acc, filteredVideo) => {
          acc.push(filteredVideo)
      return acc;
    }, []);
    this.setState({
      filteredVideos
    });
  }
  
  render() {
    console.log(this.state.youLearnVideos.HTML)
    return (
      <div className="App">
        <Splash filterCatigory={this.filterCatigory} youLearnVideos={this.state.youLearnVideos} />
        <Header />
        <CardContainer getAllVideos={this.getAllVideos}
          filteredVideos={this.state.filteredVideos}  />
        {/* <Saved /> */}
      </div>
    );
  }
}

export default App;
