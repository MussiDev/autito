import { NextRequest, NextResponse } from "next/server";

import { TravelsModel } from "@/src/models/Travels";
import { connectDB } from "@/src/utils/mongoose";

export const GET = async () => {
    await connectDB();
    const viajes = await TravelsModel.find();
    return NextResponse.json({ viajes });
};

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        const body = await request.json();
        await TravelsModel.create(body);
        return NextResponse.json({ message: "Travel created" });
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};

export const DELETE = async (request: NextRequest) => {
    await connectDB();
    const id = request.nextUrl.searchParams.get("id");
    try {
        const travelDeleted = await TravelsModel.findByIdAndDelete(id);

        if (!travelDeleted)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json({ message: "Travel deleted" });
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};
