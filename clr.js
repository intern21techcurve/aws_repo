const express = require("express");
const upload = require("./upload"); // Assuming your multer setup is in a separate file

const router = express.Router();

// Define a POST route to handle file uploads
const add = ( upload.single('file'), (req, res) => {
  // You can access the uploaded file information in req.file
  if (!req.file) {
    return res.status(400).json({ error: "No file provided." });
  }else
  
  {
    return res.status(200).json({ message: "File uploaded successfully." });
  }

  // Optionally, you can do something with the uploaded file here
  // For example, you can save the file information to a database

  
});

module.exports = {
    add
}
