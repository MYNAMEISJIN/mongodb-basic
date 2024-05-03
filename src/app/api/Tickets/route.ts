import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    console.log("hello")
    try {
        const body = await req.json() //프론트에서 보낸 값 읽기.
        const ticketData = body.formData
        ticketData.priority = parseInt(ticketData.priority);
        ticketData.progress = parseInt(ticketData.progress);
        console.log(ticketData)
        await Ticket.create(ticketData) //몽구스에 보내주기 new 스키마 만들기
        return NextResponse.json(
            { message: "Ticket Created" },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            { status: 500 }
        )
    }
}




export async function GET() {
    try {
        const tickets = await Ticket.find();

        return NextResponse.json({ tickets }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}


