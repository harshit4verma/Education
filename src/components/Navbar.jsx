import React from 'react';
import {
  Sparkles,
  Award,
  Search,
  BookOpen,
  Flame,
  Zap,
  GraduationCap,
  Users,
  User,
  LogIn
} from 'lucide-react';

export default function Navbar({
  selectedClass,
  onSelectClass,
  onOpenExam,
  onOpenTeacherPortal,
  onOpenAuthModal,
  currentUser,
  searchQuery,
  onSearchChange,
  studentStats
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-indigo-600 animate-float" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                NCERT AnimAcademy
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                CBSE 6-10
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
              3D Animated NCERT Lessons, Books & AI Diagnostic Proctor
            </p>
          </div>
        </div>

        {/* Class Selector Pills (Class 6 to Class 10) */}
        <div className="hidden md:flex items-center bg-slate-100/80 border border-slate-200 p-1 rounded-2xl">
          {[6, 7, 8, 9, 10].map((lvl) => (
            <button
              key={lvl}
              onClick={() => onSelectClass(lvl)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                selectedClass === lvl
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              Class {lvl}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="hidden lg:flex items-center relative w-60">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Algebra, Cells, Tenses..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Student Profile / Login Button */}
          {currentUser ? (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 transition-all text-left"
              title="Click to Switch Student Profile or Register"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="font-bold text-slate-900 truncate max-w-[100px]">{currentUser.name}</div>
                <div className="text-[10px] text-indigo-600 font-semibold">Class {currentUser.classLevel}</div>
              </div>
            </button>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-all"
            >
              <LogIn className="w-3.5 h-3.5 text-indigo-600" />
              <span>Login / Register</span>
            </button>
          )}

          {/* TEACHER & ADMIN PORTAL BUTTON */}
          <button
            onClick={onOpenTeacherPortal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-indigo-700 border border-indigo-200 shadow-sm transition-all active:scale-95 group"
            title="Teacher & Admin Diagnostic Portal"
          >
            <Users className="w-3.5 h-3.5 text-indigo-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Teacher / Admin Portal</span>
            <span className="sm:hidden">Teacher</span>
          </button>

          {/* PROMINENT WEEKLY EXAM BUTTON */}
          <button
            onClick={onOpenExam}
            className="relative group flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 shadow-md shadow-orange-500/20 transition-all active:scale-95 border border-white/20"
            title="Take Weekly NCERT Diagnostic Exam"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white"></span>
            </span>

            <Award className="w-4 h-4 text-amber-100 group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] text-amber-100 uppercase tracking-wider font-bold">
                Weekly Exam
              </span>
              <span className="text-xs font-black">AI Arena</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Class Selector Bar */}
      <div className="md:hidden px-4 py-2 border-t border-slate-200/80 bg-slate-50/90 flex items-center justify-between">
        <span className="text-[11px] font-bold text-slate-500 uppercase">Select Class:</span>
        <div className="flex gap-1.5 overflow-x-auto">
          {[6, 7, 8, 9, 10].map((lvl) => (
            <button
              key={lvl}
              onClick={() => onSelectClass(lvl)}
              className={`px-2.5 py-1 rounded-lg text-xs font-black whitespace-nowrap transition-all ${
                selectedClass === lvl
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Class {lvl}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
