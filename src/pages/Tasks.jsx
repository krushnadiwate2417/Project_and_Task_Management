import { useEffect, useState } from "react"
import ProjectOrTaskFrom from "../components/ProjectOrTaskForm"
import TaskCard from "../components/TaskCard";
import SortingStatus from "../components/SortingStatus";


export default function Tasks(){
    
    const [addNewTask,setAddNewTask] = useState(false);
    const [taskArray,setTaskArray] = useState([]);
    const [helperArray,setHelperArray] = useState([]);
    const [helperCount,setHelperCount] = useState(0);
    const [sortBy,setSortBy] = useState('');
    
    const handleSort = (sortBY)=>{
            taskArray.sort((a,b)=>{
                return sortBY === 'Priority' ? b.priority - a.priority : a.createdAt - b.createdAt
            })
    }

    return <>

        {addNewTask 
        ?
         <ProjectOrTaskFrom 
            isTask={true} 
            setAddingNewProject={setAddNewTask} 
            setProjectArray={setTaskArray}
            setHelperArray={setHelperArray}
            taskStatus={'Pending'}
         />   
        :
        <div>
            <div>
                <button onClick={()=>{setAddNewTask(true)}}>Add New Task</button>
                <div>
                <label htmlFor="sortBy">Sort By</label>
                        <select required id="sortBy" value={sortBy} onChange={(e)=>{setSortBy(e.target.value);handleSort(e.target.value)}}>
                            <option disabled value={""}>--Select--</option>
                            <option value='Priority'>Priority</option>
                            <option value='Created At'>Created At</option>
                        </select>
                </div>
            </div>
            <div className="grid grid-cols-3 h-screen border-2">
                <div className="border-r-2 ">
                    <h1>Pending Tasks</h1>
                    {   
                        taskArray.length > 0 && 
                        <SortingStatus taskArray={taskArray} setHelperCount={setHelperCount} statusValue={'Pending'} />
                    }
                </div>
                <div className="border-r-2 ">
                    <h1>In Progress Tasks</h1>
                    {
                        taskArray.length > 0 && 
                        <SortingStatus taskArray={taskArray} setHelperCount={setHelperCount} statusValue={'In Progress'} />
                    }
                </div>
                <div className="border-r-2 ">
                    <h1>Finish Tasks</h1>
                    {   taskArray.length > 0 &&
                        <SortingStatus taskArray={taskArray} setHelperCount={setHelperCount} statusValue={'Finished'}  />}
                </div>
            </div>
        </div>}
    </>
}