import { NextRequest, NextResponse } from "next/server"

import { RouteParams } from "@/entities/RouteParams"
import { Viajes } from "@/src/models/Viajes"
import { connectionDB } from "@/src/utils/mongoose"

export const GET = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    const { id } = params;
    await connectionDB();
    const travel = await Viajes.findOne({ _id: id });
    return NextResponse.json({ travel }, { status: 200 });
}

export const PUT = async (request: NextRequest,  { params }: { params: RouteParams }) => {
    const { id } = params;
    const {newDestino: destino, newUbicacion: ubicacion, newFecha: fecha, newHora: hora, newLugares: lugares, newDescripcion: descripcion} = await request.json();
    await connectionDB();
    await Viajes.findByIdAndUpdate(id, { destino, ubicacion, fecha, hora, lugares, descripcion });
    return NextResponse.json({ message: "Travel updated" }, { status: 200 });
}
