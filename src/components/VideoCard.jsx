import React from 'react';
import { Play, Sparkles, CheckCircle2, Clock, Eye, BookOpen, Layers } from 'lucide-react';
import { SUBJECTS } from '../data/ncertCurriculum';

export default function VideoCard({ video, isCompleted, onPlay, onMarkComplete }) {
  const subject = SUBJECTS.find((s) => s.id === video.subjectId) || { name: 'NCERT', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200' };

  return (
    <div className="group bg-white border border-slate-200 hover:border-indigo-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Thumbnail area */}
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges on top */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-xl text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-white/90 text-slate-800 shadow-sm border border-white/40">
            {subject.name} • Class {video.classLevel}
          </span>

          {video.videoType === 'simulator' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-amber-500 text-white shadow-md">
              <Sparkles className="w-3 h-3" />
              Interactive Lab
            </span>
          )}

          {isCompleted && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-emerald-600 text-white shadow-md">
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>

        {/* Play button overlay */}
        <button
          onClick={() => onPlay(video)}
          className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <div className="w-13 h-13 rounded-2xl bg-indigo-600/95 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 backdrop-blur-sm transition-colors">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </button>

        {/* Duration & Views */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white font-mono">
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
            <Clock className="w-3 h-3 text-slate-300" />
            {video.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
            <Eye className="w-3 h-3 text-slate-300" />
            {video.views}
          </span>
        </div>
      </div>

      {/* Content description */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-indigo-600 flex items-center gap-1.5 truncate">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{video.chapter}</span>
          </div>

          <h3
            onClick={() => onPlay(video)}
            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {video.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Footer info & Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="text-[11px] text-slate-500 font-medium truncate">
            NCERT Ref: <span className="text-slate-700 font-semibold">{video.ncertRef}</span>
          </div>

          <button
            onClick={() => onPlay(video)}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 hover:border-indigo-600 text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            Learn & Play
          </button>
        </div>
      </div>
    </div>
  );
}
