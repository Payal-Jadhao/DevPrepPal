import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Reusable subject template
function SubjectTemplate({ subjectName, flowTopics, accordionTopics, quizPath = '/quiz' }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFlowIdx, setActiveFlowIdx] = useState(null);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans tracking-wide flex flex-col items-center transition-colors duration-300">
      {/* Top Section: Heading */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center pt-10 pb-4 px-4 md:px-12 animate-fade-in">
        <div className="w-full text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            {subjectName}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of {subjectName} with a modern, structured flow
          </p>
        </div>
      </div>

      {/* Subject Flow Bar */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">
        <SubjectFlowBar topics={flowTopics} activeIdx={activeFlowIdx} setActiveIdx={setActiveFlowIdx} />
      </section>

      {/* Accordion Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">
        <Accordion topics={accordionTopics} openIdx={openAccordionIdx} setOpenIdx={setOpenAccordionIdx} />

        {/* Give Test Button */}
        <div className="w-full flex justify-center pt-12 pb-4">
          <button
            className="w-full max-w-md bg-blue-600 dark:bg-blue-500 text-white text-2xl font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 transition-all duration-200 hover:scale-101 active:scale-98 mt-4"
            onClick={() => navigate(quizPath)}
          >
            <span className="inline-block">Give Test</span>
          </button>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out both;
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.7s ease-out both;
        }
      `}</style>
    </div>
  );
}

// Subject Flow Bar Component
function SubjectFlowBar({ topics, activeIdx, setActiveIdx }) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-10 flex justify-center">
      <div className="inline-flex gap-10 min-w-full px-2">
        {topics.map((topic, idx) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative flex flex-col items-center group transition-transform duration-300 focus:outline-none ${activeIdx === idx ? 'scale-110 z-10' : 'hover:scale-105'}`}
            style={{ minWidth: 110 }}
          >
            {idx !== 0 && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 opacity-60 z-0" />
            )}
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-300 border-2 ${
                activeIdx === idx
                  ? 'bg-gradient-to-br from-indigo-500 to-blue-400 border-indigo-400 text-white'
                  : 'bg-white/60 border-slate-200 text-indigo-500 group-hover:shadow-indigo-200'
              } ${activeIdx === idx ? 'ring-4 ring-indigo-200/40' : ''}`}
            >
              <span className="font-bold text-lg select-none">{idx + 1}</span>
            </span>
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                activeIdx === idx ? 'text-indigo-700' : 'text-slate-600 group-hover:text-indigo-500'
              }`}
            >
              {topic}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Accordion Component
function Accordion({ topics, openIdx, setOpenIdx }) {
  return (
    <div className="w-full flex flex-col gap-6">
      {topics.map((topic, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={topic}
            className={`w-full rounded-2xl shadow-xl transition-all duration-300 border border-slate-200 bg-white/40 backdrop-blur-md hover:shadow-2xl ${
              isOpen ? 'bg-white/70 border-indigo-200 shadow-indigo-200/40' : ''
            }`}
          >
            <button
              className={`w-full flex items-center justify-between px-8 py-5 text-left font-semibold text-lg tracking-wide rounded-2xl transition-all duration-300 focus:outline-none ${
                isOpen ? 'text-indigo-700 bg-indigo-50/60' : 'text-slate-800 hover:bg-slate-50/60'
              }`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 mr-2 shadow-md" />
                {topic}
              </span>
              <svg
                className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : 'text-slate-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 py-6 px-8 opacity-100' : 'max-h-0 py-0 px-8 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              {isOpen && (
                <div className="text-slate-700 text-base animate-fade-in">
                  <span className="block font-medium text-indigo-500 mb-2">{topic}</span>
                  <span className="block">Topic content goes here...</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectTemplate;
