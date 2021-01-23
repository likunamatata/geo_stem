import React, { Component } from 'react'
// import { getData } from "../services/api";
import youtube from "../media/youtube_full_color_icon/digital_and_tv/yt_icon_rgb.png"
import twitter from "../media/Twitter All Brand Resources/Twitter Logos/Twitter_Logo_Blue/Twitter_Logo_Blue.png"

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
      }
  }
  
  componentDidMount = async () => {
    // const response = await getData();

    // this.setState({
    //   data: response,
    // });
  };
  
  render() {
    return (
      <div className="screen">
        <h1>რესურსები</h1>
        <div className='links'>
          <a target='youtube_channel' href='https://www.youtube.com/channel/UCfWfdvvdmCu50bEbfnyeF-Q'>
          <img alt='youtube link' src={youtube} className='socialLink' id='youtubeLink'></img>
          </a>
          <a target='twitter_channel' href='https://twitter.com/GeoIsgs'>
        <img alt='twitter link' src={twitter} className='socialLink' id='twitterLink'></img>
       </a>
        </div>

        <iframe id='youtubeVideo' title='video' src="https://www.youtube.com/embed/WWsGdkNJNj8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    );
    
  }

}

export default Resources;
