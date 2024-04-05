require("dotenv").config()
const { trimStringFromWord,trimStringFromWords}=require("../Methods/trimmString")
const {getFilesInDirectory}=require("../Methods/getFileList")
const {appendJson}=require("../Methods/appendJson")
const path=require("path")
 var userData;
try{
   userData=require('../../data.json')
}catch(err){ 
 userData={"name":"hellow"}
}

const KEY=process.env.KEY


const usersM=(req,res)=>{
  console.log(userData)
  res.render("users",{data:userData})
}


const homeM=async(req,res)=>{
// const pat=trimStringFromWords(__dirname,"Desktop","users","Users")
console.log("i am home")  
const data1=await getFilesInDirectory(`./uploads`)

res.render("home",{data:data1});
}

const logOutM=function(req, res) {
  res.clearCookie('user');
  res.redirect('/login');
}

const uploadM=(req,res)=>{
    console.log("i am upload")  
    res.render("upload")
}

const uploadFilesM=(req,res)=>{

  res.send("File sent")
}

const loginM=(req,res)=>{
    console.log("i am login")  
    res.render("login")
}

const loginonM=(req,res)=>{
  const name=req.body.name
  const password=req.body.password

  if(name.length <3||password.length<3||KEY!=password){

    
   return res.send("faild")
    
  }
    
  else{

    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Current time + 24 hours
    const options = {
      expires: new Date(expirationTime),
      httpOnly: true // Optional: make the cookie accessible only by the server
    };
    const clientIP = req.connection.remoteAddress;
   
    res.cookie("user",JSON.stringify({name:name,password:password,Ip:clientIP}),options)
    res.redirect("/");
  }
  
}



module.exports={homeM,uploadM,loginM,loginonM,usersM,uploadFilesM,logOutM}