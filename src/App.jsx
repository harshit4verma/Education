import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SubjectTabs from './components/SubjectTabs';
import VideoCard from './components/VideoCard';
import WeeklyExamBanner from './components/WeeklyExamBanner';
import AnimatedPlayerModal from './components/AnimatedPlayerModal';
import ExamModal from './components/ExamModal';
import MistakeDemoModal from './components/MistakeDemoModal';
import NCERTChapterAnimatedViewer from './components/NCERTChapterAnimatedViewer';
import TeacherAdminDashboard from './components/TeacherAdminDashboard';
import ClassStudyMaterialsHub from './components/ClassStudyMaterialsHub';
import AuthModal from './components/AuthModal';
import { getCurrentUser } from './data/authStore';
import { INITIAL_VIDEOS, SUBJECTS } from './data/ncertCurriculum';
import { WEEKLY_EXAMS } from './data/sampleExams';
import {
  Sparkles,
  Award,
  BookOpen,
  Bot,
  BrainCircuit,
  Filter,
  Layers,
  GraduationCap,
  ExternalLink,
  Flame,
  CheckCircle2,
  HelpCircle,
  Users
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('student'); // 'student' or 'teacher'
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(() => currentUser?.classLevel || 8);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Persisted state in localStorage
  const [videos] = useState(() => {
    return INITIAL_VIDEOS;
  });

  const [completedVideoIds, setCompletedVideoIds] = useState(() => {
    try {
      const saved = localStorage.getItem('ncert_completed_videos');
      return saved ? JSON.parse(saved) : ['vid-8-m-1'];
    } catch {
      return ['vid-8-m-1'];
    }
  });

  const [studentStats, setStudentStats] = useState({
    streak: currentUser?.streakDays || 4,
    xp: currentUser?.xp || 450,
    examsTaken: currentUser?.examsTaken || 1,
    weakTopicsIdentified: ['Algebra (Transposition)']
  });

  // Modals state
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState(null);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('ncert_completed_videos', JSON.stringify(completedVideoIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedVideoIds]);

  // Video completion toggle
  const handleToggleComplete = (videoId) => {
    setCompletedVideoIds((prev) => {
      const exists = prev.includes(videoId);
      if (exists) {
        return prev.filter((id) => id !== videoId);
      } else {
        // Award XP
        setStudentStats((s) => ({ ...s, xp: s.xp + 50 }));
        return [...prev, videoId];
      }
    });
  };

  // Filter videos
  const classVideos = videos.filter((v) => v.classLevel === selectedClass);
  const filteredVideos = classVideos.filter((v) => {
    const matchesSubject = selectedSubject === 'all' || v.subjectId === selectedSubject;
    const matchesSearch =
      searchQuery === '' ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.description && v.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSubject && matchesSearch;
  });

  // Calculate subject counts for current class
  const videoCounts = {};
  SUBJECTS.forEach((sub) => {
    videoCounts[sub.id] = classVideos.filter((v) => v.subjectId === sub.id).length;
  });

  // Find active weekly exam for selected class
  const activeWeeklyExam =
    WEEKLY_EXAMS.find((e) => e.classLevel === selectedClass) || WEEKLY_EXAMS[0];

  const classCompletedCount = classVideos.filter((v) =>
    completedVideoIds.includes(v.id)
  ).length;

  if (currentView === 'teacher') {
    return (
      <TeacherAdminDashboard
        onBackToStudentView={() => setCurrentView('student')}
        onOpenVideoLesson={(vid) => {
          setCurrentView('student');
          setCurrentPlayingVideo(vid);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/40 via-slate-50 to-purple-50/30 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        selectedClass={selectedClass}
        onSelectClass={setSelectedClass}
        onOpenExam={() => setIsExamModalOpen(true)}
        onOpenTeacherPortal={() => setCurrentView('teacher')}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        studentStats={studentStats}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Section */}
        <HeroBanner
          selectedClass={selectedClass}
          onOpenExam={() => setIsExamModalOpen(true)}
          onExploreAnimations={() => {
            const firstSim = classVideos.find((v) => v.videoType === 'simulator') || classVideos[0];
            if (firstSim) setCurrentPlayingVideo(firstSim);
          }}
          completedCount={classCompletedCount}
        />

        {/* DYNAMIC CLASS-SPECIFIC NCERT STUDY MATERIALS & TEXTBOOKS HUB */}
        {/* Dynamically switches when Class 6, 7, 8, 9, or 10 is selected! */}
        <ClassStudyMaterialsHub
          selectedClass={selectedClass}
          onPlayVideo={(vid) => setCurrentPlayingVideo(vid)}
          onOpenExam={() => setIsExamModalOpen(true)}
          allVideos={videos}
        />

        {/* AI Mistake Observer Mechanism Explainer Bar */}
        <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-200/90 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-indigo-600 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-indigo-700 uppercase tracking-wider">
                  How AI Observation Works In Your Weekly Tests
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold border border-emerald-200">
                  Adaptive AI Observer
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                If you make a mistake in <strong className="text-indigo-700">Mathematics (like Algebra transposition, basic subtraction rules)</strong> or <strong className="text-emerald-700">Science / English / Hindi</strong>, our AI proctor flags the conceptual slip and displays a <strong>brief side-by-side example</strong> showing your mistake vs the correct NCERT method, and shares it with your teacher!
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>See Live Mistake Example</span>
          </button>
        </div>

        {/* Weekly Exam Dedicated Banner */}
        <WeeklyExamBanner
          selectedClass={selectedClass}
          onOpenExam={() => setIsExamModalOpen(true)}
          completedCount={classCompletedCount}
          totalCount={classVideos.length}
        />

        {/* Section Heading & Subject Tabs Switcher */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <span>Class {selectedClass} Animated Video Lessons (NCERT CBSE)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Visual explanations from official NCERT textbooks with interactive animated simulation labs
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">{filteredVideos.length}</span> lesson{filteredVideos.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>

          {/* Subject Filter Tabs */}
          <SubjectTabs
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
            videoCounts={videoCounts}
          />

          {/* Dedicated Chapter-Wise NCERT Animated Book Reader with Voice Read-Aloud (Classes 6, 7, 8, 9, 10) */}
          {(selectedSubject === 'all' || selectedSubject === 'english') && (
            <div className="pt-4">
              <NCERTChapterAnimatedViewer
                selectedClass={selectedClass}
                onLaunchExam={() => setIsExamModalOpen(true)}
              />
            </div>
          )}
        </div>

        {/* Video Gallery Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isCompleted={completedVideoIds.includes(video.id)}
                onPlay={(vid) => setCurrentPlayingVideo(vid)}
                onMarkComplete={handleToggleComplete}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 shadow-sm">
            <Layers className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No Animated Lessons Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No videos found matching your selected subject or search query "{searchQuery}".
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => { setSelectedSubject('all'); setSearchQuery(''); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-slate-700">NCERT AnimAcademy CBSE Class 6–10</span>
              <span>• Built for animated conceptual clarity and AI diagnostic mistake remediation</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="text-slate-500 hover:text-indigo-600 transition-colors"
              >
                How AI Observer Works
              </button>
              <span>•</span>
              <button
                onClick={() => setCurrentView('teacher')}
                className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors flex items-center gap-1"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Teacher / Admin Portal</span>
              </button>
              <span>•</span>
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="text-amber-600 hover:text-amber-700 font-bold transition-colors"
              >
                Weekly Exam Arena
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p className="font-semibold text-slate-600">
              © 2026 Harshit Verma. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Official CBSE Curriculum & NCERT Textbooks • Empowering students through visual animation & AI diagnosis
            </p>
          </div>
        </div>
      </footer>

      {/* Animated Player Modal */}
      {currentPlayingVideo && (
        <AnimatedPlayerModal
          video={currentPlayingVideo}
          isCompleted={completedVideoIds.includes(currentPlayingVideo.id)}
          onClose={() => setCurrentPlayingVideo(null)}
          onMarkCompleted={handleToggleComplete}
          onLaunchExam={() => setIsExamModalOpen(true)}
        />
      )}

      {/* Weekly Exam Modal with AI Observer */}
      <ExamModal
        exam={activeWeeklyExam}
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
        onFinishExam={(examId, answers) => {
          setStudentStats((s) => ({
            ...s,
            xp: s.xp + 150,
            examsTaken: s.examsTaken + 1
          }));
        }}
      />

      {/* Mistake Demo Explainer Modal */}
      <MistakeDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Student Registration & Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={(student) => {
          setCurrentUser(student);
          if (student.classLevel) {
            setSelectedClass(student.classLevel);
          }
        }}
      />
    </div>
  );
}
