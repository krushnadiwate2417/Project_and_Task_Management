import { useState } from "react";
import CommentForm from "./CommentForm";

export default function TaskCard({task,setHelperCount}){

    const [commenting,setCommenting] = useState(false);

    const handleDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString(); 
      };
      
      const handleTime = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString(); 
      };


    return <>
    {
        commenting 
        && <div className="absolute z-20 flex justify-center items-center w-screen h-screen bg-transparent">
            <CommentForm 
            taskIndex={1} 
            taskDesc={task.description} 
            taskTitle={task.title} 
            setCommenting={setCommenting}/>
        </div>
        
        }
        
    <div
    onClick={()=>{setCommenting(true)}}
    className="flex flex-col justify-center items-center w-40 h-40 bg-gray-400 rounded-2xl cursor-pointer"
    >
        <h1>{task.title}</h1>
        <h1>{task.description}</h1>
        <h1>Assigned To : {task.assignedUser}</h1>
        <h1>Priority : {task.priority === '4' ? 'Highest' : 
                                task.priority === '3' ? 'High' : 
                                    task.priority === '2' ? 'Intermediate' : 'Neutral'}</h1>
        <div>
        <label htmlFor="taskStatus">Task Status</label>
        <select id="taskStatus" value={task.status} onChange={(e)=>{
            task.status = e.target.value;
            setHelperCount((curr)=>curr+1)
            }}>
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Finished'>Finished</option>
        </select>
        </div>
        <div>
            Created On : {`${handleDate(task.createdAt)} [${handleTime(task.createdAt)}]`}
        </div>
    </div>
</>
}