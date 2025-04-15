import { useNavigate } from "react-router-dom"



export default function ProjectCard({project}){

    const navigate = useNavigate();

    return <>
        <div
        onClick={()=>navigate('/tasks')}
        className="flex flex-col justify-center items-center w-40 h-40 bg-gray-400 rounded-2xl cursor-pointer"
        >
            <h1>{project.title}</h1>
            <h1>{project.description}</h1>
        </div>
    </>
}