import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const subjectLinks = [
  { name: 'Overview', path: '/students/stHome' },
  { name: 'OS', path: '/students/os' },
  { name: 'DBMS', path: '/students/dbms' },
  { name: 'CN', path: '/students/cn' },
  { name: 'OOPS', path: '/students/oops' },
  { name: 'Strategy', path: '/students/strategy' },
  { name: 'Take Interview', path: '/students/interview' },
];

export default function StTempelate() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
      {/* Secondary Subject Tab Bar for Study Materials */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur border-b border-gray-200 dark:border-gray-700 px-4 sm:px-8 py-2.5 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar text-sm font-medium">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mr-2 shrink-0">
              Study Modules:
            </span>
            {subjectLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="p-4 sm:p-6 md:p-10 w-full max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}