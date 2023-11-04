import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
    return (
        <div
            className="flex flex-col bg-card hover:bg-card-hover duration-300 rounded-md shadow-lg p-3 m-2"
        >
            <div className="flex mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4 className="tracking-wider">Ticket Title</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">
                This is the ticket description! Please do this ticket
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1 font-mono">31/10/2023 10:11PM</p>
                    <ProgressDisplay />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay />
                </div>
            </div>
        </div>
    )
}