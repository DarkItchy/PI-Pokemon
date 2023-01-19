const express = require("express");
const router = express.Router();
const { getTypes } = require("../controllers/typesControllers");

router.get("", getTypes);

module.exports = router;
