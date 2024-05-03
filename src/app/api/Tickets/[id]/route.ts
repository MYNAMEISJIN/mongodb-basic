import Ticket from "@/models/ticket"
import { NextResponse } from "next/server"

type Params = {
    id: string
}


export async function GET(req: any, { params }: { params: Params }) {
    try {
        const { id } = params

        const foundedTicket = await Ticket.findOne({_id: id});
        return NextResponse.json({ foundedTicket}, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }


}



export async function DELETE(req: any, { params }: { params: Params }) {
    try {
        const { id } = params

        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }


}



export async function PUT(req: any, { params }: { params: Params }) {
    try {
        const { id } = params
        const body = await req.json();
        const ticketData = body.formData;

        const updateTicketData = await Ticket.findByIdAndUpdate(id,{
            ...ticketData
        })

        // await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }


}