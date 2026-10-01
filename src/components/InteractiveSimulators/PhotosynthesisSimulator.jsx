import React, { useState } from 'react';
import { Sun, CloudRain, Wind, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function PhotosynthesisSimulator() {
  const [sunlight, setSunlight] = useState(70);
  const [water, setWater] = useState(80);
  const [co2, setCo2] = useState(60);

  // Photosynthesis efficiency score
  const rate = Math.round((sunlight * 0.4 + water * 0.3 + co2 * 0.3));
  const glucoseProduced = Math.round(rate * 1.5);
  const o2Bubbles = Math.min(12, Math.floor(rate / 8));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              Interactive Plant Cell & Photosynthesis Lab
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                NCERT Science Class 7 & 8
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Formula: <span className="text-emerald-400 font-mono font-bold">6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ (Glucose) + 6O₂ (Oxygen)</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => { setSunlight(70); setWater(80); setCo2(60); }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Lab
        </button>
      </div>

      {/* Animated Visual Plant & Chloroplast Chamber */}
      <div className="relative h-64 bg-gradient-to-b from-sky-950/60 to-emerald-950/40 rounded-2xl border border-slate-800/80 flex items-center justify-center p-6 overflow-hidden">
        {/* Animated Sun in upper left */}
        <div
          className="absolute top-4 left-6 transition-all duration-500 flex flex-col items-center"
          style={{ opacity: 0.3 + (sunlight / 100) * 0.7 }}
        >
          <div className="w-16 h-16 rounded-full bg-amber-400 blur-sm animate-pulse" />
          <div className="absolute top-2 w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center shadow-[0_0_30px_#f59e0b]">
            <Sun className="w-8 h-8 text-amber-900 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
          <span className="text-[10px] font-bold text-amber-300 mt-1">Sunlight: {sunlight}%</span>
        </div>

        {/* Central Leaf Illustration */}
        <div className="relative z-10 flex flex-col items-center">
          <svg className="w-44 h-44 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]" viewBox="0 0 100 100">
            <path
              d="M 50 10 C 20 30 20 70 50 90 C 80 70 80 30 50 10 Z"
              fill={rate > 40 ? "#10b981" : "#84cc16"}
              stroke="#047857"
              strokeWidth="2.5"
            />
            {/* Midrib and veins */}
            <path d="M 50 10 L 50 90" stroke="#065f46" strokeWidth="2" />
            <path d="M 50 30 Q 35 40 28 45" stroke="#065f46" strokeWidth="1.2" fill="none" />
            <path d="M 50 30 Q 65 40 72 45" stroke="#065f46" strokeWidth="1.2" fill="none" />
            <path d="M 50 50 Q 35 60 28 65" stroke="#065f46" strokeWidth="1.2" fill="none" />
            <path d="M 50 50 Q 65 60 72 65" stroke="#065f46" strokeWidth="1.2" fill="none" />
          </svg>

          {/* O2 Bubbles floating up */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: o2Bubbles }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-cyan-400/70 border border-cyan-200 text-[9px] font-bold text-cyan-950 flex items-center justify-center animate-bounce shadow-md"
                style={{
                  top: `${15 + (i * 12) % 65}%`,
                  left: `${20 + (i * 22) % 65}%`,
                  animationDuration: `${1.2 + (i % 3) * 0.4}s`
                }}
              >
                O₂
              </div>
            ))}
          </div>

          <div className="mt-2 text-xs font-mono font-bold bg-slate-900/80 px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-300">
            🌿 Chloroplast Active: {rate}% Efficiency
          </div>
        </div>

        {/* Real-time stats on right */}
        <div className="absolute right-6 top-6 bg-slate-900/90 border border-slate-700 p-3 rounded-xl shadow-lg text-xs space-y-1.5 w-44">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-1">
            Production Output
          </div>
          <div className="flex justify-between items-center text-emerald-400">
            <span>Glucose (C₆H₁₂O₆):</span>
            <span className="font-mono font-bold">{glucoseProduced} mg</span>
          </div>
          <div className="flex justify-between items-center text-cyan-400">
            <span>Oxygen (O₂):</span>
            <span className="font-mono font-bold">{o2Bubbles * 2.5} mL/h</span>
          </div>
          <div className="flex justify-between items-center text-amber-400">
            <span>Energy Conversion:</span>
            <span className="font-mono font-bold">{rate}%</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-amber-400 mb-1.5">
            <span className="flex items-center gap-1.5"><Sun className="w-4 h-4" /> Sunlight Intensity</span>
            <span className="font-mono">{sunlight}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={sunlight}
            onChange={(e) => setSunlight(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-blue-400 mb-1.5">
            <span className="flex items-center gap-1.5"><CloudRain className="w-4 h-4" /> Water Supply (H₂O)</span>
            <span className="font-mono">{water}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={water}
            onChange={(e) => setWater(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
            <span className="flex items-center gap-1.5"><Wind className="w-4 h-4" /> Carbon Dioxide (CO₂)</span>
            <span className="font-mono">{co2}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={co2}
            onChange={(e) => setCo2(Number(e.target.value))}
            className="w-full accent-slate-400 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
