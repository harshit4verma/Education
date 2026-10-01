import React, { useState } from 'react';
import { X, Bot, BrainCircuit, CheckCircle, XCircle, ArrowRight, BookOpen, Target, Sparkles } from 'lucide-react';

export default function MistakeDemoModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState('question'); // 'question', 'observed', 'briefExample'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">How AI Observes & Explains Your Mistakes</h3>
              <p className="text-xs text-slate-400">Step-by-step example in Class 8 NCERT Mathematics (Algebra)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-xs md:text-sm">
          {/* Progress Steps */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className={`flex items-center gap-2 font-bold ${activeStep === 'question' ? 'text-blue-400' : 'text-slate-400'}`}>
              <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">1</span>
              <span>Student Takes Test</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className={`flex items-center gap-2 font-bold ${activeStep === 'observed' ? 'text-indigo-400' : 'text-slate-400'}`}>
              <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">2</span>
              <span>AI Observes Mistake</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className={`flex items-center gap-2 font-bold ${activeStep === 'briefExample' ? 'text-emerald-400' : 'text-slate-400'}`}>
              <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">3</span>
              <span>Brief Example & Focus</span>
            </div>
          </div>

          {/* Step 1: The Question */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Exam Scenario: Math Algebra Question
            </div>
            <div className="text-base font-semibold text-white">
              Solve for x: <span className="text-amber-400 font-mono">3x + 7 = 22</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                A) x = 5 (Correct)
              </div>
              <div className="p-2.5 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-rose-200 font-bold flex items-center justify-between">
                <span>B) x = 29/3 (Student's Choice)</span>
                <XCircle className="w-4 h-4 text-rose-400" />
              </div>
            </div>
          </div>

          {/* Step 2: What the AI Observer noticed */}
          <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>What the AI Observer detected:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "The student added 7 to 22 instead of subtracting it (3x = 22 + 7 = 29). This indicates a <span className="text-amber-300 font-semibold">transposition sign error in Algebra</span>. The student needs a brief comparative example to clarify sign flipping across the '=' sign."
            </p>
          </div>

          {/* Step 3: The Brief Example */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>AI Brief Example & Focus Recommendation:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-rose-950/30 border border-rose-500/40 rounded-xl text-rose-300">
                <span className="text-[10px] font-sans font-bold uppercase text-rose-400 block mb-1">
                  ❌ Where You Made The Mistake:
                </span>
                3x + 7 = 22<br />
                3x = 22 + 7  (Mistake: +7 remained +)<br />
                3x = 29 ➜ x = 29/3
              </div>

              <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-emerald-300">
                <span className="text-[10px] font-sans font-bold uppercase text-emerald-400 block mb-1">
                  ✅ Correct NCERT Rule:
                </span>
                3x + 7 = 22<br />
                3x = 22 - 7  (Rule: +7 becomes -7)<br />
                3x = 15 ➜ x = 15/3 = 5
              </div>
            </div>

            <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl text-xs text-indigo-200 flex items-start gap-2">
              <Target className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>What you have to focus on:</strong> Whenever transposing across '=', reverse the sign (+ to -, - to +, × to ÷).
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow"
          >
            Got It! Return to Academy
          </button>
        </div>
      </div>
    </div>
  );
}
