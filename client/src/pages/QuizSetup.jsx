import React from "react";

export default function QuizSetup({ subject, setSubject, numQuestions, setNumQuestions, onStart }) {
  const subjects = ["OS", "DBMS", "CN", "OOPS", "Mixed"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-sky-50 to-indigo-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:px-6 w-full max-w-xl transition-all duration-700 ease-in-out animate-fade-in flex flex-col gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Start a New Quiz</h2>
        <p className="text-center text-gray-500 mb-6 text-base md:text-lg">Master concepts in OS, DBMS, CN, OOPs with targeted quizzes.</p>
        <div className="flex flex-col gap-2 mb-4">
          <label className="mb-2 text-lg font-medium">Select Subject</label>
          <div className="flex flex-wrap gap-3 justify-center">
            {subjects.map((s) => (
              <button
                key={s}
                type="button"
                className={`px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-100 transition-all duration-200 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm ${subject === s ? "bg-blue-600 text-white font-semibold shadow-inner" : "bg-white"}`}
                onClick={() => setSubject(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="mb-2 text-lg font-medium">Number of Questions</label>
          <input
            type="number"
            min={5}
            max={25}
            value={numQuestions}
            onChange={e => setNumQuestions(Math.max(1, Math.min(25, Number(e.target.value))))}
            className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition-all duration-200"
          />
        </div>
        <button
          onClick={onStart}
          className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-full font-semibold shadow-md hover:brightness-110 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
