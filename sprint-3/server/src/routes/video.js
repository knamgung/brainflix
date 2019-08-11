const express = require("express");
const router = express.Router();
const videoJSON = `${__dirname}/../model/video.json`;
const uuidv4 = require("uuid/v4");

const helper = require("../helper/helper");
const videos = helper.readJSON(videoJSON);
const { allVideos, mainVideos } = videos;

const findVideo = req => {
  const id = req.params.videoId;
  const video = mainVideos.find(video => {
    return id == video.id;
  });
  return video;
};

//Returns the LIST of side videos
router.get("/", (req, res) => {
  return res.send(allVideos);
});

//Returns the OBJECT of the mainVideo based on url id
router.get("/:videoId", (req, res) => {
  return res.send(findVideo(req));
});

//POSTS new Comments
router.post("/:videoId/comments", (req, res) => {
  const requestedVid = findVideo(req);
  const generateId = uuidv4();
  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: generateId,
    likes: 0,
    views: 0,
    timestamp: Date.now()
  };

  videos.mainVideos
    .find(video => {
      return req.params.videoId == video.id;
    })
    .comments.push(newComment);

  helper.writeJSON(videoJSON, videos);
  return res.send(videos);
});

router.post("/upload", (req, res) => {
  const id = uuidv4();
  const newVideo = {
    id: id,
    title: req.body.title,
    channel: "Mohan Muruge",
    image: "https://i.imgur.com/l2Xfgpl.jpg"
  };

  const mainNewVideo = {
    id: id,
    title: req.body.title,
    channel: "Mohan Muruge",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "0:40",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: []
  };
  videos.allVideos.push(newVideo);
  videos.mainVideos.push(mainNewVideo);
  helper.writeJSON(videoJSON, videos);
  console.log(videos);
  res.send(mainNewVideo);
});

router.delete("/:videoId/comments/:commentId", (req, res) => {
  const vids = mainVideos.find(video => {
    return req.params.videoId == video.id;
  });

  const whichComment = vids.comments.find(comments => {
    return comments.id == req.params.commentId;
  });

  vids.comments.splice(vids.comments.indexOf(whichComment), 1);
  videos[mainVideos] = vids;

  helper.writeJSON(videoJSON, videos);
  res.send(vids);
});

module.exports = router;
