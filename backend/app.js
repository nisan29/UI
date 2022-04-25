const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');
const app = express();

mongoose.connect('mongodb+srv://nisans:6QcWb2xROwDQHozd@cluster0.vwuru.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to DB');
  }).catch((e) => {
    console.log('connection failed',e);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS")
  next();
})

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully"
  });
})

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'dsdsd2334f',
      title: 'first post from server',
      content: 'This is the content'
    },
    {
      id: 'dfgfdg5656',
      title: 'second post from server',
      content: 'This is the content'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts
  });
});

module.exports = app;
