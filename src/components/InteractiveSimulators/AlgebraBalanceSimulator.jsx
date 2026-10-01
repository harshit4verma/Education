import React, { useState } from 'react';
import { Scale, RefreshCw, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

export default function AlgebraBalanceSimulator({ onComplete }) {
  // Simulating 3x + 7 = 22
  const [step, setStep] = useState(0); // 0: start (3x + 7 = 22), 1: subtracted 7 (3x = 15), 2: divided by 3 (x = 5)
  const [userAction, setUserAction] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleStep1Choice = (choice) => {
    setUserAction(choice);
    if (choice === 'subtract-7') {
      setStep(1);
      setFeedback({
        type: 'success',
        text: '🎉 Brilliant! Subtracting 7 from both sides removes the constant term and balances the scale! Notice: 22 - 7 = 15.'
      });
    } else if (choice === 'add-7') {
      setFeedback({
        type: 'error',
        text: '❌ Common Mistake! If you ADD 7 to both sides, the scale becomes unbalanced or 3x + 14 = 29! Transposing +7 requires subtracting 7.'
      });
    }
  };

  const handleStep2Choice = (choice) => {
    setUserAction(choice);
    if (choice === 'divide-3') {
      setStep(2);
      setFeedback({
        type: 'success',
        text: '🌟 Perfect! Dividing both sides by 3 isolates 1 single x = 5! You have mastered linear transposition!'
      });
      if (onComplete) onComplete();
    } else {
      setFeedback({
        type: 'error',
        text: '❌ Notice: 3 is multiplied by x. The opposite inverse operation of multiplication is DIVISION, not subtraction.'
      });
    }
  };

  const reset = () => {
    setStep(0);
    setUserAction(null);
    setFeedback(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
            <Scale className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              Interactive NCERT Animation: The Algebra Balance Scale
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Class 8 Chapter 2
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Visualizing equation <span className="text-amber-400 font-mono font-bold">3x + 7 = 22</span>
            </p>
          </div>
        </div>

        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Scale
        </button>
      </div>

      {/* Visual Balance Scale */}
      <div className="relative h-64 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex flex-col justify-end p-6 overflow-hidden">
        {/* Background grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

        {/* Central Fulcrum */}
        <div className="absolute left-1/2 bottom-12 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-amber-500/80 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-24 h-4 bg-slate-700 rounded-full" />

        {/* Horizontal Beam */}
        <div className="absolute left-16 right-16 bottom-[88px] h-3 bg-gradient-to-r from-blue-400 via-amber-400 to-blue-400 rounded-full shadow-lg transition-transform duration-700" />

        {/* Left Pan (LHS) */}
        <div className="absolute left-20 bottom-16 flex flex-col items-center">
          {/* Strings */}
          <div className="w-0.5 h-16 bg-slate-600 mb-0" />
          <div className="w-48 bg-slate-800 border-2 border-blue-500/50 rounded-xl p-3 shadow-xl backdrop-blur-sm">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-1.5 text-center">
              LHS (Left Pan)
            </div>
            
            <div className="flex items-center justify-center gap-2 flex-wrap min-h-[48px]">
              {step === 0 && (
                <>
                  <div className="flex gap-1">
                    <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded shadow">x</span>
                    <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded shadow">x</span>
                    <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded shadow">x</span>
                  </div>
                  <span className="text-slate-400 font-bold">+</span>
                  <div className="px-2.5 py-1 bg-amber-500/30 border border-amber-400 text-amber-200 text-xs font-mono font-bold rounded animate-bounce">
                    7 kg
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="flex gap-1.5 animate-pulse">
                  <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded">x</span>
                  <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded">x</span>
                  <span className="px-2 py-1 bg-blue-600/40 border border-blue-400 text-blue-200 text-xs font-mono font-bold rounded">x</span>
                  <span className="text-xs text-blue-300 font-mono ml-2 self-center font-bold">= 3x</span>
                </div>
              )}

              {step === 2 && (
                <div className="px-4 py-2 bg-emerald-500/30 border-2 border-emerald-400 text-emerald-200 text-base font-mono font-bold rounded-xl animate-bounce shadow-emerald-500/30 shadow-lg">
                  1x
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Pan (RHS) */}
        <div className="absolute right-20 bottom-16 flex flex-col items-center">
          <div className="w-0.5 h-16 bg-slate-600 mb-0" />
          <div className="w-48 bg-slate-800 border-2 border-emerald-500/50 rounded-xl p-3 shadow-xl backdrop-blur-sm">
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1.5 text-center">
              RHS (Right Pan)
            </div>

            <div className="flex items-center justify-center gap-2 min-h-[48px]">
              {step === 0 && (
                <div className="px-4 py-1.5 bg-emerald-500/30 border border-emerald-400 text-emerald-200 text-sm font-mono font-bold rounded">
                  22 kg
                </div>
              )}

              {step === 1 && (
                <div className="px-4 py-1.5 bg-emerald-500/30 border border-emerald-400 text-emerald-200 text-sm font-mono font-bold rounded animate-pulse">
                  15 kg <span className="text-xs text-slate-400">(22 - 7)</span>
                </div>
              )}

              {step === 2 && (
                <div className="px-4 py-2 bg-emerald-500/30 border-2 border-emerald-400 text-emerald-200 text-base font-mono font-bold rounded-xl animate-bounce shadow-emerald-500/30 shadow-lg">
                  5 kg <span className="text-xs text-emerald-300">(15 ÷ 3)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Step Explanation & Interactive Action Controls */}
      <div className="mt-6 space-y-4">
        {step === 0 && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-100 text-sm">Step 1: Isolate the Variable Term (3x)</h4>
                <p className="text-xs text-slate-300 mt-1">
                  On the left pan, we have <span className="text-amber-300 font-mono">3x + 7</span>. To keep only the <span className="text-blue-300 font-mono">3x</span> on the left pan, what operation should you perform to both sides?
                </p>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleStep1Choice('subtract-7')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-md transition-all active:scale-95"
                  >
                    Action A: Subtract 7 from both sides (Transposition)
                  </button>
                  <button
                    onClick={() => handleStep1Choice('add-7')}
                    className="px-4 py-2 bg-slate-700 hover:bg-rose-900/60 text-slate-300 text-xs font-semibold rounded-lg border border-slate-600 transition-all active:scale-95"
                  >
                    Action B: Add 7 to both sides
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-100 text-sm">Step 2: Solve for Single Variable (x)</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Now the equation is <span className="text-blue-300 font-mono">3x = 15</span>. Three boxes equal 15. How do you find the weight of just ONE box (x)?
                </p>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleStep2Choice('divide-3')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-md transition-all active:scale-95"
                  >
                    Action A: Divide both sides by 3 (x = 15 ÷ 3)
                  </button>
                  <button
                    onClick={() => handleStep2Choice('subtract-3')}
                    className="px-4 py-2 bg-slate-700 hover:bg-rose-900/60 text-slate-300 text-xs font-semibold rounded-lg border border-slate-600 transition-all active:scale-95"
                  >
                    Action B: Subtract 3 from 15
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <div>
                <h4 className="font-bold text-emerald-300 text-sm">Equation Solved: x = 5!</h4>
                <p className="text-xs text-slate-300">
                  Verification: 3(5) + 7 = 15 + 7 = 22. LHS = RHS verified!
                </p>
              </div>
            </div>
            <button
              onClick={reset}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Feedback Message */}
        {feedback && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2.5 ${
              feedback.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            )}
            <span>{feedback.text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
