'use strict'
require('dotenv').config();
const saveUrl = require('../models/urlDetails');
const crypto = require('crypto');
const base62 = require('base-x')('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');


const createShortURL = (req, res, next) => {
	crypto.randomBytes(4, async (err, buf) => {
		if (err) {
			console.log(err);
			return;
		}
		const id = base62.encode(buf);
		const shortUrl = `${process.env.URL}${id}`;

		const exists = await saveUrl.exists({ shortUrl });
		if (exists) {
			res.status(404).json({
				error: true,
				message: 'Retry again...'
			});
		}

		req.shortUrl = shortUrl;
		next();
	});
}

module.exports = {
	createShortURL,
}
