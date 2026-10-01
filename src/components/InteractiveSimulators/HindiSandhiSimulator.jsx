import React, { useState } from 'react';
import { Sparkles, BookOpen, Check, ArrowRight } from 'lucide-react';

export default function HindiSandhiSimulator() {
  const sandhiPairs = [
    {
      word1: 'हिम',
      endingSound: 'अ',
      word2: 'आलय',
      startingSound: 'आ',
      result: 'हिमालय',
      sandhiName: 'दीर्घ स्वर संधि',
      rule: 'अ + आ = आ (ह्रस्व या दीर्घ स्वर मिलकर दीर्घ बनते हैं)'
    },
    {
      word1: 'विद्या',
      endingSound: 'आ',
      word2: 'अर्थी',
      startingSound: 'अ',
      result: 'विद्यार्थी',
      sandhiName: 'दीर्घ स्वर संधि',
      rule: 'आ + अ = आ'
    },
    {
      word1: 'नर',
      endingSound: 'अ',
      word2: 'ईश',
      startingSound: 'ई',
      result: 'नरेश',
      sandhiName: 'गुण स्वर संधि',
      rule: 'अ + ई = ए'
    },
    {
      word1: 'सूर्य',
      endingSound: 'अ',
      word2: 'उदय',
      startingSound: 'उ',
      result: 'सूर्योदय',
      sandhiName: 'गुण स्वर संधि',
      rule: 'अ + उ = ओ'
    },
    {
      word1: 'प्रति',
      endingSound: 'इ',
      word2: 'एक',
      startingSound: 'ए',
      result: 'प्रत्येक',
      sandhiName: 'यण स्वर संधि',
      rule: 'इ + ए = ये (इ/ई के बाद अन्य स्वर आने पर "य्" बन जाता है)'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMerged, setIsMerged] = useState(false);

  const current = sandhiPairs[currentIndex];

  const handleMerge = () => {
    setIsMerged(true);
  };

  const handleNext = (idx) => {
    setIsMerged(false);
    setCurrentIndex(idx);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-4xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
            <BookOpen className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              हिंदी व्याकरण: सचित्र संधि विच्छेद एवं संधि कर्ता
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30">
                NCERT वसंत / व्याकरण
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              दो वर्णों के परस्पर मेल से उत्पन्न विकार (ध्वनि परिवर्तन) को एनीमेशन से समझें
            </p>
          </div>
        </div>
      </div>

      {/* Select sample pair */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sandhiPairs.map((pair, idx) => (
          <button
            key={idx}
            onClick={() => handleNext(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              currentIndex === idx
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {pair.word1} + {pair.word2}
          </button>
        ))}
      </div>

      {/* Animation Area */}
      <div className="relative h-60 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
        {!isMerged ? (
          <div className="flex items-center gap-6 md:gap-12 animate-fadeIn">
            {/* Word 1 */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-4 bg-gradient-to-br from-rose-900/40 to-slate-800 border-2 border-rose-500/50 rounded-2xl text-2xl font-bold text-rose-200 shadow-xl">
                {current.word1}
              </div>
              <div className="mt-2 text-xs font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                अंतिम ध्वनि: [{current.endingSound}]
              </div>
            </div>

            <div className="text-3xl font-extrabold text-slate-500 animate-pulse">+</div>

            {/* Word 2 */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-4 bg-gradient-to-br from-indigo-900/40 to-slate-800 border-2 border-indigo-500/50 rounded-2xl text-2xl font-bold text-indigo-200 shadow-xl">
                {current.word2}
              </div>
              <div className="mt-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                प्रथम ध्वनि: [{current.startingSound}]
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-bounce">
            <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> संधि रूप (परिवर्तन संपन्न)
            </div>
            <div className="px-10 py-5 bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 rounded-2xl text-4xl font-extrabold text-white shadow-2xl shadow-rose-500/50 border border-white/20">
              {current.result}
            </div>
            <div className="mt-3 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-semibold text-rose-300">
              भेद: {current.sandhiName}
            </div>
          </div>
        )}
      </div>

      {/* Action Controls & Rule */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
        <div>
          <div className="text-xs uppercase text-slate-400 font-bold mb-1">NCERT व्याकरण नियम:</div>
          <div className="text-sm font-medium text-slate-200">{current.rule}</div>
        </div>

        <div>
          {!isMerged ? (
            <button
              onClick={handleMerge}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-600/30 transition-transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              ध्वनि मिलाएँ (एनीमेशन देखें)
            </button>
          ) : (
            <button
              onClick={() => setIsMerged(false)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl"
            >
              पुनः देखें
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
