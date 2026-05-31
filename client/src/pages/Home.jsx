import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDatabase, FaNetworkWired, FaCogs, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCogs className="text-indigo-600 text-4xl mb-3" />, // OS/OOPs
    title: "Core CS Coverage",
    desc: "Covers OS, DBMS, OOPs, CN & more for a strong foundation.",
  },
  {
    icon: <FaDatabase className="text-indigo-600 text-4xl mb-3" />, // DBMS
    title: "Evenly Distributed Random Tests",
    desc: "Questions are balanced across topics for fair practice every time.",
  },
  {
    icon: <FaChartBar className="text-indigo-600 text-4xl mb-3" />, // Analytics
    title: "Detailed Result Analytics",
    desc: "Get instant feedback and analytics to track your progress.",
  },
  {
    icon: <FaNetworkWired className="text-indigo-600 text-4xl mb-3" />, // CN
    title: "Built for Placements & Practice",
    desc: "Perfect for placement prep, semester exams, and self-study.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-sky-50 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Animated Scroll Indicator under Navbar */}
      <div>
        <div className="animate-bounce mt-1 h-6 flex flex-col items-center">
          <span className="block w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600 mb-1" />
          <span className="block w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-blue-500 mb-1" />
          <span className="block w-1.5 h-1.5 rounded-full bg-blue-200 dark:bg-blue-400" />
        </div>
      </div>
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        {/* SVG Pattern BG */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 bg-[url('https://www.svgrepo.com/show/331760/education.svg')] bg-center bg-no-repeat bg-contain dark:opacity-10" />
        <motion.div
          className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center py-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-indigo-800 dark:text-indigo-200 mb-4 tracking-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to <span className="bg-gradient-to-r from-indigo-500 to-sky-400 dark:from-indigo-300 dark:to-sky-600 bg-clip-text text-transparent">DevPrepPal</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Master <span className="font-semibold text-indigo-600 dark:text-indigo-400">OS</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">DBMS</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">OOPs</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">CN</span>, and more through smart quizzes
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/quiz")}
            className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-sky-400 dark:from-indigo-700 dark:to-sky-600 text-white text-lg px-10 py-4 rounded-full shadow-xl font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-700"
          >
            <span className="relative z-10">Give Test</span>
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-indigo-800 dark:text-indigo-200 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Use This App?
        </motion.h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl dark:shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-indigo-100 dark:border-gray-800"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 dark:from-indigo-800 dark:to-sky-900 shadow-inner">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-indigo-800 dark:text-indigo-200 tracking-wide leading-snug">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-developer" className="w-full py-16 px-6 bg-gradient-to-r from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 border-t border-indigo-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Avatar */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center w-40 h-40 rounded-full bg-white/70 dark:bg-gray-900/80 shadow-2xl border-4 border-indigo-100 dark:border-gray-800 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Real Image Avatar */}
            <img
              src="/devpreppalbypdj.png"
              alt="Payal Jadhao"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Bio & Socials */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-3 tracking-wide">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed tracking-wide text-base md:text-lg">
             <span>
  Hi, I’m <span className="font-semibold">Payal Jadhao</span>! I am a <span className="font-semibold">B.E. graduate</span> in <span className="font-semibold">Computer Science and Engineering</span>. For me, engineering is all about hands-on building - whether it's crafting seamless, modern user interfaces or diving into robust backend systems. I am deeply passionate about exploring new technologies, solving real-world challenges, and helping others strengthen their core software engineering fundamentals.
</span>
            </p>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <motion.a
                // href="https://github.com/ksachin2004"
               href= "https://github.com/Payal-Jadhao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 text-3xl transition"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                // href="https://www.linkedin.com/in/sachin-khandekar-b094851b0/"
                href="https://www.linkedin.com/in/payaljadhao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 text-3xl transition"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}