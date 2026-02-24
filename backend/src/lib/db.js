import mongoose from 'mongoose'

export const connectDB = async () =>{
    try{
        const { MONGODB_URL} = process.env;
        if(!MONGODB_URL){
            throw new Error("MONGODB_URL is not defined in environment variables")
        }
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb is connected:" , conn.connection.host)
    }
    catch(error){
        console.error("Error connection to mongodb:",error)
        process.exit(1);
    }


}