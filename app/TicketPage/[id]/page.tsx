import TicketForm from "@/app/(components)/TicketForm"

type TicketPageParams = {
    params: {
        id: number;
    }
}

export default function TicketPage({ params }: TicketPageParams) {
    return (
        <div>
            <TicketForm />
        </div>
    )
}