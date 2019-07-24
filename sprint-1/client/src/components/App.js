import React from "react";
import "../styles/App.css";
import Nav from "./Nav.js";
import MainVideo from "./MainVideo";
import video from "../assets/Video/BrainStation Sample Video.mp4";
import VideoHeader from "./VideoHeader";
import Comments from "./Comments";

const videoDescription = {
  id: "1",
  title: "BMX Rampage: 2018 Highlights",
  description:
    "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  channel: "Red Cow",
  image: "./assets/Images/video-list-0.jpg",
  views: 1001023,
  likes: 110985,
  duration: "0:40",
  timestamp: 1545115463000,
  video: "./assets/Video/BrainStation Sample Video.mp4",
  comments: [
    {
      name: "Micheal Lyons",
      comment:
        "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      id: "74b39c32-1ae1-4d1b-8a56-7f4debf41d16",
      likes: 0,
      timestamp: 1530744338878
    },
    {
      name: "Gary Wong",
      comment:
        "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      id: "b2b9d086-0eb9-4a78-acb9-35910068005d",
      likes: 0,
      timestamp: 1530744338878
    },
    {
      name: "Theodore Duncan",
      comment:
        "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      id: "fb3a0c7b-2344-489b-b6f6-06e31978c704",
      likes: 0,
      timestamp: 1530744138878
    }
  ]
};

function App() {
  return (
    <div>
      <Nav />
      <MainVideo video={videoDescription} />
      <VideoHeader vidInfo={videoDescription} />
      <Comments vidInfo={videoDescription} />
    </div>
  );
}

export default App;
