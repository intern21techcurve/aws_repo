// routes.js

const express = require("express");
const fileUploadController = require("./clr");

const router = express.Router();

// Include the file upload controller
router.post('/upload', fileUploadController.add)

module.exports = router;
