import { NextResponse } from 'next/server';
import { connectionDB } from '@/src/utils/connection/mongoose';

export const GET = () => {
    connectionDB()
    return NextResponse.json({
        message: 'Done'
    })
}