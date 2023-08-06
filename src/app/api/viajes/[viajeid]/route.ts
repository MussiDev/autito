import { NextRequest, NextResponse } from "next/server"

import { RouteParams } from "@/src/models/api/viajes/RouteParams"

export const GET = (request: NextRequest,  { params }: { params: RouteParams }) => {
    console.log(params)
    return NextResponse.json({
        message: `getting travel ${params.viajeid}..`
    })
}

export const DELETE = (request: NextRequest,  { params }: { params: RouteParams }) => {
    return NextResponse.json({
        message: `deleting travel ${params.viajeid}..`
    })
}

export const PUT = (request: NextRequest,  { params }: { params: RouteParams }) => {
    return NextResponse.json({
        message: `updating travel ${params.viajeid}..`
    })
}
