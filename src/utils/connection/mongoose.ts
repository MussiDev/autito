import {connect, connection} from "mongoose";

const connected = {
    isConnected: false
}

export const connectionDB = async() => {
    if(connected.isConnected) return 
    try {
        if(!process.env.DB_URL) return
        const db = await connect(process.env.DB_URL)
        console.log('Connected to the database:', db.connection.db.databaseName);
        connected.isConnected = true;
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

connection.on('connected', () => {
    console.log('connected')
})

connection.on('error', (err) => {
    console.log('error pa', err)
})