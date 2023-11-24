import TicketForm from "@/app/(components)/TicketForm"

type TicketPageParams = {
    params: {
        id: string;
    }
}

async function getTicketById(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            cache: "no-store",
        });
        return response.json();
    } catch (error) {
        console.log("Failed to get Ticket", error);
    }
}

export default async function TicketPage({ params }: TicketPageParams) {
    const editMode = params.id === "new" ? false : true;

    if (editMode) {
        let updateTicket = await getTicketById(params.id);
        console.log(updateTicket);
    }
    return (
        <div>
            <TicketForm />
        </div>
    )
}