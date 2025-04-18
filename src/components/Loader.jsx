export default function Loader({ text, submitted, setloaderState }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-2xl w-80 flex flex-col items-center gap-4 animate-fade-in">
        <h1 className="text-lg font-semibold text-center">{text}</h1>

        {submitted && (
          <button
            onClick={() => setloaderState(false)}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors text-sm"
          >
            Okay
          </button>
        )}
      </div>
    </div>
  );
}
