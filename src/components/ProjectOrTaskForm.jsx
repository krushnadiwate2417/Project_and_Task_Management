import { useState } from "react"



export default function ProjectOrTaskFrom({isTask,setProjectArray,setAddingNewProject,taskStatus}){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [assignedUser,setAssignedUser] = useState('');
    const [priority,setPriority] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = isTask 
        ? {title,description,assignedUser,priority,status : taskStatus,createdAt : Date.now(),commentHistory : []} 
        : {title,description,createdAt : Date.now()}  ;
        setProjectArray((curr)=>[data,...curr]);
        setAddingNewProject(false);
    }

    return (
        <>
            <div>
                <form 
                onSubmit={(e)=>handleSubmit(e)}
                className="flex flex-col gap-3 w-fit h-fit p-10 bg-gray-300">
                    <input
                    placeholder={`Title of ${isTask ? 'Task' : 'Project'}`}
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    <div>
                        <textarea
                        placeholder={`Description of ${isTask ? 'Task' : 'Project'}`}
                        maxLength={400}
                        required
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value);
                        }}
                        />
                        <p>{description.length}/400</p>
                    </div>
                    { isTask && <div>
                        <label htmlFor="assignedUser">Assign To </label>
                        <select required id="assignedUser" value={assignedUser} onChange={(e)=>{setAssignedUser(e.target.value)}}>
                            <option disabled value={""}>--Select Member--</option>
                            <option value='John Doe'>John Doe</option>
                            <option value='Mark Henry'>Mark Henry</option>
                            <option value='Elon Musk'>Elon Musk</option>
                        </select>
                    </div>}
                    { isTask && <div>
                        <label htmlFor="priority">Priority</label>
                        <select required id="priority" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                            <option disabled value={""}>--Select Priority--</option>
                            <option value={'4'}>Highest</option>
                            <option value={'3'}>High</option>
                            <option value={'2'}>Intermediate</option>
                            <option value={'1'}>Neutral</option>
                        </select>
                    </div>}
                    <button type="submit">Create a {isTask ? 'Task' : 'Project'}</button>
                </form>
            </div>
        </>
    )
}