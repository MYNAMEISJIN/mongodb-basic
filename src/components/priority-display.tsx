import { FaFireAlt } from "react-icons/fa";

const PriorityDisplay: React.FC<{ priority: number }> = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FaFireAlt className={`pr-1 ${priority > 0 ? "text-red-700" : "text-slate-400"} `} />
      <FaFireAlt className={`pr-1 ${priority > 1 ? "text-red-700" : "text-slate-400"} `} />
      <FaFireAlt className={`pr-1 ${priority > 2 ? "text-red-700" : "text-slate-400"} `} />
      <FaFireAlt className={`pr-1 ${priority > 3 ? "text-red-700" : "text-slate-400"} `} />
      <FaFireAlt className={`pr-1 ${priority > 4 ? "text-red-700" : "text-slate-400"} `} />
    </div>
  )
}

export default PriorityDisplay