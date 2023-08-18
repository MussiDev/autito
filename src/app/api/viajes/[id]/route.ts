import { NextRequest, NextResponse } from "next/server";

import { RouteParams } from "@/entities/RouteParams";
import { Viajes } from "@/src/models/Viajes";
import { connectDB } from "@/src/utils/mongoose";

export const GET = async (request: NextRequest, { params }: { params: RouteParams }) => {
    connectDB();
    try {
        const travelFound = await Viajes.findById(params.id);

        if (!travelFound)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(travelFound);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};

export const PUT = async (request: NextRequest, { params }: { params: RouteParams }) => {
    const body = await request.json();
    connectDB();

    try {
        const taskUpdated = await Viajes.findByIdAndUpdate(params.id, body, {
            new: true,
        });

        if (!taskUpdated)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(taskUpdated);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};

export const DELETE = async (request: NextRequest, { params }: { params: RouteParams }) => {
    connectDB();

    try {
        const travelDeleted = await Viajes.findByIdAndDelete(params.id);

        if (!travelDeleted)
            return NextResponse.json(
                {
                    message: "Travel not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(travelDeleted);
    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
};
