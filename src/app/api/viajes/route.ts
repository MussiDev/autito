import { NextRequest, NextResponse } from "next/server"

import { Viajes } from "@/src/models/Viajes"
import { connectionDB } from "@/src/utils/mongoose"

export const GET = async () => {
    connectionDB()
    const viajes = await Viajes.find()
    return NextResponse.json(viajes)
}

export const POST = async (request: NextRequest) => {
    try{
        const data = await request.json()
        const newTravel = new Viajes(data)
        const saveTravel = await newTravel.save()
        return NextResponse.json(saveTravel)
    } catch (error){
        return NextResponse.json(error, {
            status: 400
        })
    }
}