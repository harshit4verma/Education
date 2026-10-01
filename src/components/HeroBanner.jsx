import React from 'react';
import { Sparkles, Play, Award, Bot, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroBanner({ selectedClass, onOpenExam, onExploreAnimations, completedCount }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white border border-indigo-400/30 p-6 md:p-10 shadow-xl shadow-indigo-600/15">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-pink-400/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left text description */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-indigo-100 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Class {selectedClass} CBSE & NCERT Animated Curriculum</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Learn with <span className="bg-gradient-to-r from-amber-300 via-orange-200 to-yellow-300 bg-clip-text text-transparent">3D Animations</span>,
            Test with <span className="bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">AI Diagnostic Proctor</span>.
          </h1>

          <p className="text-indigo-100 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Explore animated modules for Mathematics, Science, English, and Hindi. Complete your weekly animated modules, then take the Weekly Exam where our AI observes your mistakes and delivers brief, clear remedial examples so both you and your teacher know exactly what to focus on!
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenExam}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 transition-all active:scale-95 border border-white/20"
            >
              <Award className="w-5 h-5" />
              <span>Launch Week 1 AI Exam</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExploreAnimations}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/30 text-sm font-bold shadow-sm transition-all"
            >
              <Play className="w-4 h-4 text-amber-300 fill-current" />
              <span>Explore Interactive Labs</span>
            </button>
          </div>

          {/* Highlights checklist */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-indigo-100 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>NCERT Book Solutions & Visuals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-amber-300" />
              <span>AI Mistake Radar & Brief Examples</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-pink-200" />
              <span>Math, Science, English, Hindi</span>
            </div>
          </div>
        </div>

        {/* Right Feature Card previewing the AI Mistake Feature */}
        <div className="lg:col-span-4">
          <div className="bg-white/15 border border-white/25 rounded-2xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold text-white">AI Observer Preview</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/25 text-emerald-100 font-bold border border-emerald-300/30">
                Active
              </span>
            </div>

            <div className="mt-3 space-y-2.5 text-xs">
              <div className="text-[11px] text-indigo-100 font-medium">
                Example Diagnostic Report:
              </div>

              <div className="p-2.5 rounded-xl bg-rose-500/25 border border-rose-400/40 text-rose-100">
                <span className="font-bold block text-[11px]">⚠️ Mistake in Algebra (Linear Eq):</span>
                <span className="text-[10px] text-rose-100">
                  You added 7 instead of subtracting 7 during transposition!
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-500/25 border border-emerald-400/40 text-emerald-100">
                <span className="font-bold block text-[11px]">✅ Brief Correct NCERT Example:</span>
                <span className="text-[10px] font-mono text-emerald-100 font-bold">
                  3x + 7 = 22 ➜ 3x = 22 - 7 = 15 ➜ x = 5
                </span>
              </div>

              <div className="text-[10px] text-indigo-200 italic pt-1">
                "Teacher & student both get informed on what point the mistake occurred and how to focus on it."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
