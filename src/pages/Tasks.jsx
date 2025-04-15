import { useEffect, useState } from "react"
import ProjectOrTaskFrom from "../components/ProjectOrTaskForm"
import GridSortingStatus from "../components/GridSortingStatus";


export default function Tasks(){

    const [addNewTask,setAddNewTask] = useState(false);
    const [taskArray,setTaskArray] = useState([]);
    const [helperCount,setHelperCount] = useState(0);

    useEffect(()=>{},[helperCount])

    return <>

        {addNewTask 
        ?
         <ProjectOrTaskFrom 
            isTask={true} 
            setAddingNewProject={setAddNewTask} 
            setProjectArray={setTaskArray}
         />   
        :
        <div>
            <div><button onClick={()=>{setAddNewTask(true)}}>Add New Task</button></div>
            <div className="grid grid-cols-3 h-screen border-2">
                <div className="border-r-2 ">
                    <h1>Pending Tasks</h1>
                    <GridSortingStatus taskArray={taskArray} filterStatusValue={'Pending'} setCount={setHelperCount}/>
                </div>
                <div className="border-r-2 ">
                    <h1>In Progress Tasks</h1>
                    <GridSortingStatus taskArray={taskArray} filterStatusValue={'In Progress'} setCount={setHelperCount}/>
                </div>
                <div className="border-r-2 ">
                    <h1>Finish Tasks</h1>
                    <GridSortingStatus taskArray={taskArray} filterStatusValue={'Finished'} setCount={setHelperCount}/>
                </div>
            </div>
        </div>}
    </>
}