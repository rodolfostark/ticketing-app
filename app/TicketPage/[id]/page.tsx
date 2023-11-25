import TicketForm from "@/app/(components)/TicketForm"
import { Ticket } from "@/types";

type TicketPageParams = {
    params: {
        id: string;
    }
}

async function getTicketById(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            cache: "no-store",
        }).then(
            response => response.json()
        );
        return response;
    } catch (error) {
        console.log("Failed to get Ticket", error);
    }
}

export default async function TicketPage({ params }: TicketPageParams) {
    const editMode = params.id === "new" ? false : true;

    if (editMode) {
        const ticket = await getTicketById(params.id);
        const foundTicket = ticket.foundTicket
        return (
            <div>
                <TicketForm ticket={foundTicket} />
            </div>
        )
    } 
    return (
        <div>
            <TicketForm />
        </div>
    )
}