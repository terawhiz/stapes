'use strict'
const saveUrl = require('../models/urlDetails');

const counter = async (req, res) => {
    const shortUrl = req.body.url;
    const result = await saveUrl.find({
        shortUrl
    });
    res.status(200).json({
        error: false,
        clicks: result[0].clicks
    });
}

module.exports = counter;