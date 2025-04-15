import { useState } from "react";



export default function TaskCard({task,setCount}){

    const [taskStatus, setTaskStatus] = useState('Pending');

    return <>
    <div
    className="flex flex-col justify-center items-center w-40 h-40 bg-gray-400 rounded-2xl cursor-pointer"
    >
        <h1>{task.title}</h1>
        <h1>{task.description}</h1>
        <h1>{task.assignedUser}</h1>
        <h1>{task.priority}</h1>
        <select value={taskStatus} onChange={(e)=>{setTaskStatus(e.target.value);setCount((curr)=>curr+1)}}>
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Finished'>Finished</option>
        </select>
    </div>
</>
}