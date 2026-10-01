import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  HelpCircle,
  Droplets,
  Coins,
  Smile
} from 'lucide-react';

export default function PoorviStoryAnimation({ onComplete }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [dewCollected, setDewCollected] = useState(0); // For Scene 3 interactive minigame
  const [activeTab, setActiveTab] = useState('story'); // 'story', 'vocab', 'quiz'
  const [quizScore, setQuizScore] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  const scenes = [
    {
      id: 1,
      title: 'Scene 1: Rama Natha and His Golden Illusion',
      timeframe: 'In a peaceful village in India',
      narrative:
        'Rama Natha was the son of a wealthy landlord. He inherited vast acres of fertile agricultural land. However, he refused to work on his fields because he was obsessed with finding a magic potion that could turn copper into gold! His sensible wife, Madhumati, was worried as their wealth was quickly draining away.',
      dialogue: {
        speaker: 'Rama Natha',
        text: '“Why sweat in the hot sun tilling soil when a few drops of a magic potion can turn all my copper pots into solid gold?”'
      },
      visualState: 'daydream',
      bgColor: 'from-amber-950/60 via-slate-900 to-slate-950'
    },
    {
      id: 2,
      title: 'Scene 2: Sage Mahipati’s Secret Condition',
      timeframe: 'The arrival of the Wise Sage',
      narrative:
        'One auspicious day, the revered Sage Mahipati visited their town. Rama Natha ran to him, fell at his feet, and pleaded for the secret magic potion. The wise sage smiled and said: “Yes, I know the formula! But to create it, you must plant banana trees and collect five litres of fresh morning dew from their broad leaves with your own hands during the winter months.”',
      dialogue: {
        speaker: 'Sage Mahipati',
        text: '“Collect five litres of morning dew drop by drop with your own hands. Only then will my chant turn it into the magic potion!”'
      },
      visualState: 'sage',
      bgColor: 'from-orange-950/60 via-slate-900 to-indigo-950/50'
    },
    {
      id: 3,
      title: 'Scene 3: Six Years of Diligent Banana Plantation',
      timeframe: 'Six winter seasons pass',
      narrative:
        'Rama Natha woke up before dawn every morning. He cleared his neglected acres, planted hundreds of banana saplings, and tenderly gathered tiny drops of dew from the leaves into a glass jar. Meanwhile, his hardworking wife Madhumati harvested bunches of delicious bananas and sold them in the market, earning bags of gold and silver coins!',
      dialogue: {
        speaker: 'Madhumati',
        text: '“Look at our lush green banana grove! Even as you collect dew, our harvest brings prosperity to our home every day.”'
      },
      visualState: 'plantation',
      bgColor: 'from-emerald-950/60 via-slate-900 to-teal-950/50'
    },
    {
      id: 4,
      title: 'Scene 4: The Five Litres of Dew & The Magic Chant',
      timeframe: 'Six years later at the Sage’s Hermitage',
      narrative:
        'After six long years of devotion, Rama Natha finally filled the large bottle with five litres of sparkling morning dew! He rushed to Sage Mahipati with joy. The sage chanted sacred hymns and sprinkled the dew over a copper vessel. But to Rama Natha’s horror, the copper remained ordinary copper! Not a speck of gold appeared.',
      dialogue: {
        speaker: 'Rama Natha',
        text: '“Revered Sage! It did not turn into gold! Have all my six years of collecting dew gone to waste?”'
      },
      visualState: 'copper',
      bgColor: 'from-blue-950/60 via-slate-900 to-slate-950'
    },
    {
      id: 5,
      title: 'Scene 5: The Grand Revelation — Hard Work is Gold',
      timeframe: 'The Moral of Poorvi Unit 1',
      narrative:
        'Sage Mahipati smiled gently and asked Madhumati to bring the heavy wooden chests. Madhumati opened them to reveal thousands of shining gold coins! The sage explained: “There is no magic potion. It was your sweat, your care for the banana plantation, and your daily labor that created this real fortune. Hard work is the only true magic that turns dust into gold.” Rama Natha bowed in deep gratitude, having learned the greatest lesson of his life.',
      dialogue: {
        speaker: 'Sage Mahipati',
        text: '“Your hard work on the land is the true magic potion! Never look for lazy shortcuts when honest effort can build an empire.”'
      },
      visualState: 'gold',
      bgColor: 'from-amber-950/80 via-yellow-950/40 to-slate-950'
    }
  ];

  const vocabWords = [
    { word: 'Potion', meaning: 'A liquid with magic, medicinal, or poisonous properties.' },
    { word: 'Sage (महात्मा)', meaning: 'A profoundly wise holy person who guides others.' },
    { word: 'Dew (ओस)', meaning: 'Tiny droplets of water that form on cool surfaces (leaves) overnight.' },
    { word: 'Plantation', meaning: 'A large estate or farm where crops like bananas or tea are cultivated.' },
    { word: 'Diligent', meaning: 'Having or showing steady, earnest care and hard work.' },
    { word: 'Prosperity', meaning: 'The state of being successful, flourishing, or financially thriving.' }
  ];

  const poorviQuiz = [
    {
      q: 'Why did Rama Natha initially refuse to work on his ancestral land?',
      options: [
        'He was obsessed with finding a magic potion to turn copper into gold.',
        'He wanted to become a soldier in the royal army.',
        'He was too sick to step out into the sun.',
        'He had sold all his land to neighboring farmers.'
      ],
      correct: 0,
      expl: 'Rama Natha believed that a magic potion could make him rich without working, so he neglected his fertile land.'
    },
    {
      q: 'What condition did Sage Mahipati give Rama Natha to create the potion?',
      options: [
        'Collect 5 litres of morning dew from banana leaves planted by his own hands.',
        'Climb the highest mountain in the Himalayas during snow.',
        'Drink bitter herbal juices every evening for ten years.',
        'Give away all his remaining money to the poor villagers.'
      ],
      correct: 0,
      expl: 'The sage cleverly set a task that forced Rama Natha to plant a vast banana plantation and tend to it every single morning.'
    },
    {
      q: 'Where did the real chests of gold coins come from?',
      options: [
        'From selling the bumper crop of bananas harvested over six years.',
        'From a treasure hidden deep underground by his ancestors.',
        'The sage turned the morning dew into real gold with a magic chant.',
        'Madhumati won a lottery organized by the village king.'
      ],
      correct: 0,
      expl: 'Madhumati sold the bananas harvested from Rama Natha’s trees in the market, saving the earnings which formed the wealth.'
    },
    {
      q: 'What is the core moral of Sudha Murty’s story "A Bottle of Dew" in NCERT Poorvi?',
      options: [
        'Honest hard work and dedication is the only true magic that brings prosperity.',
        'Magic potions can be found if you search for more than ten years.',
        'Banana trees are the only plants that produce morning dew.',
        'One should never trust the words of a wise sage.'
      ],
      correct: 0,
      expl: 'The story proves that shortcuts and magical daydreams fail, but disciplined hard work always yields true prosperity.'
    }
  ];

  // Speech narration
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Play narration when scene changes if isPlaying
  useEffect(() => {
    if (isPlaying) {
      speakText(`${scenes[currentScene].title}. ${scenes[currentScene].narrative}`);
    }
    return () => stopSpeaking();
  }, [currentScene, isPlaying]);

  const handleNextScene = () => {
    stopSpeaking();
    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
    } else {
      setIsPlaying(false);
      if (onComplete) onComplete();
    }
  };

  const handlePrevScene = () => {
    stopSpeaking();
    if (currentScene > 0) {
      setCurrentScene(prev => prev - 1);
    }
  };

  const handleDewClick = () => {
    if (dewCollected < 5) {
      setDewCollected(prev => prev + 1);
    }
  };

  const current = scenes[currentScene];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white max-w-5xl mx-auto shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-tr from-amber-500 to-orange-600 text-white rounded-2xl shadow-lg shadow-orange-500/30">
            <BookOpen className="w-6 h-6 animate-float" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                NCERT Poorvi • Unit 1 Chapter 1
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Code: fepr1=0-5
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mt-0.5">
              A Bottle of Dew <span className="text-amber-400 font-medium text-base">by Sudha Murty</span>
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'story'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Animated Chapter
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'vocab'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Poorvi Vocabulary
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            NCERT In-Text Quiz
          </button>
        </div>
      </div>

      {/* Main Story Animation Tab */}
      {activeTab === 'story' && (
        <div className="mt-6 space-y-6">
          {/* Animated Canvas Stage */}
          <div className={`relative h-80 rounded-2xl border border-slate-800 bg-gradient-to-br ${current.bgColor} p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-700`}>
            {/* Ambient Animated Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Stage Bar */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-950/70 border border-slate-700 text-xs font-bold text-amber-300">
                Scene {currentScene + 1} of {scenes.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (isSpeaking) stopSpeaking();
                    else speakText(`${current.title}. ${current.narrative}`);
                  }}
                  className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isSpeaking
                      ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                      : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                  title="Read Aloud Narration"
                >
                  {isSpeaking ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isSpeaking ? 'Speaking...' : 'Read Aloud'}</span>
                </button>
              </div>
            </div>

            {/* Animated Characters & Visual Stage */}
            <div className="relative z-10 flex items-center justify-around my-auto">
              {/* Character 1: Rama Natha */}
              <div className="flex flex-col items-center animate-float">
                <div className="text-5xl filter drop-shadow-[0_8px_16px_rgba(245,158,11,0.3)]">
                  {current.visualState === 'daydream' && '👨‍🌾💭'}
                  {current.visualState === 'sage' && '🙇‍♂️'}
                  {current.visualState === 'plantation' && '🧑‍🌾🌿'}
                  {current.visualState === 'copper' && '😲🍶'}
                  {current.visualState === 'gold' && '😃✨'}
                </div>
                <span className="mt-2 text-xs font-bold text-amber-200 bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Rama Natha
                </span>
              </div>

              {/* Central Dynamic Stage Element */}
              <div className="flex flex-col items-center text-center max-w-xs">
                {current.visualState === 'daydream' && (
                  <div className="bg-slate-950/80 border border-slate-700 p-3 rounded-2xl shadow-xl animate-pulse">
                    <div className="text-3xl mb-1">🏺 ➔ 🪙</div>
                    <div className="text-[11px] text-amber-300 font-bold">Dreaming: Copper to Gold</div>
                  </div>
                )}

                {current.visualState === 'sage' && (
                  <div className="flex flex-col items-center">
                    <div className="text-6xl animate-pulse">🧙‍♂️</div>
                    <span className="text-xs font-bold text-indigo-300 mt-1">Sage Mahipati</span>
                    <span className="text-[10px] text-amber-300 bg-slate-950/70 px-2 py-0.5 rounded mt-1">
                      “5 Litres of Morning Dew”
                    </span>
                  </div>
                )}

                {current.visualState === 'plantation' && (
                  <div className="bg-emerald-950/70 border border-emerald-500/40 p-4 rounded-2xl text-center space-y-2">
                    <div className="text-3xl flex justify-center gap-1">🌴🌴🌴</div>
                    <div className="text-xs font-bold text-emerald-300">
                      Banana Grove: 6 Years of Labor
                    </div>
                    <button
                      onClick={handleDewClick}
                      className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white rounded-xl text-[11px] font-bold flex items-center gap-1.5 mx-auto shadow"
                    >
                      <Droplets className="w-3.5 h-3.5" />
                      Collect Dew ({dewCollected}/5 Litres)
                    </button>
                  </div>
                )}

                {current.visualState === 'copper' && (
                  <div className="bg-slate-950/80 border border-rose-500/40 p-3.5 rounded-2xl text-center">
                    <div className="text-4xl mb-1">🍶 ➔ 🪣</div>
                    <span className="text-xs font-bold text-rose-300">
                      Dew Sprinkled... Still Copper!
                    </span>
                  </div>
                )}

                {current.visualState === 'gold' && (
                  <div className="bg-amber-950/80 border-2 border-amber-400 p-4 rounded-2xl text-center animate-bounce shadow-2xl shadow-amber-500/40">
                    <div className="text-4xl mb-1">💰💰💰</div>
                    <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                      Real Gold from Banana Harvest!
                    </span>
                  </div>
                )}
              </div>

              {/* Character 2: Madhumati or Sage */}
              <div className="flex flex-col items-center">
                <div className="text-5xl filter drop-shadow-[0_8px_16px_rgba(16,185,129,0.3)]">
                  {current.visualState === 'gold' ? '👩‍🌾💎' : '👩‍🌾🧺'}
                </div>
                <span className="mt-2 text-xs font-bold text-emerald-300 bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Madhumati (Wife)
                </span>
              </div>
            </div>

            {/* Character Dialogue Bubble */}
            <div className="relative z-10 bg-slate-950/90 border border-slate-700 p-3 rounded-2xl backdrop-blur-md">
              <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.dialogue.speaker} Speaks:</span>
              </div>
              <p className="text-xs italic text-slate-200 mt-0.5 leading-snug">
                {current.dialogue.text}
              </p>
            </div>
          </div>

          {/* Full Narrative Text */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{current.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.narrative}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevScene}
              disabled={currentScene === 0}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl text-xs font-bold text-slate-300 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Scene
            </button>

            {/* Scene thumbnails dots */}
            <div className="flex gap-2">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    stopSpeaking();
                    setCurrentScene(idx);
                  }}
                  className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                    currentScene === idx
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextScene}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/25 transition-all active:scale-95"
            >
              <span>{currentScene === scenes.length - 1 ? 'Finish Chapter' : 'Next Scene'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Vocabulary Tab */}
      {activeTab === 'vocab' && (
        <div className="mt-6 space-y-4">
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Poorvi Textbook Glossary & Word Power (Unit 1)
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Important NCERT vocabulary words introduced in Sudha Murty's "A Bottle of Dew".
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {vocabWords.map((v, i) => (
              <div key={i} className="bg-slate-800/60 border border-slate-700/80 p-4 rounded-2xl space-y-1">
                <span className="text-sm font-bold text-amber-400">{v.word}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{v.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Tab */}
      {activeTab === 'quiz' && (
        <div className="mt-6 space-y-6">
          <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Poorvi Chapter Comprehension Check
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Official NCERT in-text questions to verify your understanding before the Weekly Exam!
            </p>
          </div>

          <div className="space-y-4">
            {poorviQuiz.map((q, idx) => {
              const selected = quizAnswers[idx];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correct;

              return (
                <div key={idx} className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl space-y-3">
                  <div className="text-sm font-semibold text-white">
                    <span className="text-amber-400 font-bold mr-2">Q{idx + 1}.</span>
                    {q.q}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: optIdx }))}
                        className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                          selected === optIdx
                            ? optIdx === q.correct
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold'
                              : 'bg-rose-500/20 border-rose-500 text-rose-200'
                            : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {isAnswered && (
                    <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                      isCorrect
                        ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
                    }`}>
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <HelpCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold">{isCorrect ? 'Correct! ' : 'NCERT Explanation: '}</span>
                        {q.expl}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
