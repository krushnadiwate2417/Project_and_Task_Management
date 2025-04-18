import { useState } from "react";
import CommentForm from "./CommentForm";

export default function TaskCard({ task, setHelperCount }) {
  const [commenting, setCommenting] = useState(false);

  const handleDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const handleTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <>

      {commenting && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
          <CommentForm
            taskId={task?._id}
            taskDesc={task.description}
            taskTitle={task.title}
            setCommenting={setCommenting}
          />
        </div>
      )}

 
      <div className="bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 w-72 space-y-2 text-sm text-gray-800 dark:text-gray-200">
        <h2 className="font-semibold text-lg truncate">{task.taskTitle}</h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{task.taskDescription}</p>
        <p>
          <span className="font-medium">Assigned To:</span> {task.assignedTo}
        </p>
        <p>
          <span className="font-medium">Priority:</span>{" "}
          {task.priority === "4"
            ? "🔥 Highest"
            : task.priority === "3"
            ? "⬆️ High"
            : task.priority === "2"
            ? "↔️ Intermediate"
            : "➖ Neutral"}
        </p>

 
        <div className="mt-1">
          <label htmlFor="taskStatus" className="block font-medium mb-1">
            Status
          </label>
          <select
            id="taskStatus"
            value={task.status}
            onChange={(e) => {
              task.status = e.target.value;
              setHelperCount((curr) => curr + 1);
            }}
            className="w-full rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 px-2 py-1 text-sm"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Created: {handleDate(task.createdAt)} [{handleTime(task.createdAt)}]
        </div>

        <div className="pt-2">
          <button
            onClick={() => setCommenting(true)}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs transition"
          >
            Add Comment
          </button>
        </div>
      </div>
    </>
  );
}
