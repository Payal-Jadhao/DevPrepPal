import React, { useState } from "react";

const ROADMAP = [
  {
    key: "dsa",
    icon: "🧮",
    title: "Master Data Structures & Algorithms",
    goal: "Solve 300+ quality problems across categories",
    focus: [
      "Patterns: Sliding window, Two-pointer, Recursion, DP, Trees, Graphs",
      "Leetcode & NeetCode150 + Daily Contest participation",
    ],
    depth: [
      "Go beyond brute-force; optimize with time-space analysis",
      "Understand trade-offs; write dry-run tables for recursion/DP",
    ],
    outcome: [
      "300+ problems solved",
      "Can solve medium problems within 30 minutes",
    ],
    resources: [
      "NeetCode.io",
      "Blind75",
      "Striver's Sheet",
      "Codeforces Div2",
    ],
  },
  {
    key: "cs",
    icon: "📚",
    title: "CS Core Subject Fluency",
    goal: "Be interview-ready in OS, DBMS, CN, OOPs",
    focus: [
      "OS: Processes, Scheduling, Threads vs Processes, Deadlocks",
      "DBMS: Indexing, Transactions, Joins, Normal Forms",
      "CN: TCP vs UDP, IP/TCP headers, DNS, HTTP",
      "OOP: SOLID, Class/Interface design, Design patterns",
    ],
    depth: [
      "Able to explain concepts + draw diagrams + answer corner cases",
    ],
    outcome: [
      "Can teach each topic clearly in 2 mins with diagram",
    ],
    resources: [
      "Neso Academy",
      "Operating Systems by Galvin",
      "GFG",
    ],
  },
  {
    key: "projects",
    icon: "💻",
    title: "Build 2–3 Strategic Projects",
    goal: "Have real, problem-solving, scalable apps that reflect system design & development skills",
    focus: [
      "Project 1 (LLD + Backend): Auth system, Blog platform, File Sharing App",
      "Project 2 (Fullstack): Dashboard App with filters, charts, CRUD, JWT auth",
      "Project 3 (Bonus/AI): OpenAI-powered chatbot, ML-powered recommendation, or DevTool",
    ],
    depth: [
      "Use real-world stack: Node.js/Express + MongoDB or PostgreSQL + React",
      "Clean architecture: MVC, error handling, pagination, deployment",
      "Backend should have auth, database modeling, caching, API testing",
    ],
    tools: [
      "React", "Tailwind", "Node.js", "MongoDB/PostgreSQL", "Redis", "JWT", "Git"
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
    key: "system",
    icon: "🧠",
    title: "Learn System Design (LLD Focus for Fresher)",
    goal: "Explain class design & low-level system design",
    focus: [
      "Class Design: Composition vs Inheritance, Interface segregation",
      "Features: Rate limiter, URL shortener, Notification system",
    ],
    depth: [
      "Class diagrams + interaction sequences",
      "Explain design trade-offs and scalability basics",
    ],
    tools: ["draw.io", "Whimsical", "PlantUML"],
    outcome: [
      "Confident to explain system like 'Design Instagram Post Feed'",
    ],
    resources: [
      "Arpit Bhayani’s LLD Notes",
      "Grokking the LLD Interview",
    ],
  },
  {
    key: "resume",
    icon: "📄",
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
    icon: "🧪",
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
      "100% ready for top company final rounds",
    ],
    resources: [
      "Pramp",
      "Interviewing.io",
      "peers",
      "YouTube live mocks",
    ],
  },
];

function FadeInSection({ children, delay = 0 }) {
  // Simple fade-in on scroll using IntersectionObserver
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

export default function Roadmap() {
  const [expanded, setExpanded] = useState({});
  const handleToggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="max-w-3xl mx-auto py-10 px-2 md:px-0 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-indigo-800 mt-[50px]">Interview Preparation Roadmap</h1>
      <h2 className="text-lg md:text-xl text-center text-slate-600 mb-8">Your step-by-step playbook to crack top tech interviews</h2>
      <div className="relative border-l-2 border-indigo-100 pl-4 md:pl-8 space-y-10">
        {ROADMAP.map((block, idx) => (
          <FadeInSection key={block.key} delay={idx * 120}>
            <div className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-6 top-2 w-10 h-10 flex items-center justify-center bg-white border-2 border-indigo-200 rounded-full shadow text-2xl z-10">
                {block.icon}
              </span>
              <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-slate-200 rounded-2xl shadow-md px-6 py-6 md:py-8 md:px-10 transition group-hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-indigo-900 flex items-center gap-2">{block.title}</h3>
                  {block.tools && (
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      {block.tools.map((tool) => (
                        <span key={tool} className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded shadow-sm border border-indigo-200">{tool}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="mb-2">
                      <span className="font-bold text-slate-700">🎯 Goal:</span> <span className="text-slate-800">{block.goal}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-slate-700">🔍 Focus:</span>
                      <ul className="list-disc ml-6 text-slate-800">
                        {block.focus.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                    {block.depth && (
                      <div className="mb-2">
                        <span className="font-bold text-slate-700">💡 How Deep:</span>
                        <ul className="list-disc ml-6 text-slate-800">
                          {block.depth.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div>
                    {block.outcome && (
                      <div className="mb-2">
                        <span className="font-bold text-slate-700">🚀 Outcome:</span>
                        <ul className="list-disc ml-6 text-slate-800">
                          {block.outcome.map((o, i) => <li key={i}>{o}</li>)}
                        </ul>
                      </div>
                    )}
                    {block.tips && (
                      <div className="mb-2">
                        <span className="font-bold text-slate-700">📦 Tips:</span>
                        <ul className="list-disc ml-6 text-slate-800">
                          {block.tips.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                      </div>
                    )}
                    {block.resources && (
                      <div className="mb-2">
                        <button
                          className="text-xs text-indigo-600 underline hover:text-indigo-800 focus:outline-none mb-1"
                          onClick={() => handleToggle(block.key)}
                        >
                          {expanded[block.key] ? "Hide Resources" : "See Resources"}
                        </button>
                        <div className={`transition-all duration-300 ${expanded[block.key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                          <ul className="list-disc ml-6 text-slate-700 text-sm">
                            {block.resources.map((r, i) => <li key={i}>{r}</li>)}
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
      <div className="mt-12 text-center text-slate-500 text-sm">
        <span className="inline-block bg-indigo-50 border border-indigo-100 rounded px-4 py-2 shadow-sm">More sections coming soon: Internship Strategy, Off-campus Plan, and more!</span>
      </div>
    </section>
  );
} 