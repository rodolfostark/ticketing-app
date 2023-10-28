interface TicketPageParams {
    params: {
        id: number;
    }
}

export default function TicketPage({ params }: TicketPageParams) {
    return (
        <div>TicketPage ${params.id}</div>
    )
}