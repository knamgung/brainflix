import React, { Component } from "react";
import "./styles/App.css";
import Nav from "./components/Nav.js";
import MainVideo from "./components/MainVideo.js";

import Main from "./components/Main.js";

export default class App extends Component {
  state = {
    video: [
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lession",
        channel: "Bernice Lambert",
        image: "./assets/Images/video-list-1.jpg"
      },
      {
        id: "2",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Bernard Patrick",
        image: "./assets/Images/video-list-2.jpg"
      },
      {
        id: "3",
        title: "Travel Health Useful Medical Information For",
        channel: "Lizzie Burton",
        image: "./assets/Images/video-list-3.jpg"
      },
      {
        id: "4",
        title: "Cheap Airline: Great Ways To Save",
        channel: "Emily Harper",
        image: "./assets/Images/video-list-4.jpg"
      },
      {
        id: "5",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "./assets/Images/video-list-5.jpg"
      },
      {
        id: "6",
        title: "Choose The Perfect Accomodations",
        channel: "Lydia Perez",
        image: "./assets/Images/video-list-6.jpg"
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "./assets/Images/video-list-7.jpg"
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "./assets/Images/video-list-8.jpg"
      }
    ],
    mainVideo: {
      id: "1",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "Red Cow",
      image: "./assets/Images/video-list-0.jpg",
      views: "1,001,023",
      likes: "110,985",
      duration: "0:40",
      timestamp: 1545115463000,
      video: "./assets/Video/BrainStation Sample Video.mp4",
      comments: [
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "fb3a0c7b-2344-489b-b6f6-06e31978c704",
          likes: 0,
          timestamp: 1549497600000
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "b2b9d086-0eb9-4a78-acb9-35910068005d",
          likes: 0,
          timestamp: 1541980800000
        },

        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "74b39c32-1ae1-4d1b-8a56-7f4debf41d16",
          likes: 0,
          timestamp: 1530744338878
        }
      ]
    },
    commentCounter: 3
  };
  pushComment = comment => {
    let mainVideo = this.state.mainVideo;
    this.state.mainVideo.comments.unshift(comment);

    let count = this.state.mainVideo.comments.length;

    this.setState({
      mainVideo: mainVideo,
      commentCounter: count
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <MainVideo video={this.state.mainVideo} />
        <Main
          vidInfo={this.state.mainVideo}
          vidList={this.state.video}
          pushComment={this.pushComment}
          commentCounter={this.state.commentCounter}
        />
      </div>
    );
  }
}
