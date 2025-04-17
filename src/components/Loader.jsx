export default function Loader({ text, submitted, setloaderState }){
    return (
      <>
        <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
          <div className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white p-6 rounded-xl shadow-xl w-80 flex flex-col items-center space-y-4">
            <h1 className="text-lg font-semibold">{text}</h1>
            {submitted && (
              <button
                onClick={() => setloaderState(false)}
                className="mt-2 cursor-pointer px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300 text-sm"
              >
                Okay
              </button>
            )}
          </div>
        </div>
      </>
    );
  };
  
  