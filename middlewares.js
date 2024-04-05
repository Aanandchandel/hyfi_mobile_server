var userData;
try{
     userData=require("./data.json")

}catch(err){
    userData={name:"nothing"}

}
const { appendJson}=require("./methods/Methods/appendJson")
const path=require("path")
require("dotenv").config()
const fs=require("fs")
const {trimStringFromWord}=require("./methods/Methods/trimmString")
const KEY=process.env.KEY
const chackCookies=(req,res,next)=>{
    try{
      const varify=req.cookies.user
      const  data=JSON.parse(varify)
if(data.password==KEY&&data.Ip){
    console.log(`user ${data.name} who holds iP ${data.Ip} is on upload `)
    next()
}
else{
    res.send("Login require")
}
}
catch(error){
    res.redirect("/login")
    console.log("fails")
}
}



const checkUserJsonFile=(req,res,next)=>{

    const filePat=trimStringFromWord(__dirname,"hyfi")
    const filePath = path.join(filePat, "data.json");

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File doesn't exist, create it and write an empty JSON object
            fs.writeFile(filePath, '[]', (err) => {
                if (err) {
                    console.log(filePath,`...............`)
                    console.error('Error creating JSON file:', err);
                    res.send({"error":JSON.stringify(err)})
                } else {
                    next()
                    console.log('JSON file created successfully');
                }
            });
        } else {
            console.log('JSON file already exists');
            next()
        }
    });
}
const registerUser =(req,res,next)=>{
    const name=req.body.name
    const password=req.body.password
    console.log("i ammm nextttttttttttttttttttttttt")  
    let a=trimStringFromWord(__dirname,"hyfi")
    appendJson(`${a}/data.json`,{name:name,password:password,Ip:req.connection.remoteAddress})
    console.log("i am on input chack")
    next()
}

            

            
        
        
    
    
    




  
  module.exports={chackCookies,checkUserJsonFile,registerUser}
