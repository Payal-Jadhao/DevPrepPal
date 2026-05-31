export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  isSinglePage,
}) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-[800px] mx-auto transition-all duration-500 animate-fade-in">
      <div className="mb-2 text-gray-500 text-sm">
        Question {questionIndex + 1} / {totalQuestions}
      </div>
      <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 leading-snug">
        {question.question}
      </h3>
      <div className="flex flex-col gap-4">
        {question.options.map((opt, idx) => {
          const inputId = `q${questionIndex}-opt${idx}`;
          return (
            <div key={idx} className="flex items-center gap-3 w-full">
              <input
                type="radio"
                id={inputId}
                name={`question-${questionIndex}`}
                checked={selectedOption === idx}
                onChange={() => onOptionSelect(idx)}
                aria-checked={selectedOption === idx}
                className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-400 border-gray-300 transition-all duration-200"
              />
              <label
                htmlFor={inputId}
                className={`flex-1 py-2 px-4 rounded-lg cursor-pointer border transition-all duration-200 text-base font-medium select-none w-full
                  ${selectedOption === idx
                    ? "bg-blue-500 text-white border-blue-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"}
                `}
              >
                {opt}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
