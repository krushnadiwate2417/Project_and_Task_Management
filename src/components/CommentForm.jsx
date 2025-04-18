import { useState } from "react"
import { fetchFunction } from "../utils/fetchFunction";
import { ADD_A_COMMENT } from "../utils/constant";

export default function CommentForm({taskId,taskTitle,setCommenting,taskDesc}){

    const [comment,setComment] = useState('');
    const [error,setError] = useState('');

    const handleCommentSubmit = async (e)=>{
        e.preventDefault();
        const commentData = {
            taskId : taskId,
            comment : comment,
            commentedBy : userId
        }
        const response = await fetchFunction({
            crudMethod : "PATCH",
            fetchingUrl : ADD_A_COMMENT,
            setError,
            data : commentData
        })
        if(response) console.log(response);
        setCommenting(false)
    }

    return (
        <>
            <div >
                <div className="bg-gray-100">
                <h1>{taskIndex}</h1>
                <h1>{taskTitle}</h1>
                <h1>{taskDesc}</h1>
                <form onSubmit={(e)=>handleCommentSubmit(e)}>
                    <textarea
                        required
                        placeholder="Comment on Task"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                    />
                    <div>
                    <button type="submit">Comment</button>
                    <button onClick={()=>{setComment('');setCommenting(false)}}>Back</button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}