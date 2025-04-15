import { useState } from "react"
import ProjectOrTaskFrom from "../components/ProjectOrTaskForm"
import ProjectCard from "../components/ProjectCard";



export default function Home(){

const [addingNewProject,setAddingNewProject] = useState(false)
const [projectsArray,setProjectsArray] = useState([]);

const handleAddProject = ()=>{
    setAddingNewProject(true)
}

    return (
        <>
            {addingNewProject 
            ? 
            <ProjectOrTaskFrom isTask={false} setProjectArray={setProjectsArray} setAddingNewProject={setAddingNewProject}/>
            :
           <div className="flex gap-2.5">
            {projectsArray.length > 0 && projectsArray.map((project,index)=>{
                return <div key={index}> <ProjectCard project={project}/> </div>
            })}
            <div 
                className="flex justify-center items-center w-40 h-40 bg-gray-400 rounded-2xl cursor-pointer"
                onClick={()=>{handleAddProject()}}
            >
                Add New Project
            </div>
           </div>
            }
        </>
    )
}