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
  Heart,
  Award,
  Compass,
  Activity,
  Layers
} from 'lucide-react';

export const POORVI_CHAPTERS = [
  {
    chapterNum: 1,
    unitTitle: 'Unit 1: Fables and Folk Tales',
    title: 'A Bottle of Dew & The Raven and the Fox',
    author: 'Sudha Murty & Aesop',
    ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=1-5',
    theme: 'Hard Work, Diligence & Avoiding Flattery',
    themeColor: 'from-amber-600 to-orange-600',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    scenes: [
      {
        title: 'Scene 1: Rama Natha’s Daydream',
        speaker: 'Rama Natha',
        dialogue: '“A few drops of magic potion will turn my copper pots into gold! Why should I toil on the farm?”',
        narration: 'Rama Natha ignores his inherited agricultural lands, chasing magical daydreams. His wife Madhumati worries as their wealth drains away.',
        visual: '👨‍🌾💭 ➜ 🏺🪙'
      },
      {
        title: 'Scene 2: Sage Mahipati’s Secret',
        speaker: 'Sage Mahipati',
        dialogue: '“Plant banana saplings and collect five litres of winter morning dew from their broad leaves with your own hands!”',
        narration: 'The sage assigns a clever condition that requires disciplined, patient physical effort every morning.',
        visual: '🧙‍♂️✨ ➔ 🌴💧'
      },
      {
        title: 'Scene 3: The Six-Year Banana Harvest',
        speaker: 'Madhumati',
        dialogue: '“While you collect dew at dawn, our banana grove yields hundreds of fruit bunches to sell in the bazaar!”',
        narration: 'Rama Natha and Madhumati turn the barren soil into a lush plantation, earning bags of gold coins from market sales.',
        visual: '🌴🍌 ➔ 👩‍🌾💰'
      },
      {
        title: 'Scene 4: The Revelation: Labor is Gold',
        speaker: 'Sage Mahipati',
        dialogue: '“There is no magic potion! Your honest sweat and care for the crop produced this wealth. Hard work is the only real magic!”',
        narration: 'Rama Natha realizes that disciplined labor on his land is far superior to any magical shortcut.',
        visual: '😃🤝👩‍🌾 ✨ 💰'
      }
    ],
    glossary: [
      { word: 'Potion', def: 'A liquid drink believed to hold magical or medicinal power.' },
      { word: 'Dew', def: 'Tiny drops of moisture condensing on cool leaf surfaces overnight.' },
      { word: 'Sage', def: 'A deeply wise and holy teacher.' },
      { word: 'Flattery', def: 'Excessive and insincere praise given for selfish reasons (as shown in The Raven and the Fox).' }
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },

  {
    chapterNum: 2,
    unitTitle: 'Unit 2: Friendship',
    title: 'The Unlikely Best Friends & The Chair',
    author: 'Panchatantra Adaptation & Traditional Tale',
    ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=2-5',
    theme: 'Unconditional Love, Loyalty & True Companionship',
    themeColor: 'from-pink-600 to-rose-600',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    scenes: [
      {
        title: 'Scene 1: An Unlikely Bond in the Royal Stables',
        speaker: 'Gajaraj & Bholu',
        dialogue: '“Though one of us is a mighty elephant and the other a tiny stray dog, we share every meal together!”',
        narration: 'In the royal stables, the gentle giant elephant Gajaraj shares his sweet sugarcane with a homeless stray pup named Bholu.',
        visual: '🐘❤️🐶'
      },
      {
        title: 'Scene 2: Separation and Sorrow',
        speaker: 'Royal Mahout',
        dialogue: '“Gajaraj has refused to eat any hay or bathe in the river since the pup was taken away to another village!”',
        narration: 'A visiting villager buys the dog. Broken-hearted, the elephant stops eating and grows weak from grief.',
        visual: '🐘😢 ➔ 🌾💔'
      },
      {
        title: 'Scene 3: The King’s Proclamation',
        speaker: 'The King',
        dialogue: '“Whosoever holds the royal elephant’s canine friend must return him immediately! True friendship cannot be broken.”',
        narration: 'The king realizes the elephant is dying of loneliness. A royal decree orders the puppy to be reunited.',
        visual: '👑📜 ➔ 🐶🏃'
      },
      {
        title: 'Scene 4: The Joyful Reunion',
        speaker: 'Gajaraj',
        dialogue: '“My best friend has returned! True friendship is the greatest treasure in the universe.”',
        narration: 'Bholu leaps into Gajaraj’s trunk. The elephant lifts him high in joy and begins eating happily again.',
        visual: '🐘🎺🐶🎉'
      }
    ],
    glossary: [
      { word: 'Unlikely', def: 'Unexpected or surprising; not typical.' },
      { word: 'Empathy', def: 'The ability to understand and share the feelings of another.' },
      { word: 'Inseparable', def: 'Unable to be parted or separated.' },
      { word: 'Superficial', def: 'Existing only at the surface; not deep or genuine (from The Chair).' }
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },

  {
    chapterNum: 3,
    unitTitle: 'Unit 3: Nurturing Nature',
    title: 'Neem Baba & Spices that Heal Us',
    author: 'NCERT Environmental Literature',
    ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=3-5',
    theme: 'Environmental Stewardship & Traditional Indian Medicine',
    themeColor: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    scenes: [
      {
        title: 'Scene 1: Amber Meets the 100-Year-Old Tree',
        speaker: 'Amber',
        dialogue: '“Grandfather Neem Tree, why do the elders in our village call you the ‘Village Pharmacy’?”',
        narration: 'Young Amber rests in the cool shade of an ancient neem tree and hears the rustling leaves speak with wisdom.',
        visual: '👧🌳🍃'
      },
      {
        title: 'Scene 2: Healing Gifts of Neem Baba',
        speaker: 'Neem Baba',
        dialogue: '“My bitter twigs clean teeth naturally, my dried leaves protect clothes from moths, and my oil heals skin ailments!”',
        narration: 'The neem tree explains how every single part of its body — bark, leaves, flowers, and seeds — serves humanity.',
        visual: '🌿🧴✨'
      },
      {
        title: 'Scene 3: The Golden Kitchen Spices',
        speaker: 'Amber’s Grandmother',
        dialogue: '“Haldi (turmeric) heals wounds, Ginger calms colds, and Clove soothes toothaches. Nature heals us every day!”',
        narration: 'Amber visits the traditional Indian kitchen and learns how ancient grandmother remedies rely on natural spices.',
        visual: '🥣💛🫚'
      },
      {
        title: 'Scene 4: The Promise to Protect Earth',
        speaker: 'Amber & Neem Baba',
        dialogue: '“If we plant and protect trees, they will nurture and heal us for generations to come.”',
        narration: 'Amber promises to water saplings and share the wonder of biodiversity with all school friends.',
        visual: '👧🌱🌍💚'
      }
    ],
    glossary: [
      { word: 'Medicinal', def: 'Having healing properties or the ability to treat illness.' },
      { word: 'Biodiversity', def: 'The variety of plant and animal life in a particular habitat.' },
      { word: 'Ailment', def: 'An illness, typically a minor one.' },
      { word: 'Antiseptic', def: 'Substances that prevent the growth of disease-causing microorganisms.' }
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },

  {
    chapterNum: 4,
    unitTitle: 'Unit 4: Sports and Wellness',
    title: 'Change of Heart & Yoga — A Way of Life',
    author: 'NCERT Sports & Health Curriculum',
    ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=4-5',
    theme: 'True Sportsmanship, Mental Health & Yoga Disciplines',
    themeColor: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    scenes: [
      {
        title: 'Scene 1: The High-Stakes Championship Race',
        speaker: 'Karan & Tarun',
        dialogue: '“Only fifty meters left! We have trained the entire year for this 400-meter gold trophy!”',
        narration: 'Two fierce athletic rivals sprint toward the finish line amidst roaring cheers from the school crowd.',
        visual: '🏃‍♂️💨 ➔ 🏆'
      },
      {
        title: 'Scene 2: The Stumble and Fall',
        speaker: 'Spectators',
        dialogue: '“Oh no! Karan tripped over the track curb and fell hard onto the cinders!”',
        narration: 'Just as Karan was leading, an accidental stumble sends him tumbling to the ground in pain.',
        visual: '🏃‍♂️💥😣'
      },
      {
        title: 'Scene 3: The True Winner’s Choice',
        speaker: 'Tarun',
        dialogue: '“Winning by leaving an injured teammate behind is not true victory. Here, take my hand!”',
        narration: 'Tarun stops running, turns around, and lifts Karan up. Together, with arms locked, they cross the line side by side.',
        visual: '🤝🏅✨'
      },
      {
        title: 'Scene 4: Yoga & Inner Balance',
        speaker: 'Yoga Instructor',
        dialogue: '“Tadasana builds posture, Vrikshasana develops focus, and Pranayama brings peace to the restless mind.”',
        narration: 'The unit concludes by teaching school children daily yoga asanas for stress-free learning and physical vitality.',
        visual: '🧘‍♀️🧘‍♂️🌿'
      }
    ],
    glossary: [
      { word: 'Sportsmanship', def: 'Fair, generous, and polite behavior shown by participants in a sport.' },
      { word: 'Perseverance', def: 'Persistence in doing something despite difficulty or delay in achieving success.' },
      { word: 'Asana', def: 'A posture or body position used in the practice of yoga.' },
      { word: 'Integrity', def: 'The quality of being honest and having strong moral principles.' }
    ],
    videoUrl: 'https://www.youtube.com/embed/uNfI3k1xYfg'
  },

  {
    chapterNum: 5,
    unitTitle: 'Unit 5: Culture and Tradition',
    title: 'Hamara Bharat & Ila Sachani: Embroidering Dreams with her Feet',
    author: 'Inspirational Biographical Narrative',
    ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=5-5',
    theme: 'Indomitable Spirit, Resilience & India’s Rich Heritage',
    themeColor: 'from-purple-600 to-fuchsia-600',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    scenes: [
      {
        title: 'Scene 1: Incredible India — Hamara Bharat',
        speaker: 'Narrator',
        dialogue: '“From Kashmir’s snowy peaks to Kanyakumari’s ocean waters, India dances in vibrant colors, festivals, and harmony!”',
        narration: 'Explore the kaleidoscope of Indian culture: Makar Sankranti kites, Diwali lamps, Eid celebrations, and architectural marvels.',
        visual: '🇮🇳🕌🛕🪁'
      },
      {
        title: 'Scene 2: The Girl from Surat Without Hands',
        speaker: 'Ila Sachani',
        dialogue: '“My hands cannot hold a needle, but my heart is bursting with beautiful designs!”',
        narration: 'Born in Surat, Gujarat, with arms that could not function, young Ila watched village women weave intricate Kathiawar embroidery.',
        visual: '👧🧵🌸'
      },
      {
        title: 'Scene 3: Embroidering with Feet and Toes',
        speaker: 'Ila’s Mother',
        dialogue: '“Look at her! With her toes, she threads the thinnest silk and stitches motifs better than anyone in the district!”',
        narration: 'Through sheer grit and relentless daily practice, Ila learned to hold the needle between her toes, weaving magic onto silk and cotton.',
        visual: '🦶🪡✨👗'
      },
      {
        title: 'Scene 4: National Acclaim & Global Honor',
        speaker: 'President of India & Ila',
        dialogue: '“Physical limitation is never an excuse to surrender. Let your passion craft your destiny!”',
        narration: 'Ila’s garments are exhibited worldwide. She receives prestigious awards, proving that will power conquers all obstacles.',
        visual: '🏆🎖️🌟'
      }
    ],
    glossary: [
      { word: 'Resilience', def: 'The capacity to recover quickly from difficulties; toughness.' },
      { word: 'Embroidery', def: 'The craft of decorating fabric or other materials using a needle and thread.' },
      { word: 'Indomitable', def: 'Impossible to subdue, defeat, or discourage.' },
      { word: 'Heritage', def: 'Traditions, monuments, and culture passed down through generations.' }
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  }
];

export default function PoorviChapterWiseViewer({ initialChapter = 1, onLaunchExam }) {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(initialChapter - 1);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [viewMode, setViewMode] = useState('animation'); // 'animation', 'video', 'glossary'

  const activeChap = POORVI_CHAPTERS[selectedChapterIdx];
  const activeScene = activeChap.scenes[currentSceneIdx];

  // Stop voice when switching chapters or scenes
  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      stopSpeech();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.95;
      u.pitch = 1.05;
      u.onstart = () => setIsSpeaking(true);
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    }
  };

  const selectChapter = (idx) => {
    stopSpeech();
    setSelectedChapterIdx(idx);
    setCurrentSceneIdx(0);
  };

  return (
    <div className="bg-slate-900/95 border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 text-white shadow-2xl space-y-6">
      {/* Chapter Selection Bar */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black uppercase tracking-wider">
                NCERT Class 6 English: Poorvi
              </span>
              <span className="text-xs text-slate-400 font-mono">Book Code: fepr1</span>
            </div>
            <h2 className="text-2xl font-black text-white mt-1">
              Chapter-Wise Animated NCERT Video Lessons
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={activeChap.ncertLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition-all"
            >
              <span>Official NCERT PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Chapter 1 to 5 Pill Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-4">
          {POORVI_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.chapterNum}
              onClick={() => selectChapter(idx)}
              className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedChapterIdx === idx
                  ? 'bg-gradient-to-br from-amber-500/30 via-slate-800 to-slate-900 border-amber-400 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                  selectedChapterIdx === idx ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  Chapter {chap.chapterNum}
                </span>
                <span className="text-[10px] text-blue-400 font-mono">fepr1={chap.chapterNum}-5</span>
              </div>
              <div className="text-xs font-bold text-slate-100 line-clamp-1 mt-2">
                {chap.title}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                {chap.unitTitle}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Chapter Details Header */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {activeChap.unitTitle}
            </span>
            <span className="text-xs text-slate-400">
              Theme: <span className="text-slate-200 font-semibold">{activeChap.theme}</span>
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white mt-1">
            Chapter {activeChap.chapterNum}: {activeChap.title}
          </h3>
          <p className="text-xs text-slate-400">
            Author/Source: <span className="text-amber-300">{activeChap.author}</span> • NCERT Source Link: <a href={activeChap.ncertLink} target="_blank" rel="noreferrer" className="text-blue-400 underline">{activeChap.ncertLink}</a>
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setViewMode('animation')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'animation' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Story Studio</span>
          </button>
          <button
            onClick={() => setViewMode('video')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'video' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Animated Video</span>
          </button>
          <button
            onClick={() => setViewMode('glossary')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'glossary' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Glossary & Quiz</span>
          </button>
        </div>
      </div>

      {/* Main Display Area */}
      {viewMode === 'animation' && (
        <div className="space-y-6">
          {/* Animated Stage Visual Box */}
          <div className="relative h-72 sm:h-80 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between relative z-10">
              <span className="px-3 py-1 bg-slate-900/80 border border-slate-700 rounded-full text-xs font-bold text-amber-300">
                Scene {currentSceneIdx + 1} of {activeChap.scenes.length}: {activeScene.title}
              </span>

              <button
                onClick={() => {
                  if (isSpeaking) stopSpeech();
                  else handleSpeak(`${activeScene.title}. ${activeScene.narration}. ${activeScene.speaker} says: ${activeScene.dialogue}`);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isSpeaking
                    ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white'
                }`}
              >
                {isSpeaking ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span>{isSpeaking ? 'Speaking...' : 'Read Aloud Scene'}</span>
              </button>
            </div>

            {/* Visual Icon Animation Display */}
            <div className="my-auto flex flex-col items-center justify-center relative z-10 text-center space-y-3">
              <div className="text-6xl sm:text-7xl filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.3)] animate-float">
                {activeScene.visual}
              </div>
              <div className="max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800">
                {activeScene.narration}
              </div>
            </div>

            {/* Character Dialogue Bubble */}
            <div className="bg-slate-950/90 border border-slate-700 p-3 rounded-2xl relative z-10">
              <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeScene.speaker} Says:</span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-200 mt-0.5">
                {activeScene.dialogue}
              </p>
            </div>
          </div>

          {/* Scene Stepper Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                stopSpeech();
                setCurrentSceneIdx((prev) => Math.max(0, prev - 1));
              }}
              disabled={currentSceneIdx === 0}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl text-xs font-bold text-slate-300 transition-all"
            >
              Previous Scene
            </button>

            <div className="flex gap-2">
              {activeChap.scenes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopSpeech();
                    setCurrentSceneIdx(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    currentSceneIdx === idx
                      ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                stopSpeech();
                if (currentSceneIdx < activeChap.scenes.length - 1) {
                  setCurrentSceneIdx((prev) => prev + 1);
                } else if (selectedChapterIdx < POORVI_CHAPTERS.length - 1) {
                  selectChapter(selectedChapterIdx + 1);
                }
              }}
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
            >
              {currentSceneIdx < activeChap.scenes.length - 1 ? 'Next Scene ➜' : 'Next Chapter ➔'}
            </button>
          </div>
        </div>
      )}

      {/* Video Mode Tab */}
      {viewMode === 'video' && (
        <div className="space-y-4">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black">
            <iframe
              src={`${activeChap.videoUrl}?autoplay=1&rel=0`}
              title={activeChap.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Official Video Lesson: {activeChap.unitTitle} — {activeChap.title}</span>
            <span className="text-amber-400 font-mono">NCERT Class 6</span>
          </div>
        </div>
      )}

      {/* Glossary & Questions Tab */}
      {viewMode === 'glossary' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeChap.glossary.map((g, i) => (
              <div key={i} className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-1">
                <span className="text-sm font-bold text-amber-400">{g.word}</span>
                <p className="text-xs text-slate-300">{g.def}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-950/40 border border-indigo-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Ready to take the AI Weekly Diagnostic Exam for Chapter {activeChap.chapterNum}?
              </h4>
              <p className="text-xs text-indigo-200">
                The AI Observer tracks your understanding of {activeChap.title} and provides instant brief comparison examples on mistakes.
              </p>
            </div>

            <button
              onClick={onLaunchExam}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shrink-0 active:scale-95 transition-all"
            >
              Launch Chapter {activeChap.chapterNum} AI Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
