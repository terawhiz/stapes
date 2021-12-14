"use strict";

const router = require("express").Router();
const redirect = require("../middlewares/redirect");

router.get("/:id", redirect);

module.exports = router;
