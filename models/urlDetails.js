'use strict'
const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
	longUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	clicks: {
		type: Number,
		default: 0,
		required: true
	},
	creatorIP: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});


module.exports = mongoose.model('Url', urlSchema);

