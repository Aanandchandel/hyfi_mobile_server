const { homeM,uploadM,loginM}=require("../methods/RouteMathods/hifi")
const express=require("express")
const route=express.Router()



route.get("/",homeM)
route.get("/upload",uploadM)
route.get("/login",loginM)


module.exports=route;

