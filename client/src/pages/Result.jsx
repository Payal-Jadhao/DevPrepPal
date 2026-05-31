import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const motivationalMessages = [
  { threshold: 0.8, message: "Excellent work! 🏆" },
  { threshold: 0.6, message: "Great Job! 🎉" },
  { threshold: 0.4, message: "Good effort! 👍" },
  { threshold: 0, message: "Keep Practicing! 💪" },
];

function getMotivationalMessage(score, total) {
  const ratio = total === 0 ? 0 : score / total;
  return (
    motivationalMessages.find((m) => ratio >= m.threshold)?.message ||
    "Keep Practicing! 💪"
  );
}

export default function Result({ score, questions, selectedOptions, onRetake }) {
  const confettiRef = useRef(null);
  const highScore = questions.length > 0 && score / questions.length >= 0.8;
  const motivational = getMotivationalMessage(score, questions.length);

  // Optional: Simple confetti effect (CSS-based, not a full library)
  useEffect(() => {
    if (highScore && confettiRef.current) {
      confettiRef.current.classList.add("animate-confetti");
      setTimeout(() => {
        confettiRef.current.classList.remove("animate-confetti");
      }, 2000);
    }
  }, [highScore]);

  return (
    <section
      className="min-h-screen w-full bg-gradient-to-br from-sky-50 to-indigo-100 flex flex-col justify-center items-center font-inter leading-relaxed py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Quiz Results Section"
    >
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-center drop-shadow-sm">
          Quiz Results
        </h2>
        <div className="mb-2 flex items-center justify-center gap-2 animate-fade-in transition-all duration-500 ease-in-out">
          {highScore && (
            <span
              ref={confettiRef}
              aria-label="Trophy"
              className="text-3xl md:text-4xl"
            >
              🏆
            </span>
          )}
          <span className="text-blue-600 font-semibold text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Score: {score} / {questions.length}
          </span>
        </div>
        <div className="mb-6 text-center text-lg text-gray-700 font-medium">
          {motivational}
        </div>
        <div className="w-full flex flex-col gap-6 mb-8">
          {questions.map((q, i) => {
            const isCorrect = selectedOptions[i] === q.answer;
            return (
              <div
                key={i}
                className={`my-4 rounded-xl shadow-lg border border-gray-300 p-6 transition-all duration-300 flex flex-col bg-white relative ${
                  isCorrect
                    ? "bg-blue-100 text-blue-800 border-l-4 border-blue-600"
                    : "bg-red-100 text-red-800 border-l-4 border-red-500"
                }`}
                aria-label={`Question ${i + 1} ${isCorrect ? "Correct" : "Incorrect"}`}
              >
                <div className="font-semibold text-gray-900 mb-2 text-base md:text-lg">
                  Q{i + 1}: {q.question}
                </div>
                <div className="flex flex-col gap-1 ml-2">
                  {q.options.map((opt, idx) => {
                    const isSelected = selectedOptions[i] === idx;
                    const isAnswer = q.answer === idx;
                    return (
                      <div
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                          isAnswer
                            ? "bg-blue-600 text-white border border-blue-600"
                            : isSelected && !isCorrect
                            ? "bg-red-400/80 text-white border border-red-400"
                            : isSelected && isCorrect
                            ? "bg-blue-400/80 text-white border border-blue-400"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                        }`}
                        aria-label={
                          isAnswer
                            ? "Correct Answer"
                            : isSelected
                            ? isCorrect
                              ? "Your Selection (Correct)"
                              : "Your Selection (Incorrect)"
                            : undefined
                        }
                      >
                        {isAnswer && <span className="font-bold">✔</span>}
                        {isSelected && !isAnswer && <span className="font-bold">✗</span>}
                        {opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetake}
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold text-lg shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
            aria-label="Retake Quiz"
          >
            Retake Quiz
          </motion.button>
        </div>
      </motion.div>
      {/* Optional: Add confetti animation CSS */}
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(40px) scale(1.2); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 1.2s ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
