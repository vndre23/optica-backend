import mongoose from 'mongoose';

export const connection=async()=>{
    const uri:string= process.env.MONGO_URI || '';
    try {
        const db=await mongoose.connect(uri);
        console.log(`database is connected to ${db.connection.db.databaseName}`);
        
    } catch (error) {
        console.log(`error====> ${error}`)
    }
}