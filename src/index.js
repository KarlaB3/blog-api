// Import the configured items from server.js
var { app, PORT, HOST } = require("./server");

// Run the server
app.listen(PORT, HOST, () => {
  console.log("ExpressJS BlogAPI is now running!");
});