import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/tasks')}
      className="flex flex-col justify-center items-start gap-2 w-60 h-40 p-4 bg-white shadow-lg rounded-2xl cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <h1 className="text-lg font-semibold text-gray-800 truncate">
        {project.title}
      </h1>
      <p className="text-sm text-gray-600 line-clamp-3">
        {project.description}
      </p>
    </div>
  );
}
