import mongoose from 'mongoose'

export const connectDB = async () =>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb is connected:" , conn.connection.host)
    }
    catch(error){
        console.error("Error connection to mongodb:",error)
        process.exit(1);
    }


}