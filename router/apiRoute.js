'usr strict'

const router = require('express').Router();
const crypto = require('crypto');
const counter = require('../middlewares/counter');
const { createShortURL } = require('../middlewares/createUrl');
const { addUrlToDb } = require('../middlewares/processUrl');

router.post('/new', createShortURL, addUrlToDb);
router.post('/count', counter);
module.exports = router;
