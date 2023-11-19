import Ticket from "@/app/(models)/Ticket";
import { NextRequest, NextResponse } from "next/server";

interface DeleteParams {
    params: {
        id: string;
    }
}

export async function DELETE(request: NextRequest, { params }: DeleteParams) {
    try {
        await Ticket.findByIdAndDelete(params.id);
        return NextResponse.json({
            message: "Ticket Deleted"
        }, {
            status: 200
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