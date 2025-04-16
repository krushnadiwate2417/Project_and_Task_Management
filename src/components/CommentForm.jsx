import { useState } from "react"

export default function CommentForm({taskIndex,taskTitle,setCommenting,taskDesc}){

    const [comment,setComment] = useState('');

    const handleCommentSubmit = (e)=>{
        e.preventDefault();
        const commentData = {
            taskId : taskIndex,
            userId : 123,
            comment : comment
        }
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
                    <button type="submit">Comment</button>
                </form>
                </div>
            </div>
        </>
    )
}