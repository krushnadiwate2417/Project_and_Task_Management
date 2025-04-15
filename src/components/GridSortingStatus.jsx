import TaskCard from "./TaskCard"



export default function GridSortingStatus({taskArray,filterStatusValue,setCount}){
    return <>
        {
            taskArray.filter((val)=>{
                return val.status === filterStatusValue
            }).map((val,index)=>{
                return <div key={index}><TaskCard task={val} setCount={setCount}/></div>
            })
        }
    </>
}