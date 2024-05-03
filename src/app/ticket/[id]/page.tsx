import TicketForm from '@/components/ticket-form'
import React from 'react'

type params = {
  id: string
}

const getTicketById = async (id: string) => {

  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed to get ticket.")
  }
  return res.json();
}

const TicketIdPage: React.FC<{ params: params }> = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTicketData: any = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id)
    updateTicketData = updateTicketData.foundedTicket
    console.log("updatedTicketData", updateTicketData)
  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <TicketForm ticket={updateTicketData}/>
  )
}

export default TicketIdPage