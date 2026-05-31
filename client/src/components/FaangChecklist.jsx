import React, { useState, useEffect } from "react";

const CHECKLIST_DATA = [
  {
    key: "dsa",
    icon: "🧮",
    title: "Data Structures & Algorithms",
    items: [
      "Arrays & Strings (Sliding window, prefix sum)",
      "Hashmaps & Sets",
      "Linked Lists (Cycle, reverse, merge)",
      "Stacks & Queues (Monotonic stack, LRU)",
      "Trees & BSTs (DFS/BFS, LCA, Views)",
      "Heaps & Priority Queues",
      "Tries (Prefix matching)",
      "Graphs (DFS, BFS, Topo Sort, Dijkstra, Union-Find)",
      "Backtracking & Recursion",
      "Bit Manipulation (XOR, subsets)",
      "Greedy Techniques (Intervals, Activities)",
      "Dynamic Programming (Knapsack, LIS, Matrix DP)",
    ],
  },
  {
    key: "cs",
    icon: "📚",
    title: "Computer Science Fundamentals",
    items: [
      "Operating Systems: Scheduling, Threads, Deadlocks, Paging",
      "DBMS: Joins, Transactions (ACID), Normalization, Indexes",
      "Computer Networks: OSI, TCP/IP, DNS, HTTP, TCP Handshake",
      "OOPs: SOLID, Inheritance, Polymorphism, Interfaces",
    ],
  },
  {
    key: "system",
    icon: "🧠",
    title: "System Design Basics",
    items: [
      "Class Design Principles (Encapsulation, Composition)",
      "UML Class + Sequence Diagrams",
      "RESTful API Structure & Layered Architecture",
      "Redis Caching, Idempotency, Rate Limiting",
      "Project-based LLD Implementation (URL Shortener, Blog Platform)",
    ],
  },
  {
    key: "portfolio",
    icon: "💼",
    title: "Portfolio & Projects",
    items: [
      "Project 1: Scalable API / LLD App",
      "Project 2: Full-stack Web App (Auth, DB, Deployment)",
      "Project 3: AI/ML / OpenAI-powered Tool",
      "GitHub: Structured Repos with Readme, GIFs, Badges",
      "Deployment (Vercel/Render/AWS): Live Demo Links",
    ],
  },
  {
    key: "resume",
    icon: "📄",
    title: "Resume & Branding",
    items: [
      "1-page Resume",
      "LinkedIn Profile with Project Links & Summary",
      "Resume peer-reviewed or mentor-reviewed",
      "GitHub pinned repos with clean structure",
      "Online presence: Dev.to/Hashnode blogs (optional)",
    ],
  },
  {
    key: "hr",
    icon: "🗣️",
    title: "Behavioral & HR Interview Readiness",
    items: [
      "Tell me about yourself (STAR)",
      "Why this company? Why this role?",
      "Conflict / Failure Situation",
      "Project Deep Dive Narration",
      "Strengths, Weaknesses, Time management examples",
    ],
  },
  {
    key: "mocks",
    icon: "🧪",
    title: "Mock Interviews & Final Sprint",
    items: [
      "Technical DSA Mock 1",
      "Technical DSA Mock 2",
      "System Design Mock",
      "HR + Resume Deep Dive Mock",
      "LeetCode Weekly Contests / Codeforces Participation",
    ],
  },
];

function getInitialState() {
  const saved = localStorage.getItem("faangChecklist");
  if (saved) return JSON.parse(saved);
  // Default: all unchecked
  return Object.fromEntries(
    CHECKLIST_DATA.map((section) => [
      section.key,
      Array(section.items.length).fill(false),
    ])
  );
}

export default function FaangChecklist() {
  const [open, setOpen] = useState(CHECKLIST_DATA.map((_, i) => i === 0));
  const [checked, setChecked] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("faangChecklist", JSON.stringify(checked));
  }, [checked]);

  const handleToggleSection = (idx) => {
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleCheck = (sectionKey, itemIdx) => {
    setChecked((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey].map((v, i) => (i === itemIdx ? !v : v)),
    }));
  };

  const handleMarkAll = (sectionKey, value) => {
    setChecked((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey].map(() => value),
    }));
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-2 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-indigo-800 ">Interview Preparation Checklist</h1>
      <h2 className="text-lg md:text-xl text-center text-slate-600 mb-8">Your interactive roadmap to ace tech interviews</h2>
      <div className="space-y-5">
        {CHECKLIST_DATA.map((section, idx) => {
          const completed = checked[section.key]?.filter(Boolean).length || 0;
          const total = section.items.length;
          const percent = Math.round((completed / total) * 100);
          return (
            <div key={section.key} className="bg-white/80 rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
              <button
                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none group"
                onClick={() => handleToggleSection(idx)}
                aria-expanded={open[idx]}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <span className="text-lg md:text-xl font-semibold text-indigo-900">{section.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-28 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-indigo-400 transition-all"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-indigo-700">{percent}%</span>
                  <svg
                    className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${open[idx] ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 bg-gradient-to-br from-sky-50 to-indigo-50 ${open[idx] ? "max-h-[1000px] py-4 px-6" : "max-h-0 py-0 px-6 overflow-hidden"}`}
                style={{
                  boxShadow: open[idx] ? "0 4px 24px 0 rgba(80, 112, 255, 0.08)" : undefined,
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-slate-500">{completed} of {total} completed</span>
                  <button
                    className="text-xs px-3 py-1 rounded bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold transition"
                    onClick={() => handleMarkAll(section.key, completed !== total)}
                  >
                    {completed === total ? "Unmark All" : "Mark All Complete"}
                  </button>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-2 rounded hover:bg-indigo-100 transition group"
                    >
                      <input
                        type="checkbox"
                        checked={!!checked[section.key]?.[i]}
                        onChange={() => handleCheck(section.key, i)}
                        className="accent-indigo-500 w-5 h-5 rounded focus:ring-2 focus:ring-indigo-400 transition"
                        id={`${section.key}-${i}`}
                      />
                      <label
                        htmlFor={`${section.key}-${i}`}
                        className={`text-slate-800 text-sm md:text-base select-none transition group-hover:text-indigo-700 ${checked[section.key]?.[i] ? "line-through text-slate-400" : ""}`}
                      >
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 