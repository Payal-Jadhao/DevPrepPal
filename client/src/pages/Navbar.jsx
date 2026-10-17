import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const navLinks = [
  { name: "Home", href: "/", type: "scroll", icon: HomeIcon },
  { name: "Study Material", href: "/studymaterial", type: "route", icon: BookOpenIcon },
  { name: "Strategy", href: "/strategy", type: "route", icon: LightBulbIcon },
  { name: "Take Interview", href: "/interview", type: "route", icon: ChatBubbleBottomCenterTextIcon },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Sync theme
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
    } else if (theme === 'light') {
      setIsDark(false);
    }
  }, [location]);

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

  // Sync user state
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const loggedIn = localStorage.getItem("isLoggedIn");
    
    if (loggedIn === "true" && storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername("");
    }
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Close dropdown / mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        menuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('#mobile-hamburger-btn')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Close mobile menu when screen resized to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDarkToggle = () => setIsDark((d) => !d);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.setItem("isLoggedIn", "false");
    setUsername("");
    setMenuOpen(false);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const isLinkActive = (link) => {
    if (link.type === "scroll") {
      return location.pathname === "/" && (location.hash === link.href || (!location.hash && link.href === "/"));
    }
    return location.pathname.startsWith(link.href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-950/40 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/30">
              DP
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent tracking-tight">
              DevPrepPal
            </span>
          </Link>

          {/* Desktop Navigation (Visible on lg >= 1024px screens) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const linkClasses = `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active
                  ? "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
              }`;

              return link.type === "scroll" ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={linkClasses}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={linkClasses}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Auth / Profile (Desktop) */}
            {username ? (
              <div className="relative ml-2" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 px-3.5 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium text-sm rounded-full transition border border-gray-200 dark:border-gray-700 shadow-sm"
                  aria-expanded={dropdownOpen}
                >
                  <UserCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="max-w-[120px] truncate">{username}</span>
                  <span className="text-xs text-gray-400">▼</span>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-1.5 border border-gray-100 dark:border-gray-700 z-50 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                      Signed in as <p className="font-semibold text-gray-800 dark:text-gray-200 truncate">{username}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/auth"
                className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 transition-all duration-200"
              >
                Login / Signup
              </Link>
            )}

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={handleDarkToggle}
              className="ml-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-amber-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile & Tablet Controls (Visible on < 1024px screens) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Dark Mode toggle on Mobile Header */}
            <button
              onClick={handleDarkToggle}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-amber-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-hamburger-btn"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
              onClick={() => setMenuOpen((m) => !m)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7 transition-transform duration-200 rotate-90" />
              ) : (
                <Bars3Icon className="h-7 w-7 transition-transform duration-200" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Dropdown Navigation Drawer */}
      {menuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/80 dark:border-gray-800/80 shadow-2xl px-4 pt-3 pb-6 transition-all duration-300"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const Icon = link.icon;
              const linkClasses = `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                active 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/70"
              }`;

              return link.type === "scroll" ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={linkClasses}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-white" : "text-gray-500 dark:text-gray-400"}`} />
                  <span>{link.name}</span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClasses}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-white" : "text-gray-500 dark:text-gray-400"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Account / Auth Section in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {username ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700/60">
                  <UserCircleIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Logged in as</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 truncate text-sm">{username}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold rounded-xl transition border border-red-200 dark:border-red-900/40 text-sm"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/25 transition-all text-base"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}