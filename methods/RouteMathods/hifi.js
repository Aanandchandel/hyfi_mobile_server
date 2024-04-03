const {getFilesInDirectory}=require("../Methods/getFileList")

const obj= getFilesInDirectory(`/home/jack/Desktop/uploads`).then((i)=>{console.log(i,"kkkkkkk")}).catch((err)=>{console.log(err)})

const path=require("path")
const homeM=async(req,res)=>{
    const data1=await getFilesInDirectory(`/home/jack/Desktop/uploads`)
  console.log("i am home")  
res.render("home",{data:data1});
}

const uploadM=(req,res)=>{
    console.log("i am upload")  
    res.render("upload")
}
const loginM=(req,res)=>{
    console.log("i am login")  
    res.render("login")
}

module.exports={homeM,uploadM,loginM}