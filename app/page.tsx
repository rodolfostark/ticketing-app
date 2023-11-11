import TicketCard from "./(components)/TicketCard";

async function getTickets() {
  try {
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log("Failed to get Tickets", error);
  }
}


export default async function Home() {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ... new Set(tickets?.map(({category}) => category)),
  ]

  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}
