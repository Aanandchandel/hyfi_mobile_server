const {getFilesInDirectory}=require("./methods/Methods/getFileList")

const http=require("http")

const express = require("express");
const path = require("path"); // Import the 'path' module
const app = express();
   console.log(__dirname)
const server=http.createServer(app);

const obj= getFilesInDirectory(`/home/jack/Desktop/uploads`).then((i)=>{console.log(i,"kkkkkkk")}).catch((err)=>{console.log(err)})
// console.log(obj)
const mainRoutes = require("./Routes/mainRoute");

// Set up middleware
app.use(express.static("./public")); // Serve static files
app.use(mainRoutes); // Define routes

app.set("view engine", "ejs");

// Error handling middleware (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });
// const path =require("path")
  




// Start the server
server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
