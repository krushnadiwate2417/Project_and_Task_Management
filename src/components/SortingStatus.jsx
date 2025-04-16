import TaskCard from "./TaskCard"

export default function SortingStatus({statusValue,taskArray,setHelperCount}){
    return <>
        {
            <div className="flex flex-col w-fit h-fit p-1.5">
                {
                    taskArray.filter((val)=>{return val.status === statusValue})
                    .map((task,index)=><div key={index}><TaskCard task={task}  setHelperCount={setHelperCount}/></div>)
                }
            </div>
        }
    </>
}