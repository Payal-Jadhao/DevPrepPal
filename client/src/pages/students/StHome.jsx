import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OsIcon from "../../components/icons/OsIcon";
import DbmsIcon from "../../components/icons/DbmsIcon";
import CnIcon from "../../components/icons/CnIcon";
import OopsIcon from "../../components/icons/OopsIcon";
import WaveDivider from "../../components/WaveDivider";

const subjectInfo = [
  {
    name: "Operating Systems (OS)",
    desc: "OS is the backbone of computer science, managing hardware and software resources. Understanding OS concepts is crucial for system design, troubleshooting, and interviews.",
    route: "/students/os",
    icon: <OsIcon />,
  },
  {
    name: "Database Management Systems (DBMS)",
    desc: "DBMS knowledge is essential for handling data, designing schemas, and writing efficient queries. It is a core topic in technical interviews and real-world applications.",
    route: "/students/dbms",
    icon: <DbmsIcon />,
  },
  {
    name: "Computer Networks (CN)",
    desc: "CN forms the basis of communication between systems. Grasping networking concepts helps in understanding protocols, security, and distributed systems—key for placements.",
    route: "/students/cn",
    icon: <CnIcon />,
  },
  {
    name: "Object Oriented Programming (OOPS)",
    desc: "OOPS is fundamental for writing scalable, maintainable code. Mastery of OOPS principles is expected in coding rounds and system design interviews.",
    route: "/students/oops",
    icon: <OopsIcon />,
  },
];

export default function StHome() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <WaveDivider position="top" />
      <div className="max-w-5xl mx-auto py-16 px-4 flex flex-col items-center animate-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-blue-700 tracking-tight relative inline-block">
          Why These Subjects Matter for Placements
        </h2>
        <p className="mb-10 text-gray-500 text-center max-w-2xl mx-auto text-lg font-medium animate-fadeUp">
          Mastering OS, DBMS, CN, and OOPS is vital for cracking technical interviews and excelling in placements. These subjects form the core of computer science fundamentals, frequently asked in interviews, and are essential for problem-solving and system design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {subjectInfo.map((subj, idx) => (
            <div
              key={subj.name}
              className="relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center justify-between border border-blue-100 hover:border-blue-400 transition-all duration-300 cursor-pointer glass-card group animate-cardFadeUp"
              style={{ animationDelay: `${idx * 0.12 + 0.2}s` }}
              onClick={() => navigate(subj.route)}
            >
              <div className="mb-4 text-blue-600 w-14 h-14 flex items-center justify-center">
                {subj.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{subj.name}</h3>
              <p className="text-gray-600 mb-6 text-center">{subj.desc}</p>
              <button className="mt-auto flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all duration-200 group-hover:translate-x-1 group-hover:shadow-blue-300">
                Explore
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider position="bottom" />
    </div>
  );
}
