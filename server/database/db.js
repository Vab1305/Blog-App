import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";


 const Connection = async(username,password) =>{
    //console.log(username);
    const URL = `mongodb+srv://${username}:${password}@blog-app.a3wyn5h.mongodb.net/?retryWrites=true&w=majority`;
    try {
       
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfully');

    }
    catch(error){
        console.log('Error while connecting with the database',error)
    }
}
export default Connection; 