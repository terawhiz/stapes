'usr strict'

const router = require('express').Router();
const crypto = require('crypto');

const { createShortURL } = require('../middlewares/createUrl');
const { addUrlToDb } = require('../middlewares/processUrl');

router.post('/new', createShortURL, addUrlToDb);
router.get('/count/:id');
module.exports = router;
