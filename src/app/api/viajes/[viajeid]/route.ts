import { NextRequest, NextResponse } from "next/server"

import { RouteParams } from "@/entities/RouteParams"
import { Viajes } from "@/src/models/Viajes"
import { connectionDB } from "@/src/utils/mongoose"

export const GET = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    try {
        connectionDB()
        const travelFound = await Viajes.findById({
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
        const travelDeleted = await Viajes.findByIdAndDelete(params.viajeid)

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

        const travelUpdated = await Viajes.findByIdAndUpdate(params.viajeid, data, {
        new: true
        })
        return NextResponse.json(travelUpdated)
        
    } catch (error) {
        return NextResponse.json(error, {
            status: 400
        })
    }
}
