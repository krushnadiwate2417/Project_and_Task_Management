import { useContext, useEffect, useState } from "react";
import ProjectOrTaskFrom from "../components/ProjectOrTaskForm";
import TaskCard from "../components/TaskCard";
import SortingStatus from "../components/SortingStatus";
import GlobalContext from "../context/GlobalContext";
import { fetchFunction } from "../utils/fetchFunction";
import { GET_ALL_TASK } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Tasks() {
  const { projectId, globalIsAdmin } = useContext(GlobalContext);

  const navigate = useNavigate();
  const [addNewTask, setAddNewTask] = useState(false);
  const [taskArray, setTaskArray] = useState([]);
  const [helperArray, setHelperArray] = useState([]);
  const [helperCount, setHelperCount] = useState(0);
  const [effectUpdate,setEffectUpdate] = useState(0);
  const [sortBy, setSortBy] = useState('');
  const [error, setError] = useState('');
  const [loaderState,setLoaderState] = useState(false);

  const storedUser = sessionStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    setLoaderState(true);
    if(!user) return navigate('/')
    handleGetAllTasks();
  }, [effectUpdate]);

  const handleGetAllTasks = async () => {
    const response = await fetchFunction({
      crudMethod: "GET",
      fetchingUrl: GET_ALL_TASK + `?projectId=${projectId}`,
      setError
    });
    setLoaderState(false);
    setTaskArray(response?.tasks);
    setHelperArray(response?.tasks);
  };

  const handleSort = (sortBY) => {
    const sortedArray = [...taskArray];
    sortedArray.sort((a, b) => {
      return sortBY === 'Priority'
        ? b.priority - a.priority
        : a.createdAt - b.createdAt;
    });
    setTaskArray(sortedArray);
  };

  return (
    <>
      {
        loaderState
        ? <Loader text={"Loading"}/>
        :
        addNewTask ? (
          <ProjectOrTaskFrom
            isTask={true}
            setAddingNewProject={setAddNewTask}
            taskStatus={'Pending'}
            projectId={projectId}
            setAdded={setEffectUpdate}
          />
        ) : (
          <div className="p-6">
   
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex gap-3">
                {globalIsAdmin && (
                  <button
                    onClick={() => setAddNewTask(true)}
                    className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Add New Task
                  </button>
                )}
                <button
                  onClick={() => navigate('/home')}
                  className="px-4 py-2 cursor-pointer bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Back
                </button>
              </div>
  
              <div className="flex items-center gap-2">
                <label htmlFor="sortBy" className="font-semibold text-gray-700">Sort By</label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    handleSort(e.target.value);
                  }}
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option disabled value="">
                    --Select--
                  </option>
                  <option value="Priority">Priority</option>
                  <option value="Created At">Created At</option>
                </select>
              </div>
            </div>
  
  
            {taskArray.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">🕒 Pending</h2>
                  <SortingStatus
                    taskArray={taskArray}
                    setHelperCount={setHelperCount}
                    statusValue={'Pending'}
                  />
                </div>
  
  
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                  <h2 className="text-xl font-bold text-yellow-600 mb-4">⚙️ In Progress</h2>
                  <SortingStatus
                    taskArray={taskArray}
                    setHelperCount={setHelperCount}
                    statusValue={'In Progress'}
                  />
                </div>
  
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                  <h2 className="text-xl font-bold text-green-700 mb-4">✅ Finished</h2>
                  <SortingStatus
                    taskArray={taskArray}
                    setHelperCount={setHelperCount}
                    statusValue={'Finished'}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-600 mt-12 text-lg">
                No Tasks Present. Try adding some tasks 📝
              </div>
            )}
          </div>
        )
      }
    </>
  );
}
