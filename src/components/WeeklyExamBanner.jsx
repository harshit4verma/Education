import React from 'react';
import { Award, Bot, Sparkles, BrainCircuit, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function WeeklyExamBanner({ onOpenExam, completedCount, totalCount, selectedClass }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50 via-white to-indigo-50 border-2 border-amber-300/80 p-6 md:p-8 shadow-lg shadow-amber-500/5 text-slate-800">
      {/* Background glow effects */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side: Icon & Details */}
        <div className="flex items-start gap-4 md:gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 p-0.5 shadow-lg shadow-amber-500/20 shrink-0">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Award className="w-8 h-8 text-amber-500 animate-bounce" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                Weekly NCERT Exam Arena
              </span>
              <span className="text-xs text-slate-500 font-medium">
                • Conducted weekly after video completion
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Class {selectedClass} Weekly Diagnostic Exam with AI Observer
            </h3>

            <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
              While you take the exam, our <strong className="text-indigo-600">AI Observer</strong> tracks your answers to detect exactly which subtopics you make mistakes in (like Algebra transposition, Cell organelles, or Sandhi rules). When your results come out, the AI presents a <strong className="text-amber-700">brief example of your mistake</strong> and informs both you and your teacher what you need to focus on next!
            </p>

            {/* Video progress indicator towards exam */}
            <div className="flex items-center gap-3 pt-1">
              <div className="text-xs font-semibold text-slate-600">
                Completed Lessons: <span className="text-emerald-600 font-bold">{completedCount}</span> / {totalCount}
              </div>
              <span className="text-slate-300">|</span>
              <div className="text-xs text-indigo-700 font-semibold flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-indigo-600" />
                <span>AI Cognitive Mistake Analyzer Enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2.5">
          <button
            onClick={onOpenExam}
            className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-sm rounded-2xl shadow-lg shadow-orange-500/25 transition-all active:scale-95 flex items-center justify-center gap-3 border border-white/20"
          >
            <BrainCircuit className="w-5 h-5 text-amber-100" />
            <span>Click to Take Weekly Exam</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <div className="text-center text-[11px] text-slate-500 font-medium">
            ⏱️ 10–15 Mins • Multiple Choice • Transmitted to Teacher
          </div>
        </div>
      </div>
    </div>
  );
}
