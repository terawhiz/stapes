"use strict";

const saveUrl = require("../models/urlDetails");

const redirect = async (req, res, next) => {
  const shortUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  try {
    const found = await saveUrl.find({ shortUrl });
    if (found) {
      found[0].clicks++;
      res.set("location", found[0].longUrl);
      try {
        const accessDb = saveUrl(found[0]);
        accessDb.save();
        res.status(307).send(`redirecting to ${found[0].longUrl}`);
      } catch (e) {
        res
          .status(404)
          .send("<h1>BAD URL</h1><hr><p>404<br>go back to home page...</p>");
      }
    } else {
      res
        .status(404)
        .send("<h1>BAD URL</h1><hr><p>404<br>go back to home page...</p>");
    }
  } catch (e) {
    res.status(404).json({
      error: true,
      message: "something bad happened",
    });
  }
};

module.exports = redirect;
