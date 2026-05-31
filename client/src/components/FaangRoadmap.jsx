import React, { useState } from "react";

const ROADMAP = [
  {
    key: "dsa",
    title: "Master Data Structures & Algorithms",
    goal: "Solve maximum quality problems across categories",
    focus: [
        "Master at least one Programming Language",
        "Mastering problem-solving by building strong intuition, logical thinking, and recognizing core patterns.",
    ],
    depth: [
      "Go beyond brute-force; optimize with time-space analysis",
      "Understand trade-offs; write dry-run tables for recursion/DP",
    ],
    outcome: [
      "Preferably 300+ problems solved",
      "Can solve medium problems within 30 minutes",
    ],
    resources: [
      {
        label: "Neetcode150",
        url: "https://neetcode.io/practice?tab=neetcode150"
      },
      {
        label: "Striver's Blind75",
        url: "https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions"
      },
      {
        label: "Striver's SDE Sheet",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      }
    ],
  },
  {
    key: "cs",
    title: "CS Core Subject Fluency",
    goal: "Be interview-ready in OS, DBMS, CN, OOPs",
    focus: [
      "OS Important Topics : Processes, Scheduling, Threads vs Processes, Deadlocks",
      "DBMS Important Topics: SQL, Indexing, Transactions, Joins, Normal Forms",
      "CN Important Topics: TCP vs UDP, IP/TCP headers, DNS, HTTP",
      "OOP Important Topics: SOLID, Class/Interface design, Design patterns",
    ],
    depth: [
      "Able to explain concepts + draw diagrams + answer corner cases",
    ],
    outcome: [
      "Can teach each topic clearly in 2 mins with diagram",
    ],
    resources: [
      { label: "Study Material section of this Website", url: "#" }
    ],
  },
  {
    key: "projects",
    title: "Build 2–3 Strategic Projects",
    goal: "Have real, problem-solving, scalable apps that reflect system design & development skills",
    focus: [
      "Example Project 1 (LLD + Backend): Auth system, Blog platform, File Sharing App",
      "Example Project 2 (Fullstack): Dashboard App with filters, charts, CRUD, JWT auth",
      "Example Project 3 (Bonus/AI): OpenAI-powered chatbot, ML-powered recommendation, or DevTool",
    ],
    depth: [
      "Use real-world stack: Node.js/Express + MongoDB or PostgreSQL + React",
      "Clean architecture: MVC, error handling, pagination, deployment",
      "Backend should have auth, database modeling, caching, API testing",
    ],
    outcome: [
      "GitHub with clean ReadMe, Deployed demo link",
      "Can explain each feature, schema, and tradeoff",
    ],
    tips: [
      "Record 2-min demo walkthroughs",
      "Use GitHub actions for auto-deploy",
    ],
  },
  {
    key: "resume",
    title: "Resume & LinkedIn Optimization",
    goal: "Be discoverable and impressive to recruiters",
    focus: [
      "Resume: 1-pager, metrics-backed, STAR format, ATS-friendly",
      "LinkedIn: Banner, About, Projects, Skills, Recommendations",
    ],
    depth: [
      "Use action verbs, quantify impact",
      "Mention LeetCode/Codeforces rating if 1900+",
    ],
    outcome: [
      "Upload resume to Google Drive with public view link",
      "GitHub with 4+ pinned repos & live projects",
    ],
    tips: [
      "Get resume reviewed by 2 seniors",
    ],
  },
  {
    key: "mocks",
    title: "Mock Interviews + Behavioral Prep",
    goal: "Be confident under pressure",
    focus: [
      "5+ technical mock interviews (DSA + LLD)",
      "2 HR mocks (STAR stories)",
    ],
    depth: [
      "Record mock interviews, note mistakes",
      "Learn to handle unknown problems with calm",
    ],
    outcome: [
      "100% ready for Amazon/Google final rounds",
    ],
    resources: [
      { label: "Pramp", url: "#" },
      { label: "Interviewing.io", url: "#" },
      { label: "Peers", url: "#" },
      { label: "YouTube live mocks", url: "#" }
    ],
  },
];

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function FaangRoadmap() {
  const [expanded, setExpanded] = useState({});
  const handleToggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-gray-900 pb-16 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 md:px-0 pt-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 bg-clip-text text-transparent mb-2 drop-shadow-sm mt-[50px]">
            Interview Preparation Roadmap
          </h1>
          <h2 className="text-lg md:text-xl text-slate-700 dark:text-gray-300 font-medium">
            Your step-by-step playbook to crack top tech interviews
          </h2>
        </div>
        
        <div className="relative border-l-2 border-blue-100 dark:border-gray-700 pl-4 md:pl-8 space-y-10">
          {ROADMAP.map((block, idx) => (
            <FadeInSection key={block.key} delay={idx * 120}>
              <div className="relative group">
                <span className="absolute -left-[25px] md:-left-[41px] top-6 w-4 h-4 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-gray-700 rounded-full shadow z-10"></span>
                <div className="bg-indigo-50/60 dark:bg-gray-800/60 border border-blue-100 dark:border-gray-700 rounded-2xl shadow-md px-6 py-6 md:py-8 md:px-10 transition group-hover:shadow-lg group-hover:border-indigo-200 dark:group-hover:border-gray-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-gray-100 flex items-center gap-2">
                      {block.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <div className="mb-2">
                        <span className="font-bold text-slate-700 dark:text-gray-300">Goal:</span>{" "}
                        <span className="text-slate-800 dark:text-gray-200">{block.goal}</span>
                      </div>
                      <div className="mb-2">
                        <span className="font-bold text-slate-700 dark:text-gray-300">Focus:</span>
                        <ul className="list-disc ml-6 text-slate-800 dark:text-gray-200">
                          {block.focus.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                      {block.depth && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700 dark:text-gray-300">How Deep:</span>
                          <ul className="list-disc ml-6 text-slate-800 dark:text-gray-200">
                            {block.depth.map((d, i) => <li key={i}>{d}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      {block.outcome && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700 dark:text-gray-300">Outcome:</span>
                          <ul className="list-disc ml-6 text-slate-800 dark:text-gray-200">
                            {block.outcome.map((o, i) => <li key={i}>{o}</li>)}
                          </ul>
                        </div>
                      )}
                      {block.tips && (
                        <div className="mb-2">
                          <span className="font-bold text-slate-700 dark:text-gray-300">Tips:</span>
                          <ul className="list-disc ml-6 text-slate-800 dark:text-gray-200">
                            {block.tips.map((t, i) => <li key={i}>{t}</li>)}
                          </ul>
                        </div>
                      )}
                      {block.resources && (
                        <div className="mb-2">
                          <button
                            className="text-xs px-3 py-1 rounded bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 text-yellow-800 dark:text-yellow-400 font-semibold border border-yellow-100 dark:border-yellow-800 shadow-sm transition focus:outline-none mb-1"
                            onClick={() => handleToggle(block.key)}
                          >
                            {expanded[block.key] ? "Hide Resources" : "See Resources"}
                          </button>
                          <div className={`transition-all duration-300 ${expanded[block.key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                            <ul className="list-disc ml-6 text-slate-700 dark:text-gray-300 text-sm">
                              {block.resources.map((r, i) => (
                                <li key={i}>
                                  {r.url !== "#" ? (
                                    <a
                                      href={r.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sky-700 dark:text-sky-400 underline hover:text-sky-900 dark:hover:text-sky-300 transition"
                                    >
                                      {r.label}
                                    </a>
                                  ) : (
                                    <span>{r.label}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        <div className="mt-12 text-center text-slate-500 dark:text-gray-400 text-sm">
          <span className="inline-block bg-sky-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700 rounded px-4 py-2 shadow-sm">
            More sections coming soon: Internship Strategy, Off-campus Plan, and more!
          </span>
        </div>
      </div>
    </section>
  );
}