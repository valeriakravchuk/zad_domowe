const express = require('express');
const homeController = require("../controllers/home")
const router = express.Router();

router.get("/:page?", homeController.renderHomePage)

module.exports = router;


