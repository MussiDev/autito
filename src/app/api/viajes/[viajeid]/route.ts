import { NextRequest, NextResponse } from "next/server"

import { RouteParams } from "@/src/models/api/viajes/RouteParams"
import { Viaje } from "@/src/models/api/viajes/Viajes"
import { connectionDB } from "@/src/utils/connection/mongoose"

export const GET = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    try {
        connectionDB()
    const travelFound = await Viaje.findById({
        _id: params.viajeid
    })

    if(!travelFound){
        return NextResponse.json({
            message: 'Travel not found'
        }, {
            status: 404
        })
    }
    
    return NextResponse.json(travelFound)
    } catch (error) {
        return NextResponse.json(error, {
            status: 400
        })
    }
}

export const DELETE = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    try {
        const travelDeleted = await Viaje.findByIdAndDelete(params.viajeid)

        if(!travelDeleted){
            return NextResponse.json({
                message: 'Travel not found'
            }, {
                status: 404
            })
        }

        return NextResponse.json(travelDeleted)
    } catch (error) {
        return NextResponse.json(error, {
            status: 400
        })
    }
}

export const PUT = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    try {
        const data= await request.json()

        const travelUpdated = await Viaje.findByIdAndUpdate(params.viajeid, data, {
        new: true
        })
        return NextResponse.json(travelUpdated)
        
    } catch (error) {
        return NextResponse.json(error, {
            status: 400
        })
    }
}
