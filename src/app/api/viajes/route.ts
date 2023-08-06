import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        message: 'getting travels..'
    })
}

export const POST = () => {
    return NextResponse.json({
        message: 'posting travels..'
    })
}