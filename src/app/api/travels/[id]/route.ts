import { NextRequest, NextResponse } from "next/server";

import { RouteParams } from "@/entities/RouteParams";
import { TravelsModel } from "@/src/models/Travels";
import { connectDB } from "@/src/utils/mongoose";

export const GET = async (request: NextRequest, { params }: { params: RouteParams }) => {
    const { id } = params;
    await connectDB();
    try {
        const travelFound = await TravelsModel.findOne({ _id: id });

        if (!travelFound)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json({ travelFound });
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};

export const PUT = async (request: NextRequest, { params }: { params: RouteParams }) => {
    const { id } = params;
    const body = await request.json();
    await connectDB();
    try {
        const taskUpdated = await TravelsModel.findByIdAndUpdate(id, body);

        if (!taskUpdated)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json({ message: "Travel edited" });
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};
