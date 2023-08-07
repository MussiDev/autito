import {connect} from "mongoose";

const connected = {
    isConnected: false
}

export const connectionDB = async () => {
    if (connected.isConnected) return;
    try {
        if (!process.env.DB_URL) {
            throw new Error('DB_URL not defined in environment variables');
        }
        await connect(process.env.DB_URL);
        connected.isConnected = true;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; 
    }
}
