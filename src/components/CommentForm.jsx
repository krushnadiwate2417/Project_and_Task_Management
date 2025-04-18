import { useState } from "react";
import { fetchFunction } from "../utils/fetchFunction";
import { ADD_A_COMMENT } from "../utils/constant";

export default function CommentForm({ taskId, taskTitle, setCommenting, taskDesc }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const storedUser = sessionStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      taskId: taskId,
      comment: comment,
      commentedBy: user._id,
    };

    const response = await fetchFunction({
      crudMethod: "PATCH",
      fetchingUrl: ADD_A_COMMENT,
      setError,
      data: commentData,
    });

    if (response) console.log(response);
    setCommenting(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white border border-gray-300 rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{taskTitle}</h2>
      <p className="text-sm text-gray-600 mb-4">{taskDesc}</p>

      <form onSubmit={handleCommentSubmit}>
        <textarea
          required
          placeholder="Comment on this task..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-28 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => {
              setComment('');
              setCommenting(false);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
          >
            Back
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Comment
          </button>
        </div>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
