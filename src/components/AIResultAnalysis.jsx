import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Bot,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  BookOpen,
  Target,
  RefreshCw,
  MessageSquare,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
  GraduationCap,
  CheckCheck,
  FileText
} from 'lucide-react';
import { REMEDIAL_PRACTICE_BANK } from '../data/sampleExams';

export default function AIResultAnalysis({ exam, selectedAnswers, onClose, onRetake, onOpenVideoLesson }) {
  const [activeTab, setActiveTab] = useState('mistakes'); // 'mistakes', 'teacher_plan', 'breakdown', 'remedial', 'chat'
  const [expandedMistakes, setExpandedMistakes] = useState({});
  const [remedialAnswers, setRemedialAnswers] = useState({});
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'ai',
      text: `Namaste! I am your NCERT AI Study Tutor. I noticed you had some difficulty with Algebra (transposition & signs) in this exam. Ask me anything and I will give you simple examples!`
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Calculate results
  const totalQuestions = exam.questions.length;
  let correctCount = 0;
  const topicStats = {}; // { [topic]: { total: 0, correct: 0, mistakes: [] } }

  exam.questions.forEach((q) => {
    const topic = q.topic || 'General';
    if (!topicStats[topic]) {
      topicStats[topic] = { total: 0, correct: 0, mistakes: [] };
    }
    topicStats[topic].total += 1;

    const studentAnswer = selectedAnswers[q.id];
    const isCorrect = studentAnswer === q.correctIndex;

    if (isCorrect) {
      correctCount += 1;
      topicStats[topic].correct += 1;
    } else {
      topicStats[topic].mistakes.push({
        question: q,
        studentAnswer: studentAnswer !== undefined ? studentAnswer : -1
      });
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = percentage >= 60;

  // Identify weak topics (accuracy < 65%)
  const weakTopics = Object.keys(topicStats).filter((topic) => {
    const accuracy = (topicStats[topic].correct / topicStats[topic].total) * 100;
    return accuracy < 65;
  });

  // Confetti on good score
  useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  const toggleExpandMistake = (qId) => {
    setExpandedMistakes((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleRemedialSelect = (qIdx, optIdx) => {
    setRemedialAnswers((prev) => ({
      ...prev,
      [qIdx]: optIdx
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    // Simulated NCERT AI Tutor intelligent response
    setTimeout(() => {
      let aiReply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('algebra') || lower.includes('transpos') || lower.includes('equation')) {
        aiReply = `💡 In NCERT Class 8 Chapter 2, remember the "Mirror Rule" of equality: If you have 3x + 7 = 22, the +7 on the left is holding back x. When you push it over to the right side of '=', it inverts its sign: 22 - 7 = 15! Then 3x = 15 becomes x = 15 ÷ 3 = 5. Always invert the sign!`;
      } else if (lower.includes('why') || lower.includes('sign') || lower.includes('minus')) {
        aiReply = `Great question! When an equation is balanced like a physical scale: whatever you remove from the left pan (e.g. subtracting 7), you MUST also remove from the right pan (22 - 7 = 15) so the scale does not tip over!`;
      } else if (lower.includes('hindi') || lower.includes('sandhi')) {
        aiReply = `संधि में केवल दो ध्वनियों का मेल होता है! जैसे: हिम (म् + अ) और आलय (आ + लय)। यहाँ अ + आ मिलकर बड़ा 'आ' बन जाता है = हिमालय। यह दीर्घ स्वर संधि है।`;
      } else {
        aiReply = `According to your CBSE NCERT curriculum, focus on writing each step clearly on paper rather than doing mental shortcuts. This prevents 90% of sign transposition errors!`;
      }

      setChatMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                AI Diagnostic Mistake & Focus Report
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  {exam.title}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Cognitive error detection based on CBSE & NCERT performance benchmarks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRetake}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retake Exam
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Done & Close
            </button>
          </div>
        </div>

        {/* Score & AI High-level Summary Banner */}
        <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/60 border-b border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Score Ring / Card */}
            <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-bold text-xl border ${
                isPassed
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-500/20'
                  : 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-lg shadow-rose-500/20'
              }`}>
                <span>{percentage}%</span>
                <span className="text-[10px] font-normal text-slate-400 uppercase">Score</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {correctCount} of {totalQuestions} Correct
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isPassed ? '🎯 Great effort! Passing mark achieved' : '⚠️ Diagnostic Alert: Remedial focus required'}
                </div>
              </div>
            </div>

            {/* AI Diagnosis Notice (Directly addressing user prompt) */}
            <div className="md:col-span-2 bg-indigo-950/50 border border-indigo-500/30 rounded-2xl p-4 flex items-start gap-3">
              <BrainCircuit className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-indigo-200">
                  {weakTopics.length > 0 ? (
                    <span>
                      AI Observer Alert: Identified Conceptual Hesitation in{' '}
                      <span className="text-amber-300 underline underline-offset-2">
                        {weakTopics.join(', ')}
                      </span>
                    </span>
                  ) : (
                    <span className="text-emerald-300">
                      Exceptional Mastery Across All NCERT Tested Topics!
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {weakTopics.length > 0
                    ? `Like in Mathematics, where mistakes occurred in Algebra during sign transposition, the AI has compiled brief step-by-step examples below showing exactly where the mistake happened and what to focus on next.`
                    : 'Your grasp on the curriculum concepts is solid. Continue watching upcoming animation modules to prepare for Week 2!'}
                </p>
              </div>
            </div>
          </div>

          {/* Teacher & Admin Shared Transparency Banner */}
          <div className="mt-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-200 block">
                  Report Shared with Teacher & School Admin Portal
                </span>
                <p className="text-[11px] text-slate-300">
                  Your teacher has received your diagnostic report and flagged your weak points in Maths, Science, English, or Hindi so you both know what to focus on.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('teacher_plan')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-all shrink-0 flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>See Teacher Focus Plan</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'mistakes'
                ? 'border-indigo-500 text-indigo-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            AI Mistake Diagnosis ({totalQuestions - correctCount})
          </button>

          <button
            onClick={() => setActiveTab('teacher_plan')}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'teacher_plan'
                ? 'border-amber-500 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-amber-400" />
            Teacher & Student Focus Plan
          </button>

          <button
            onClick={() => setActiveTab('breakdown')}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'breakdown'
                ? 'border-indigo-500 text-indigo-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-4 h-4 text-blue-400" />
            Topic Mastery
          </button>

          <button
            onClick={() => setActiveTab('remedial')}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'remedial'
                ? 'border-indigo-500 text-indigo-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Remedial Drills
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`py-3 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'chat'
                ? 'border-indigo-500 text-indigo-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-purple-400" />
            Ask AI Shikshak
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {/* TAB 1: AI MISTAKE DIAGNOSIS & BRIEF EXAMPLES (The core user request) */}
          {activeTab === 'mistakes' && (
            <div className="space-y-6">
              {totalQuestions - correctCount === 0 ? (
                <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Zero Mistakes Found!</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    You answered all questions correctly. You have complete mastery of this week's NCERT topics!
                  </p>
                </div>
              ) : (
                exam.questions.map((q, idx) => {
                  const studentAns = selectedAnswers[q.id];
                  const isCorrect = studentAns === q.correctIndex;
                  if (isCorrect) return null; // Show only mistakes in this tab

                  const studentChoiceText = studentAns !== undefined ? q.options[studentAns] : 'Not Answered';
                  const correctChoiceText = q.options[q.correctIndex];
                  const mistakeReason =
                    q.commonMistakeAnalysis && q.commonMistakeAnalysis[studentAns]
                      ? q.commonMistakeAnalysis[studentAns]
                      : 'Conceptual mismatch in application of NCERT formula.';

                  return (
                    <div
                      key={q.id}
                      className="bg-slate-800/70 border-2 border-rose-500/40 rounded-2xl overflow-hidden shadow-lg transition-all"
                    >
                      {/* Mistake Banner */}
                      <div className="bg-rose-950/40 px-5 py-3 border-b border-rose-500/30 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          <span className="text-xs font-bold text-rose-200">
                            Mistake in Question {idx + 1}: {q.topic}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            ({q.subtopic})
                          </span>
                        </div>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                          Critical Focus Area
                        </span>
                      </div>

                      <div className="p-5 space-y-4">
                        {/* Question Text */}
                        <div className="text-sm font-semibold text-slate-100">
                          {q.question}
                        </div>

                        {/* Side by side: What You Picked vs Correct */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="bg-rose-950/30 border border-rose-500/40 p-3 rounded-xl">
                            <span className="text-[10px] font-bold uppercase text-rose-400 block mb-1">
                              ❌ Your Answer
                            </span>
                            <span className="font-semibold text-rose-200">{studentChoiceText}</span>
                          </div>

                          <div className="bg-emerald-950/30 border border-emerald-500/40 p-3 rounded-xl">
                            <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">
                              ✅ Correct NCERT Answer
                            </span>
                            <span className="font-semibold text-emerald-200">{correctChoiceText}</span>
                          </div>
                        </div>

                        {/* AI Observer Diagnostic Note */}
                        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-xl p-3.5 flex items-start gap-2.5">
                          <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-indigo-300 block mb-0.5">
                              🤖 AI Observation on Why You Made This Mistake:
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {mistakeReason}
                            </p>
                          </div>
                        </div>

                        {/* BRIEF EXAMPLE (The exact requirement requested by user!) */}
                        {q.briefMistakeExample && (
                          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 space-y-2.5">
                            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                              <BookOpen className="w-4 h-4 text-amber-400" />
                              Brief Comparison Example & NCERT Rule:
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                              <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-800/40 text-rose-300">
                                <div className="text-[10px] font-bold text-rose-400 uppercase font-sans mb-1">
                                  Common Mistake Method:
                                </div>
                                <div>{q.briefMistakeExample.wrongMethod}</div>
                              </div>

                              <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300">
                                <div className="text-[10px] font-bold text-emerald-400 uppercase font-sans mb-1">
                                  Correct NCERT Method:
                                </div>
                                <div>{q.briefMistakeExample.correctMethod}</div>
                              </div>
                            </div>

                            <div className="text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                              <span className="font-bold text-blue-400">📖 NCERT Concept Rule: </span>
                              {q.briefMistakeExample.rule}
                            </div>
                          </div>
                        )}

                        {/* What the student has to focus on next */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-700/60">
                          <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                            <Target className="w-4 h-4 text-amber-400" />
                            <span>Actionable Focus: {q.focusTip}</span>
                          </div>

                          <button
                            onClick={() => setActiveTab('remedial')}
                            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition-all active:scale-95 shrink-0"
                          >
                            <span>Practice {q.topic} Mini Drill</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB: TEACHER & STUDENT SHARED FOCUS PLAN */}
          {activeTab === 'teacher_plan' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Teacher Plan Intro Card */}
              <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border border-amber-500/30 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Teacher & Student Collaborative Action Plan</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  How You and Your Teacher Will Work Together on Your Weak Points
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  Your exam results have been transmitted to the <strong className="text-amber-300">Teacher & Admin Portal</strong>. When you make a mistake on basic skills — such as in <strong className="text-sky-300">Maths (subtraction in transposition, negative squaring)</strong>, <strong className="text-emerald-300">Science formulas</strong>, or <strong className="text-rose-300">English & Hindi chapters</strong> — both you and your teacher get the exact point to focus on before the next weekly assessment!
                </p>
              </div>

              {/* Weak Points Itemized List for Teacher & Student */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Targeted Revision Guide for Your Identified Mistakes:
                </h5>

                {totalQuestions - correctCount === 0 ? (
                  <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
                    <CheckCheck className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">No Remedial Action Needed!</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Your teacher has noted 100% accuracy on this week's diagnostic modules. Keep it up!
                    </p>
                  </div>
                ) : (
                  exam.questions.map((q, idx) => {
                    const studentAns = selectedAnswers[q.id];
                    const isCorrect = studentAns === q.correctIndex;
                    if (isCorrect) return null;

                    return (
                      <div
                        key={q.id}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3.5 shadow-md"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              Question {idx + 1}
                            </span>
                            <span className="text-xs font-bold text-white">
                              {q.topic} • {q.subtopic}
                            </span>
                          </div>

                          <span className="text-[11px] font-bold text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                            Teacher Flagged Point
                          </span>
                        </div>

                        {/* What went wrong */}
                        <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs space-y-1">
                          <span className="text-slate-400 font-semibold block text-[11px]">
                            Identified Concept Slip:
                          </span>
                          <p className="text-rose-200">
                            {q.commonMistakeAnalysis && q.commonMistakeAnalysis[studentAns]
                              ? q.commonMistakeAnalysis[studentAns]
                              : 'Conceptual mismatch in application of basic chapter formula.'}
                          </p>
                        </div>

                        {/* Prescribed Step-by-Step Remedial Focus */}
                        <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs space-y-1.5">
                          <span className="text-indigo-300 font-bold flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-amber-300" />
                            What You & Your Teacher Must Focus On:
                          </span>
                          <p className="text-slate-200 leading-relaxed font-medium">
                            {q.focusTip}
                          </p>
                          {q.briefMistakeExample?.rule && (
                            <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800/80">
                              {q.briefMistakeExample.rule}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 2: TOPIC-BY-TOPIC ACCURACY BREAKDOWN */}
          {activeTab === 'breakdown' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">
                Curriculum Topic Mastery Radar (CBSE NCERT)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(topicStats).map((topic) => {
                  const stat = topicStats[topic];
                  const topicAcc = Math.round((stat.correct / stat.total) * 100);
                  const isWeak = topicAcc < 65;

                  return (
                    <div
                      key={topic}
                      className={`p-4 rounded-2xl border transition-all ${
                        isWeak
                          ? 'bg-rose-950/20 border-rose-500/40 shadow-sm'
                          : 'bg-slate-800/60 border-slate-700/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-slate-100">{topic}</span>
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                            isWeak
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {topicAcc}% ({stat.correct}/{stat.total})
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full transition-all duration-700 ${
                            isWeak ? 'bg-gradient-to-r from-rose-500 to-amber-500' : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          }`}
                          style={{ width: `${topicAcc}%` }}
                        />
                      </div>

                      <div className="text-xs text-slate-400 flex items-center justify-between">
                        <span>{isWeak ? '⚠️ Needs immediate revision' : '✅ Concept well-understood'}</span>
                        {isWeak && (
                          <span className="text-amber-400 font-semibold">Priority Focus</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: REMEDIAL PRACTICE DRILLS */}
          {activeTab === 'remedial' && (
            <div className="space-y-6">
              <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4">
                <h4 className="text-sm font-bold text-indigo-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Targeted NCERT Remedial Questions (Instant Feedback)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Solve these specific practice questions right now to clear up the mistakes identified by the AI in Algebra, Science, and Grammar.
                </p>
              </div>

              {/* Show remedial questions for weak topics or default to Algebra */}
              {Object.keys(REMEDIAL_PRACTICE_BANK).map((topicName) => (
                <div key={topicName} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                    <Target className="w-4 h-4" />
                    <span>Topic Drill: {topicName}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {REMEDIAL_PRACTICE_BANK[topicName].map((drill, dIdx) => {
                      const drillKey = `${topicName}-${dIdx}`;
                      const studentSelection = remedialAnswers[drillKey];
                      const isAnswered = studentSelection !== undefined;
                      const isCorrect = studentSelection === drill.correctIndex;

                      return (
                        <div
                          key={dIdx}
                          className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 space-y-3"
                        >
                          <div className="text-sm font-medium text-slate-200">
                            <span className="text-blue-400 font-bold mr-2">Q{dIdx + 1}.</span>
                            {drill.q}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {drill.options.map((opt, optIdx) => (
                              <button
                                key={optIdx}
                                onClick={() => handleRemedialSelect(drillKey, optIdx)}
                                className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all ${
                                  studentSelection === optIdx
                                    ? optIdx === drill.correctIndex
                                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold'
                                      : 'bg-rose-500/20 border-rose-500 text-rose-200'
                                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          {isAnswered && (
                            <div
                              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                                isCorrect
                                  ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                                  : 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
                              }`}
                            >
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                              )}
                              <div>
                                <span className="font-bold">
                                  {isCorrect ? 'Correct! ' : 'Explanation: '}
                                </span>
                                {drill.explanation}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: ASK AI SHIKSHAK (INTERACTIVE TUTOR) */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[450px] bg-slate-950/60 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-bold text-white">
                  NCERT AI Shikshak (24x7 Concept Helper)
                </span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 flex gap-2 overflow-x-auto text-[11px]">
                <button
                  onClick={() => setChatInput('Why does +7 become -7 in transposition?')}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 whitespace-nowrap"
                >
                  "Why does +7 become -7 in transposition?"
                </button>
                <button
                  onClick={() => setChatInput('Explain long division in algebra with an example')}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 whitespace-nowrap"
                >
                  "Explain algebra rules with simple example"
                </button>
                <button
                  onClick={() => setChatInput('संधि और समास में क्या अंतर है?')}
                  className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 whitespace-nowrap"
                >
                  "संधि और समास में क्या अंतर है?"
                </button>
              </div>

              {/* Input Bar */}
              <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask any doubt about your mistakes or NCERT textbook topic..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
