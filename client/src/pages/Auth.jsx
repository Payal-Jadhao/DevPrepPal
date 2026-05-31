import React, { useState, useEffect } from "react";
import { register, login } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine mode from route
  const routeMode = location.pathname === "/register" ? "register" : "login";
  const [mode, setMode] = useState(routeMode);

  // Sync mode with route
  useEffect(() => {
    setMode(routeMode);
    setError("");
    setForm({ identifier: "", email: "", username: "", password: "", confirm: "" });
  }, [routeMode]);

  const [form, setForm] = useState({ identifier: "", email: "", username: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleTab = (newMode) => {
    if (newMode === "login") navigate("/login");
    else navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (mode === "login" && (!form.identifier || !form.password)) ||
      (mode === "register" && (!form.email || !form.username || !form.password || !form.confirm))
    ) {
      setError("Please fill all fields.");
      return;
    }
    // Trim validation for register
    if (mode === "register") {
      const email = form.email.trim();
      const username = form.username.trim();
      const password = form.password.trim();
      const confirm = form.confirm.trim();
      if (!email || !username || !password || !confirm) {
        setError("Please fill all fields (no spaces only)." );
        return;
      }
      if (password !== confirm) {
        setError("Passwords do not match.");
        return;
      }
    }
    try {
      let response;
      if (mode === "login") {
        response = await login({ identifier: form.identifier, password: form.password });
      } else {
        response = await register({ email: form.email.trim(), username: form.username.trim(), password: form.password.trim() });
      }
      const token = response.data.token;
      const username = response.data.user?.username;
      const email = response.data.user?.email;
      localStorage.setItem("token", token);
      if (username) localStorage.setItem("username", username);
      if (email) localStorage.setItem("email", email);
      localStorage.setItem("isLoggedIn", "true"); // Set login flag
      setError("");
      if (mode === "login") {
        navigate("/students/"); // Redirect to /students/ after login
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl p-8 flex flex-col items-center transition-colors duration-300">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent mb-6 dark:from-blue-300 dark:to-sky-500">
          {mode === "login" ? "Login" : "Signup"}
        </h1>
        <div className="flex mb-6 w-full">
          <button
            className={`flex-1 py-2 rounded-l-full font-semibold transition ${mode === "login" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"}`}
            onClick={() => handleTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-full font-semibold transition ${mode === "register" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"}`}
            onClick={() => handleTab("register")}
          >
            Signup
          </button>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {mode === "login" ? (
            <input
              type="text"
              name="identifier"
              placeholder="Username or Email"
              value={form.identifier}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
              required
            />
          ) : (
            <>
              <input
                type="email"
                name="email"
                placeholder="abc@pqr.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="userame"
                value={form.username}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
                required
              />
            </>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
            required
          />
          {mode === "register" && (
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-base bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
              required
            />
          )}
          {error && <div className="text-red-500 dark:text-red-400 mb-4 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-sky-400 dark:from-blue-700 dark:to-sky-600 text-white rounded-full font-semibold shadow-md hover:brightness-110 transition mb-2"
          >
            {mode === "login" ? "Login" : "Signup"}
          </button>
        </form>
        <div className="mt-4 text-gray-500 dark:text-gray-300 text-sm">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => handleTab("register")}>Signup</button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => handleTab("login")}>Login</button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}