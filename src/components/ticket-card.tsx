import React from 'react'
import DeleteBlock from './delete-block'
import PriorityDisplay from './priority-display'
import ProgressDisplay from './progress-display'
import StatusDisplay from './status-display'
import { ticket } from '@/app/page'
import Link from 'next/link'



const TicketCard: React.FC<{ ticket: ticket, id: any }> = ({ ticket, id }) => {

  const formatTimestamp = (timestamp: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }

    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-UK', options)

    return formattedDate
  }


  return (
    <div className='flex flex-col bg-yellow-500 hover:bg-orange-300 shadow-lg rounded p-3 m-2'>
      <div className='flex justify-between mb-2'>
        <div className='ml-2'>
          <PriorityDisplay priority={ticket.priority} />
        </div>
        <div className='mr-2'>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/ticket/${ticket._id}`} style={{display:"contents"}} >
        <h4 className=' text-2xl font-extrabold'>
          {ticket.title}
        </h4>
        <hr className='h-px border-0 bg-gray-600' />
        <p className='whitespace-pre-wrap mt-2'>
          {ticket.description}
        </p>
        <div className='flex-grow'>

        </div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>
              {formatTimestamp(ticket.createdAt)}
            </p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className='ml-auto flex items-start'>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>


    </div>
  )
}

export default TicketCard