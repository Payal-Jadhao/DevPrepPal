import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeUpload from '../components/interview/ResumeUpload';
import InterviewSetup from '../components/interview/InterviewSetup';
import ChatWindow from '../components/interview/ChatWindow';
import FeedbackPanel from '../components/interview/FeedbackPanel';
import { initializeInterview, sendInterviewMessage, generateFeedback } from '../services/api';

// Interview stages
const STAGE = {
  SETUP: 'setup',
  ACTIVE: 'active',
  FEEDBACK: 'feedback',
};

const DEFAULT_CONFIG = {
  companyName: '',
  jobRole: '',
  experienceLevel: 'Fresher',
  interviewType: 'Mixed',
};

export default function Interview() {
  const [stage, setStage] = useState(STAGE.SETUP);
  const [resumeText, setResumeText] = useState(null);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [configErrors, setConfigErrors] = useState({});
  const [messages, setMessages] = useState([]);
  const [systemPrompt, setSystemPrompt] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [globalError, setGlobalError] = useState('');
  const inputRef = useRef(null);

  // Validate setup form
  const validateConfig = () => {
    const errors = {};
    if (!config.companyName.trim()) errors.companyName = 'Company name is required.';
    if (!config.jobRole.trim()) errors.jobRole = 'Job role is required.';
    return errors;
  };

  // Start the interview
  const handleStartInterview = async () => {
    setGlobalError('');
    if (!resumeText) {
      setGlobalError('Please upload your resume before starting the interview.');
      return;
    }
    const errors = validateConfig();
    if (Object.keys(errors).length > 0) {
      setConfigErrors(errors);
      return;
    }
    setConfigErrors({});
    setIsStarting(true);
    try {
      const res = await initializeInterview({
        resumeText,
        companyName: config.companyName.trim(),
        jobRole: config.jobRole.trim(),
        experienceLevel: config.experienceLevel,
        interviewType: config.interviewType,
      });
      setSystemPrompt(res.data.systemPrompt);
      setMessages(res.data.messages);
      setStage(STAGE.ACTIVE);
    } catch (e) {
      setGlobalError(e.response?.data?.message || 'Failed to start interview. Please check your connection and try again.');
    } finally {
      setIsStarting(false);
    }
  };

  // Send a message
  const handleSend = useCallback(async () => {
    const text = userInput.trim();
    if (!text || isTyping) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setUserInput('');
    setIsTyping(true);
    setGlobalError('');

    try {
      const res = await sendInterviewMessage({
        messages: newMessages,
        systemPrompt,
        userMessage: text,
      });
      setMessages([...newMessages, { role: 'assistant', content: res.data.reply }]);
    } catch (e) {
      setGlobalError('Failed to get a response. Please try again.');
      // Restore user message so they can retry
      setMessages(messages);
      setUserInput(text);
    } finally {
      setIsTyping(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [userInput, messages, systemPrompt, isTyping]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // End interview and generate feedback
  const handleEndInterview = async () => {
    if (messages.length < 2) {
      setGlobalError('Please answer at least one question before ending the interview.');
      return;
    }
    setIsEnding(true);
    setGlobalError('');
    try {
      const res = await generateFeedback({
        messages,
        systemPrompt,
        resumeText,
        jobRole: config.jobRole,
        companyName: config.companyName,
      });
      setFeedback(res.data);
      setStage(STAGE.FEEDBACK);
    } catch (e) {
      setGlobalError('Failed to generate feedback. Please try again.');
    } finally {
      setIsEnding(false);
    }
  };

  // Reset everything for a new interview
  const handleRetry = () => {
    setStage(STAGE.SETUP);
    setResumeText(null);
    setConfig(DEFAULT_CONFIG);
    setConfigErrors({});
    setMessages([]);
    setSystemPrompt('');
    setUserInput('');
    setFeedback(null);
    setGlobalError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> */}
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Page Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 dark:text-indigo-200 tracking-tight mb-2">
            AI Interview Simulator
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Upload your resume, configure your interview, and practice with a professional AI interviewer tailored to your profile.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <StepIndicator stage={stage} />

        {/* Global Error */}
        <AnimatePresence>
          {globalError && (
            <motion.div
              className="mt-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {globalError}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SETUP STAGE */}
        <AnimatePresence mode="wait">
          {stage === STAGE.SETUP && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex flex-col gap-6"
            >
              {/* Resume Upload Card */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Upload Resume</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">PDF or DOCX, max 5MB. The AI will tailor questions based on your resume.</p>
                <ResumeUpload
                  onParsed={setResumeText}
                  onError={() => setResumeText(null)}
                />
              </div>

              {/* Interview Config Card */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl p-6">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">Interview Configuration</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Set the context for your interview session.</p>
                <InterviewSetup config={config} onChange={setConfig} errors={configErrors} />
              </div>

              {/* Start Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleStartInterview}
                  disabled={isStarting}
                  className="px-10 py-3.5 bg-gradient-to-r from-indigo-500 to-sky-400 dark:from-indigo-700 dark:to-sky-600 text-white rounded-full font-bold text-base shadow-xl hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-700"
                >
                  {isStarting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Initializing Interview...
                    </span>
                  ) : 'Start Interview'}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ACTIVE INTERVIEW STAGE */}
          {stage === STAGE.ACTIVE && (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              {/* Interview Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-4 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-md">
                <div className="flex flex-wrap gap-3">
                  <InfoBadge label="Company" value={config.companyName} />
                  <InfoBadge label="Role" value={config.jobRole} />
                  <InfoBadge label="Type" value={config.interviewType} />
                  <InfoBadge label="Level" value={config.experienceLevel} />
                </div>
                <button
                  onClick={handleEndInterview}
                  disabled={isEnding}
                  className="px-5 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700 rounded-full text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-900/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isEnding ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                      Generating Feedback...
                    </span>
                  ) : 'End Interview'}
                </button>
              </div>

              {/* Chat Window */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-xl overflow-hidden">
                <div className="h-[420px] overflow-y-auto">
                  <ChatWindow messages={messages} isTyping={isTyping} />
                </div>

                {/* Input Area */}
                <div className="border-t border-indigo-100 dark:border-gray-700 px-4 py-3 flex gap-3 items-end bg-white/80 dark:bg-gray-800/80">
                  <textarea
                    ref={inputRef}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your answer here... (Enter to send)"
                    rows={2}
                    disabled={isTyping}
                    className="flex-1 resize-none px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition disabled:opacity-60"
                  />
                  {/* <button
                    onClick={handleSend}
                    disabled={isTyping || !userInput.trim()}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-white flex items-center justify-center shadow-md hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button> */}
                  <button
  onClick={handleSend}
  disabled={isTyping || !userInput.trim()}
  className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-white flex items-center justify-center shadow-xl hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
  aria-label="Send message"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={4}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h18m-7-7l7 7-7 7"
    />
  </svg>
</button>
                </div>
              </div>

              {/* Message count */}
              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-2">
                {Math.floor(messages.filter(m => m.role === 'user').length)} answer{messages.filter(m => m.role === 'user').length !== 1 ? 's' : ''} given
              </p>
            </motion.div>
          )}

          {/* FEEDBACK STAGE */}
          {stage === STAGE.FEEDBACK && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <FeedbackPanel feedback={feedback} onRetry={handleRetry} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Step indicator component
function StepIndicator({ stage }) {
  const steps = [
    { key: STAGE.SETUP, label: 'Setup' },
    { key: STAGE.ACTIVE, label: 'Interview' },
    { key: STAGE.FEEDBACK, label: 'Feedback' },
  ];
  const currentIdx = steps.findIndex(s => s.key === stage);

  return (
    <div className="flex items-center justify-center gap-0 mt-2">
      {steps.map((step, idx) => (
        <React.Fragment key={step.key}>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
              ${idx < currentIdx ? 'bg-indigo-600 border-indigo-600 text-white' : ''}
              ${idx === currentIdx ? 'bg-white dark:bg-gray-800 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-md' : ''}
              ${idx > currentIdx ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400' : ''}
            `}>
              {idx < currentIdx ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : idx + 1}
            </div>
            <span className={`text-xs mt-1 font-medium ${idx === currentIdx ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}`}>
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`w-16 h-0.5 mb-4 mx-1 transition-all duration-300 ${idx < currentIdx ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Small info badge
function InfoBadge({ label, value }) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="text-gray-400 dark:text-gray-500">{label}:</span>
      <span className="font-semibold text-gray-700 dark:text-gray-200">{value}</span>
    </div>
  );
}
