// // import React, { useState } from 'react';
// // import { Link, useNavigate, Outlet } from 'react-router-dom';

// // const getUsername = () => {
// //   const user = localStorage.getItem('user');
// //   if (user) {
// //     try {
// //       return JSON.parse(user).username || JSON.parse(user).name || 'User';
// //     } catch {
// //       return localStorage.getItem('username') || 'User';
// //     }
// //   }
// //   return localStorage.getItem('username') || 'User';
// // };

// // const StTempelate = () => {
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const navigate = useNavigate();
// //   const username = getUsername();

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     setDropdownOpen(false);
// //     navigate('/');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 transition-colors duration-300">
// //       <nav className="bg-white shadow-md px-10 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
// //         {/* Left Section: Brand and Subject Links */}
// //         <div className="flex items-center gap-10">
// //           <Link
// //             to="/students/stHome"
// //             className="text-2xl font-semibold text-blue-700 tracking-tight hover:text-blue-900 transition-colors duration-200"
// //           >
// //             Study Material
// //           </Link>
// //           <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
// //             <Link to="/students/os" className="hover:text-blue-600 transition-colors duration-200">OS</Link>
// //             <Link to="/students/dbms" className="hover:text-blue-600 transition-colors duration-200">DBMS</Link>
// //             <Link to="/students/cn" className="hover:text-blue-600 transition-colors duration-200">CN</Link>
// //             <Link to="/students/oops" className="hover:text-blue-600 transition-colors duration-200">OOPS</Link>
// //             <Link to="/interview" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200">Take Interview</Link>
// //           </div>
// //         </div>

// //         {/* Right Section: User Dropdown */}
// //         <div className="relative">
// //           <button
// //             onClick={() => setDropdownOpen(!dropdownOpen)}
// //             className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full transition duration-150"
// //           >
// //             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold uppercase">
// //               {username[0]}
// //             </div>
// //             <span className="text-sm font-medium text-gray-800">Hello, {username}</span>
// //             <svg
// //               className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
// //             </svg>
// //           </button>
// //           {dropdownOpen && (
// //             <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
// //               <button
// //                 onClick={handleLogout}
// //                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </nav>

// //       {/* Main Content */}
// //       <main className="p-6 md:p-10 w-full max-w-screen-2xl mx-auto">
// //         <Outlet />
// //       </main>
// //     </div>
// //   );
// // };

// // export default StTempelate;
// import React, { useState } from 'react';
// import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

// const getUsername = () => {
//   const user = localStorage.getItem('user');
//   if (user) {
//     try {
//       return JSON.parse(user).username || JSON.parse(user).name || 'User';
//     } catch {
//       return localStorage.getItem('username') || 'User';
//     }
//   }
//   return localStorage.getItem('username') || 'User';
// };

// const StTempelate = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = getUsername();

//   const handleLogout = () => {
//     localStorage.clear();
//     setDropdownOpen(false);
//     navigate('/');
//   };

//   const navLinks = [
//     { name: 'OS', path: '/students/os' },
//     { name: 'DBMS', path: '/students/dbms' },
//     { name: 'CN', path: '/students/cn' },
//     { name: 'OOPS', path: '/students/oops' },
//     { name: 'Strategy', path: '/students/strategy' },
//     { name: 'Take Interview', path: '/students/interview' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 transition-colors duration-300">
//       <nav className="bg-white shadow-md px-10 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
//         <div className="flex items-center gap-10">
//           <Link
//             to="/students/stHome"
//             className="text-2xl font-semibold text-blue-700 tracking-tight hover:text-blue-900 transition-colors duration-200"
//           >
//             Study Material
//           </Link>
//           <div className="hidden md:flex gap-6 text-sm font-medium items-center">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`transition-colors duration-200 pb-1 ${
//                     isActive
//                       ? 'text-blue-700 font-bold border-b-2 border-blue-700'
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         <div className="relative">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full transition duration-150"
//           >
//             <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold uppercase">
//               {username[0]}
//             </div>
//             <span className="text-sm font-medium text-gray-800">Hello, {username}</span>
//             <svg
//               className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <main className="p-6 md:p-10 w-full max-w-screen-2xl mx-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default StTempelate;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom';

const getUsername = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      return JSON.parse(user).username || JSON.parse(user).name || 'User';
    } catch {
      return localStorage.getItem('username') || 'User';
    }
  }
  return localStorage.getItem('username') || 'User';
};

const StTempelate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const username = getUsername();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDarkToggle = () => setIsDark((d) => !d);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.setItem("isLoggedIn", "false");
    setDropdownOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'OS', path: '/students/os' },
    { name: 'DBMS', path: '/students/dbms' },
    { name: 'CN', path: '/students/cn' },
    { name: 'OOPS', path: '/students/oops' },
    { name: 'Strategy', path: '/students/strategy' },
    { name: 'Take Interview', path: '/students/interview' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow-md px-10 py-3 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
        <div className="flex items-center gap-10">
          <Link
            to="/students/stHome"
            className="text-2xl font-semibold text-blue-700 dark:text-blue-400 tracking-tight hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Study Material
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-200 pb-1 ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleDarkToggle}
            className="px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 bg-blue-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 px-4 py-2 rounded-full transition duration-150"
            >
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold uppercase">
                {username[0]}
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Hello, {username}</span>
              <svg
                className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="p-6 md:p-10 w-full max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default StTempelate;