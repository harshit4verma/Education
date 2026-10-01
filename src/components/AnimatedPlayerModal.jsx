import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Play,
  Sparkles,
  BookOpen,
  Layers,
  Award,
  ExternalLink,
  Volume2,
  VolumeX,
  ChevronRight,
  ListVideo
} from 'lucide-react';
import AlgebraBalanceSimulator from './InteractiveSimulators/AlgebraBalanceSimulator';
import PhotosynthesisSimulator from './InteractiveSimulators/PhotosynthesisSimulator';
import HindiSandhiSimulator from './InteractiveSimulators/HindiSandhiSimulator';
import MotionPhysicsSimulator from './InteractiveSimulators/MotionPhysicsSimulator';
import PoorviStoryAnimation from './InteractiveSimulators/PoorviStoryAnimation';
import TrigonometrySimulator from './InteractiveSimulators/TrigonometrySimulator';
import { POORVI_CHAPTERS } from './PoorviChapterWiseViewer';

export default function AnimatedPlayerModal({
  video,
  onClose,
  onMarkCompleted,
  isCompleted,
  onLaunchExam
}) {
  const isPoorvi = video?.isPoorviFeatured || (video?.classLevel === 6 && video?.subjectId === 'english');
  const [activeTab, setActiveTab] = useState(isPoorvi ? 'chapterwise' : (video.videoType === 'simulator' ? 'interactive' : 'video'));
  const [selectedPoorviChapter, setSelectedPoorviChapter] = useState(video?.chapterNum ? video.chapterNum - 1 : 0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!video) return null;

  const currentPoorvi = POORVI_CHAPTERS[selectedPoorviChapter];

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.95;
      u.pitch = 1.05;
      u.onstart = () => setIsSpeaking(true);
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const renderSimulator = () => {
    switch (video.simulatorType) {
      case 'trigonometry':
        return <TrigonometrySimulator onComplete={() => onMarkCompleted(video.id)} />;
      case 'poorvi-dew':
        return <PoorviStoryAnimation onComplete={() => onMarkCompleted(video.id)} />;
      case 'algebra':
        return <AlgebraBalanceSimulator onComplete={() => onMarkCompleted(video.id)} />;
      case 'photosynthesis':
      case 'cell':
        return <PhotosynthesisSimulator />;
      case 'hindi-sandhi':
        return <HindiSandhiSimulator />;
      case 'motion':
      case 'geometry':
      default:
        return <MotionPhysicsSimulator />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black rounded-full">
              Class {video.classLevel} NCERT
            </span>
            <span className="text-xs text-slate-300 font-medium truncate max-w-md">
              {isPoorvi ? `Poorvi (English): Chapter ${currentPoorvi.chapterNum} — ${currentPoorvi.title}` : video.chapter}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onMarkCompleted(video.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-400'}`} />
              {isCompleted ? 'Completed (+50 XP)' : 'Mark as Completed'}
            </button>

            <button
              onClick={() => {
                stopSpeech();
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/60 gap-2">
            <div className="flex flex-wrap gap-2">
              {isPoorvi && (
                <button
                  onClick={() => {
                    stopSpeech();
                    setActiveTab('chapterwise');
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'chapterwise'
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ListVideo className="w-4 h-4" />
                  Chapter-Wise Animated Videos (1-5)
                </button>
              )}

              <button
                onClick={() => {
                  stopSpeech();
                  setActiveTab('interactive');
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Interactive Animation Lab
              </button>

              <button
                onClick={() => {
                  stopSpeech();
                  setActiveTab('video');
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'video'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-4 h-4" />
                Animated NCERT Video Stream
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 pr-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>{video.ncertRef}</span>
            </div>
          </div>

          {/* TAB 1: CHAPTER-WISE NCERT VIDEOS (Chapters 1 to 5 with direct links) */}
          {activeTab === 'chapterwise' && isPoorvi && (
            <div className="space-y-6 animate-fadeIn">
              {/* Chapter Pill Selector Bar with exact NCERT links */}
              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center justify-between">
                  <span>NCERT Book "Poorvi" Chapters (Select to View Animation):</span>
                  <span className="text-slate-400 font-normal">Official Code: fepr1</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {POORVI_CHAPTERS.map((chap, idx) => {
                    const isSelected = selectedPoorviChapter === idx;
                    return (
                      <div
                        key={chap.chapterNum}
                        onClick={() => {
                          stopSpeech();
                          setSelectedPoorviChapter(idx);
                        }}
                        className={`cursor-pointer p-2.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 text-white shadow-md shadow-amber-500/10 ring-1 ring-amber-400'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${
                            isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            Ch {chap.chapterNum}
                          </span>
                          <a
                            href={chap.ncertLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] text-blue-400 hover:underline flex items-center gap-0.5"
                            title="Open NCERT Chapter Link"
                          >
                            <span>NCERT</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                        <div className="text-xs font-bold truncate mt-1 text-slate-200">
                          {chap.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Chapter Video & Animation Box */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-black shadow-2xl">
                {currentPoorvi.videoUrl ? (
                  <iframe
                    src={`${currentPoorvi.videoUrl}?autoplay=1&rel=0`}
                    title={currentPoorvi.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                    Video Loading...
                  </div>
                )}

                {/* Overlay Header on Top of Video */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-950/80 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                    Chapter {currentPoorvi.chapterNum}: {currentPoorvi.title}
                  </span>
                  <a
                    href={currentPoorvi.ncertLink}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto px-3 py-1 rounded-xl text-xs font-bold bg-blue-600/90 hover:bg-blue-600 text-white flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all"
                  >
                    <span>Read on NCERT (fepr1={currentPoorvi.chapterNum}-5)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Chapter Actions & Examination */}
              <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{currentPoorvi.unitTitle}</span>
                    <span className="text-xs text-amber-400">({currentPoorvi.theme})</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Official NCERT Reference: <a href={currentPoorvi.ncertLink} target="_blank" rel="noreferrer" className="text-blue-400 underline">{currentPoorvi.ncertLink}</a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onLaunchExam();
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all"
                  >
                    Take Exam
                  </button>
                </div>
              </div>

              {/* Scene Breakdown for this Chapter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentPoorvi.scenes?.map((sc, i) => (
                  <div key={i} className="bg-slate-800/60 border border-slate-700/80 p-3.5 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">{sc.title}</span>
                      <span className="text-base">{sc.visual}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">{sc.narration}</p>
                    <div className="text-[11px] text-amber-200/90 italic bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <strong>{sc.speaker}:</strong> {sc.dialogue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATOR / LAB */}
          {activeTab === 'interactive' && (
            <div className="p-2 animate-fadeIn">
              {renderSimulator()}
            </div>
          )}

          {/* TAB 3: STANDARD VIDEO STREAM */}
          {activeTab === 'video' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black">
                {video.customVideoUrl ? (
                  <video
                    src={video.customVideoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={`${video.videoUrl}?autoplay=1&rel=0`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{video.title}</span>
                <span className="text-blue-400 font-mono">{video.duration}</span>
              </div>
            </div>
          )}

          {/* Title & Description */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {video.title}
              </h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {video.description}
              </p>
            </div>

            {/* Key Learning Points / NCERT Summary */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-blue-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Key NCERT Concepts to Remember for the Weekly Exam
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {video.keyPoints?.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Banner inside Modal */}
            <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-500/20 border border-indigo-500/40 rounded-2xl text-indigo-300">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Ready to test your understanding with AI Proctor?
                  </h4>
                  <p className="text-xs text-indigo-200/80">
                    Take the Weekly Diagnostic Exam. The AI will observe any conceptual mistakes and give you brief remedial examples!
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  stopSpeech();
                  onClose();
                  onLaunchExam();
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/30 flex items-center gap-2 shrink-0 active:scale-95 transition-all"
              >
                <span>Take Weekly Exam</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
