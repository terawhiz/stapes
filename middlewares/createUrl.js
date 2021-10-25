'use strict'
require('dotenv').config({ path: '../.env' });
const saveUrl = require('../models/urlDetails');
const crypto = require('crypto');
const base62 = require('base-x')('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');


const createShortURL = (req, res, next) => {
	if (req.body.url.startsWith('http://') || req.body.url.startsWith('https')){
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
	} else {
		res.status(404).json({
			error: true,
			message: 'its a bad url'
		});
	}

}

module.exports = {
	createShortURL,
}
