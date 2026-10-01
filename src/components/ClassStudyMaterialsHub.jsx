import React, { useState } from 'react';
import {
  BookOpen,
  Play,
  ExternalLink,
  Award,
  Sparkles,
  ChevronRight,
  Download,
  Layers,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { CLASS_STUDY_MATERIALS } from '../data/ncertStudyMaterials';

export default function ClassStudyMaterialsHub({ selectedClass, onPlayVideo, onOpenExam, allVideos }) {
  const classData = CLASS_STUDY_MATERIALS[selectedClass] || CLASS_STUDY_MATERIALS[8];
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);

  const currentBook = classData.officialBooks[selectedBookIndex] || classData.officialBooks[0];

  const handleLaunchVideo = (chapter) => {
    if (chapter.videoId && allVideos) {
      const match = allVideos.find((v) => v.id === chapter.videoId);
      if (match) {
        onPlayVideo(match);
        return;
      }
    }
    // Fallback: search for video by topic or class
    if (allVideos) {
      const fallback = allVideos.find((v) => v.classLevel === selectedClass && v.subjectId === currentBook.subjectId);
      if (fallback) onPlayVideo(fallback);
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 p-6 md:p-8 space-y-6 overflow-hidden relative">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-100/50 to-pink-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100/40 to-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 shadow-sm">
              Official Class {selectedClass} NCERT Curriculum Hub
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Source: <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noreferrer" className="text-indigo-600 underline font-semibold hover:text-indigo-700">ncert.nic.in</a>
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-2">
            Class {selectedClass} NCERT Textbooks & Animated Study Material
          </h3>

          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mt-1">
            {classData.motto}
          </p>
        </div>

        <button
          onClick={onOpenExam}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/20 active:scale-95 transition-all self-start md:self-auto shrink-0"
        >
          <Award className="w-4 h-4" />
          <span>Launch Class {selectedClass} AI Exam</span>
        </button>
      </div>

      {/* Textbook Selector Tabs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {classData.officialBooks.map((book, idx) => (
          <button
            key={book.id}
            onClick={() => setSelectedBookIndex(idx)}
            className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden group ${
              selectedBookIndex === idx
                ? 'bg-gradient-to-br from-indigo-50/90 to-purple-50/90 border-indigo-300 shadow-md ring-2 ring-indigo-500/20'
                : 'bg-slate-50/80 hover:bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-black">
              <span>
                {book.subjectId === 'math' ? '📐' : book.subjectId === 'science' ? '🔬' : book.subjectId === 'english' ? '📚' : '✍️'}
              </span>
              <span className={`truncate ${selectedBookIndex === idx ? 'text-indigo-700 font-extrabold' : 'text-slate-800'}`}>
                {book.title.split('(')[0]}
              </span>
            </div>

            <div className="text-[11px] text-slate-500 truncate mt-1">
              {book.hindiTitle}
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-2">
              <span>{book.chaptersCount} Units</span>
              <span className="text-indigo-600 group-hover:translate-x-0.5 transition-transform">View →</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Book Deep-Dive & Chapter-Wise Animated Modules */}
      <div className="relative z-10 bg-gradient-to-br from-slate-50/90 to-indigo-50/30 rounded-2xl border border-slate-200/80 p-5 md:p-6 space-y-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 border-b border-slate-200 pb-5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-20 rounded-xl overflow-hidden shadow-md shrink-0 border border-slate-200">
              <img
                src={currentBook.coverImage}
                alt={currentBook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  {currentBook.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">
                  NCERT Code: {currentBook.code}
                </span>
              </div>

              <h4 className="text-lg md:text-xl font-black text-slate-900">
                {currentBook.title}
              </h4>

              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                {currentBook.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full lg:w-auto">
            <a
              href={currentBook.ncertUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-200 rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span>Original NCERT PDF Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Chapter-Wise Animated Videos & NCERT Link Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Chapter-Wise NCERT Material & Animated Video Modules:</span>
            <span className="text-slate-400 font-normal">Click play to watch 3D animation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentBook.chapters.map((chap) => (
              <div
                key={chap.num}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600 mb-1">
                    <span>Unit / Chapter {chap.num}</span>
                    {chap.author && (
                      <span className="text-slate-400 font-normal truncate max-w-[120px]">
                        {chap.author}
                      </span>
                    )}
                  </div>

                  <h5 className="text-xs md:text-sm font-bold text-slate-900 leading-snug">
                    {chap.title}
                  </h5>

                  <p className="text-[11px] text-slate-500 mt-1">
                    Topic: <strong className="text-slate-700">{chap.topic}</strong>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={chap.ncertLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1"
                  >
                    <span>Read NCERT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleLaunchVideo(chap)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Animation</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
