import React from 'react'


const StatusDisplay: React.FC<{ status: string }> = ({ status }) => {
    const getColor = (status: string) => {
        let color = "bg-slate-700";
        switch (status.toLowerCase()) {
            case "done":
                color = "bg-green-200"
                return color;
            case "started":
                color = "bg-yellow-200"
                return color;
            case "not started":
                color = "bg-red-200"
                return color;
        }
        return color
    }


    return (
        <span className={`inline-block rounded px-2 py-1 text-sm font-semibold ${getColor(status)}`}>
            {status}
        </span>
    )
}

export default StatusDisplay