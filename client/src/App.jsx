// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import StudyMaterial from "./pages/StudyMaterial";
// import Strategy from "./pages/Strategy";
// import Navbar from "./pages/Navbar";
// import PrivateRoute from "./pages/PrivateRoute";
// import Auth from "./pages/Auth";
// import StTempelate from "./pages/students/StTempelate";
// import StOS from "./pages/students/StOS";
// import StDBMS from "./pages/students/StDBMS";
// import StCN from "./pages/students/StCN";
// import StOOPS from "./pages/students/StOOPS";
// import StHome from "./pages/students/StHome";
// import Interview from "./pages/Interview";
// // Wrapper to access location
// function AppWrapper() {
//   const location = useLocation();

//   // Hide Navbar for all /students/* routes
//   const hideNavbar = location.pathname.startsWith("/students");

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Auth mode="login" />} />
//         <Route path="/register" element={<Auth mode="register" />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/result" element={<Result />} />
//         <Route path="/studymaterial" element={<StudyMaterial />} />
//         <Route path="/strategy" element={<Strategy />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/interview" element={<Interview />} />

//         {/* Student layout and subject routes */}
//         <Route
//           path="/students/"
//           element={
//             <PrivateRoute>
//               <StTempelate />
//             </PrivateRoute>
//           }
//         >
//           <Route index element={<StHome />} />
//           <Route path="stHome" element={<StHome />} />
//           <Route path="os" element={<StOS />} />
//           <Route path="dbms" element={<StDBMS />} />
//           <Route path="cn" element={<StCN />} />
//           <Route path="oops" element={<StOOPS />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppWrapper />
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import StudyMaterial from "./pages/StudyMaterial";
import Strategy from "./pages/Strategy";
import Navbar from "./pages/Navbar";
import PrivateRoute from "./pages/PrivateRoute";
import Auth from "./pages/Auth";
import StTempelate from "./pages/students/StTempelate";
import StOS from "./pages/students/StOS";
import StDBMS from "./pages/students/StDBMS";
import StCN from "./pages/students/StCN";
import StOOPS from "./pages/students/StOOPS";
import StHome from "./pages/students/StHome";
import Interview from "./pages/Interview";

function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/students");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/studymaterial" element={<StudyMaterial />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/interview" element={<Interview />} />

        <Route
          path="/students/"
          element={
            <PrivateRoute>
              <StTempelate />
            </PrivateRoute>
          }
        >
          <Route index element={<StHome />} />
          <Route path="stHome" element={<StHome />} />
          <Route path="os" element={<StOS />} />
          <Route path="dbms" element={<StDBMS />} />
          <Route path="cn" element={<StCN />} />
          <Route path="oops" element={<StOOPS />} />
          <Route path="strategy" element={<Strategy />} />
          <Route path="interview" element={<Interview />} />
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}