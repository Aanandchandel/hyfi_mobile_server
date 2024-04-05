require('dotenv').config();
const { getlocalIpaddress}=require("./methods/Methods/getipAddress")
const cookieParser = require('cookie-parser');
const http=require("http")
const express = require("express");
const {Server}=require('socket.io')
const bodyParser=require('body-parser')

const app = express();
const server=http.createServer(app);
const path = require("path"); // Import the 'path' module
const io= new Server(server)
const PORT=process.env.PORT



io.on('connection',(socket)=>{  
  console.log("new user connected")
setTimeout(()=>{
  socket.emit("message","i am server")
},4000)
socket.on("hii",(message)=>{
  console.log(message)
})
})






// console.log(obj)
const mainRoutes = require("./Routes/mainRoute");

// Set up middleware
app.use(express.static("./public")); // Serve static files
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.set("view engine", "ejs");
// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });
  // const path =require("path")
  
  app.use(mainRoutes); // Define routes
  

app.get("k",(req,res)=>{
  console.log("setting")
  res.cookie('username',"Aanand");
  res.send('Cookie have been set');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  console.log(`Server is running on port http://${getlocalIpaddress()}:3000`);
});
