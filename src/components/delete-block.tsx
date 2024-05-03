"use client"
import { useRouter } from "next/navigation";
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteBlock:React.FC<{id:string}> = ({id}) => {

    const router = useRouter()

    const deleteTicket = async ()=>{
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
            method:"DELETE"
        });
        if(res.ok){
         router.refresh()
        }
        console.log(id)
    }

    return (

        <div className="text-red-500 hover:cursor-pointer" onClick={deleteTicket}>
            <MdOutlineDeleteForever size={30}/>
        </div>

    )
}

export default DeleteBlock