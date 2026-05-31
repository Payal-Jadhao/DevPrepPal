import React from 'react';
import { motion } from 'framer-motion';

function ScoreBar({ label, score, max = 10 }) {
  const pct = Math.round((score / max) * 100);
  const color = pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-400' : 'bg-red-400';
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-200">{label}</span>
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{score}/{max}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function TagList({ items, color }) {
  const colorMap = {
    green: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
    red: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
    blue: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700',
  };
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${colorMap[color]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function FeedbackPanel({ feedback, onRetry }) {
  if (!feedback) return null;

  const hiringColor = {
    High: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700',
    Medium: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700',
    Low: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700',
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header scores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Overall Score */}
        <div className="flex flex-col items-center justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Overall Score</span>
          <span className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">{feedback.overallScore}</span>
          <span className="text-sm text-gray-400 dark:text-gray-500 mt-1">out of 100</span>
        </div>

        {/* Hiring Likelihood */}
        <div className="flex flex-col items-center justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Hiring Likelihood</span>
          <span className={`px-4 py-1.5 rounded-full text-lg font-bold border ${hiringColor[feedback.hiringLikelihood] || hiringColor['Medium']}`}>
            {feedback.hiringLikelihood}
          </span>
        </div>

        {/* Summary */}
        <div className="flex flex-col justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Summary</span>
          <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{feedback.summary}</p>
        </div>
      </div>

      {/* Score Bars */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
        <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-5">Performance Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <ScoreBar label="Communication" score={feedback.communication?.score ?? 0} />
          <ScoreBar label="Technical Knowledge" score={feedback.technicalKnowledge?.score ?? 0} />
          <ScoreBar label="Confidence" score={feedback.confidence?.score ?? 0} />
          <ScoreBar label="Clarity" score={feedback.clarity?.score ?? 0} />
          <ScoreBar label="Resume Quality" score={feedback.resumeQuality?.score ?? 0} />
        </div>
      </div>

      {/* Detailed Feedback */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { key: 'communication', label: 'Communication' },
          { key: 'technicalKnowledge', label: 'Technical Knowledge' },
          { key: 'confidence', label: 'Confidence' },
          { key: 'clarity', label: 'Clarity' },
        ].map(({ key, label }) => (
          feedback[key]?.feedback && (
            <div key={key} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md p-5">
              <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2">{label}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback[key].feedback}</p>
            </div>
          )
        ))}
      </div>

      {/* Strong / Weak Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md p-5">
          <h4 className="text-sm font-bold text-green-700 dark:text-green-300 mb-3">Strong Areas</h4>
          <TagList items={feedback.strongAreas || []} color="green" />
        </div>
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md p-5">
          <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-3">Areas to Improve</h4>
          <TagList items={feedback.weakAreas || []} color="red" />
        </div>
      </div>

      {/* Suggestions & Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md p-5">
          <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3">Suggested Improvements</h4>
          <ul className="flex flex-col gap-2">
            {(feedback.suggestedImprovements || []).map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md p-5">
          <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-3">Recommended Topics to Study</h4>
          <TagList items={feedback.recommendedTopics || []} color="blue" />
        </div>
      </div>

      {/* Retry Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-sky-400 text-white rounded-full font-semibold shadow-lg hover:brightness-110 transition-all duration-200"
        >
          Start New Interview
        </button>
      </div>
    </motion.div>
  );
}
