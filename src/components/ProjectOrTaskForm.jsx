import { useEffect, useState } from "react";
import { fetchFunction } from "../utils/fetchFunction";
import { ADD_PROJECT, ADD_TASK, GET_ALL_USERS } from "../utils/constant";

export default function ProjectOrTaskForm({
  isTask,
  setAdded,
  projectId,
  setAddingNewProject,
  taskStatus,
  setError,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [priority, setPriority] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await fetchFunction({
      crudMethod: "GET",
      fetchingUrl: GET_ALL_USERS,
      setError,
    });
    setUserList(response?.users);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = isTask
      ? {
          projectId,
          taskTitle: title,
          taskDescription: description,
          assignedTo: assignedUser,
          priority,
          status: taskStatus,
          changeStatus: "Pending",
          createdAt: Date.now(),
        }
      : {
          projectTitle: title,
          description,
          createdAt: Date.now(),
        };

    const response = await fetchFunction({
      crudMethod: "POST",
      fetchingUrl: isTask ? ADD_TASK : ADD_PROJECT,
      setError,
      data,
    });

    setAdded((curr)=>curr+1);
    setAddingNewProject(false);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-xl shadow-md"
      >
        <input
          placeholder={`Title of ${isTask ? "Task" : "Project"}`}
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex flex-col">
          <textarea
            placeholder={`Description of ${isTask ? "Task" : "Project"}`}
            maxLength={400}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
          <p className="text-sm text-gray-500 text-right">
            {description.length}/400
          </p>
        </div>

        {isTask && (
          <>
            <div className="flex flex-col">
              <label htmlFor="assignedUser" className="font-medium mb-1">
                Assign To
              </label>
              <select
                required
                id="assignedUser"
                value={assignedUser}
                onChange={(e) => setAssignedUser(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option disabled value="">
                  -- Select Member --
                </option>
                {userList &&
                  userList
                    .filter((user) => !user.isAdmin)
                    .map((user) => (
                      <option key={user._id} value={user.fullName}>
                        {user.fullName}
                      </option>
                    ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="priority" className="font-medium mb-1">
                Priority
              </label>
              <select
                required
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option disabled value="">
                  -- Select Priority --
                </option>
                <option value="4">Highest</option>
                <option value="3">High</option>
                <option value="2">Intermediate</option>
                <option value="1">Neutral</option>
              </select>
            </div>
          </>
        )}

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Create {isTask ? "Task" : "Project"}
          </button>
          <button
            type="button"
            onClick={() => setAddingNewProject(false)}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
