const saveUrl = require("../models/urlDetails");
const { newUrlValidation } = require("../helpers/validator");

const addUrlToDb = async (req, res) => {
    const data = {
        shortUrl: req.shortUrl,
        longUrl: req.body.url,
        clicks: 0,
        creatorIP: req.socket.remoteAddress,
    };

    try {
        await newUrlValidation.validate(data);
        const accessDb = new saveUrl(data);
        await accessDb.save();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e.message,
        });
    }

    res.status(201).json({
        originalUrl: req.body.url,
        shortUrl: req.shortUrl,
        error: false,
    });
};

module.exports = {
    addUrlToDb,
};
