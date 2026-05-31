import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const subjectFlowTopics = [
  'Introduction',
  'Process & Threads',
  'CPU Scheduling',
  'Process Synchronization',
  'Deadlocks',
  'Memory Management',
  'Paging & Segmentation',
  'Virtual Memory',
  'File System',
  'Disk Scheduling',
  'I/O Management',
  'Security & Protection',
  'System Calls',
  'OS Design & Implementation',
];

const detailedTopics = [
  'Introduction',
  'Process & Threads',
  'CPU Scheduling',
  'Process Synchronization',
  'Deadlocks',
  'Memory Management',
  'Paging & Segmentation',
  'Virtual Memory',
  'File System',
  'Disk Scheduling',
  'I/O Management',
  'Security & Protection',
  'System Calls',
  'OS Design & Implementation',
  'Relevant Interview Questions',
];

function SubjectFlowBar({ topics, activeIdx, setActiveIdx }) {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-30 flex justify-center" style={{ background: 'white', backgroundColor: 'white' }}>
      <div className="inline-flex gap-10 min-w-full px-2">
        {topics.map((topic, idx) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative flex flex-col items-center group transition-transform duration-300 focus:outline-none !bg-white border border-slate-200 shadow-md ${activeIdx === idx ? 'scale-110 z-10 ring-2 ring-indigo-200/60' : 'hover:scale-105'}`}
            style={{ minWidth: 220, background: 'white', backgroundColor: 'white' }}
          >
            {/* Roadmap line */}
            {idx !== 0 && (
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-indigo-300 to-blue-300 opacity-60 z-0" />
            )}
            {/* Node */}
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 border-2 !bg-white ${activeIdx === idx ? 'border-indigo-400 shadow-indigo-300/60 text-indigo-700 ring-4 ring-indigo-200/40' : 'border-slate-200 shadow-slate-200/60 text-indigo-500 group-hover:shadow-indigo-200/80'}`}
              style={{ boxShadow: activeIdx === idx ? '0 0 16px 4px #6366f1aa' : undefined, background: 'white', backgroundColor: 'white' }}
            >
              <span className="font-bold text-lg select-none" style={{ background: 'white', backgroundColor: 'white' }}>{idx + 1}</span>
            </span>
            {/* Label */}
            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 whitespace-nowrap ${activeIdx === idx ? 'text-indigo-700' : 'text-slate-800 group-hover:text-indigo-500'}`}
              style={{ background: 'white', backgroundColor: 'white' }}
            >
              {topic}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Accordion({ topics, openIdx, setOpenIdx }) {
  return (
    <div className="w-full flex flex-col gap-6">
      {topics.map((topic, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={topic}
            className={`w-full rounded-2xl shadow-xl transition-all duration-300 border border-slate-200 backdrop-blur-md bg-white hover:shadow-2xl ${
              isOpen ? 'bg-white border-indigo-200 shadow-indigo-200/40' : ''
            }`}
            style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(99,102,241,0.10)' : undefined }}
          >
            <button
              className={`w-full flex items-center justify-between px-8 py-5 text-left font-semibold text-lg tracking-wide rounded-2xl transition-all duration-300 focus:outline-none bg-white ${
                isOpen ? 'text-indigo-700' : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`panel-${topic}`}
            >
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 mr-2 shadow-md" />
                {topic}
              </span>
              <svg
                className={`w-6 h-6 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : 'rotate-0 text-slate-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`panel-${topic}`}
              className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-none py-6 px-8 opacity-100' : 'max-h-0 py-0 px-8 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              {isOpen && (
                <div className="text-slate-800 text-base animate-fade-in">
                  {topic === 'Introduction' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Introduction to Operating Systems</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg bg-white/60 rounded-xl px-4 py-2 shadow-sm">The Operating System (OS) is one of the most fundamental components of any computing system. Without an OS, a computer is merely a collection of hardware components incapable of performing meaningful tasks. The OS acts as an intermediary between the user and the hardware, ensuring efficient utilization of resources and a smooth user experience.</p>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>Role of an Operating System</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Process management</b> (executing programs)</li>
                          <li><b>Memory management</b> (allocating RAM)</li>
                          <li><b>File systems</b> (storing and retrieving data)</li>
                          <li><b>Device management</b> (interfacing with printers, keyboards, etc.)</li>
                          <li><b>Security and access control</b> (user authentication and permissions)</li>
                          <li><b>User interfaces</b> (text-based shell or graphical environment)</li>
                        </ul>
                        <p className="mt-2 text-slate-600">The OS abstracts the complexity of the underlying hardware, offering a layer of abstraction so users and applications can interact with the machine seamlessly. It ensures that multiple applications can run concurrently without conflict and efficiently manages the limited hardware resources.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a4 4 0 00-8 0v1M12 12v.01" /></svg></span>Types of Operating Systems</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Batch OS:</b> Jobs are collected, grouped, and processed in batches. <span className="text-slate-500">(IBM mainframe)</span></li>
                          <li><b>Time-Sharing OS:</b> Multiple users interactively. <span className="text-slate-500">(UNIX)</span></li>
                          <li><b>Distributed OS:</b> Manages multiple computers as one. <span className="text-slate-500">(Amoeba, Plan 9)</span></li>
                          <li><b>Network OS:</b> Services over a network. <span className="text-slate-500">(Novell NetWare)</span></li>
                          <li><b>Real-Time OS:</b> Immediate processing. <span className="text-slate-500">(VxWorks, QNX)</span></li>
                          <li><b>Mobile OS:</b> For mobile devices. <span className="text-slate-500">(Android, iOS)</span></li>
                          <li><b>Embedded OS:</b> For microcontrollers. <span className="text-slate-500">(FreeRTOS)</span></li>
                          <li><b>Desktop OS:</b> General-purpose PCs. <span className="text-slate-500">(Windows 11, Ubuntu)</span></li>
                        </ul>
                        <p className="mt-2 text-slate-600">Each type is optimized for specific tasks and hardware environments, varying in complexity, response time, and user interfaces.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Why the OS is the Backbone of Modern Computing</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Ensures reliability and stability by managing concurrent users and processes</li>
                          <li>Provides security frameworks that protect data and resources</li>
                          <li>Enables scalability in cloud environments</li>
                          <li>Facilitates resource virtualization (e.g., running multiple OS instances)</li>
                          <li>Supports standardized APIs for software development</li>
                        </ul>
                        <p className="mt-2 text-slate-600">Without a robust OS, modern computing applications — from personal software to large-scale cloud infrastructures — would be unmanageable.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg></span>Graphical User Interface (GUI) and User Interaction</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>User-friendly experience: No need to memorize complex commands</li>
                          <li>Multitasking: Easily switch between multiple windows and applications</li>
                          <li>Accessibility: More intuitive for non-technical users</li>
                          <li>Visual feedback: Enhances interaction and system awareness</li>
                        </ul>
                        <p className="mt-2 text-slate-600">Popular GUIs include Windows Explorer, macOS Finder, and GNOME/KDE in Linux.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Common Operating Systems and Core Characteristics</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Operating System</th>
                                <th className="px-2 py-1">Core Characteristics</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td className="font-semibold">Windows 11</td><td>User-friendly, widely used, supports most hardware, strong GUI</td></tr>
                              <tr><td className="font-semibold">macOS</td><td>Optimized for Apple hardware, clean UI, UNIX-based</td></tr>
                              <tr><td className="font-semibold">Ubuntu</td><td>Open-source Linux distribution, secure, used in dev and servers</td></tr>
                              <tr><td className="font-semibold">Fedora</td><td>Bleeding-edge Linux, community-driven, GNOME default</td></tr>
                              <tr><td className="font-semibold">Debian</td><td>Stable and conservative Linux distro, used for servers</td></tr>
                              <tr><td className="font-semibold">Android</td><td>Linux-based, touch interface, dominant in smartphones</td></tr>
                              <tr><td className="font-semibold">iOS</td><td>Closed ecosystem, optimized for Apple mobile devices</td></tr>
                              <tr><td className="font-semibold">Red Hat Enterprise Linux (RHEL)</td><td>Commercial Linux for enterprises</td></tr>
                              <tr><td className="font-semibold">FreeBSD</td><td>UNIX-like, known for networking and performance</td></tr>
                              <tr><td className="font-semibold">ChromeOS</td><td>Lightweight OS by Google for cloud-centric devices</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Main Memory (RAM) vs Secondary Storage (HDD/SSD)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-indigo-50/60 rounded-lg p-3">
                            <h4 className="font-semibold text-indigo-700 mb-1">RAM (Random Access Memory)</h4>
                            <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
                              <li>Volatile memory: loses data when power is off</li>
                              <li>Fast access time (nanoseconds)</li>
                              <li>Limited in size, used for temporary data</li>
                              <li>Example: running applications and OS processes</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50/60 rounded-lg p-3">
                            <h4 className="font-semibold text-blue-700 mb-1">Secondary Storage (HDD/SSD)</h4>
                            <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
                              <li>Non-volatile: retains data after shutdown</li>
                              <li>Slower than RAM (milliseconds to microseconds)</li>
                              <li>Large capacity for permanent storage</li>
                              <li>SSDs offer faster speeds and no mechanical parts compared to HDDs</li>
                            </ul>
                          </div>
                        </div>
                        <p className="mt-2 text-slate-600">Together, they enable both performance (RAM) and persistence (HDD/SSD) in computing systems.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg></span>Overlays in Operating Systems</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>In memory-constrained systems, only required program portions are loaded into RAM as needed.</li>
                          <li>Program is divided into modules or segments.</li>
                          <li>OS loads only the active overlay into RAM; unused parts are swapped out.</li>
                          <li>Efficient use of limited memory, used in older systems.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg></span>Bootstrap Program and System Startup</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Bootstrap program is a small code in ROM/firmware, initiates system on power-on.</li>
                          <li>Performs hardware checks (POST), loads bootloader, then full OS.</li>
                          <li>Often stored in BIOS or UEFI.</li>
                          <li>Without it, system can't load the OS or begin execution.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Conclusion</h3>
                        <p className="text-slate-700">An operating system is not just software; it's the heart of a computer system. It orchestrates all interactions between users, hardware, and applications. From simple calculators to complex data centers, OSs ensure efficient, reliable, and secure operations. As future developers, engineers, or IT professionals, understanding the intricacies of operating systems is vital to building and managing modern computing systems.</p>
                      </div>
                    </div>
                  ) : topic === 'Process & Threads' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-blue-700">Process and Thread Management in Operating Systems</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg bg-white/60 rounded-xl px-4 py-2 shadow-sm">Process and thread management is one of the most fundamental components of an operating system. It enables the execution of programs, manages the execution lifecycle, allows communication between executing programs, and ensures synchronization for shared resources. Let's dive into each aspect in depth.</p>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg></span>What is a Process?</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li> A process is an instance of a program in execution. It is more than the program code (which is called a text section). </li>
                          <li><b>Program Counter (PC):</b> Tracks the next instruction to execute.</li>
                          <li><b>Stack:</b> Contains temporary data like function parameters, return addresses, and local variables.</li>
                          <li><b>Data Section:</b> Contains global variables.</li>
                          <li><b>Heap:</b> Dynamically allocated memory during runtime.</li>
                          <li><b>Process Control Block (PCB):</b> Metadata about the process such as its state, priority, CPU registers, memory limits, etc.</li>
                        </ul>
                        <div className="mt-3">
                          <h4 className="font-semibold text-blue-700 mb-1">Lifecycle of a Process</h4>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">New</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Ready</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Running</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Waiting (Blocked)</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Terminated</span>
                          </div>
                          <p className="mt-2 text-slate-600 text-sm">State transitions occur due to scheduling decisions, I/O requests, or system calls.</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8V7a4 4 0 00-8 0v1M12 12v.01" /></svg></span>What is a Thread?</h3>
                        <p className="text-slate-700 mb-2">A thread is the smallest unit of CPU execution within a process. Threads share the same memory and resources of a process but execute independently.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>A single-threaded process contains only one thread of control.</li>
                          <li>A multi-threaded process can perform multiple tasks at once via multiple threads.</li>
                        </ul>
                        <div className="mt-3">
                          <h4 className="font-semibold text-blue-700 mb-1">Difference between Process and Thread:</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                              <thead>
                                <tr className="text-blue-700">
                                  <th className="px-2 py-1">Aspect</th>
                                  <th className="px-2 py-1">Process</th>
                                  <th className="px-2 py-1">Thread</th>
                                </tr>
                              </thead>
                              <tbody className="text-slate-700">
                                <tr><td>Memory</td><td>Own memory space</td><td>Shared memory of the process</td></tr>
                                <tr><td>Overhead</td><td>High</td><td>Low</td></tr>
                                <tr><td>Creation time</td><td>Slow</td><td>Fast</td></tr>
                                <tr><td>Communication</td><td>IPC required</td><td>Shared memory</td></tr>
                                <tr><td>Failure</td><td>One crash doesn't affect others</td><td>Crash can bring down the entire process</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="mt-2 text-slate-600 text-sm">Example: A web browser has multiple tabs. Each tab may be a separate thread within the same browser process. One tab crashing might not affect others due to isolated threads.</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Process Synchronization</h3>
                        <p className="text-slate-700 mb-2">In a multiprogramming environment, multiple processes may need access to shared resources (e.g., files, memory). Process synchronization ensures that only one process accesses critical sections of code at a time to prevent race conditions.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Mutex (Mutual Exclusion):</b> A lock mechanism to enforce exclusive access.</li>
                          <li><b>Semaphore:</b> A signaling mechanism that uses counters to control access.</li>
                          <li><b>Monitors:</b> High-level synchronization primitives that manage shared variables.</li>
                        </ul>
                        <p className="mt-2 text-slate-600 text-sm">Synchronization is essential for data consistency, deadlock avoidance, and resource fairness.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Inter-Process Communication (IPC)</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Pipes:</b> Unidirectional communication between related processes.</li>
                          <li><b>Named Pipes (FIFOs):</b> Like pipes but can be used between unrelated processes.</li>
                          <li><b>Message Queues:</b> Messages are stored in a queue; sender and receiver do not need to run simultaneously.</li>
                          <li><b>Shared Memory:</b> Fastest IPC mechanism; processes read/write to a common memory segment.</li>
                          <li><b>Sockets:</b> Communication over a network between processes (possibly on different machines).</li>
                          <li><b>Signals:</b> Asynchronous notifications sent to a process to notify it of an event.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Zombie Process</h3>
                        <p className="text-slate-700">A zombie process is a process that has completed execution but still has an entry in the process table. This typically happens when the parent process fails to call <code className="bg-slate-100 px-1 rounded">wait()</code> to read the exit status of the child. Zombies don't consume CPU or memory but do hold PIDs. Accumulation of zombie processes can exhaust available PIDs.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg></span>Cascading Termination</h3>
                        <p className="text-slate-700">Cascading termination occurs when a parent process terminates, and the OS decides to terminate all its child processes as well. This ensures that no orphaned or runaway child processes consume resources.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Context Switching</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Saving CPU registers, program counter, etc., to the PCB of the current process.</li>
                          <li>Loading the PCB of the next process into CPU registers.</li>
                          <li><b>Overhead:</b> Time cost (milliseconds), resource usage (CPU cache pollution).</li>
                        </ul>
                        <p className="mt-2 text-slate-600 text-sm">Though costly, context switching is essential for multitasking and responsiveness.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Process Sections</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Text Section:</b> Contains the executable code.</li>
                          <li><b>Data Section:</b> Global and static variables.</li>
                          <li><b>Heap:</b> Dynamic memory (malloc in C, new in C++).</li>
                          <li><b>Stack:</b> Function calls, parameters, return addresses, local variables.</li>
                        </ul>
                        <p className="mt-2 text-slate-600 text-sm">These segments are managed separately for security and performance.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>Additional Concepts</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Multithreading Models:</b> User-level threads, kernel-level threads, hybrid models.</li>
                          <li><b>Process Scheduling:</b> FCFS, SJF, Round Robin, Priority Scheduling, Multilevel Queue.</li>
                        </ul>
                        <p className="mt-2 text-slate-600 text-sm">Each algorithm has trade-offs regarding fairness, throughput, response time, and complexity.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Conclusion</h3>
                        <p className="text-slate-700">Process and thread management lies at the heart of an operating system. Understanding processes, their life cycles, communication, and synchronization is critical for designing efficient, responsive, and robust systems. With the rise of multi-core processors and concurrent applications, threads and synchronization mechanisms are more relevant than ever. An OS not only ensures safe and efficient execution of tasks but also provides the foundation for modern multitasking environments.</p>
                      </div>
                    </div>
                  ) : topic === 'CPU Scheduling' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-400 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">CPU Scheduling in Operating Systems</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg bg-white/60 rounded-xl px-4 py-2 shadow-sm">CPU scheduling is one of the central components of a multitasking operating system. It enables the OS to determine which process in the ready queue should be executed next by the CPU. In a system with multiple processes competing for CPU time, efficient scheduling is essential for optimizing performance, responsiveness, and system resource utilization.</p>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>The Need for CPU Scheduling</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Maximizing CPU utilization</li>
                          <li>Reducing waiting and turnaround times</li>
                          <li>Providing fairness among processes</li>
                          <li>Maintaining system responsiveness (especially for interactive systems)</li>
                        </ul>
                        <p className="mt-2 text-slate-600">This selection process is carried out by the <b>CPU Scheduler</b>, also known as the short-term scheduler.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a4 4 0 00-8 0v1M12 12v.01" /></svg></span>Types of Schedulers</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Long-Term Scheduler (Job Scheduler):</b> Decides which jobs/processes are admitted to the system for processing. Controls the degree of multiprogramming.</li>
                          <li><b>Short-Term Scheduler (CPU Scheduler):</b> Decides which of the ready, in-memory processes is to be executed next.</li>
                          <li><b>Medium-Term Scheduler (Swapper):</b> Suspends/resumes processes to manage memory.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Scheduling Criteria</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>CPU Utilization:</b> Keep the CPU as busy as possible.</li>
                          <li><b>Throughput:</b> Number of processes completed per time unit.</li>
                          <li><b>Turnaround Time:</b> Total time taken from submission to completion of a process.</li>
                          <li><b>Waiting Time:</b> Time a process has been in the ready queue.</li>
                          <li><b>Response Time:</b> Time from request submission until first response.</li>
                          <li><b>Fairness:</b> Equal opportunity for all processes.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>CPU Scheduling Algorithms</h3>
                        <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                          <li><b>First-Come, First-Served (FCFS):</b> Non-preemptive. Processes are scheduled in the order they arrive. Simple but can lead to convoy effect (slow process delays all others).</li>
                          <li><b>Shortest Job Next (SJN) / Shortest Job First (SJF):</b> Non-preemptive. Picks the process with the shortest burst time next. Optimal in terms of average waiting time but may lead to starvation.</li>
                          <li><b>Shortest Remaining Time First (SRTF):</b> Preemptive version of SJF. At arrival of a new process, preemption occurs if it has a smaller remaining burst time.</li>
                          <li><b>Round Robin (RR):</b> Preemptive. Each process is assigned a time quantum. Fair for all users, especially in time-sharing systems. Performance depends on the size of the quantum.</li>
                          <li><b>Priority Scheduling:</b> Can be preemptive or non-preemptive. Each process has a priority. Lower value → higher priority. Can lead to starvation; mitigated by aging (increasing priority with time).</li>
                          <li><b>Multilevel Queue Scheduling:</b> Processes are divided into different queues based on type: foreground (interactive) vs. background (batch). Each queue has its own scheduling algorithm.</li>
                          <li><b>Multilevel Feedback Queue:</b> Processes can move between queues based on behavior (e.g., CPU-bound vs. I/O-bound). Adaptable, most general-purpose OS use this.</li>
                        </ol>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Context Switching</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Saving the state (context) of the current process.</li>
                          <li>Loading the saved state of the new process.</li>
                          <li><b>Overhead:</b> High frequency of context switches can degrade performance due to time spent in saving/loading states instead of executing code.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Preemptive vs Non-Preemptive Scheduling</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Preemptive:</b> CPU can be taken away from a running process (e.g., RR, SRTF, Priority Preemptive).</li>
                          <li><b>Non-Preemptive:</b> Once the CPU is allocated, it cannot be taken until the process finishes (e.g., FCFS, SJF Non-Preemptive).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Comparing Scheduling Algorithms</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Algorithm</th>
                                <th className="px-2 py-1">Preemptive</th>
                                <th className="px-2 py-1">Starvation</th>
                                <th className="px-2 py-1">Fairness</th>
                                <th className="px-2 py-1">Avg. Waiting Time</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>FCFS</td><td>No</td><td>No</td><td>No</td><td>High</td></tr>
                              <tr><td>SJF</td><td>No</td><td>Yes</td><td>No</td><td>Low (Optimal)</td></tr>
                              <tr><td>SRTF</td><td>Yes</td><td>Yes</td><td>No</td><td>Lowest Possible</td></tr>
                              <tr><td>RR</td><td>Yes</td><td>No</td><td>Yes</td><td>Moderate</td></tr>
                              <tr><td>Priority</td><td>Optional</td><td>Yes</td><td>No</td><td>Varies</td></tr>
                              <tr><td>MLQ/MLFQ</td><td>Mixed</td><td>Reduced</td><td>Yes</td><td>Depends</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Example Use Cases by Algorithm</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>FCFS:</b> Simple batch systems</li>
                          <li><b>SJF:</b> Batch jobs with known durations</li>
                          <li><b>RR:</b> Interactive, time-sharing systems</li>
                          <li><b>Priority:</b> Real-time systems</li>
                          <li><b>MLFQ:</b> General-purpose systems (e.g., Windows, Linux)</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>Advanced Concepts in CPU Scheduling</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Aging:</b> Prevents starvation by gradually increasing the priority of waiting processes.</li>
                          <li><b>Processor Affinity:</b> Keeping a process running on the same processor to improve cache performance.</li>
                          <li><b>I/O Bound vs. CPU Bound Processes:</b> Good schedulers balance these for better throughput.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Scheduling in Real Operating Systems</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Windows:</b> Uses preemptive, priority-based scheduling with round-robin within priority classes.</li>
                          <li><b>Linux:</b> Supports CFS (Completely Fair Scheduler) with priority and fairness models.</li>
                          <li><b>Unix:</b> Uses multilevel feedback queues.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Summary</h3>
                        <p className="text-slate-700">CPU Scheduling determines the order in which processes are executed on the CPU. Good scheduling balances responsiveness, throughput, fairness, and utilization. Various algorithms serve different goals and workloads. Understanding scheduling is crucial for system optimization and performance tuning in both real-time and general-purpose systems.</p>
                      </div>
                    </div>
                  ) : topic === 'Process Synchronization' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Process Synchronization</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg bg-white/60 rounded-xl px-4 py-2 shadow-sm">In a multiprogramming environment, processes are designed to execute concurrently, sharing hardware and software resources. As concurrency increases, so does the risk of data inconsistency when multiple processes access shared resources simultaneously. To manage this, process synchronization is employed — ensuring correct execution order, mutual exclusion, and avoidance of race conditions.</p>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>Why Synchronization Is Essential</h3>
                        <p className="text-slate-700 mb-2">Consider a shared variable <span className='font-mono bg-slate-100 px-1 rounded'>counter</span> accessed by multiple threads:</p>
                        <pre className="bg-slate-100 rounded-lg p-3 text-sm overflow-x-auto"><code>{`int counter = 0;

// Thread 1
counter++;

// Thread 2
counter++;`}</code></pre>
                        <p className="text-slate-700">Each <span className='font-mono bg-slate-100 px-1 rounded'>counter++</span> involves three steps: read → increment → write. If two threads interleave these steps, both might read the same value (say, 0), increment it (to 1), and write it back — resulting in a lost update. The final value should have been 2, but ends up as 1. This is a classic <b>race condition</b>.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Prevent race conditions</li>
                          <li>Ensure mutual exclusion to shared resources</li>
                          <li>Maintain consistency in concurrent operations</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a4 4 0 00-8 0v1M12 12v.01" /></svg></span>The Critical Section Problem</h3>
                        <p className="text-slate-700 mb-2">A <b>critical section</b> is a portion of code that accesses shared variables or resources. It must not be executed by more than one process at a time. Every process must request entry before executing its critical section.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Mutual Exclusion</b> – Only one process is allowed in the critical section at a time.</li>
                          <li><b>Progress</b> – If no process is in the critical section, any process requesting entry should not be indefinitely postponed.</li>
                          <li><b>Bounded Waiting</b> – After a process has requested entry, a limit should exist on how many other processes can enter before it gets access.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Software-Based Synchronization</h3>
                        <h4 className="font-semibold text-indigo-700 mb-1">1. Peterson's Algorithm (For 2 Processes)</h4>
                        <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`int flag[2] = {0, 0}; // flags indicating desire to enter
int turn = 0;

void process(int i) {
    int j = 1 - i;
    flag[i] = 1;
    turn = j;
    while (flag[j] == 1 && turn == j);  // busy wait

    // critical section

    flag[i] = 0;  // exit
}`}</code></pre>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">2. Bakery Algorithm (For N Processes)</h4>
                        <p className="text-slate-700">Inspired by a bakery ticketing system: each process gets a number, and the one with the smallest number enters first. Ensures fairness and mutual exclusion, but is mostly theoretical.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Hardware-Based Synchronization Primitives</h3>
                        <h4 className="font-semibold text-indigo-700 mb-1">1. Test-and-Set</h4>
                        <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`boolean TestAndSet(boolean *target) {
    boolean rv = *target;
    *target = true;
    return rv;
}`}</code></pre>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">2. Compare-and-Swap</h4>
                        <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`int CompareAndSwap(int *value, int expected, int new_val) {
    int old = *value;
    if (old == expected)
        *value = new_val;
    return old;
}`}</code></pre>
                        <p className="text-slate-700">Efficient for lock-free data structures and concurrency control.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>OS-Provided Synchronization Tools</h3>
                        <h4 className="font-semibold text-indigo-700 mb-1">1. Mutex (Mutual Exclusion Lock)</h4>
                        <p className="text-slate-700 mb-2">A binary lock that ensures only one thread accesses a critical section at a time.</p>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">2. Semaphores</h4>
                        <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`semaphore S = 1;

wait(S) {
    while (S <= 0);  // busy wait
    S--;
}

signal(S) {
    S++;
}`}</code></pre>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">3. Monitors</h4>
                        <div className="mb-2">
                          <span className="font-semibold text-indigo-700">Java:</span>
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`synchronized void increment() {
    count++;
}`}</code></pre>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-700">Python:</span>
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`import threading
lock = threading.Lock()

def critical_section():
    with lock:
        # modify shared resource
        pass`}</code></pre>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Classic Synchronization Problems</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Producer-Consumer Problem:</b> A producer writes data to a buffer; a consumer reads from it. Must prevent producer from adding to a full buffer and consumer from removing from an empty buffer. Solution: Use semaphores and mutex.</li>
                          <li><b>Dining Philosophers Problem:</b> Five philosophers sit around a table with five forks. To eat, each needs two forks. Demonstrates deadlock and resource allocation problems. Solutions: limit concurrent philosophers, asymmetric fork-picking, semaphores for forks.</li>
                          <li><b>Readers-Writers Problem:</b> Multiple readers can read a shared resource, but writers need exclusive access. Challenge: Prevent starvation. Solutions: reader-priority, writer-priority.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Deadlock, Starvation, and Fairness</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Deadlock:</b> Circular wait — all processes wait on each other.</li>
                          <li><b>Starvation:</b> A process waits forever while others proceed.</li>
                          <li><b>Fairness:</b> Ensures that every process gets a fair turn at execution.</li>
                        </ul>
                        <p className="mt-2 text-slate-600">Synchronization strategies should be designed to avoid deadlock, prevent starvation, and maintain fairness — especially in high-stakes systems like databases or real-time systems.</p>
                      </div>
                    </div>
                  ) : topic === 'Deadlocks' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Deadlock in Operating Systems – Complete Theory</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg bg-white/60 rounded-xl px-4 py-2 shadow-sm">Deadlock is one of the most critical challenges in concurrent and parallel processing within modern operating systems. It occurs when a group of processes are each waiting for a resource that is held by another process in the same group, forming a cycle of dependencies that halts their execution indefinitely.</p>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg></span>What is Deadlock?</h3>
                        <p className="text-slate-700 mb-2">A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource that is currently being held by another process. None of the processes can proceed, and they remain in this blocked state forever unless action is taken.</p>
                        <div className="bg-slate-100 rounded-lg p-3 text-sm mb-2">
                          <b>Example:</b><br/>
                          Process A holds Resource R1 and needs R2 to continue.<br/>
                          Process B holds Resource R2 and needs R1.<br/>
                          <span className="text-slate-500">Both are waiting on each other indefinitely → Deadlock.</span>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
  <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2">
    <span className="inline-block w-5 h-5">
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a4 4 0 00-8 0v1M12 12v.01"
        />
      </svg>
    </span>
    Necessary Conditions for Deadlock
  </h3>
  <ul className="list-disc pl-6 text-slate-700 space-y-1">
    <li>
      <b>Mutual Exclusion:</b> At least one resource must be held in a non-shareable mode.
    </li>
    <li>
      <b>Hold and Wait:</b> A process is holding at least one resource and is waiting to acquire additional resources held by other processes.
    </li>
    <li>
      <b>No Preemption:</b> A resource cannot be forcibly taken from a process; it must be released voluntarily.
    </li>
    <li>
      <b>Circular Wait:</b> A set of processes exists such that P1 is waiting for a resource held by P2, P2 is waiting for P3, ..., and Pn is waiting for P1.
    </li>
  </ul>
  <p className="mt-2 text-slate-600">
    If any one of these conditions is broken, a deadlock cannot occur.
  </p>
</div>

                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>System Model: Resource Allocation Graph (RAG)</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Processes → Represented as circles.</li>
                          <li>Resources → Represented as squares.</li>
                          <li>Request edge (P → R), Assignment edge (R → P).</li>
                          <li>A cycle in a RAG indicates a possibility of deadlock.</li>
                          <li>If each resource has only one instance, a cycle means deadlock. If resources have multiple instances, a cycle might mean deadlock.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Deadlock Handling Strategies</h3>
                        <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                          <li><b>Deadlock Prevention:</b> Prevent deadlock by ensuring that at least one of the four necessary conditions never holds. (Eliminate Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait)</li>
                          <li><b>Deadlock Avoidance:</b> The system carefully allocates resources so it never enters an unsafe state. <b>Banker's Algorithm</b> is a famous example.</li>
                          <li><b>Deadlock Detection and Recovery:</b> Let deadlocks occur, detect them, and then take recovery actions. (Terminate processes, preempt resources)</li>
                          <li><b>Deadlock Ignorance:</b> The "Ostrich Algorithm": Ignore the problem, assuming it will rarely occur. Used in most general-purpose OSes like Windows and Linux.</li>
                        </ol>
                        <div className="mt-2 text-xs text-slate-600">
                          <span className="inline-block bg-yellow-100 text-yellow-800 rounded px-2 py-1 mr-2">Prevention</span>Proactively avoids deadlocks, but can underutilize resources.<br/>
                          <span className="inline-block bg-blue-100 text-blue-800 rounded px-2 py-1 mr-2">Avoidance</span>Flexible, but needs prior knowledge of resource needs.<br/>
                          <span className="inline-block bg-green-100 text-green-800 rounded px-2 py-1 mr-2">Detection & Recovery</span>Maximizes utilization, but needs periodic checks.<br/>
                          <span className="inline-block bg-gray-100 text-gray-800 rounded px-2 py-1 mr-2">Ignorance</span>Simple, but not for safety-critical systems.
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Examples in Real-World Scenarios</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Two threads both trying to log and write to a database can deadlock.</li>
                          <li>Nested locks in multithreaded Java programs.</li>
                          <li>File system locks when copying and moving files simultaneously.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a4 4 0 00-8 0v1M12 12v.01" /></svg></span>Deadlock vs Starvation</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Deadlock:</b> No progress is possible for the involved processes.</li>
                          <li><b>Starvation:</b> A process waits indefinitely because higher-priority processes keep executing.</li>
                        </ul>
                        <p className="mt-2 text-slate-600">Deadlock implies starvation, but starvation does not always imply deadlock.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg></span>Advanced Topics</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Safe State and Unsafe State:</b> Safe state: There exists a sequence in which all processes can complete. Unsafe state: No such sequence exists → may lead to deadlock.</li>
                          <li><b>Wait-for Graph (WFG):</b> Used when each resource has only one instance. Nodes = processes, Edges = "P1 is waiting for P2". Cycle = Deadlock.</li>
                        </ul>
                        <div className="mt-2">
                          <h4 className="font-semibold text-indigo-700 mb-1">Deadlock Detection Algorithm (Single Instance)</h4>
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`1. Maintain a Wait-for Graph.
2. Periodically check for cycles.
3. If a cycle is detected → Deadlock exists.`}</code></pre>
                          <h4 className="font-semibold text-indigo-700 mb-1 mt-4">Banker's Algorithm: Simplified View</h4>
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`Check if resources can be allocated to each process in some safe order:
  1. Finish[] = false for all processes
  2. Find a process whose need ≤ available
  3. Assume it finishes; release resources
  4. Repeat until all Finish[] = true or stuck`}</code></pre>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></span>Summary</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Topic</th>
                                <th className="px-2 py-1">Key Points</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Deadlock Definition</td><td>Circular wait of resources</td></tr>
                              <tr><td>4 Conditions</td><td>Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait</td></tr>
                              <tr><td>Prevention</td><td>Break at least one condition</td></tr>
                              <tr><td>Avoidance</td><td>Use safe/unsafe state logic (e.g., Banker's Algorithm)</td></tr>
                              <tr><td>Detection & Recovery</td><td>Allow deadlock, detect and recover</td></tr>
                              <tr><td>Ignorance</td><td>Ignore (used in general-purpose OSes)</td></tr>
                              <tr><td>Tools for Detection</td><td>RAG, WFG</td></tr>
                              <tr><td>Starvation vs Deadlock</td><td>Starvation is indefinite wait, Deadlock is mutual block</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Conclusion</h3>
                        <p className="text-slate-700">Deadlock is an inherent problem in any multitasking OS that handles resource sharing. Understanding deadlock helps developers design safer concurrent programs and optimize OS resource management strategies. Knowledge of its detection, prevention, and avoidance is essential not just for OS design but also for robust system-level programming, making it a key topic in interviews and advanced computing.</p>
                      </div>
                    </div>
                  ) : topic === 'Memory Management' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Detailed Memory Management in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Introduction</h3>
                        <p className="text-slate-700 leading-relaxed">Memory management refers to how an operating system (OS) handles the computer's primary memory (RAM). It is responsible for allocating, tracking, and protecting memory used by various processes. Efficient memory management ensures:</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Process isolation: No process can access memory assigned to another without permission.</li>
                          <li>Multitasking: Multiple processes can coexist efficiently.</li>
                          <li>System performance: Optimal use of RAM prevents delays due to disk usage.</li>
                          <li>Security and stability: Malicious or buggy code cannot corrupt other processes.</li>
                        </ul>
                        <p className="mt-2 text-slate-600">In multiprogramming environments, where multiple programs run simultaneously, memory management becomes crucial for efficiency and protection.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Key Objectives of Memory Management</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Relocation:</b> Logical addresses must be mapped to physical addresses by the MMU for flexible memory usage and multitasking.</li>
                          <li><b>Protection:</b> Prevents one process from accessing or modifying another's memory (base/limit registers, access bits, MMU validation).</li>
                          <li><b>Sharing:</b> Allows safe, controlled sharing of memory regions between processes.</li>
                          <li><b>Logical Organization:</b> Segmentation divides memory into code, data, stack, heap for independent management and protection.</li>
                          <li><b>Physical Organization:</b> Efficient management of main memory and swap space, with abstractions like virtual memory.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Memory Allocation Techniques</h3>
                        <h4 className="font-semibold text-indigo-700 mb-1">1. Contiguous Memory Allocation</h4>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Fixed Partitioning:</b> Memory is divided into equal-size blocks. Can cause internal fragmentation.</li>
                          <li><b>Variable Partitioning:</b> Allocates memory as needed. Can cause external fragmentation.</li>
                        </ul>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">2. Paging <span className='ml-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded'>High Interview Relevance</span></h4>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Physical memory → Frames, Logical memory → Pages</li>
                          <li>Page Table maps pages to frames for each process</li>
                          <li><b>Advantages:</b> Eliminates external fragmentation, easy allocation, easy swapping</li>
                          <li><b>Disadvantages:</b> Page table overhead, slower translation (mitigated by TLB)</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">TLB is a cache for page table entries. A TLB hit is fast; a miss triggers a full page table lookup.</div>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">3. Segmentation</h4>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Memory divided by logical segments: code, data, stack, heap</li>
                          <li>Each segment: segment number + offset</li>
                          <li>Matches programmer's view, allows protection/sharing per segment</li>
                          <li>Still suffers from external fragmentation</li>
                        </ul>
                        <h4 className="font-semibold text-indigo-700 mb-1 mt-4">4. Paged Segmentation</h4>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Each segment is divided into pages</li>
                          <li>Combines logical structure of segmentation with efficient physical management of paging</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Virtual Memory</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Gives the illusion of a larger address space than physical RAM</li>
                          <li>Allows execution of programs partially loaded into memory</li>
                          <li><b>Demand Paging:</b> Pages loaded from disk only when needed</li>
                          <li><b>Page Fault:</b> Referenced page not in memory triggers OS to load it</li>
                          <li><b>Swapping:</b> Moves processes/pages between disk and RAM</li>
                          <li><b>Thrashing:</b> Excessive page faults; system spends more time swapping than executing</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">To avoid thrashing, OS uses working set models and limits on concurrent processes.</div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Page Replacement Algorithms</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>FIFO (First-In, First-Out):</b> Oldest page is removed. Simple but can evict frequently used pages (Belady's anomaly).</li>
                          <li><b>LRU (Least Recently Used):</b> Replaces page not used for longest time. Closely models real access patterns. Needs usage tracking.</li>
                          <li><b>Optimal:</b> Replaces page not needed for longest time in future. Theoretical best, not implementable.</li>
                          <li><b>Clock (Second Chance):</b> Circular queue, reference bit gives a second chance before replacement. Efficient LRU approximation.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Fragmentation (Internal vs External)</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Internal Fragmentation:</b> Wasted space inside allocated block. E.g., 8KB block for 6KB request → 2KB wasted.</li>
                          <li><b>External Fragmentation:</b> Scattered free blocks not contiguous. May not fit large allocations even if total free is enough.</li>
                          <li><b>Solutions:</b> Compaction (shift memory to combine free blocks), Paging (eliminates external fragmentation), Buddy System (allocates in power-of-two sizes).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Memory Protection & Isolation</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Base and Limit Registers:</b> Define valid address range for each process. Every access is checked to fall within bounds.</li>
                          <li><b>MMU (Memory Management Unit):</b> Translates virtual to physical addresses, enforces protection, uses page tables, TLB, segment info.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Swapping</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Swapping Out:</b> Write process memory to disk (swap space).</li>
                          <li><b>Swapping In:</b> Load back into RAM when needed.</li>
                          <li>Allows system to overcommit memory but adds overhead during swap operations.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Inverted Page Table</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>One global table indexed by frame number, not page number.</li>
                          <li><b>Pros:</b> Saves memory in systems with many processes.</li>
                          <li><b>Cons:</b> Slower lookups (mitigated with hashed/hybrid tables).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Memory Hierarchy & Caching</h3>
                        <div className="mb-2">
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`Registers < Cache < Main Memory (RAM) < Disk < Cloud Storage`}</code></pre>
                        </div>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Cache stores frequently accessed data close to CPU.</li>
                          <li>Prefetching anticipates memory access to reduce latency.</li>
                          <li>OS uses temporal/spatial locality to improve performance.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Interview-Focused Knowledge Summary</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Topic</th>
                                <th className="px-2 py-1">Why It Matters</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Paging vs Segmentation</td><td>OS design patterns and memory access</td></tr>
                              <tr><td>Virtual Memory & Page Faults</td><td>Real-world performance & reliability</td></tr>
                              <tr><td>LRU vs FIFO vs Optimal</td><td>Page replacement efficiency</td></tr>
                              <tr><td>Fragmentation & Compaction</td><td>Memory waste and remedies</td></tr>
                              <tr><td>TLB & MMU</td><td>Hardware-software interaction</td></tr>
                              <tr><td>Thrashing</td><td>System slowdown in overcommitted RAM</td></tr>
                              <tr><td>Swapping</td><td>How OS supports more processes than RAM</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Final Thoughts</h3>
                        <p className="text-slate-700">Memory management is not just a theory topic — it's deeply tied to performance, scalability, and security. Whether you're working on OS internals, high-performance systems, or writing backend code that handles large data, knowing how memory works under the hood is essential.</p>
                      </div>
                    </div>
                  ) : topic === 'Paging & Segmentation' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Paging and Segmentation in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">What Is Paging?</h3>
                        <p className="text-slate-700 leading-relaxed">Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory and avoids external fragmentation. It divides both logical and physical memory into fixed-size blocks:</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Logical memory → divided into pages</li>
                          <li>Physical memory (RAM) → divided into frames</li>
                          <li>Each page maps to a frame via a page table, maintained by the OS</li>
                          <li>Translation from virtual to physical addresses is handled by the MMU</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Logical Address = &lt;page number, offset&gt; | Physical Address = &lt;frame number, offset&gt;</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Paging Mechanism – Step-by-Step</h3>
                        <ol className="list-decimal pl-6 text-slate-700 space-y-1">
                          <li>A process generates a logical address.</li>
                          <li>The page number is extracted from the address.</li>
                          <li>The page table is queried to find the frame number.</li>
                          <li>The physical address is formed by combining the frame number with the offset.</li>
                          <li>The MMU accesses the actual memory location.</li>
                        </ol>
                        <div className="mt-2 text-xs text-slate-600">Example: Page size = 4 KB, Logical address = 0x1234, Page number = 0x1, Offset = 0x234, If page 1 maps to frame 5, Physical address = (5 × 4096) + 0x234 = 0x14B4</div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Multi-level Paging</h3>
                        <p className="text-slate-700">For large address spaces, single-level page tables are too large. Multi-level paging breaks the page table into hierarchical levels (e.g., 2-level or 3-level), improving space efficiency.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Advantages & Disadvantages of Paging</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Advantages:</b> Avoids external fragmentation, simplifies memory allocation, enables virtual memory</li>
                          <li><b>Disadvantages:</b> Internal fragmentation, increased memory access time (mitigated by TLB), overhead of managing page tables</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Internal fragmentation occurs when memory is allocated in fixed-sized blocks, and the actual data doesn't fill the block completely.</div>
                      </div>
                      <div className="rounded-xl bg-yellow-50/80 border-l-4 border-yellow-400 p-4 shadow-inner">
                        <h4 className="font-semibold text-yellow-700 mb-1 flex items-center gap-2">
                          <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                          Internal Fragmentation Explained
                        </h4>
                        <p className="text-slate-700 text-sm mb-1">Internal fragmentation occurs when memory is allocated in fixed-size blocks (pages/frames), but the actual data does not fill the entire block, leaving unused space inside the allocated region.</p>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
                          <li><b>In Paging:</b> Each process is allocated memory in fixed-size pages. If a process's memory requirement doesn't perfectly fit into these pages, the leftover space in the last page is wasted—this is internal fragmentation.</li>
                          <li><b>In Segmentation:</b> Internal fragmentation is <span className='font-semibold text-green-700'>rare</span> because segments are variable-sized and fit the data more closely. Segmentation mainly suffers from <span className='font-semibold text-yellow-700'>external fragmentation</span>.</li>
                        </ul>
                        <p className="text-slate-600 text-xs">Example: If the page size is 4 KB and a process needs 3.2 KB, the remaining 0.8 KB in that page is wasted as internal fragmentation.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">What Is Segmentation?</h3>
                        <p className="text-slate-700 leading-relaxed">Segmentation divides memory into logical segments like code, data, stack, and heap. Each segment has variable size, and the segmentation technique reflects the structure of a program more naturally than paging.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Memory is divided semantically</li>
                          <li>Logical address = &lt;segment number, offset&gt;</li>
                          <li>A segment table stores each segment's base address and limit (length)</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Example: Segment table with base/limit, Address &lt;1, 100&gt; → Base = 2000, Offset = 100, Physical address = 2100</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Advantages & Disadvantages of Segmentation</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Advantages:</b> Reflects program structure, fine-grained protection, facilitates sharing and dynamic memory management</li>
                          <li><b>Disadvantages:</b> External fragmentation, slower address calculation, complex allocation</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">External fragmentation occurs when there's enough total memory, but it's scattered in non-contiguous blocks, making it impossible to fulfill larger memory requests.</div>
                      </div>
                      <div className="rounded-xl bg-yellow-50/80 border-l-4 border-yellow-400 p-4 shadow-inner">
                        <h4 className="font-semibold text-yellow-700 mb-1 flex items-center gap-2">
                          <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                          External Fragmentation Explained
                        </h4>
                        <p className="text-slate-700 text-sm mb-1">External fragmentation occurs when free memory is split into small, non-contiguous blocks over time. Even if the total free memory is enough for a request, it cannot be allocated because it is not contiguous.</p>
                        <ul className="list-disc pl-6 text-slate-700 text-sm mb-1">
                          <li><b>In Segmentation:</b> Variable-size segments must fit into available memory blocks. As segments are allocated and freed, free space becomes scattered, leading to external fragmentation.</li>
                          <li><b>In Paging:</b> External fragmentation is <span className='font-semibold text-green-700'>eliminated</span> because any free frame can be used for any page, regardless of location. However, paging suffers from <span className='font-semibold text-blue-700'>internal fragmentation</span> (unused space within a page).</li>
                        </ul>
                        <p className="text-slate-600 text-xs">Example: You have free blocks of 100 KB, 200 KB, and 300 KB scattered in memory. A request for a 500 KB block cannot be fulfilled, even though you have 600 KB free in total.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Paging vs. Segmentation – Comparison Table</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Feature</th>
                                <th className="px-2 py-1">Paging</th>
                                <th className="px-2 py-1">Segmentation</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Division</td><td>Fixed-size pages</td><td>Variable-size segments</td></tr>
                              <tr><td>Fragmentation</td><td>Internal</td><td>External</td></tr>
                              <tr><td>Logical View</td><td>No logical meaning</td><td>Based on logical program structure</td></tr>
                              <tr><td>Address Format</td><td>Page number + offset</td><td>Segment number + offset</td></tr>
                              <tr><td>Allocation Overhead</td><td>Page table</td><td>Segment table</td></tr>
                              <tr><td>Use Case</td><td>Virtual memory</td><td>Protection, modular code structure</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Interview-Level Insights</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Internal fragmentation occurs in paging due to fixed page sizes.</li>
                          <li>External fragmentation occurs in segmentation due to varying segment sizes.</li>
                          <li>Use of TLB reduces page table lookup latency.</li>
                          <li>Demand paging handles page faults by loading missing pages from disk.</li>
                          <li>Understanding memory fragmentation helps in diagnosing performance bottlenecks, memory leaks, and thrashing in virtual memory systems.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                          <span className="inline-block w-5 h-5">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          Conclusion
                        </h3>
                        <p className="text-slate-700">Paging and segmentation are key techniques in memory management. Paging is excellent for efficient use of physical memory and simplifies allocation, but causes internal fragmentation. Segmentation aligns with program logic and enhances protection but can lead to external fragmentation. Understanding both, along with the types of fragmentation they cause, is essential for mastering OS design and succeeding in software interviews.</p>
                      </div>
                    </div>
                  ) : topic === 'Virtual Memory' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Virtual Memory: Theory and Concepts</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Introduction</h3>
                        <p className="text-slate-700 mb-2">Virtual Memory is a fundamental concept in modern operating systems that allows a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage. It creates an illusion of virtually unlimited memory, enabling process isolation, efficient memory usage, and easier multitasking. Virtual memory decouples logical addresses used by programs from physical addresses in RAM.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Key Objectives of Virtual Memory</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Program Isolation: Each process runs in its own address space.</li>
                          <li>Efficient Use of RAM: Not all parts of a program need to be in memory.</li>
                          <li>Simplified Programming: Developers need not worry about memory constraints.</li>
                          <li>Multitasking: Enables more processes to run concurrently than the physical memory can hold.</li>
                          <li>Security: Prevents processes from accessing each other's memory space.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">How Virtual Memory Works</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Programs use virtual addresses, which are translated to physical addresses via the MMU and page tables.</li>
                          <li>Hardware (MMU) and OS (Memory Manager) cooperate to manage address translation and memory protection.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Pages and Frames</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Page:</b> Fixed-size block of virtual memory (e.g., 4 KB).</li>
                          <li><b>Frame:</b> Fixed-size block of physical memory.</li>
                          <li>Pages are mapped to frames as needed.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Address Translation and Page Tables</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Program accesses memory using a virtual address.</li>
                          <li>MMU uses the page table to map to a physical address.</li>
                          <li>If the page is not in RAM, a page fault occurs.</li>
                        </ul>
                        <div className="mb-2">
                          <span className="font-semibold text-indigo-700">Types of Page Tables:</span>
                          <ul className="list-disc pl-6 text-slate-700 text-sm">
                            <li>Single-Level: Simple but large for big address spaces.</li>
                            <li>Multi-Level: Hierarchical, reduces memory usage.</li>
                            <li>Inverted: Indexed by frame number, saves space for many processes.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Page Faults</h3>
                        <p className="text-slate-700 mb-2">A page fault occurs when a program tries to access a page not currently in RAM. The OS suspends the process, loads the missing page from disk, updates the page table, and resumes the process. Frequent page faults lead to thrashing.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Thrashing</h3>
                        <p className="text-slate-700 mb-2">Thrashing is when the system spends more time swapping pages in and out of memory than executing processes. It is caused by too many processes or poor page replacement strategy. Solutions include reducing multiprogramming and using better page replacement algorithms.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Page Replacement Algorithms</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>FIFO (First-In-First-Out):</b> Replace the oldest page. Simple but can cause Belady's anomaly.</li>
                          <li><b>LRU (Least Recently Used):</b> Replace the page not used for the longest time. Good approximation of optimal.</li>
                          <li><b>Optimal:</b> Replace the page that will not be used for the longest time in the future. Used for benchmarking.</li>
                          <li><b>Clock (Second Chance):</b> Efficient LRU implementation using a circular buffer and reference bits.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Demand Paging vs Pre-Paging</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Demand Paging:</b> Load pages only when needed (on-demand).</li>
                          <li><b>Pre-Paging:</b> Load additional pages proactively, anticipating future accesses.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Benefits of Virtual Memory</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Memory Protection: One process can't access another's memory space.</li>
                          <li>Efficient Multiprogramming: More processes can run in parallel.</li>
                          <li>Larger-than-RAM Programs: Programs can be larger than physical memory.</li>
                          <li>Simplified Application Development: Programmers don't need to manually manage memory allocation.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Virtual Memory in Security</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Prevents buffer overflows from affecting other processes.</li>
                          <li>Isolates process memory regions (code, stack, heap).</li>
                          <li>Enforces memory access permissions (read/write/execute).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Virtual Memory in Modern OS</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Windows: Uses page files.</li>
                          <li>Linux: Uses swap space (partition or file).</li>
                          <li>macOS: Manages swap internally.</li>
                          <li>OSes monitor page fault rates, working sets, and memory usage to adjust performance.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Common Interview Concepts</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Working Set Model:</b> Set of pages a process is actively using.</li>
                          <li><b>Page Fault Rate:</b> Used to adjust memory allocation to processes.</li>
                          <li><b>Local vs Global Replacement:</b> Local replaces pages of the faulting process only; global can replace any page.</li>
                        </ul>
                        <div className="mb-2">
                          <span className="font-semibold text-indigo-700">Example: Virtual to Physical Address Mapping</span>
                          <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`Page size = 4 KB → 2¹² bytes
Virtual address = 32 bits
First 20 bits = Page number → 1 million possible pages
Last 12 bits = Offset within page
MMU translates the page number using the page table, adds offset to frame address → Final physical address.`}</code></pre>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Conclusion</h3>
                        <p className="text-slate-700">Virtual memory is one of the most important abstractions in modern operating systems. It balances flexibility, protection, and efficiency, enabling complex multitasking environments on limited physical memory. A solid grasp of virtual memory—especially concepts like paging, page tables, page replacement, and address translation—is essential for both system-level programming and software interviews. It is deeply tied to hardware (via MMU) and software (OS memory manager), forming a core pillar of modern computing systems.</p>
                      </div>
                    </div>
                  ) : topic === 'File System' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2m2 0V5a2 2 0 012-2h0a2 2 0 012 2v0m2 0h-6" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">File System: A Comprehensive Theory</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">1. Introduction to File Systems</h3>
                        <p className="text-slate-700">A file system is an essential component of an operating system (OS) responsible for managing data storage and retrieval. It provides the mechanisms for storing, naming, accessing, securing, and organizing files on a storage medium (like a hard disk, SSD, or removable device).<br/><br/>A file system acts as the interface between the user and the disk, abstracting the complexity of disk operations and presenting a logical, hierarchical view of storage through files and directories.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">2. What is a File?</h3>
                        <p className="text-slate-700">A file is a named collection of related information stored on secondary storage. It can store various types of data: text, binary, multimedia, or executable code.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Name</li>
                          <li>Type (e.g., .txt, .exe)</li>
                          <li>Size</li>
                          <li>Location on disk</li>
                          <li>Protection (access rights)</li>
                          <li>Time and date of creation/modification</li>
                          <li>Owner and permissions</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">3. File System Responsibilities</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>File creation and deletion</li>
                          <li>Directory creation and deletion</li>
                          <li>Support for hierarchical directory structure</li>
                          <li>File access control and security</li>
                          <li>Mapping files to physical storage</li>
                          <li>Efficient storage allocation</li>
                          <li>Managing free space</li>
                          <li>Ensuring data integrity and crash recovery</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">4. Directory Structure</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Single-level: All files in one directory (simple but impractical).</li>
                          <li>Two-level: Separate directories for each user.</li>
                          <li>Hierarchical (tree): Allows nested directories; the most commonly used.</li>
                          <li>Acyclic graph: Allows shared files or directories through links.</li>
                          <li>General graph: Adds cycles; requires garbage collection.</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Path types: <b>Absolute path</b> (from root /home/user/file.txt), <b>Relative path</b> (relative to current working directory)</div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">5. File Access Methods</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Sequential access:</b> Read/write data in order. Most common (e.g., media players).</li>
                          <li><b>Direct access (random access):</b> Access data at any position (e.g., database systems).</li>
                          <li><b>Indexed access:</b> Use an index to locate blocks of data (used in DBMS).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">6. File Allocation Methods</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li><b>Contiguous Allocation:</b> Stores file blocks in a sequence. <span className="text-slate-500">(Pros: Simple, fast access. Cons: External fragmentation; difficult to resize.)</span></li>
                          <li><b>Linked Allocation:</b> Each file is a linked list of disk blocks. <span className="text-slate-500">(Pros: No external fragmentation; files can grow easily. Cons: Slow random access; reliability issues.)</span></li>
                          <li><b>Indexed Allocation:</b> Uses an index block to store pointers to data blocks. <span className="text-slate-500">(Pros: Fast random access; supports dynamic resizing. Cons: Overhead of index block.)</span></li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">7. Free Space Management</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Bitmaps: Each bit represents a block (0 = free, 1 = used).</li>
                          <li>Linked list: All free blocks are linked.</li>
                          <li>Grouping: Stores addresses of free blocks in groups.</li>
                          <li>Counting: Keeps track of consecutive free blocks.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">8. Mounting and Unmounting File Systems</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Mounting makes a file system available to the OS at a specified location in the directory tree. The OS checks the file system's structure and integrity before mounting.</li>
                          <li>Unmounting ensures all data is written and no active processes are using the mounted system.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">9. File Protection and Security</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Access Control Lists (ACL): Specifies users and allowed operations (read/write/execute).</li>
                          <li>User classes: Owner, group, others.</li>
                          <li>Permissions (e.g., Unix: rwxr-xr--)</li>
                          <li>Modern systems: encryption, auditing, backup policies.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">10. Journaling and Crash Recovery</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Operations are first written to a log (journal).</li>
                          <li>Once the log is safely stored, the operations are applied.</li>
                          <li>On crash recovery, the log is used to replay or rollback incomplete operations.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">11. Types of File Systems</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">File System</th>
                                <th className="px-2 py-1">OS</th>
                                <th className="px-2 py-1">Key Features</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>FAT32</td><td>Windows</td><td>Simple, wide compatibility, no journaling</td></tr>
                              <tr><td>NTFS</td><td>Windows</td><td>Journaling, ACLs, compression, encryption</td></tr>
                              <tr><td>ext3/ext4</td><td>Linux</td><td>Journaling, large file support</td></tr>
                              <tr><td>HFS+</td><td>macOS</td><td>Journaling, metadata-rich</td></tr>
                              <tr><td>APFS</td><td>macOS</td><td>Snapshots, encryption, space sharing</td></tr>
                              <tr><td>XFS</td><td>Linux</td><td>High-performance journaling FS</td></tr>
                              <tr><td>Btrfs</td><td>Linux</td><td>Advanced snapshots, checksums</td></tr>
                              <tr><td>ZFS</td><td>Solaris/Linux</td><td>Scalable, error-correcting, pooling</td></tr>
                              <tr><td>ISO 9660</td><td>CD/DVD</td><td>Read-only FS for optical discs</td></tr>
                              <tr><td>exFAT</td><td>Cross-platform</td><td>For flash drives, large files support</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">12. Virtual File System (VFS)</h3>
                        <p className="text-slate-700">VFS is an abstraction layer on top of actual file systems. It provides a common interface for all file systems, making the OS independent of specific FS implementations.<br/>Example: Linux VFS allows mounting ext4, FAT, and NTFS under the same system tree.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">13. File System Performance</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Block size: Larger blocks = less overhead, but more internal fragmentation.</li>
                          <li>Caching: Frequently accessed data is kept in memory.</li>
                          <li>Prefetching: Read ahead based on access patterns.</li>
                          <li>Defragmentation: Reorganizes files to be contiguous.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">14. File System Implementation</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Boot control block: Info about bootable disk and loader.</li>
                          <li>Volume control block: Overall metadata of the volume.</li>
                          <li>Directory structure: Organizes file names and pointers.</li>
                          <li>File control blocks (FCBs): Stores file attributes and block pointers.</li>
                          <li>Open file table: Keeps track of currently open files.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">15. File System Interview Essentials</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Real-world examples (FAT vs NTFS vs ext4)</li>
                          <li>Allocation techniques (how and why)</li>
                          <li>Tradeoffs: performance vs reliability</li>
                          <li>File system corruption and journaling</li>
                          <li>Cross-platform file compatibility issues</li>
                          <li>VFS and its benefits</li>
                          <li>Inode structure in Unix-like systems</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Final Notes</h3>
                        <p className="text-slate-700">The file system is at the heart of any computing environment, as everything is a file — from user documents to device interfaces and process info. Efficient, secure, and robust file system design ensures that data storage is reliable, fast, and scalable — a must in modern computing, cloud infrastructure, and enterprise-grade systems.<br/><br/>For advanced study, explore: Log-structured file systems, Distributed file systems (like HDFS, Ceph), Cloud-based storage (S3, Blob), File system benchmarks and performance tuning.</p>
                      </div>
                    </div>
                  ) : topic === 'Disk Scheduling' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2M12 7a4 4 0 110-8 4 4 0 010 8z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Disk Scheduling in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Introduction</h3>
                        <p className="text-slate-700">Disk scheduling is a method used by the operating system (OS) to decide the order in which I/O requests are serviced on the disk. Since hard disk drives (HDDs) have mechanical components (spinning platters and moving heads), optimizing access time is crucial for overall system performance.<br/><br/>While SSDs reduce the relevance of traditional disk scheduling due to their lack of moving parts, many foundational OS concepts and academic scenarios still assume HDDs, making this an important topic.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Why Disk Scheduling Is Needed</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>I/O requests can arrive randomly from multiple processes.</li>
                          <li>The disk head has to move to the required cylinder before servicing the request.</li>
                          <li>Seek time (movement of the head) is expensive, so reducing the total seek time improves performance.</li>
                          <li>Disk scheduling helps determine the most efficient way to handle all pending requests.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Key Performance Metrics</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Seek Time</b> – Time taken to move the disk head to the desired track.</li>
                          <li><b>Rotational Latency</b> – Time taken for the desired sector to rotate under the read-write head.</li>
                          <li><b>Transfer Time</b> – Time to read/write the data once the head is positioned correctly.</li>
                          <li><b>Throughput</b> – Number of requests served per unit time.</li>
                          <li><b>Fairness</b> – Every request should eventually be serviced.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Common Disk Scheduling Algorithms</h3>
                        <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                          <li><b>First-Come First-Serve (FCFS):</b> Requests are processed in the order they arrive. Easy to implement, but may cause high seek time.<br/><span className='text-xs text-slate-500'>Example: Request Queue: 98, 183, 37, 122, 14, 124. Initial Head Position: 53. Total Head Movement = |53-98| + |98-183| + ...</span></li>
                          <li><b>Shortest Seek Time First (SSTF):</b> Serves the closest request to the current head position. Reduces seek time, but can lead to starvation of distant requests.<br/><span className='text-xs text-slate-500'>Example: If the head is at 53 and the requests are 14, 37, 65 — SSTF picks 37.</span></li>
                          <li><b>SCAN (Elevator Algorithm):</b> The head moves in one direction servicing requests until it reaches the end, then reverses. Better overall performance and fairness.</li>
                          <li><b>LOOK:</b> Like SCAN, but the head only goes as far as the final request in the direction, not to the disk's end. More efficient than SCAN in real-world systems.</li>
                          <li><b>C-SCAN (Circular SCAN):</b> Head moves in one direction only (say, left to right). Once it reaches the end, it jumps back to the start without servicing. More uniform wait time, ideal for high-throughput environments.</li>
                          <li><b>C-LOOK:</b> Like C-SCAN, but only jumps to the last request in the direction before restarting.</li>
                        </ol>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Algorithm Comparison Table</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Algorithm</th>
                                <th className="px-2 py-1">Starvation</th>
                                <th className="px-2 py-1">Avg. Seek Time</th>
                                <th className="px-2 py-1">Fairness</th>
                                <th className="px-2 py-1">Complexity</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>FCFS</td><td>❌</td><td>High</td><td>✅</td><td>O(1)</td></tr>
                              <tr><td>SSTF</td><td>✅</td><td>Low</td><td>❌</td><td>O(n)</td></tr>
                              <tr><td>SCAN</td><td>❌</td><td>Moderate</td><td>✅</td><td>O(n log n)</td></tr>
                              <tr><td>LOOK</td><td>❌</td><td>Moderate</td><td>✅</td><td>O(n log n)</td></tr>
                              <tr><td>C-SCAN</td><td>❌</td><td>Consistent</td><td>✅✅</td><td>O(n log n)</td></tr>
                              <tr><td>C-LOOK</td><td>❌</td><td>Consistent</td><td>✅✅</td><td>O(n log n)</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Real-World Relevance</h3>
                        <p className="text-slate-700">While SSDs do not need traditional disk scheduling (they have near-uniform access time), concepts like fairness, starvation, and queue optimization still apply — especially in storage server software, OS development, and embedded systems.<br/><br/>Some file systems and I/O schedulers like the Completely Fair Queuing (CFQ) and Deadline I/O scheduler in Linux still use variations of these algorithms for high-throughput disk handling.</p>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                          <span className="inline-block w-5 h-5">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          Summary
                        </h3>
                        <p className="text-slate-700">Disk scheduling is essential to reduce seek time and improve throughput. Different strategies like FCFS, SSTF, SCAN, LOOK, C-SCAN, and C-LOOK offer trade-offs between performance and fairness. Disk scheduling is a classic example of scheduling in hardware-aware OS design, with real-world implications in storage systems and kernel development.</p>
                      </div>
                    </div>
                  ) : topic === 'I/O Management' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">I/O Management in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Introduction</h3>
                        <p className="text-slate-700">Input/Output (I/O) management is a critical component of an operating system that facilitates communication between the computer system and the external environment. Devices like keyboards, mice, printers, disks, and network cards are all I/O devices, and the OS must manage them efficiently to ensure smooth and synchronized operation of the entire system.<br/><br/>The I/O system provides the interface between the hardware and the user-level software, shielding application developers from the complexities of the hardware. Without effective I/O management, processes would struggle to interact with peripherals or receive data from storage devices, resulting in poor performance and unresponsive systems.</p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Goals of I/O Management</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Abstraction: Hide the complexity of hardware from the user/programmer.</li>
                          <li>Efficiency: Minimize CPU involvement, improve throughput, reduce latency.</li>
                          <li>Resource Management: Schedule access to devices fairly and efficiently.</li>
                          <li>Error Handling: Detect and respond to I/O errors gracefully.</li>
                          <li>Synchronization: Handle concurrent access without data loss or corruption.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Components of the I/O System</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>I/O Devices:</b> Input (keyboard, mouse), Output (monitor, printer), Storage (disks, SSDs), Communication (network cards).</li>
                          <li><b>Device Controllers:</b> Manage hardware interface, communicate with CPU via I/O ports/registers.</li>
                          <li><b>Device Drivers:</b> OS modules that translate high-level OS commands to low-level device instructions.</li>
                          <li><b>Interrupt Handlers:</b> Enable asynchronous I/O; CPU handles I/O interrupts as they occur.</li>
                          <li><b>Buffers & Caches:</b> Buffers hold data during transfer; caches store frequently accessed I/O data.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">I/O Techniques</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Programmed I/O (Polling):</b> CPU actively waits and checks if the device is ready. Simple but inefficient.</li>
                          <li><b>Interrupt-Driven I/O:</b> Device interrupts CPU when ready for data transfer. More efficient than polling.</li>
                          <li><b>Direct Memory Access (DMA):</b> DMA controller handles transfer between memory and device directly. CPU is free during transfer; faster than CPU-driven transfers.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">I/O Scheduling</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Minimize seek time</li>
                          <li>Maximize throughput</li>
                          <li>Ensure fairness</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Common algorithms: FCFS, SSTF, SCAN, LOOK, C-LOOK, Priority Scheduling (see Disk Scheduling section for details).</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">I/O Buffering</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Single Buffering:</b> One buffer between device and application.</li>
                          <li><b>Double Buffering:</b> Two buffers allow one to be filled while the other is emptied.</li>
                          <li><b>Circular Buffering:</b> Multiple buffers managed as a circular queue; good for streaming and real-time data.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Spooling vs Buffering</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Spooling:</b> Used for devices that cannot handle interleaved requests (like printers). I/O requests are queued in the disk and executed sequentially. Acts like a print queue.</li>
                          <li><b>Buffering:</b> Temporary storage during I/O transfers to smooth variations in processing speed.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Block vs Character Devices</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Character Devices:</b> Send/receive data one byte at a time (e.g., keyboard). Typically use interrupt-driven I/O.</li>
                          <li><b>Block Devices:</b> Transfer large blocks of data (e.g., disks). Use buffering and caching.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">I/O Protection & Security</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Only authorized processes can access certain I/O devices.</li>
                          <li>Operations like reading/writing to devices do not compromise system integrity.</li>
                          <li>Protection is achieved via Access Control Lists, Privileged Instructions, System Calls.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Virtualization of I/O</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Provide abstract, hardware-independent interfaces.</li>
                          <li>Support device sharing (e.g., virtual printers, virtual network cards).</li>
                          <li>Isolate I/O for virtual machines (important in cloud systems and hypervisors).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Interview-Relevant Points to Emphasize</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Explain DMA and why it's preferred.</li>
                          <li>Differences between polling vs interrupt-driven I/O.</li>
                          <li>Buffering and how it improves throughput.</li>
                          <li>What is spooling and its real-world use case (e.g., printing).</li>
                          <li>Device driver and its role in the kernel.</li>
                          <li>I/O Scheduling and how it improves performance.</li>
                          <li>Memory-mapped I/O vs I/O-mapped I/O (for embedded interviews).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Summary</h3>
                        <p className="text-slate-700">I/O Management bridges the gap between the CPU and the external world. It ensures smooth, efficient, and safe communication with I/O devices. By abstracting hardware complexities, enabling concurrent access, and optimizing resource usage, the OS plays a critical role in managing I/O effectively.<br/><br/>While not always central in software interviews, a solid understanding of I/O Management is a must for system-level roles, OS design, embedded systems, and performance optimization.</p>
                      </div>
                    </div>
                  ) : topic === 'Security & Protection' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 8v-2a4 4 0 014-4h8a4 4 0 014 4v2" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Security and Protection in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">1. Security vs Protection</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Security:</b> Defending the system from unauthorized access, malware, phishing, data breaches, and cyber attacks. <span className="text-xs text-slate-500">(e.g., password authentication, firewalls, virus scanners)</span></li>
                          <li><b>Protection:</b> Regulating access to system resources by internal programs or users. <span className="text-xs text-slate-500">(e.g., process memory isolation, file access control)</span></li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">Both are essential to confidentiality, integrity, and availability—the CIA Triad.</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">2. Goals of Security and Protection</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Authentication – Verifying user identity</li>
                          <li>Authorization – Granting appropriate access</li>
                          <li>Access Control – Defining resource access</li>
                          <li>Data Confidentiality – Preventing unauthorized access</li>
                          <li>Data Integrity – Preventing tampering</li>
                          <li>Availability – Ensuring system services are accessible</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">3. Access Control Mechanisms</h3>
                        <div className="mb-2">
                          <span className="font-semibold text-indigo-700">a. Access Control Matrix (ACM)</span>
                          <div className="overflow-x-auto mt-1 mb-2">
                            <table className="min-w-max text-xs text-left border-separate border-spacing-y-1">
                              <thead>
                                <tr className="text-indigo-700">
                                  <th className="px-2 py-1"> </th>
                                  <th className="px-2 py-1">File1</th>
                                  <th className="px-2 py-1">File2</th>
                                  <th className="px-2 py-1">Printer</th>
                                </tr>
                              </thead>
                              <tbody className="text-slate-700">
                                <tr><td>User A</td><td>R/W</td><td>R</td><td>-</td></tr>
                                <tr><td>User B</td><td>-</td><td>R/W</td><td>X</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <span className="text-xs text-slate-500">R = Read, W = Write, X = Execute</span>
                        </div>
                        <div className="mb-2">
                          <span className="font-semibold text-indigo-700">b. Access Control Lists (ACLs)</span>
                          <div className="bg-slate-100 rounded-lg p-2 text-xs">
                            <div>File1:</div>
                            <div>- User A: Read, Write</div>
                            <div>- User B: No access</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">4. Protection Domains</h3>
                        <p className="text-slate-700 mb-2">A protection domain is a set of resources and access rights. Each process operates in a domain, and the OS controls the switch from one domain to another, based on security policies.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1">
                          <li>Domains can be user-based, process-based, or role-based.</li>
                          <li>Helps prevent unauthorized resource access.</li>
                          <li>Example: A user-level process can't directly access I/O hardware; only kernel-mode can.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">5. Security Policies and Models</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Bell-LaPadula Model (BLP):</b> Focuses on confidentiality (No Read Up, No Write Down)</li>
                          <li><b>Biba Model:</b> Focuses on integrity (No Write Up, No Read Down)</li>
                          <li><b>Clark-Wilson Model:</b> Focuses on integrity and separation of duties</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">6. Mechanisms for OS Security</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Authentication:</b> Passwords, multi-factor, biometrics</li>
                          <li><b>Encryption:</b> At-rest (disk), in-transit (SSL/TLS)</li>
                          <li><b>Firewalls:</b> Monitor/control network traffic</li>
                          <li><b>Antivirus/Anti-malware:</b> Scans for malicious content</li>
                          <li><b>Sandboxing:</b> Restricts process environment (browsers, mobile apps)</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">7. Security Vulnerabilities in OS</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Buffer Overflow</li>
                          <li>Privilege Escalation</li>
                          <li>Race Conditions</li>
                          <li>Trojan Horses</li>
                          <li>Rootkits</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">8. Protection Techniques</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>User and Kernel Mode:</b> User mode is restricted; kernel mode has full access. System calls switch between them.</li>
                          <li><b>Hardware Support:</b> Memory protection (base/limit registers, paging with access bits), TPM for secure boot.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">9. Modern Trends in OS Security</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>SELinux/AppArmor: Mandatory access control in Linux</li>
                          <li>Container Security: Docker, Kubernetes isolation</li>
                          <li>Secure Boot: Ensures trusted software at boot</li>
                          <li>Zero Trust Model: Continuous authentication</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">10. Common Attacks and Mitigations</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Attack Type</th>
                                <th className="px-2 py-1">Mitigation</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Phishing</td><td>User education, email filters</td></tr>
                              <tr><td>Buffer Overflow</td><td>ASLR, Stack canaries, DEP</td></tr>
                              <tr><td>Malware</td><td>Antivirus, code signing</td></tr>
                              <tr><td>Unauthorized Access</td><td>Strong authentication, firewalls</td></tr>
                              <tr><td>Eavesdropping</td><td>Encryption</td></tr>
                              <tr><td>Ransomware</td><td>Backups, user permissions</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Summary</h3>
                        <p className="text-slate-700">Security and protection are not optional—they are foundational responsibilities of any modern operating system. By combining authentication, access control, encryption, protection domains, and hardware support, operating systems build a multi-layered defense model. In today's cloud-native and containerized environments, OS-level security is more relevant than ever.<br/><br/>Understanding these concepts is crucial not just for building secure software, but also for clearing OS-related questions in software interviews, competitive exams, and real-world system design.</p>
                      </div>
                    </div>
                  ) : topic === 'System Calls' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M9 7h.01M15 7h.01M12 7h.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">System Calls in Operating Systems</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Introduction</h3>
                        <p className="text-slate-700">A system call is a programmatic way in which a user-space program requests a service from the operating system's kernel. These are the fundamental interface between an application and the OS. Since applications cannot directly access hardware or critical system resources, system calls act as controlled entry points into the kernel mode.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Allow user-level processes to request privileged operations.</li>
                          <li>Provide abstraction over hardware.</li>
                          <li>Enable portability and safe resource sharing.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Why Not Direct Access to Kernel?</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Prevents accidental corruption of system resources</li>
                          <li>Enforces protection and security</li>
                          <li>Ensures controlled access via verified paths</li>
                        </ul>
                        <div className="mt-2 text-xs text-slate-600">System calls are the only legitimate gateways for user processes to create/terminate processes, read/write files, allocate memory, communicate, etc.</div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Working of a System Call</h3>
                        <ol className="list-decimal pl-6 text-slate-700 space-y-1 mb-2">
                          <li>User app calls a wrapper function (e.g., read() in C).</li>
                          <li>Wrapper puts parameters in registers/stack.</li>
                          <li>Invokes a software interrupt (e.g., int 0x80 or syscall).</li>
                          <li>Control transfers to kernel mode via trap.</li>
                          <li>OS uses syscall number to identify service.</li>
                          <li>OS executes kernel routine and returns result.</li>
                        </ol>
                        <div className="mt-2 text-xs text-slate-600">Note: The application never directly jumps to kernel memory. Trap handlers and interrupt vectors ensure safe transitions.</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Categories of System Calls</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Process Control:</b> fork(), exec(), exit(), wait()</li>
                          <li><b>File Management:</b> open(), read(), write(), close(), chmod()</li>
                          <li><b>Device Management:</b> ioctl(), read(), write()</li>
                          <li><b>Information Maintenance:</b> getpid(), alarm(), sleep()</li>
                          <li><b>Communication:</b> pipe(), shmget(), msgsnd(), recv(), send()</li>
                          <li><b>Protection:</b> setuid(), getuid()</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Examples of System Calls in UNIX/Linux</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Function</th>
                                <th className="px-2 py-1">Description</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>fork()</td><td>Creates a new child process</td></tr>
                              <tr><td>exec()</td><td>Replaces process image</td></tr>
                              <tr><td>wait()</td><td>Waits for child to finish</td></tr>
                              <tr><td>exit()</td><td>Terminates a process</td></tr>
                              <tr><td>open()</td><td>Opens a file</td></tr>
                              <tr><td>read()</td><td>Reads data from a file</td></tr>
                              <tr><td>write()</td><td>Writes data to a file</td></tr>
                              <tr><td>close()</td><td>Closes an open file</td></tr>
                              <tr><td>kill()</td><td>Sends a signal to a process</td></tr>
                              <tr><td>getpid()</td><td>Gets current process ID</td></tr>
                              <tr><td>sleep()</td><td>Suspends execution for some time</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">System Call vs Library Call</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Aspect</th>
                                <th className="px-2 py-1">System Call</th>
                                <th className="px-2 py-1">Library Call</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Access Level</td><td>Enters kernel mode</td><td>Stays in user space</td></tr>
                              <tr><td>Performance</td><td>Slower (mode switch)</td><td>Faster</td></tr>
                              <tr><td>Example</td><td>read() → syscall</td><td>printf() → library</td></tr>
                              <tr><td>Risk of Failure</td><td>Higher (kernel state)</td><td>Lower</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Performance and Optimization</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Frequent system calls (like small read/write) may slow down execution due to context switching.</li>
                          <li>Optimized using buffering, memory-mapped files, or batched syscalls.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Security Aspects</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Only authorized access is allowed.</li>
                          <li>OS checks user permissions (UID/GID).</li>
                          <li>Prevents buffer overflows or malformed parameters.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">System Call Interface (SCI)</h3>
                        <p className="text-slate-700 mb-2">Every OS provides a System Call Interface to expose system services to user applications.</p>
                        <div className="mt-2 text-xs text-slate-600">Example in Linux: User app → libc (like glibc) → SCI → kernel syscall handler</div>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Windows vs Linux System Calls</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                            <thead>
                              <tr className="text-indigo-700">
                                <th className="px-2 py-1">Feature</th>
                                <th className="px-2 py-1">Linux</th>
                                <th className="px-2 py-1">Windows</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              <tr><td>Interface</td><td>syscall, int 0x80</td><td>NtCreateFile, ZwWriteFile</td></tr>
                              <tr><td>User Library</td><td>glibc</td><td>Win32 API, ntdll.dll</td></tr>
                              <tr><td>Naming</td><td>Follows POSIX</td><td>Proprietary</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">Real Interview-Oriented Concepts</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Trap vs Interrupt:</b> Trap is a software-generated interrupt (system calls); interrupts are hardware signals.</li>
                          <li><b>Reentrancy:</b> System calls must be reentrant for concurrency.</li>
                          <li><b>Example in C:</b></li>
                        </ul>
                        <pre className="bg-slate-100 rounded-lg p-3 text-xs overflow-x-auto mb-2"><code>{`#include <unistd.h>
#include <fcntl.h>

int main() {
    int fd = open("test.txt", O_RDONLY);  // system call
    char buf[100];
    read(fd, buf, 100);                   // system call
    close(fd);                            // system call
    return 0;
}`}</code></pre>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Summary</h3>
                        <p className="text-slate-700">System calls are the backbone of user-kernel communication, enabling processes to perform tasks they cannot do alone. Understanding their mechanism, categories, performance implications, and security roles is crucial — not just for OS design but also for building robust, secure, and efficient applications.<br/><br/>In interviews, be prepared to write small programs demonstrating system calls, explain the flow from user mode to kernel, compare system calls with user-level functions, discuss the optimization of frequent system calls, and show awareness of syscall security vulnerabilities.</p>
                      </div>
                    </div>
                  ) : topic === 'OS Design & Implementation' ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                        </span>
                        <span className="text-2xl font-bold text-indigo-700">Operating System: Design and Implementation</span>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">1. What is OS Design?</h3>
                        <p className="text-slate-700">Operating System design is the conceptual phase where the architecture and core responsibilities of the OS are specified. It defines what features the OS will provide, how processes will be managed, how memory will be allocated, how files will be organized, and how security and I/O will be handled.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Efficiency: Optimize resource utilization.</li>
                          <li>Robustness: Ensure fault-tolerance and recovery mechanisms.</li>
                          <li>Security: Protect data, users, and system integrity.</li>
                          <li>User-friendliness: Provide abstractions like file systems, GUI.</li>
                          <li>Scalability and Portability: Should work across different systems and support growing workloads.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">2. OS Implementation</h3>
                        <p className="text-slate-700">Implementation is the realization of the OS design through code, typically written in low-level languages such as C or C++, with some assembly code for hardware interaction.</p>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mt-2">
                          <li>Monolithic Systems</li>
                          <li>Layered Systems</li>
                          <li>Microkernel Systems</li>
                          <li>Modular Systems</li>
                          <li>Hybrid Systems</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">3. OS Structures and Architecture</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Monolithic:</b> All OS services in a single program (e.g., early UNIX). Fast but hard to maintain.</li>
                          <li><b>Layered:</b> OS divided into layers, each built on the lower one. Clean abstraction, less efficient.</li>
                          <li><b>Microkernel:</b> Only essential services in kernel; others in user mode (e.g., QNX, MINIX, Mach). Modular, secure, but more context switching.</li>
                          <li><b>Modular:</b> Core kernel with loadable modules (e.g., Linux kernel). Combines performance and modularity.</li>
                          <li><b>Hybrid:</b> Mix of monolithic and microkernel (e.g., Windows NT, macOS XNU).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">4. Key Components in OS Design</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Process Management:</b> Creating, managing, scheduling, and terminating processes; threads, synchronization, context switching.</li>
                          <li><b>Memory Management:</b> Allocation strategies, paging, segmentation, virtual memory, protection.</li>
                          <li><b>File System:</b> Directory structure, access methods, metadata, common FS (FAT, NTFS, ext4).</li>
                          <li><b>I/O Management:</b> Device abstraction, drivers, buffering, spooling, DMA.</li>
                          <li><b>Security & Protection:</b> ACLs, authentication, encryption, secure kernel.</li>
                          <li><b>User Interface:</b> CLI (shell) or GUI (desktop).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">5. User Mode vs Kernel Mode</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Kernel Mode:</b> Full access to hardware. OS core runs here.</li>
                          <li><b>User Mode:</b> Restricted access. Applications run here.</li>
                          <li>Transition managed via system calls (e.g., fork(), read(), exec()).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">6. Portability and Cross-Platform Design</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Portability: OS should run on different hardware with minimal changes.</li>
                          <li>Hardware Abstraction Layer (HAL) allows device-independent interfacing.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">7. Reliability, Robustness, and Extensibility</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li><b>Reliability:</b> Stable across failures and crashes.</li>
                          <li><b>Robustness:</b> Recovers gracefully from errors or bad input.</li>
                          <li><b>Extensibility:</b> Modular design allows new features with minimal impact (e.g., loadable kernel modules).</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">8. Example: Linux Kernel Design</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Monolithic + Modular Hybrid: Core is monolithic, supports loadable modules.</li>
                          <li>Written in C with inline assembly.</li>
                          <li>Completely Fair Scheduler for process scheduling.</li>
                          <li>Open source, used in desktops, servers, mobile devices.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">9. Example: Windows OS Design</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Hybrid kernel (Windows NT Kernel).</li>
                          <li>Proprietary, preemptive multitasking, layered architecture.</li>
                          <li>Has HAL, executive services, kernel mode drivers.</li>
                          <li>GUI-based by default.</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-600 mb-2">10. Tools and Techniques in Implementation</h3>
                        <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
                          <li>Programming: C, C++, Assembly</li>
                          <li>Debugging: GDB, kernel logs, QEMU</li>
                          <li>Version control: Git</li>
                          <li>Build systems: Makefiles, CMake</li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-white/60 p-4 shadow-inner">
                        <h3 className="font-semibold text-indigo-700 mb-2 flex items-center gap-2"><span className="inline-block w-5 h-5"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Summary & Interview Tips</h3>
                        <p className="text-slate-700">OS Design involves high-level architecture choices, deciding on kernel structure, memory/process management, and I/O. OS Implementation is about writing the actual code that embodies this design, mainly in low-level languages. Modern OSes balance performance, modularity, and security.<br/><br/>For interviews, know how design decisions affect system performance, reliability, and extensibility. Be ready to compare real-world OS architectures (Linux, Windows, macOS) and explain their design choices. Expect questions like:<br/>- Why might a microkernel be more secure than a monolithic kernel?<br/>- Explain trade-offs between portability and performance in OS design.<br/>- How does modularity help in OS implementation and debugging?</p>
                      </div>
                    </div>
                  ) : topic === 'Relevant Interview Questions' ? (
                    <div className="space-y-8 mt-16 w-full">
                      <div className="flex items-center gap-4 mb-4 justify-center">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white shadow-lg">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight drop-shadow-lg">Most Relevant Interview Questions</h2>
                      </div>
                      <div className="rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl p-2 md:p-4 w-full">
                        <div className="flex flex-col gap-4 w-full">
                          {[
                            "What does an operating system do in a computer system?",
                            "Can you explain the different types of operating systems with examples?",
                            "Why is the operating system considered essential for modern computing?",
                            "How does a graphical user interface (GUI) improve interaction with the OS?",
                            "What are 10 commonly used operating systems today and their key features?",
                            "How does main memory differ from secondary storage like HDD or SSD?",
                            "What are overlays in operating systems, and why are they useful?",
                            "What is a bootstrap program, and what is its role during startup?",
                            "What is a process, and what are the different states in its lifecycle?",
                            "How is a thread different from a process, and when would you use each?",
                            "Why is process synchronization necessary in multiprogramming?",
                            "What are the main ways processes can communicate with each other?",
                            "What is a zombie process, and how does it get created?",
                            "What is cascading termination in process management?",
                            "How does context switching work, and what overhead does it create?",
                            "Can you compare processes and threads with examples?",
                            "What are the different parts (sections) of a process in memory?",
                            "What is a semaphore, and how is it used for synchronization?",
                            "What operations can you perform on semaphores?",
                            "What conditions must be true for a deadlock to occur?",
                            "How can deadlocks be avoided, prevented, or detected?",
                            "What is the Banker's Algorithm, and how does it avoid deadlocks?",
                            "What is starvation, and how does aging solve it?",
                            "What is reentrancy, and why is it important in concurrent systems?",
                            "What are the different CPU scheduling algorithms, and how do they work?",
                            "Can you walk through a Gantt chart example of SJF or Round Robin?",
                            "What is First-Come, First-Served (FCFS) scheduling, and what are its drawbacks?",
                            "What is a time-sharing system, and how does it work?",
                            "What is the main goal of a multiprogramming operating system?",
                            "How does a time-sharing system differ from batch processing?",
                            "What is virtual memory, and how does it help large programs run?",
                            "Can you explain demand paging using a real-world analogy?",
                            "How is paging different from segmentation in memory management?",
                            "What causes memory thrashing, and how can it be reduced?",
                            "What is Belady's Anomaly, and when does it occur?",
                            "What is the Working Set Model, and how is it used?",
                            "How do logical addresses differ from physical addresses?",
                            "What is an inverted page table, and how does it compare to a regular one?",
                            "What steps does an OS take when a page fault occurs?",
                            "What is a pipe, and how is it used between processes?",
                            "What is spooling, and how does it manage print jobs?",
                            "What is RAID, and how do different RAID levels compare?",
                            "What are sockets, and how do they enable network communication?",
                            "How does an OS use device drivers to interact with hardware?",
                            "What is the difference between polling and interrupt-driven I/O?",
                            "What is DMA (Direct Memory Access), and why is it beneficial?",
                            "How does buffering and caching improve I/O operations?",
                            "What is a kernel, and what are its main functions?",
                            "What's the difference between user mode and kernel mode?",
                            "How does a microkernel differ from a monolithic kernel?",
                            "How is the kernel different from the rest of the operating system?",
                            "What are the types of kernels used in modern systems?",
                            "What is symmetric multiprocessing (SMP), and how does it help performance?",
                            "What is asymmetric clustering in OS architecture?",
                            "How is multitasking different from multiprocessing?",
                            "What happens inside the OS when you run a command in the terminal?",
                            "How do system calls differ from standard library functions?",
                            "How do fork(), exec(), and wait() work in Unix-like systems?",
                            "What happens step-by-step during a context switch?",
                            "What happens from power-on to the login screen during system boot?",
                            "What is memory fragmentation, and what are internal vs. external fragmentation?",
                            "What is a system call, and what are the main types?",
                            "How does a user program interact with the OS?",
                            "How do system calls differ in Windows vs Linux (e.g., CreateProcess vs fork())?",
                            "How do operating systems support containerization (e.g., Docker)?",
                            "How does virtualization work with OS tools like VMware or VirtualBox?",
                            "How do mobile OSs (like Android) compare to desktop OSs (like Windows/Linux)?",
                            "What are soft and hard real-time systems?",
                            "What is load balancing in operating systems or clusters?",
                            "What is a watchdog timer, and what is it used for?",
                            "How does an OS handle exceptions and interrupts?",
                            "How are signals used for communication between processes in UNIX?",
                            "What are environment variables, and how are they used?"
                          ].map((q, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-indigo-100/80 to-blue-100/60 shadow-md hover:shadow-xl transition-shadow duration-300 group w-full">
                              <span className="mt-1 text-indigo-500 group-hover:text-blue-500 font-bold text-lg min-w-[2.5rem]">{i + 1}.</span>
                              <span className="text-base md:text-lg text-slate-800 group-hover:text-indigo-700 font-medium leading-snug w-full">{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="block font-medium text-indigo-500 mb-2">{topic}</span>
                      <span className="block">Topic content goes here... </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const StOS = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFlowIdx, setActiveFlowIdx] = useState(null);
  const [openAccordionIdx, setOpenAccordionIdx] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 font-sans tracking-wide flex flex-col items-center">
      {/* Top Section: Heading */}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center pt-10 pb-4 px-4 md:px-12 animate-fade-in">
        <div className="w-full text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            Operating Systems
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium animate-slide-in-up">
            Master the core concepts of OS with a modern, structured flow
          </p>
        </div>
      </div>

      {/* Middle Section: Subject FlowBar */}
      {/* <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">
        <SubjectFlowBar topics={subjectFlowTopics} activeIdx={activeFlowIdx} setActiveIdx={setActiveFlowIdx} />
      </section> */}

      {/* Bottom Section: Accordion & Test Button */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-10 animate-fade-in">

        <Accordion topics={detailedTopics} openIdx={openAccordionIdx} setOpenIdx={setOpenAccordionIdx} />

        {/* Give Test Button */}
        <div className="w-full flex justify-center pt-12 pb-4">
          <button
            className="w-full max-w-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-indigo-400/40 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 hover:scale-105 active:scale-98 mt-4"
            style={{ boxShadow: '0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10)' }}
            onClick={() => navigate('/quiz')}
          >
            <span className="inline-block animate-slide-in-up">Give Test</span>
          </button>
        </div>
      </section>

      {/* Animations & Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
          50% { box-shadow: 0 0 32px 8px #6366f1cc, 0 1.5px 8px 0 #3b82f6cc; }
          100% { box-shadow: 0 0 16px 4px #6366f1aa, 0 1.5px 8px 0 #3b82f680; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        .neumorphic-glow {
          box-shadow: 0 4px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10);
        }
      `}</style>
    </div>
  );
};

export default StOS;
