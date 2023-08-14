import { NextRequest, NextResponse } from "next/server"

import { Viajes } from "@/src/models/Viajes"
import { connectionDB } from "@/src/utils/mongoose"

export const GET = async () => {
    await connectionDB()
    const viajes = await Viajes.find()
    return NextResponse.json({viajes})
}

export const POST = async (request: NextRequest) => {
    const { destino, ubicacion, fecha, hora, lugares, descripcion } = await request.json();
    await connectionDB();
    await Viajes.create({ destino, ubicacion, fecha, hora, lugares, descripcion });
    return NextResponse.json({ message: "Travel Created" }, { status: 201 });
}

export const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get("id");
    await connectionDB();
    await Viajes.findByIdAndDelete(id);
    return NextResponse.json({ message: "Travel deleted" }, { status: 200 });
}