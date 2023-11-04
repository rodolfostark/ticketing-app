import Ticket from "../(models)/Ticket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);
        return NextResponse.json({
            message: "Ticket Created"
        }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error",
            error
        }, {
            status: 500
        });
    }
}