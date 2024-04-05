const path =require("path")
const {trimStringFromWords}=require("../methods/Methods/trimmString.js")
const multer = require("multer");

const {chackCookies,checkUserJsonFile,registerUser}=require("../middlewares")
const { uploadFilesM,homeM,uploadM,loginM,loginonM,usersM,logOutM}=require("../methods/RouteMathods/hifi")
const express=require("express")
const route=express.Router()
const KEY=process.env.KEY



// const multer=require("multer")
const dest1=trimStringFromWords(__dirname,"Desktop","Users","users")
const dest=`${dest1}/uploads`
console.log(dest)


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest)
  },
  filename: function (req, file, cb) {
    
   return cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


route.post("/upload",upload.array("files"),function (req, res) {
  console.log(req.files)
  console.log(req.body)
  res.send("kjsdhfksafkh")});


route.get("/",chackCookies,homeM)
route.get("/upload",chackCookies,uploadM)


route.get('/logout', logOutM);
route.get("/login",loginM)

route.post("/login",checkUserJsonFile,registerUser,loginonM)
route.get("/users",chackCookies,checkUserJsonFile,usersM)

module.exports=route;

