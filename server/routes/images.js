const express = require('express');
const multer = require('multer');
const router = new express.Router();
const path = require('path');
const Image = require('../models/image');
const upload = multer({storage: multer.memoryStorage()});

router.route('/')
  .get((req, res) => {
    Image.getAll()
      .then(images => res.send(images))
      .catch(err=> res.status(400).send(err));
  })
  .post(upload.single('image'),(req, res) => {
    Image.upload(req.file)
     .then(image => res.send(image))
     .catch(err => res.status(400).send(err));
  })

module.exports = router;
