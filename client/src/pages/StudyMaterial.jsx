import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const materials = [
  { title: "Operating Systems", desc: "Best notes, MCQs, and resources for OS.", link: "/students/os" },
  { title: "DBMS", desc: "Top DBMS study guides and practice sets.", link: "/students/dbms" },
  { title: "Computer Networks", desc: "CN notes, quizzes, and cheat sheets.", link: "/students/cn" },
  { title: "OOPs", desc: "OOPs concepts, interview Qs, and more.", link: "/students/oops" },
];

export default function StudyMaterial() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 px-4 pt-28 pb-12 transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto text-center mb-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight drop-shadow">
          Premium Study Material for OS, DBMS, CN & OOPs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Curated resources to help you master core CS subjects for exams and placements.
        </p>

        {!isLoggedIn ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-6 border border-blue-100 dark:border-gray-700 transition hover:shadow-2xl hover:-translate-y-1 duration-300 ease-in-out">
            <p className="mb-5 text-lg text-gray-700 dark:text-gray-300">
              🔒 Please log in to unlock all the study materials and start learning!
            </p>
            <Link
              to="/auth"
              className="inline-block px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white text-lg rounded-full shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition font-semibold"
            >
              Login / Signup
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-6">
            {materials.map((mat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl dark:border dark:border-gray-700 transition">
                <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">{mat.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-left">{mat.desc}</p>
                <Link to={mat.link} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Open Materials
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}