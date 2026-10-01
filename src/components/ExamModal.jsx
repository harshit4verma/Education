import React, { useState, useEffect } from 'react';
import {
  X,
  Timer,
  Bot,
  BrainCircuit,
  AlertCircle,
  CheckCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
  Eye,
  Sparkles,
  ShieldCheck,
  Activity
} from 'lucide-react';
import AIResultAnalysis from './AIResultAnalysis';
import { saveStudentSubmission } from '../data/studentResultsStore';

export default function ExamModal({ exam, isOpen, onClose, onFinishExam }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: optionIndex }
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState((exam?.timeLimitMinutes || 10) * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiObservations, setAiObservations] = useState([
    'AI Proctor initialised: tracking question transition times.',
    'Monitoring conceptual patterns across NCERT syllabus modules.'
  ]);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    setTimeLeft((exam?.timeLimitMinutes || 10) * 60);
    setSelectedAnswers({});
    setFlaggedQuestions(new Set());
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    setShowConfirmSubmit(false);

    // Initial AI greeting observation
    setAiObservations([
      'AI Proctor active: Observing conceptual precision in real-time.',
      `Assessment started for Class ${exam?.classLevel} NCERT Syllabus.`
    ]);
  }, [isOpen, exam]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isSubmitted]);

  if (!isOpen || !exam) return null;

  const currentQ = exam.questions[currentQuestionIndex];
  const totalQuestions = exam.questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx
    }));

    // Dynamic AI Observation note when student selects an answer
    const q = exam.questions.find((item) => item.id === qId);
    if (q) {
      const isCorrect = optionIdx === q.correctIndex;
      const topic = q.topic;
      let note = '';
      if (isCorrect) {
        note = `AI Note on Question ${currentQuestionIndex + 1}: Strong conceptual clarity demonstrated in ${topic}.`;
      } else {
        note = `AI Note on Question ${currentQuestionIndex + 1}: Potential misconception detected in ${topic} (${q.subtopic}). Flagged for diagnostic analysis.`;
      }

      setAiObservations((prev) => [note, ...prev.slice(0, 3)]);
    }
  };

  const toggleFlag = (qId) => {
    setFlaggedQuestions((prev) => {
      const updated = new Set(prev);
      if (updated.has(qId)) updated.delete(qId);
      else updated.add(qId);
      return updated;
    });
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);

    try {
      let correct = 0;
      const mistakesList = [];
      const weakTopics = [];

      exam.questions.forEach((q) => {
        const studentAns = selectedAnswers[q.id];
        if (studentAns === q.correctIndex) {
          correct += 1;
        } else {
          const studentChoiceText = studentAns !== undefined ? q.options[studentAns] : 'Not Answered';
          const correctChoiceText = q.options[q.correctIndex];
          const reason =
            q.commonMistakeAnalysis && q.commonMistakeAnalysis[studentAns]
              ? q.commonMistakeAnalysis[studentAns]
              : 'Conceptual mismatch in basic chapter skill application.';

          if (!weakTopics.includes(q.topic)) weakTopics.push(q.topic);

          mistakesList.push({
            subjectId: q.subjectId || 'general',
            subjectName:
              q.subjectId === 'math'
                ? 'Mathematics'
                : q.subjectId === 'science'
                ? 'Science'
                : q.subjectId === 'english'
                ? 'English'
                : 'हिन्दी',
            chapter: q.topic,
            topic: q.subtopic || q.topic,
            basicSkillFlag: q.subtopic || q.topic,
            question: q.question,
            studentChoice: studentChoiceText,
            correctChoice: correctChoiceText,
            mistakeAnalysis: reason,
            wrongMethod: q.briefMistakeExample?.wrongMethod || 'Mistake in basic step',
            correctMethod: q.briefMistakeExample?.correctMethod || 'Correct step required',
            ncertRule: q.briefMistakeExample?.rule || 'NCERT Core Rule',
            teacherFocusRecommendation: q.focusTip || 'Review basic chapter concept with teacher.'
          });
        }
      });

      const percentage = Math.round((correct / exam.questions.length) * 100);
      const studentSubmission = {
        id: `sub-${Date.now()}`,
        studentName: 'Active Student (You)',
        rollNo: `CBSE-0${exam.classLevel}-LIVE`,
        classLevel: exam.classLevel,
        examId: exam.id,
        examTitle: exam.title,
        submittedAt: new Date().toISOString(),
        score: Math.round((correct / exam.questions.length) * exam.totalMarks),
        totalMarks: exam.totalMarks,
        percentage,
        subject: exam.questions[0]?.subjectId || 'math',
        weakTopics: weakTopics.length > 0 ? weakTopics : ['Full Topic Mastery'],
        mistakesSummary: mistakesList,
        teacherInterventionStatus: mistakesList.length > 0 ? 'Action Required' : 'Mastered',
        teacherPrescription:
          mistakesList.length > 0
            ? `Focus on: ${mistakesList.map((m) => m.basicSkillFlag).join(', ')}`
            : 'Outstanding performance across all basic skills!'
      };

      saveStudentSubmission(studentSubmission);
    } catch (e) {
      console.error('Error saving live student submission:', e);
    }

    if (onFinishExam) {
      onFinishExam(exam.id, selectedAnswers);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // If submitted, show the rich AI Diagnostic Mistake Result Screen!
  if (isSubmitted) {
    return (
      <AIResultAnalysis
        exam={exam}
        selectedAnswers={selectedAnswers}
        onClose={onClose}
        onRetake={() => {
          setIsSubmitted(false);
          setSelectedAnswers({});
          setCurrentQuestionIndex(0);
          setTimeLeft((exam.timeLimitMinutes || 10) * 60);
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Exam Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <BrainCircuit className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">{exam.title}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  Week {exam.weekNumber}
                </span>
              </div>
              <p className="text-xs text-slate-400">Class {exam.classLevel} NCERT Periodic Diagnostic Arena</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Timer */}
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm ${
              timeLeft < 120
                ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
                : 'bg-slate-800 border-slate-700 text-amber-300'
            }`}>
              <Timer className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
            >
              Submit Exam
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live AI Observer Status Bar */}
        <div className="bg-indigo-950/60 border-b border-indigo-500/20 px-6 py-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>AI Learning Observer Active:</span>
            </div>
            <span className="text-slate-300 truncate max-w-md hidden sm:inline">
              {aiObservations[0]}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-indigo-200/80">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Tracking Mistake Patterns & Focus Areas</span>
          </div>
        </div>

        {/* Main Exam Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Left Pane (3 cols) */}
          <div className="lg:col-span-3 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Question Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-bold text-slate-200">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium">
                    Topic: {currentQ.topic}
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    ({currentQ.subtopic})
                  </span>
                </div>

                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg border transition-all ${
                    flaggedQuestions.has(currentQ.id)
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedQuestions.has(currentQ.id) ? 'Flagged for Review' : 'Flag'}</span>
                </button>
              </div>

              {/* Question Text */}
              <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                  {currentQ.question}
                </h2>
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentQ.id] === optIdx;
                  const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQ.id, optIdx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-600/20 ring-1 ring-indigo-400'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/80 text-slate-200 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-700 text-slate-300'
                        }`}>
                          {letter}
                        </span>
                        <span className="text-sm font-medium">{option}</span>
                      </div>

                      {isSelected && (
                        <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 text-xs font-semibold rounded-xl transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Question
              </button>

              <div className="text-xs text-slate-400 font-medium">
                {answeredCount} of {totalQuestions} Answered
              </div>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  Next Question
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  Finish & View AI Diagnostic
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Sidebar: Palette & Live AI Feed (1 col) */}
          <div className="space-y-5">
            {/* Palette */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Question Palette
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {exam.questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isFlagged = flaggedQuestions.has(q.id);

                  let bgClass = 'bg-slate-900 border-slate-700 text-slate-400';
                  if (isCurrent) {
                    bgClass = 'ring-2 ring-blue-500 bg-blue-600/30 text-white font-bold border-blue-400';
                  } else if (isFlagged) {
                    bgClass = 'bg-amber-500/20 border-amber-500/50 text-amber-300';
                  } else if (isAnswered) {
                    bgClass = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`h-9 rounded-xl border text-xs font-semibold flex items-center justify-center transition-all ${bgClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-1.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-md bg-emerald-500/20 border border-emerald-500" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-md bg-amber-500/20 border border-amber-500" />
                  <span>Flagged for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-md bg-slate-900 border border-slate-700" />
                  <span>Unanswered</span>
                </div>
              </div>
            </div>

            {/* Live AI Cognitive Observer Feed */}
            <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs mb-3">
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>AI Live Proctor Notes</span>
              </div>
              <div className="space-y-2">
                {aiObservations.map((obs, i) => (
                  <div key={i} className="text-[11px] text-slate-300 bg-indigo-900/30 p-2.5 rounded-xl border border-indigo-500/20 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>{obs}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-3 italic">
                *The AI evaluates misconceptions, not just right or wrong answers, to build your customized remedial plan.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Submit Modal Dialog */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full shadow-2xl space-y-4">
              <h4 className="text-lg font-bold text-white">Submit Exam?</h4>
              <p className="text-xs text-slate-300">
                You have answered <span className="text-white font-bold">{answeredCount}</span> of{' '}
                <span className="text-white font-bold">{totalQuestions}</span> questions.
                {answeredCount < totalQuestions && (
                  <span className="block text-amber-400 mt-1">
                    ⚠️ You still have {totalQuestions - answeredCount} unanswered questions!
                  </span>
                )}
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold"
                >
                  Continue Test
                </button>
                <button
                  onClick={handleSubmitExam}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg"
                >
                  Yes, Submit & View AI Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
