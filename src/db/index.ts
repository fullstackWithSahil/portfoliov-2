import mongoose,{ Mongoose } from "mongoose"

interface MongooseConnection {
    conn:Mongoose|null;
    promise:Promise<Mongoose>|null;
}
let cached:MongooseConnection = (global as any).mongoose;

if (!cached){
    cached= (global as any).mongoose ={conn:null,promise:null}
}

export async function connectMongo(){
    if (cached.conn) return cached.conn;

    if(!process.env.MONGODB_URL) {
        throw new Error("mongo db connection does not exist");
    }    
    cached.promise =cached.promise || mongoose.connect(process.env.MONGODB_URL,{dbName:"learnfullstack",bufferCommands:false})
}