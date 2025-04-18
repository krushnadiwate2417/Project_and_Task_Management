import { useNavigate } from "react-router-dom";

export default function ProceedCard({ imgSrc, post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (post === "User") {
      navigate("/user");
    } else if (post === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 cursor-pointer rounded-2xl p-6 w-64 mx-auto shadow-md hover:shadow-lg hover:scale-105 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col items-center">
      <img
        src={imgSrc}
        alt={`${post} avatar`}
        className="w-28 h-28 object-cover rounded-full mb-4 border-2 border-gray-300 dark:border-zinc-600 shadow-sm"
      />
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 mt-2 rounded-full transition-colors duration-300 text-sm font-medium"
      >
        Proceed as {post}
      </button>
    </div>
  );
}
