// app.js (or server.js)

const express = require("express");
const app = express();
const routes = require("./route");


// Middleware and other configurations go here

// Include the routes
app.use("/api", routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


