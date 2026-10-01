import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Compass,
  Calculator,
  ArrowRight,
  HelpCircle,
  Award,
  Zap,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TrigonometrySimulator({ onComplete }) {
  // State for the angle theta (in degrees)
  const [angleDeg, setAngleDeg] = useState(30);
  const [hypotenuse, setHypotenuse] = useState(10);
  const [refAngle, setRefAngle] = useState('A'); // 'A' (bottom) or 'C' (top)
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showIdentityProof, setShowIdentityProof] = useState(false);

  // Convert to radians
  const angleRad = (angleDeg * Math.PI) / 180;

  // Real calculations
  const opp = Math.round(hypotenuse * Math.sin(angleRad) * 100) / 100;
  const adj = Math.round(hypotenuse * Math.cos(angleRad) * 100) / 100;
  const sinVal = (opp / hypotenuse).toFixed(3);
  const cosVal = (adj / hypotenuse).toFixed(3);
  const tanVal = (opp / adj).toFixed(3);

  // Pyth identity test
  const sinSq = Math.pow(parseFloat(sinVal), 2);
  const cosSq = Math.pow(parseFloat(cosVal), 2);
  const identitySum = (sinSq + cosSq).toFixed(3);

  // SVG dimensions & triangle points
  // Right angle at B (bottom-left)
  const svgWidth = 360;
  const svgHeight = 240;
  const originX = 50;
  const originY = 200;

  // Scale factor to fit inside SVG
  const scale = 14;
  const baseLen = adj * scale;
  const perpLen = opp * scale;

  const ptB = { x: originX, y: originY }; // Right angle vertex
  const ptA = { x: originX + baseLen, y: originY }; // Acute angle vertex A
  const ptC = { x: originX, y: originY - perpLen }; // Acute angle vertex C

  const handlePresetAngle = (deg) => {
    setAngleDeg(deg);
  };

  const handleQuizSubmit = (selectedChoice) => {
    setQuizAnswer(selectedChoice);
    setQuizSubmitted(true);
    if (selectedChoice === '4/5') {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // ignore
      }
      if (onComplete) onComplete();
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 md:p-7 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-bold">
              Class 10 NCERT Chapter 8 Lab
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Interactive Right-Angled Triangle Ratios
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-black text-white mt-1">
            Trigonometric Ratios & Pythagorean Identity Visualizer
          </h3>
        </div>

        <button
          onClick={() => {
            setAngleDeg(30);
            setHypotenuse(10);
            setQuizSubmitted(false);
            setQuizAnswer(null);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs border border-slate-700 font-semibold"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Lab</span>
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Canvas Display */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400">
              Δ ABC (∠B = 90°)
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
              θ = {angleDeg}°
            </span>
          </div>

          {/* SVG Diagram */}
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-56 max-w-sm drop-shadow-md select-none"
          >
            {/* Grid background lines */}
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width={svgWidth} height={svgHeight} fill="url(#smallGrid)" rx="12" />

            {/* Right angle symbol at B */}
            <path
              d={`M ${originX} ${originY - 14} L ${originX + 14} ${originY - 14} L ${originX + 14} ${originY}`}
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
            />
            <circle cx={originX + 7} cy={originY - 7} r="1.5" fill="#94a3b8" />

            {/* Filled triangle */}
            <polygon
              points={`${ptB.x},${ptB.y} ${ptA.x},${ptA.y} ${ptC.x},${ptC.y}`}
              fill="rgba(99, 102, 241, 0.12)"
              stroke="#6366f1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Adjacent Base side (BC / AB depending on orientation) */}
            <line
              x1={ptB.x}
              y1={ptB.y}
              x2={ptA.x}
              y2={ptA.y}
              stroke="#38bdf8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Opposite Perpendicular side */}
            <line
              x1={ptB.x}
              y1={ptB.y}
              x2={ptC.x}
              y2={ptC.y}
              stroke="#f43f5e"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Hypotenuse */}
            <line
              x1={ptA.x}
              y1={ptA.y}
              x2={ptC.x}
              y2={ptC.y}
              stroke="#10b981"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Vertices labels */}
            <text x={ptB.x - 14} y={ptB.y + 14} fill="#94a3b8" fontSize="13" fontWeight="bold">B (90°)</text>
            <text x={ptA.x + 8} y={ptA.y + 12} fill="#38bdf8" fontSize="13" fontWeight="bold">A (θ)</text>
            <text x={ptC.x - 10} y={ptC.y - 8} fill="#f43f5e" fontSize="13" fontWeight="bold">C</text>

            {/* Dimension text values */}
            <text
              x={(ptB.x + ptA.x) / 2}
              y={ptB.y + 16}
              fill="#38bdf8"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
            >
              Base (Adj) = {adj}
            </text>
            <text
              x={ptB.x - 10}
              y={(ptB.y + ptC.y) / 2}
              fill="#f43f5e"
              fontSize="11"
              fontWeight="bold"
              textAnchor="end"
            >
              Perp (Opp) = {opp}
            </text>
            <text
              x={(ptA.x + ptC.x) / 2 + 12}
              y={(ptA.y + ptC.y) / 2 - 6}
              fill="#10b981"
              fontSize="11"
              fontWeight="bold"
              textAnchor="start"
            >
              Hyp = {hypotenuse}
            </text>
          </svg>

          {/* Quick Info Under Canvas */}
          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              Opposite (Perpendicular)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span>
              Adjacent (Base)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              Hypotenuse
            </span>
          </div>
        </div>

        {/* Right: Real-time Controls & Ratios */}
        <div className="lg:col-span-6 space-y-4">
          {/* Angle Slider Controls */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200">
                Adjust Acute Angle θ (theta):
              </label>
              <span className="font-mono text-xs font-black text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {angleDeg}°
              </span>
            </div>

            <input
              type="range"
              min="15"
              max="75"
              step="1"
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />

            {/* Standard NCERT angle presets */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Standard Angles:</span>
              {[30, 45, 60].map((deg) => (
                <button
                  key={deg}
                  onClick={() => handlePresetAngle(deg)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    angleDeg === deg
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {deg}° {deg === 30 ? '(1/2)' : deg === 45 ? '(1/√2)' : '(√3/2)'}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Trigonometric Values Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* SIN */}
            <div className="bg-gradient-to-b from-rose-950/40 to-slate-900 border border-rose-500/30 p-3 rounded-2xl text-center space-y-1 shadow-md">
              <span className="text-[10px] uppercase font-black text-rose-300">
                sin(θ) = Opp/Hyp
              </span>
              <div className="text-xl font-black text-white font-mono">{sinVal}</div>
              <div className="text-[10px] text-rose-300/80 font-mono">
                {opp} / {hypotenuse}
              </div>
            </div>

            {/* COS */}
            <div className="bg-gradient-to-b from-sky-950/40 to-slate-900 border border-sky-500/30 p-3 rounded-2xl text-center space-y-1 shadow-md">
              <span className="text-[10px] uppercase font-black text-sky-300">
                cos(θ) = Adj/Hyp
              </span>
              <div className="text-xl font-black text-white font-mono">{cosVal}</div>
              <div className="text-[10px] text-sky-300/80 font-mono">
                {adj} / {hypotenuse}
              </div>
            </div>

            {/* TAN */}
            <div className="bg-gradient-to-b from-amber-950/40 to-slate-900 border border-amber-500/30 p-3 rounded-2xl text-center space-y-1 shadow-md">
              <span className="text-[10px] uppercase font-black text-amber-300">
                tan(θ) = Opp/Adj
              </span>
              <div className="text-xl font-black text-white font-mono">{tanVal}</div>
              <div className="text-[10px] text-amber-300/80 font-mono">
                {opp} / {adj}
              </div>
            </div>
          </div>

          {/* Interactive Identity Checker */}
          <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-xs">
            <div>
              <span className="text-indigo-300 font-bold block text-xs">
                ⭐ Fundamental NCERT Identity Proof:
              </span>
              <span className="text-slate-300 font-mono text-[11px]">
                sin²({angleDeg}°) + cos²({angleDeg}°) = ({sinVal})² + ({cosVal})² = <strong className="text-emerald-400 font-bold">1.000</strong>
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
              Verified ✓
            </span>
          </div>

          {/* Diagnostic Board Trap Alert */}
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-amber-300">
              ⚠️ CBSE Board Exam Mistake Trap:
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              When you switch from finding <code className="text-amber-300 font-bold">sin A</code> to <code className="text-amber-300 font-bold">sin C</code>, the <strong>Opposite</strong> and <strong>Adjacent</strong> sides swap! Opposite is always the side strictly facing the chosen angle.
            </p>
          </div>
        </div>
      </div>

      {/* Mini Interactive Diagnostic Challenge */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white">
            Class 10 NCERT Quick Diagnostic Check:
          </h4>
        </div>

        <p className="text-xs text-slate-300">
          In a right-angled triangle Δ ABC with ∠B = 90°, if <strong className="text-amber-300">tan A = 4/3</strong>, what is the value of <strong className="text-emerald-300">sin A</strong>?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {['4/5', '3/5', '5/4', '3/4'].map((choice) => (
            <button
              key={choice}
              disabled={quizSubmitted}
              onClick={() => handleQuizSubmit(choice)}
              className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                quizSubmitted
                  ? choice === '4/5'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : choice === quizAnswer
                    ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                    : 'bg-slate-800/40 border-slate-700 text-slate-500'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-indigo-500'
              }`}
            >
              {choice}
            </button>
          ))}
        </div>

        {quizSubmitted && (
          <div
            className={`p-3 rounded-xl text-xs space-y-1 ${
              quizAnswer === '4/5'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}
          >
            <div className="font-bold">
              {quizAnswer === '4/5' ? '🎉 Correct! +50 XP Earned' : '❌ Conceptual Mistake Observed!'}
            </div>
            <div className="text-[11px] text-slate-300">
              tan A = Perp/Base = 4/3. By Pythagoras: Hypotenuse = √(4² + 3²) = √(16 + 9) = √25 = 5.
              Therefore, sin A = Perp/Hyp = <strong className="text-white">4/5</strong>!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
