import TicketCard from "@/components/ticket-card";


export type ticket = {
  _id: string,
  title: string,
  description: string,
  category: string,
  priority: number,
  progress: number,
  createdAt: string,
  updatedAt: string,
  status:string,
  __v: number,
}

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: "no-store",
    })

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error)
  }
}

export default async function Home() {
  const { tickets } = await getTickets();

  


  return (
    <main className="h-full p-2">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets.map((ticket: ticket, _index: any) =>
          <TicketCard
            id={_index}
            key={_index}
            ticket={ticket}
          />
        )}
      </div>

    </main>
  );
}
