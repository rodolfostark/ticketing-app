import { Ticket } from "@/types";
import TicketCard from "./(components)/TicketCard";

interface TicketFetchProps {
  tickets: Ticket[];
}

async function getTickets() {
  try {
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    }).then(
      response => response.json()
    );
    return response;
  } catch (error) {
    console.log("Failed to get Tickets", error);
  }
}


export default async function Home() {
  const { tickets }: TicketFetchProps = await getTickets();
  const uniqueCategories = [
    ... new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {
          tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets.filter((ticket) => ticket.category === uniqueCategory).map(
                  (filteredTicket, _index) => (
                    <TicketCard 
                      key={_index} 
                      ticket={filteredTicket} 
                    />
                  )
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
