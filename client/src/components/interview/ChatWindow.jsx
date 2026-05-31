import React, { useEffect, useRef } from 'react';

// Typing animation dots
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

function Message({ role, content }) {
  const isAI = role === 'assistant';
  return (
    <div className={`flex gap-3 ${isAI ? 'justify-start' : 'justify-end'} animate-fadeInUp`}>
      {isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isAI
            ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-indigo-100 dark:border-gray-700 rounded-tl-sm'
            : 'bg-gradient-to-br from-indigo-500 to-sky-400 text-white rounded-tr-sm'
          }`}
      >
        {content}
      </div>
      {!isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function ChatWindow({ messages, isTyping }) {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto px-4 py-4 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-gray-700">
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content} />
      ))}
      {isTyping && (
        <div className="flex gap-3 justify-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
            </svg>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-indigo-100 dark:border-gray-700 rounded-2xl rounded-tl-sm shadow-sm">
            <TypingIndicator />
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
