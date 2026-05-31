// Template.jsx
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#537D5D] text-white font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.svgrepo.com/show/331760/education.svg')] bg-center bg-no-repeat bg-contain" />
      {/* Main Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
