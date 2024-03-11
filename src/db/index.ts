import mongoose, { Mongoose } from "mongoose";

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectMongo() {
    if (cached.conn) return cached.conn;

    if (!process.env.MONGODB_URL) {
        throw new Error("MongoDB connection URL is not provided.");
    }

    cached.promise = cached.promise || mongoose.connect(process.env.MONGODB_URL!, { dbName: "portfolio", bufferCommands: false });

    // Await the connection promise
    cached.conn = await cached.promise;
    return cached.conn;
}