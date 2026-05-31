import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import QuizSetup from "./QuizSetup";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Quiz() {
  const quizSectionRef = useRef(null);
  const [subject, setSubject] = useState("OS");
  const [numQuestions, setNumQuestions] = useState(5);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  const handleScrollToQuiz = () => {
    quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStart = () => {
    const pool = subject === "Mixed" ? questions : questions.filter(q => q.subject === subject);
    const shuffled = shuffle(pool).slice(0, numQuestions);
    setQuizQuestions(shuffled);
    setSelectedOptions(Array(shuffled.length).fill(null));
    setIsQuizStarted(true);
    setIsQuizSubmitted(false);
    setScore(0);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOptionSelect = (qIdx, optionIdx) => {
    setSelectedOptions(prev => {
      const updated = [...prev];
      updated[qIdx] = optionIdx;
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sc = 0;
    quizQuestions.forEach((q, i) => {
      if (selectedOptions[i] === q.answer) sc++;
    });
    setScore(sc);
    setIsQuizSubmitted(true);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleRetake = () => {
    setIsQuizStarted(false);
    setIsQuizSubmitted(false);
    setQuizQuestions([]);
    setSelectedOptions([]);
    setScore(0);
    setTimeout(() => {
      quizSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#eaf1ff] to-white text-gray-800 flex flex-col items-center justify-center px-2 py-6 md:py-10">
      {/* Welcome/Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 md:py-16 px-2 md:px-4 text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to DevPrepPal 
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Master <span className="font-semibold text-blue-500">OS</span>, <span className="font-semibold text-blue-500">DBMS</span>, <span className="font-semibold text-blue-500">OOPs</span>, <span className="font-semibold text-blue-500">CN</span>, and more through smart quizzes.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleScrollToQuiz}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] text-white font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Current Test
        </motion.button>
      </section>

      {/* Quiz Section */}
      <section
        ref={quizSectionRef}
        className="flex flex-col items-center justify-center w-full flex-1 py-6 md:py-10 px-2 md:px-0"
      >
          {!isQuizStarted && !isQuizSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <QuizSetup
                subject={subject}
                setSubject={setSubject}
                numQuestions={numQuestions}
                setNumQuestions={setNumQuestions}
                onStart={handleStart}
              />
            </motion.div>
          )}

          {isQuizStarted && !isQuizSubmitted && quizQuestions.length > 0 && (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-8 md:space-y-10">
              <AnimatePresence>
                {quizQuestions.map((q, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="w-full"
                  >
                    <QuestionCard
                      question={q}
                      questionIndex={idx}
                      totalQuestions={quizQuestions.length}
                      selectedOption={selectedOptions[idx]}
                      onOptionSelect={optionIdx => handleOptionSelect(idx, optionIdx)}
                      isSinglePage
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="text-center pt-4 w-full">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#4D9FFF] to-[#56CCF2] text-white font-semibold shadow-lg hover:brightness-110 disabled:opacity-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
                  disabled={selectedOptions.some(opt => opt === null)}
                >
                  Submit Quiz
                </button>
              </div>
            </form>
          )}

          {isQuizSubmitted && (
            <div className="w-full text-center flex flex-col items-center justify-center space-y-6">
              <Result
                score={score}
                questions={quizQuestions}
                selectedOptions={selectedOptions}
                onRetake={handleRetake}
              />
              <div className="text-xl font-semibold">
                You scored {score} / {quizQuestions.length}
              </div>
            </div>
          )}
      </section>
    </main>
  );
}
