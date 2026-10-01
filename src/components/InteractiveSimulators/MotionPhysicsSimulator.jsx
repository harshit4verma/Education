import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Gauge, Zap } from 'lucide-react';

export default function MotionPhysicsSimulator() {
  const [initialVelocity, setInitialVelocity] = useState(0); // u (m/s)
  const [acceleration, setAcceleration] = useState(2); // a (m/s²)
  const [time, setTime] = useState(0); // t (s)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && time < 10) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev >= 10) {
            setIsRunning(false);
            return 10;
          }
          return +(prev + 0.1).toFixed(1);
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // NCERT First Equation: v = u + at
  const currentVelocity = +(initialVelocity + acceleration * time).toFixed(1);
  // NCERT Second Equation: s = ut + 0.5 a t²
  const distanceCovered = +(initialVelocity * time + 0.5 * acceleration * time * time).toFixed(1);

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              Physics Motion & Equations Simulator
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                NCERT Class 9 Chapter 8
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Visualizing <span className="text-blue-400 font-mono font-bold">v = u + at</span> and <span className="text-emerald-400 font-mono font-bold">s = ut + ½at²</span>
            </p>
          </div>
        </div>

        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Track
        </button>
      </div>

      {/* Track & Animated Vehicle */}
      <div className="relative h-56 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col justify-end p-6 overflow-hidden">
        {/* Sky / Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:40px_100%] opacity-25" />

        {/* Meters markers along track */}
        <div className="absolute bottom-16 left-6 right-6 flex justify-between text-[10px] text-slate-500 font-mono">
          <span>0m</span>
          <span>25m</span>
          <span>50m</span>
          <span>75m</span>
          <span>100m+</span>
        </div>

        {/* Road Track */}
        <div className="relative h-12 bg-slate-800 border-t-2 border-b-2 border-slate-700 flex items-center">
          <div className="w-full h-1 border-t border-dashed border-amber-400/60" />

          {/* Animated Electric Car */}
          <div
            className="absolute -top-6 transition-all duration-100"
            style={{
              left: `${Math.min(88, (distanceCovered / 120) * 88)}%`
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-blue-400 bg-slate-900/90 px-2 py-0.5 rounded border border-blue-500/40">
                {currentVelocity} m/s
              </span>
              <div className="text-3xl filter drop-shadow-[0_4px_8px_rgba(59,130,246,0.6)]">
                🏎️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Telemetry & NCERT Formulas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Elapsed Time (t)</div>
          <div className="text-xl font-bold font-mono text-amber-400">{time} s</div>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Current Velocity (v)</div>
          <div className="text-xl font-bold font-mono text-blue-400">{currentVelocity} m/s</div>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Distance Covered (s)</div>
          <div className="text-xl font-bold font-mono text-emerald-400">{distanceCovered} m</div>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Acceleration (a)</div>
          <div className="text-xl font-bold font-mono text-purple-400">{acceleration} m/s²</div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg transition-transform active:scale-95 ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-500 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {isRunning ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Start Motion</>}
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-300">Initial Velocity (u):</span>
            <input
              type="number"
              min="0"
              max="20"
              value={initialVelocity}
              disabled={isRunning}
              onChange={(e) => setInitialVelocity(Number(e.target.value))}
              className="w-16 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-center font-mono text-white"
            />
            <span className="text-slate-400">m/s</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-300">Acceleration (a):</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.5"
              value={acceleration}
              disabled={isRunning}
              onChange={(e) => setAcceleration(Number(e.target.value))}
              className="w-16 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-center font-mono text-white"
            />
            <span className="text-slate-400">m/s²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
