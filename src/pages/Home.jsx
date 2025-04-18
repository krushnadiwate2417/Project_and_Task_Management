import { useContext, useEffect, useState } from "react";
import ProjectOrTaskFrom from "../components/ProjectOrTaskForm";
import ProjectCard from "../components/ProjectCard";
import { fetchFunction } from "../utils/fetchFunction";
import { GET_PROJECTS } from "../utils/constant";
import GlobalContext from "../context/GlobalContext";

export default function Home() {
  const { globalIsAdmin, setProjectId } = useContext(GlobalContext);

  const [addingNewProject, setAddingNewProject] = useState(false);
  const [projectsArray, setProjectsArray] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAllProjects();
  }, []);

  const handleGetAllProjects = async () => {
    const response = await fetchFunction({
      crudMethod: "GET",
      fetchingUrl: GET_PROJECTS,
      setError,
    });
    setProjectsArray(response?.projects);
  };

  const handleAddProject = () => {
    setAddingNewProject(true);
  };

  return (
    <>
      {addingNewProject ? (
        <ProjectOrTaskFrom
          isTask={false}
          setError={setError}
          setProjectArray={setProjectsArray}
          setAddingNewProject={setAddingNewProject}
        />
      ) : (
        <div className="p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projectsArray.length > 0 &&
              projectsArray.map((project, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setProjectId(project?._id);
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}

            {globalIsAdmin && (
            <div
                onClick={handleAddProject}
                className="flex flex-col justify-center items-center h-full min-h-[10rem] bg-gray-100 border-2 border-blue-200 rounded-2xl cursor-pointer hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
            >
                <span className="text-lg font-semibold">+ Add New Project</span>
                <p className="text-sm text-gray-500">Click to create a new project</p>
            </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
