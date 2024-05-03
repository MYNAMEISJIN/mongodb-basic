import Link from "next/link"
import { IoTicketOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5"

const Navigation = () => {
    return (
        <nav className="flex justify-between p-4 bg-gray-900">
            <div className="flex items-center space-x-4">
                <Link href={"/"} className=" hover:text-green-500">
                    <IoHomeOutline size={30} />
                </Link>
                <Link href={"/ticket/new"} className=" hover:text-green-500">
                    <IoTicketOutline size={30} />
                </Link>
            </div>
            <div>
                <p>
                    s.jinnn.park@gmail.com
                </p>
            </div>
        </nav>
    )
}

export default Navigation