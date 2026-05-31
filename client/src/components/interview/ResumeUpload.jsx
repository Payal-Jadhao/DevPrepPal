import React, { useState, useRef } from 'react';
import { parseResume } from '../../services/api';

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = ['.pdf', '.docx'];

export default function ResumeUpload({ onParsed, onError }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  const validateFile = (f) => {
    const ext = '.' + f.name.split('.').pop().toLowerCase();
    if (!ALLOWED_TYPES.includes(ext)) {
      return 'Only PDF and DOCX files are supported.';
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      return `File size must be under ${MAX_SIZE_MB}MB.`;
    }
    return null;
  };

  const handleFile = async (f) => {
    setUploadError('');
    setSuccess(false);
    const err = validateFile(f);
    if (err) {
      setUploadError(err);
      onError && onError(err);
      return;
    }
    setFile(f);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('resume', f);
      const res = await parseResume(formData);
      setSuccess(true);
      onParsed && onParsed(res.data.resumeText);
    } catch (e) {
      const msg = e.response?.data?.message || 'Failed to parse resume. Please try again.';
      setUploadError(msg);
      onError && onError(msg);
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const onInputChange = (e) => {
    const f = e.target.files[0];
    if (f) handleFile(f);
  };

  const reset = () => {
    setFile(null);
    setSuccess(false);
    setUploadError('');
    onParsed && onParsed(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full">
      {!success ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => !loading && inputRef.current?.click()}
          className={`relative flex flex-col items-center justify-center w-full min-h-[180px] rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer
            ${dragging
              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 scale-[1.01]'
              : 'border-indigo-200 dark:border-indigo-700 bg-white/60 dark:bg-gray-800/60 hover:border-indigo-400 hover:bg-indigo-50/60 dark:hover:bg-indigo-900/10'
            }
            ${loading ? 'pointer-events-none opacity-70' : ''}
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={onInputChange}
          />
          {loading ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
              <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">Parsing resume...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 px-6 py-8 text-center">
              <svg className="w-12 h-12 text-indigo-400 dark:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Drag and drop your resume here, or <span className="text-indigo-600 dark:text-indigo-400 underline">browse</span>
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">PDF or DOCX, max {MAX_SIZE_MB}MB</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">Resume uploaded successfully</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">{file?.name}</p>
            </div>
          </div>
          <button
            onClick={reset}
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition underline"
          >
            Change
          </button>
        </div>
      )}
      {uploadError && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400">{uploadError}</p>
      )}
    </div>
  );
}
