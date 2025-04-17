import { useNavigate } from "react-router-dom";

export default function ProceedCard({ imgSrc, post }){
  const navigate = useNavigate();

  const handleClick = () => {
    if (post === 'User') {
      navigate('/user');
    } else if (post === 'Admin') {
      navigate('/admin');
    }
  };

  return (
    <>
      <div className="bg-white cursor-pointer dark:bg-neutral-800 shadow-md transition-all duration-300 rounded-2xl p-4 flex flex-col items-center w-64 mx-auto border border-transparent hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
        <img
          src={imgSrc}
          alt={`${post} avatar`}
          className="w-32 h-32 object-cover rounded-full mb-4 border border-gray-200 dark:border-neutral-700"
        />
        <button
          onClick={handleClick}
          className="bg-neutral-800 cursor-pointer text-white dark:bg-neutral-700 dark:text-white px-5 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300 text-sm"
        >
          Proceed as a {post}
        </button>
      </div>
    </>
  );
};
