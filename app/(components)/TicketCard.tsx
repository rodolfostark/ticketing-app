import { Ticket } from "@/types";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

interface TicketCardProps {
    ticket: Ticket
}

export default function TicketCard({ ticket }: TicketCardProps) {
    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString("pt-BR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        return formattedDate;
    }
    return (
        <div
            className="flex flex-col bg-slate-700 hover:bg-slate-600 duration-300 rounded-md shadow-2xl p-3 m-2"
        >
            <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                    <DeleteBlock id={ticket._id}/>
                </div>
            </div>
            <h4 className="tracking-wider">{ticket.title}</h4>
            <hr className="h-px border-0 bg-slate-900 mb-2" />
            <p className="whitespace-pre-wrap">
                {ticket.description}
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
                    <ProgressDisplay progress={ticket.progress} />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay status={ticket.status} />
                </div>
            </div>
        </div>
    )
}