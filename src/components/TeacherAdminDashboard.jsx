import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BrainCircuit,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Bot,
  Calendar,
  Layers,
  FileText,
  Send,
  MessageSquare,
  HelpCircle,
  Eye,
  CheckCheck,
  ChevronRight,
  TrendingDown,
  Clock,
  Printer,
  School,
  Mail,
  Phone,
  UserCheck,
  Award
} from 'lucide-react';
import { getStoredSubmissions, updateTeacherIntervention } from '../data/studentResultsStore';
import { getRegisteredStudentsDirectory } from '../data/authStore';

export default function TeacherAdminDashboard({ onBackToStudentView, onOpenVideoLesson }) {
  const [submissions, setSubmissions] = useState(() => getStoredSubmissions());
  const [registeredStudents, setRegisteredStudents] = useState(() => getRegisteredStudentsDirectory());
  const [adminTab, setAdminTab] = useState('submissions'); // 'submissions', 'directory', 'weakness_radar'
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDossierStudent, setActiveDossierStudent] = useState(null);
  const [selectedDirectoryStudent, setSelectedDirectoryStudent] = useState(null);
  const [teacherCustomNote, setTeacherCustomNote] = useState('');
  const [interventionSentSuccess, setInterventionSentSuccess] = useState(false);

  // Filter submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesClass = selectedClass === 'all' || sub.classLevel === Number(selectedClass);
    const matchesSubject = selectedSubject === 'all' || sub.subject === selectedSubject || (sub.mistakesSummary && sub.mistakesSummary.some(m => m.subjectId === selectedSubject));
    const matchesSearch =
      searchQuery === '' ||
      sub.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sub.weakTopics && sub.weakTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
      (sub.mistakesSummary && sub.mistakesSummary.some(m =>
        m.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.basicSkillFlag.toLowerCase().includes(searchQuery.toLowerCase())
      ));

    return matchesClass && matchesSubject && matchesSearch;
  });

  // Filter registered students
  const filteredStudents = registeredStudents.filter((std) => {
    const matchesClass = selectedClass === 'all' || std.classLevel === Number(selectedClass);
    const matchesSearch =
      searchQuery === '' ||
      std.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.rollNo.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesClass && matchesSearch;
  });

  // KPI calculations
  const totalSubmissions = submissions.length;
  const criticalInterventionsCount = submissions.filter(
    (s) => s.teacherInterventionStatus === 'Action Required'
  ).length;
  const avgScore = Math.round(
    submissions.reduce((acc, curr) => acc + curr.percentage, 0) / (totalSubmissions || 1)
  );

  const handleOpenDossier = (student) => {
    setActiveDossierStudent(student);
    setTeacherCustomNote(student.teacherNote || student.teacherPrescription || '');
    setInterventionSentSuccess(false);
  };

  const handleSaveTeacherIntervention = () => {
    if (!activeDossierStudent) return;
    const updated = updateTeacherIntervention(
      activeDossierStudent.id,
      'Reviewed & Plan Sent',
      teacherCustomNote
    );
    if (updated) {
      setSubmissions(updated);
      setActiveDossierStudent((prev) => ({
        ...prev,
        teacherInterventionStatus: 'Reviewed & Plan Sent',
        teacherNote: teacherCustomNote
      }));
      setInterventionSentSuccess(true);
      setTimeout(() => setInterventionSentSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white pb-16">
      {/* Top Admin Header Bar - Classy Light Glassmorphism */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 bg-clip-text text-transparent">
                  Teacher & Admin Command Portal
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                  Live CBSE 6–10
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Registered student details, diagnostic exam responses & microscopic chapter weaknesses
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToStudentView}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all active:scale-95"
            >
              <GraduationCap className="w-4 h-4" />
              <span>← Switch to Student View</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Explaining Admin Oversight & Registration Details */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-indigo-100 text-xs font-bold border border-white/20">
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>Admin & Teacher Diagnostic Intelligence</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                Complete Oversight: Registered Students & Chapter Misconceptions
              </h2>

              <p className="text-xs md:text-sm text-indigo-100 leading-relaxed">
                The school administrator gets every detail: whether a student is registered for <strong className="text-amber-300">Class 6, 7, 8, 9, or 10</strong>, their school, roll number, and their exact conceptual weak points in <span className="underline decoration-amber-300 underline-offset-2 font-semibold">Maths (subtraction, multiplication, algebra)</span>, <span className="underline decoration-sky-300 underline-offset-2 font-semibold">Science formulas</span>, and <span className="underline decoration-rose-300 underline-offset-2 font-semibold">English & Hindi chapters</span>.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center min-w-[160px] shrink-0">
              <div className="text-3xl font-black text-amber-300">{registeredStudents.length}</div>
              <div className="text-xs font-semibold text-white mt-0.5">Students Registered</div>
              <div className="text-[10px] text-indigo-200 mt-1">Across Classes 6–10</div>
            </div>
          </div>
        </div>

        {/* Executive KPI Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{registeredStudents.length}</div>
              <div className="text-xs text-slate-500 font-medium">Registered Students</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-rose-600">{criticalInterventionsCount}</div>
              <div className="text-xs text-slate-500 font-medium">Need Focus on Weak Points</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-600">{avgScore}%</div>
              <div className="text-xs text-slate-500 font-medium">Average Test Accuracy</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black text-purple-700">5 Active Classes</div>
              <div className="text-xs text-slate-500 font-medium">Classes 6, 7, 8, 9 & 10</div>
            </div>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-white rounded-2xl p-1.5 shadow-sm gap-2">
          <button
            onClick={() => setAdminTab('submissions')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              adminTab === 'submissions'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Exam Responses & Chapter Weak Points ({filteredSubmissions.length})</span>
          </button>

          <button
            onClick={() => setAdminTab('directory')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              adminTab === 'directory'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Registered Students Directory ({filteredStudents.length})</span>
          </button>

          <button
            onClick={() => setAdminTab('weakness_radar')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              adminTab === 'weakness_radar'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Class-Wide Misconception Radar</span>
          </button>
        </div>

        {/* Global Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Filter Class:</span>
            {['all', '6', '7', '8', '9', '10'].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedClass(c)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedClass === c
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c === 'all' ? 'All Classes' : `Class ${c}`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {adminTab === 'submissions' && (
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500 font-semibold"
              >
                <option value="all">All Subjects</option>
                <option value="math">📐 Mathematics</option>
                <option value="science">🔬 Science</option>
                <option value="english">📚 English</option>
                <option value="hindi">✍️ Hindi</option>
              </select>
            )}

            <div className="relative w-48 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search student, roll no, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* TAB 1: EXAM RESPONSES & CHAPTER WEAK POINTS */}
        {adminTab === 'submissions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                Exam Submissions with Microscopic Error Breakdown ({filteredSubmissions.length})
              </h3>
              <span className="text-xs text-slate-500">
                Click any dossier to view step-by-step mistake vs correct NCERT solution
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center font-black text-indigo-700 text-lg shrink-0">
                      {sub.studentName.charAt(0)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-extrabold text-slate-900">{sub.studentName}</h4>
                        <span className="text-[10px] font-mono text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                          {sub.rollNo}
                        </span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                          Class {sub.classLevel}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          sub.teacherInterventionStatus === 'Action Required'
                            ? 'bg-rose-100 text-rose-700 border border-rose-200'
                            : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        }`}>
                          {sub.teacherInterventionStatus}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="font-semibold text-slate-800">{sub.examTitle}</span>
                        <span>•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(sub.submittedAt).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Microscopic Mistake Flags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sub.mistakesSummary && sub.mistakesSummary.map((m, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-1.5 font-medium"
                          >
                            <AlertTriangle className="w-3 h-3 text-rose-500 shrink-0" />
                            <span><strong>{m.subjectName} ({m.chapter.split(':')[0]}):</strong> {m.basicSkillFlag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-5 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
                    <div className="text-right">
                      <div className="text-xl font-black text-slate-900">{sub.percentage}%</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">
                        {sub.score} / {sub.totalMarks} Marks
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenDossier(sub)}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
                    >
                      <span>Review Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: REGISTERED STUDENTS DIRECTORY (Every Detail for Admin!) */}
        {adminTab === 'directory' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                Registered Students Directory ({filteredStudents.length} Students)
              </h3>
              <span className="text-xs text-slate-500">
                Admin can view student class level, school affiliation, parent contact & academic records
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3.5 px-4">Student Name</th>
                      <th className="py-3.5 px-4">Class Level</th>
                      <th className="py-3.5 px-4">Roll Number</th>
                      <th className="py-3.5 px-4">School Name</th>
                      <th className="py-3.5 px-4">Email Address</th>
                      <th className="py-3.5 px-4">Parent Phone</th>
                      <th className="py-3.5 px-4">Exams Taken</th>
                      <th className="py-3.5 px-4">Accuracy</th>
                      <th className="py-3.5 px-4">Weak Points Flagged</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredStudents.map((std) => (
                      <tr key={std.id} className="hover:bg-indigo-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-xs shrink-0">
                            {std.name.charAt(0)}
                          </div>
                          <span>{std.name}</span>
                        </td>
                        <td className="py-3.5 px-4 font-black">
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                            Class {std.classLevel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-slate-600">
                          {std.rollNo}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium">
                          {std.schoolName}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {std.email}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-mono">
                          {std.parentContact}
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold">
                          {std.examsTaken}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-600">
                          {std.avgScore}%
                        </td>
                        <td className="py-3.5 px-4">
                          {std.weakPoints && std.weakPoints.length > 0 ? (
                            <div className="flex flex-col gap-1 max-w-[200px]">
                              {std.weakPoints.map((wp, i) => (
                                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 truncate">
                                  {wp}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[11px] text-emerald-600 font-semibold">
                              ✓ Good Standing
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLASS-WIDE MISCONCEPTION RADAR */}
        {adminTab === 'weakness_radar' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-sm">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Class-Wide Conceptual Pitfalls by Subject (NCERT CBSE)
              </h3>
              <p className="text-xs text-slate-500">
                The most frequent errors detected by the AI proctor across Class 6, 7, 8, 9 & 10
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <span className="text-xs font-black text-blue-700 flex items-center gap-1.5">
                  📐 Mathematics Basic Pitfalls
                </span>
                <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>Class 8 Linear Equations:</strong> Transposition sign error (+7 added instead of subtracted).</li>
                  <li><strong>Class 10 Quadratics:</strong> Negative number squaring: (-4)² computed as -16 in D = b² - 4ac.</li>
                  <li><strong>Class 7 Fractions:</strong> Reciprocal flip forgotten in fraction division (3/4 ÷ 1/2).</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <span className="text-xs font-black text-emerald-700 flex items-center gap-1.5">
                  🔬 Science Concept Pitfalls
                </span>
                <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>Class 10 Electricity:</strong> Inverting 1/R = 1/2 forgotten, student reports 0.5 Ω instead of 2 Ω.</li>
                  <li><strong>Class 10 Chemistry:</strong> Atom counts in chemical equation balancing.</li>
                  <li><strong>Class 8 Biology:</strong> Cell wall exclusive to plants; confused with animal cells.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <span className="text-xs font-black text-amber-700 flex items-center gap-1.5">
                  📚 English Comprehension
                </span>
                <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>Class 6 Poorvi Ch 1:</strong> Taking dew magic literally vs learning moral of hard banana farming.</li>
                  <li><strong>Class 10 First Flight Ch 1:</strong> Irony behind Lencho calling his benefactors "crooks".</li>
                  <li><strong>Class 8 Grammar:</strong> Past Continuous vs Present Perfect marker confusion.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
                <span className="text-xs font-black text-rose-700 flex items-center gap-1.5">
                  ✍️ हिन्दी व्याकरण एवं पाठ
                </span>
                <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>कक्षा 10 वाच्य:</strong> कर्तृवाच्य से कर्मवाच्य में भाववाच्य का भ्रम एवं अनावश्यक काल परिवर्तन।</li>
                  <li><strong>कक्षा 8 संधि:</strong> दीर्घ संधि (अ + आ = आ) और गुण संधि (अ + इ = ए) में भ्रम।</li>
                  <li><strong>कक्षा 10 पाठ 1:</strong> नेताजी की प्रतिमा पर सरकंडे के चश्मे का मर्म।</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* TEACHER DEEP-DIVE STUDENT DOSSIER MODAL */}
      {activeDossierStudent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden text-slate-800">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {activeDossierStudent.studentName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    {activeDossierStudent.studentName} — Teacher Diagnostic Dossier
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold border border-indigo-200">
                      Class {activeDossierStudent.classLevel}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Roll No: {activeDossierStudent.rollNo} • Exam: {activeDossierStudent.examTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Dossier</span>
                </button>
                <button
                  onClick={() => setActiveDossierStudent(null)}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
              {/* Alert Banner */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                    Microscopic Weak Point Identified by AI Observer:
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Student made a conceptual slip in a basic chapter foundation. Below is the side-by-side comparison showing the student's exact mistaken step versus the correct NCERT method.
                  </p>
                </div>
              </div>

              {/* Each Identified Mistake in Detail */}
              <div className="space-y-4">
                {activeDossierStudent.mistakesSummary && activeDossierStudent.mistakesSummary.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                          {m.subjectName} • {m.chapter}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">
                          Question: "{m.question}"
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200">
                        Weak Point: {m.basicSkillFlag}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
                        <span className="font-bold block text-[11px] text-rose-800">
                          ❌ What the Student Answered:
                        </span>
                        <div className="font-mono mt-1 font-bold text-rose-900">{m.studentChoice}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                        <span className="font-bold block text-[11px] text-emerald-800">
                          ✅ Correct NCERT Solution:
                        </span>
                        <div className="font-mono mt-1 font-bold text-emerald-900">{m.correctChoice}</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                      <span className="text-indigo-700 font-bold flex items-center gap-1.5">
                        <BrainCircuit className="w-3.5 h-3.5" />
                        AI Mistake Diagnosis & Reason:
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {m.mistakeAnalysis}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-white border border-rose-200 text-rose-700">
                        <span className="font-bold text-rose-800 block font-sans text-xs mb-1">
                          Student's Misconception Step:
                        </span>
                        {m.wrongMethod}
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-emerald-200 text-emerald-700">
                        <span className="font-bold text-emerald-800 block font-sans text-xs mb-1">
                          NCERT Correct Step:
                        </span>
                        {m.correctMethod}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs space-y-1">
                      <span className="text-amber-800 font-bold block">
                        🎯 Prescribed Teacher Focus Action:
                      </span>
                      <p className="text-slate-700 font-medium">
                        {m.teacherFocusRecommendation}
                      </p>
                      <span className="text-[11px] text-slate-500 block italic">
                        {m.ncertRule}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Teacher Guidance Note Input */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Send Personalized Remedial Guidance to {activeDossierStudent.studentName}:
                  </h4>
                </div>

                <textarea
                  rows={3}
                  value={teacherCustomNote}
                  onChange={(e) => setTeacherCustomNote(e.target.value)}
                  placeholder="e.g. Please practice NCERT Chapter 2 Page 21. Remember: when moving +7 across '=', it always becomes -7..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />

                <div className="flex items-center justify-between pt-1">
                  {interventionSentSuccess ? (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-fadeIn">
                      <CheckCheck className="w-4 h-4" />
                      Focus plan sent to student successfully!
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500">
                      Status: <strong className="text-indigo-700">{activeDossierStudent.teacherInterventionStatus}</strong>
                    </span>
                  )}

                  <button
                    onClick={handleSaveTeacherIntervention}
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Remedial Focus Plan to Student</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="font-bold text-slate-700">NCERT AnimAcademy Teacher & Admin Command Portal</span>
          </div>
          <p className="font-semibold text-slate-600">
            © 2026 Harshit Verma. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
