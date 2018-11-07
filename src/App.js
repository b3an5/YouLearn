import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import CardContainer from "./Card-Container";
import Splash from "./Splash";
import Saved from "./Saved";
import Sidebar from "./Sidebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      youLearnVideos: [],
      allVideos: [],
      filteredVideos: [],
      catTitles: [],
      displayMain: false,
      savedVideos: [],
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
    this.getAllVideos(this.state.youLearnVideos);
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

  filterLength = (event) => {
    console.log(event.target.innerText)
    let filteredVideos = this.state.filteredVideos.filter((currentVid) => {
      if (event.target.innerText === 'Short') {
        return currentVid.time < 30;  
      } else {
        return currentVid.time >= 30;
      }
    });

    this.setState({
      filteredVideos
    });
  }

  filterLevel = (event) => {
    let filteredVideos = this.state.filteredVideos.filter((currentVid) => {
      return event.target.innerText === currentVid.level;
    })

    this.setState({
      filteredVideos
    })
  }
  
  filterLevel = (event) => {
    let filteredVideos = this.state.filteredVideos.filter((currentVid) => {
      return event.target.innerText === currentVid.level;
    })

    this.setState({
      filteredVideos
    })
  }

  resetFilter = () => {
    console.log(this.state.filteredVideos);
    console.log(this.state.allVideos);

    let filteredVideos = this.state.allVideos;
    
    this.setState({
      filteredVideos
  })
  }

  savedVideo = (event) => {
    console.log(event.target.Object)
  }
  
  render() {
    return (
      <div className="App">
        <div className="sidebar-wrapper display-none">
          <Sidebar filterLength={this.filterLength}
          filterLevel={this.filterLevel} />
        </div>
        <Splash filterCatigory={this.filterCatigory} youLearnVideos={this.state.youLearnVideos} />
        <div className='r-side'>
          <Header resetFilter={this.resetFilter} />
          <CardContainer getAllVideos={this.getAllVideos}
            filteredVideos={this.state.filteredVideos} 
            savedVideo={this.savedVideo} />
          {/* <Saved /> */}
        </div>
      </div>
    );
  }
}

export default App;
