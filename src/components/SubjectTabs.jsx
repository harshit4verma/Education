import React from 'react';
import { SUBJECTS } from '../data/ncertCurriculum';

export default function SubjectTabs({ selectedSubject, onSelectSubject, videoCounts }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
      <button
        onClick={() => onSelectSubject('all')}
        className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
          selectedSubject === 'all'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 ring-2 ring-indigo-500/20'
            : 'bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 shadow-sm'
        }`}
      >
        <span>🌟 All NCERT Subjects</span>
      </button>

      {SUBJECTS.map((sub) => {
        const isSelected = selectedSubject === sub.id;
        const count = videoCounts[sub.id] || 0;

        return (
          <button
            key={sub.id}
            onClick={() => onSelectSubject(sub.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2.5 border ${
              isSelected
                ? 'bg-gradient-to-r ' + sub.color + ' text-white border-transparent shadow-md'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
            }`}
          >
            <span className="text-sm">{sub.icon}</span>
            <span className="font-bold">{sub.name}</span>
            <span className={`text-[10px] font-hindi ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
              ({sub.hindiName})
            </span>
            <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-black ${
              isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
