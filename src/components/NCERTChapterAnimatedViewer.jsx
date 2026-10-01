import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Award,
  RotateCcw,
  Compass,
  ArrowRight,
  HelpCircle,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLASS_ANIMATED_BOOKS } from '../data/ncertAnimatedBooksData';

export default function NCERTChapterAnimatedViewer({ selectedClass, onLaunchExam }) {
  const bookData = CLASS_ANIMATED_BOOKS[selectedClass] || CLASS_ANIMATED_BOOKS[8];
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlayingNarration, setIsPlayingNarration] = useState(false);
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Reset scene and quiz when chapter changes
  useEffect(() => {
    setCurrentSceneIdx(0);
    setQuizSelected(null);
    setQuizSubmitted(false);
    stopNarration();
  }, [selectedChapterIdx, selectedClass]);

  const currentChapter = bookData.chapters[selectedChapterIdx] || bookData.chapters[0];
  const currentScene = currentChapter.scenes[currentSceneIdx] || currentChapter.scenes[0];

  // Speech synthesis voice read-aloud
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsPlayingNarration(true);
      utterance.onend = () => setIsPlayingNarration(false);
      utterance.onerror = () => setIsPlayingNarration(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopNarration = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingNarration(false);
    }
  };

  const handleReadSceneAloud = () => {
    if (isPlayingNarration) {
      stopNarration();
    } else {
      const fullNarration = `${currentScene.title}. ${currentScene.speaker} says: ${currentScene.dialogue}. Narration: ${currentScene.narration}`;
      speakText(fullNarration);
    }
  };

  const handleNextScene = () => {
    stopNarration();
    if (currentSceneIdx < currentChapter.scenes.length - 1) {
      setCurrentSceneIdx((prev) => prev + 1);
    }
  };

  const handlePrevScene = () => {
    stopNarration();
    if (currentSceneIdx > 0) {
      setCurrentSceneIdx((prev) => prev - 1);
    }
  };

  const handleQuizAnswer = (idx) => {
    setQuizSelected(idx);
    setQuizSubmitted(true);
    if (idx === currentChapter.quiz?.correctIndex) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 md:p-8 space-y-6 text-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50/60 rounded-full blur-3xl pointer-events-none" />

      {/* Book Header Bar with NCERT Source Link */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="flex items-start gap-4">
          <div className="w-14 h-18 rounded-xl overflow-hidden shadow-md shrink-0 border border-slate-200">
            <img
              src={bookData.coverImage}
              alt={bookData.bookTitle}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                Official NCERT Book Animated Reader
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Portal Source: <a href={bookData.portalUrl} target="_blank" rel="noreferrer" className="text-indigo-600 underline font-semibold hover:text-indigo-700">ncert.nic.in/textbook.php?{bookData.bookCode}=0</a>
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-slate-900">
              {bookData.bookTitle}
            </h3>

            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              {bookData.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
          <a
            href={bookData.portalUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <span>Official NCERT PDF</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Chapter Selection Bar with Direct NCERT links */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Select Chapter to Read & Watch Animated Scenes:</span>
          <span className="text-slate-400 font-normal">Chapters 1 to {bookData.chapters.length}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {bookData.chapters.map((chap, idx) => (
            <button
              key={chap.chapterNum}
              onClick={() => setSelectedChapterIdx(idx)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                selectedChapterIdx === idx
                  ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-black text-indigo-700 mb-1">
                <span>Chapter {chap.chapterNum}</span>
                <span className="text-slate-400 font-normal">NCERT</span>
              </div>
              <div className={`text-xs font-bold line-clamp-1 ${selectedChapterIdx === idx ? 'text-indigo-900 font-extrabold' : 'text-slate-800'}`}>
                {chap.title}
              </div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">
                {chap.author}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* THE ANIMATED SCENE READER STAGE (Reading the Book!) */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 border border-slate-800">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-md">
              Chapter {currentChapter.chapterNum}: {currentChapter.title}
            </span>
            <span className="text-xs text-indigo-200 font-medium hidden sm:inline">
              by {currentChapter.author}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Read Book Aloud Button (Speech synthesis voice narration) */}
            <button
              onClick={handleReadSceneAloud}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 ${
                isPlayingNarration
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/25'
              }`}
            >
              {isPlayingNarration ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Pause Voice Reading</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-300" />
                  <span>Read Book Aloud (Voice)</span>
                </>
              )}
            </button>

            <a
              href={currentChapter.ncertLink}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-200 hover:text-white underline flex items-center gap-1 font-semibold"
            >
              <span>NCERT Chapter Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Central Visual Animation Screen */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 text-center space-y-5 relative overflow-hidden backdrop-blur-md">
          {/* Scene Stage Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{currentScene.title} (Scene {currentSceneIdx + 1} of {currentChapter.scenes.length})</span>
          </div>

          {/* Animated Visual Character & Emotion Representation */}
          <div className="py-4 text-5xl md:text-6xl animate-bounce duration-1000 select-none">
            {currentScene.visual}
          </div>

          {/* Dialogue Speech Bubble */}
          <div className="max-w-2xl mx-auto bg-white/10 border border-white/20 p-5 rounded-2xl shadow-xl backdrop-blur-md text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-wider">
              <span>🗣️ {currentScene.speaker}:</span>
            </div>
            <p className="text-sm md:text-base font-serif italic text-white leading-relaxed">
              {currentScene.dialogue}
            </p>
          </div>

          {/* Narration Excerpt from Textbook */}
          <p className="max-w-2xl mx-auto text-xs md:text-sm text-indigo-100 leading-relaxed font-sans">
            {currentScene.narration}
          </p>
        </div>

        {/* Scene Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrevScene}
            disabled={currentSceneIdx === 0}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              currentSceneIdx === 0
                ? 'opacity-40 cursor-not-allowed border-white/10 text-white/40'
                : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Scene</span>
          </button>

          {/* Scene Progress Dots */}
          <div className="flex items-center gap-2">
            {currentChapter.scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopNarration();
                  setCurrentSceneIdx(i);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  currentSceneIdx === i
                    ? 'w-8 bg-amber-400'
                    : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
                title={`Jump to Scene ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextScene}
            disabled={currentSceneIdx === currentChapter.scenes.length - 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              currentSceneIdx === currentChapter.scenes.length - 1
                ? 'opacity-40 cursor-not-allowed border-white/10 text-white/40'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20'
            }`}
          >
            <span>Next Scene</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Row: In-Text Glossary & Chapter Comprehension Quiz */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Glossary */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>NCERT Vocabulary & Glossary (Chapter {currentChapter.chapterNum}):</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentChapter.glossary.map((item, i) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm text-xs">
                <span className="font-bold text-indigo-700 block">{item.word}</span>
                <span className="text-slate-600 text-[11px] leading-relaxed mt-0.5 block">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Chapter Comprehension Quiz */}
        {currentChapter.quiz && (
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Chapter Quick Comprehension Check:</span>
              </div>

              <p className="text-xs font-semibold text-slate-800">
                {currentChapter.quiz.q}
              </p>

              <div className="space-y-1.5 pt-1">
                {currentChapter.quiz.options.map((opt, idx) => (
                  <button
                    key={idx}
                    disabled={quizSubmitted}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`w-full p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                      quizSubmitted
                        ? idx === currentChapter.quiz.correctIndex
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                          : idx === quizSelected
                          ? 'bg-rose-100 border-rose-300 text-rose-800'
                          : 'bg-white border-slate-200 text-slate-400'
                        : 'bg-white hover:bg-indigo-50/60 border-slate-200 text-slate-700 hover:border-indigo-300 shadow-sm'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {quizSubmitted && (
              <div className={`p-3 rounded-xl text-xs font-medium ${
                quizSelected === currentChapter.quiz.correctIndex
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}>
                {quizSelected === currentChapter.quiz.correctIndex ? '🎉 Excellent! +50 XP earned. ' : '⚠️ Look closely at the story: '}
                {currentChapter.quiz.explanation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
