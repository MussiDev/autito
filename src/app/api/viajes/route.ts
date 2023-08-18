import { NextRequest, NextResponse } from "next/server";

import { Viajes } from "@/src/models/Viajes";
import { connectDB } from "@/src/utils/mongoose";

export const GET = async () => {
    await connectDB();
    const viajes = await Viajes.find();
    console.log(NextResponse.json(viajes));
    return NextResponse.json(viajes);
};

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const newTravel = new Viajes(body);
        const savedTravel = await newTravel.save();
        return NextResponse.json(savedTravel);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};
