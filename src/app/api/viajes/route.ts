import { NextRequest, NextResponse } from "next/server"

import { Viaje } from "@/src/models/api/viajes/Viajes"
import { connectionDB } from "@/src/utils/connection/mongoose"

export const GET = async () => {
    connectionDB()
    const viajes = await Viaje.find()
    return NextResponse.json(viajes)
}

export const POST = async (request: NextRequest) => {
    try{
        const data = await request.json()
        const newTravel = new Viaje(data)
        const saveTravel = await newTravel.save()
        return NextResponse.json(saveTravel)
    } catch (error){
        return NextResponse.json(error, {
            status: 400
        })
    }
}