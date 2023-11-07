import mongoose from "mongoose";
import {DB_NAME} from "./constants";


















/*
//* first method to connect db should not be used in production
//* this uses IIFE(Immediately Invoked Function Expression) to connect to db
import express from "express";
const app = express();
;(async ()=>{
  try {
    mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("error",()=>{
      console.error("ERROR: ",error);
      throw error;
    })
    app.listen(process.env.PORT,()=>{
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR:",error);
    throw error;
  }
})()
*/