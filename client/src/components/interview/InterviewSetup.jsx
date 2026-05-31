import React from 'react';

const EXPERIENCE_LEVELS = ['Fresher', 'Junior (1-2 years)', 'Mid-level (3-5 years)', 'Senior (5+ years)'];
const INTERVIEW_TYPES = ['Technical', 'HR', 'Behavioral', 'Mixed'];

export default function InterviewSetup({ config, onChange, errors }) {
  const handleChange = (field, value) => {
    onChange({ ...config, [field]: value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* Company Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Company Name</label>
        <input
          type="text"
          placeholder="e.g. Google, Amazon, Infosys"
          value={config.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          className={`px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition
            ${errors?.companyName ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'}`}
        />
        {errors?.companyName && <p className="text-xs text-red-500">{errors.companyName}</p>}
      </div>

      {/* Job Role */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Job Role</label>
        <input
          type="text"
          placeholder="e.g. Software Engineer, Backend Developer"
          value={config.jobRole}
          onChange={(e) => handleChange('jobRole', e.target.value)}
          className={`px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition
            ${errors?.jobRole ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'}`}
        />
        {errors?.jobRole && <p className="text-xs text-red-500">{errors.jobRole}</p>}
      </div>

      {/* Experience Level */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Experience Level</label>
        <select
          value={config.experienceLevel}
          onChange={(e) => handleChange('experienceLevel', e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          {EXPERIENCE_LEVELS.map((lvl) => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
      </div>

      {/* Interview Type */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Interview Type</label>
        <div className="grid grid-cols-2 gap-2">
          {INTERVIEW_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange('interviewType', type)}
              className={`py-2 px-3 rounded-xl text-sm font-medium border transition-all duration-200
                ${config.interviewType === type
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
