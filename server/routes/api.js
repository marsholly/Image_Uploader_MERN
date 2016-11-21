const express = require('express');

const router = new express.Router();

router.use('/images', require('./images'));

module.exports = router;
