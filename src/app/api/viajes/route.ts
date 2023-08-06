import { NextResponse } from "next/server"
import Viajes from "@/src/models/api/viajes/Viajes"
import { connectionDB } from "@/src/utils/connection/mongoose"

export const GET = async() => {
    connectionDB()

    const viajes = await Viajes.find()

    return NextResponse.json(viajes)
}

export const POST = () => {
    return NextResponse.json({
        message: 'posting travels..'
    })
}