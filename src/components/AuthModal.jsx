import React, { useState } from 'react';
import {
  X,
  User,
  GraduationCap,
  School,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getRegisteredStudentsDirectory,
  registerNewStudent,
  setCurrentUser
} from '../data/authStore';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [activeTab, setActiveTab] = useState('register'); // 'register' or 'login'
  const [directory] = useState(() => getRegisteredStudentsDirectory());

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [classLevel, setClassLevel] = useState(8);
  const [schoolName, setSchoolName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter student full name');
      return;
    }
    if (!email.trim()) {
      setErrorMsg('Please enter student email');
      return;
    }

    const student = registerNewStudent({
      name: name.trim(),
      email: email.trim(),
      classLevel: Number(classLevel),
      schoolName: schoolName.trim() || 'CBSE Affiliated School',
      rollNo: rollNo.trim() || `CBSE-0${classLevel}-${Math.floor(100 + Math.random() * 900)}`,
      parentContact: parentContact.trim() || '+91 98000 12345'
    });

    if (student) {
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
      if (onAuthSuccess) onAuthSuccess(student);
      onClose();
    }
  };

  const handleQuickLogin = (student) => {
    setCurrentUser(student);
    if (onAuthSuccess) onAuthSuccess(student);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden text-slate-800">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-50/80 to-purple-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Student & Parent Registration Portal
              </h3>
              <p className="text-xs text-slate-500">
                Register for CBSE Class 6, 7, 8, 9, or 10
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 bg-slate-50/60 p-1">
          <button
            onClick={() => { setActiveTab('register'); setErrorMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'register'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            New Student Registration
          </button>
          <button
            onClick={() => { setActiveTab('login'); setErrorMsg(''); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'login'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Sign In / Quick Profiles
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {activeTab === 'register' ? (
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
              {/* Name */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Student Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Class Selection (Crucial requirement!) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Enrolling in Class *
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[6, 7, 8, 9, 10].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setClassLevel(lvl)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        classLevel === lvl
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Class {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* School Name & Roll No */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    School Name
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Delhi Public School"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    CBSE Roll No / Student ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CBSE-08-014"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Parent Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Student Email / Username *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="student@school.edu.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Parent / Guardian Mobile
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      placeholder="+91 98101 23456"
                      value={parentContact}
                      onChange={(e) => setParentContact(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Complete Student Registration (Class {classLevel})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                * Your teacher and school admin will receive registration details and track your weekly diagnostic results.
              </p>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-xs text-slate-600">
                Select a registered student profile to sign in immediately:
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {directory.map((std) => (
                  <button
                    key={std.id}
                    onClick={() => handleQuickLogin(std)}
                    className="w-full p-3 rounded-2xl border border-slate-200 hover:border-indigo-300 bg-slate-50 hover:bg-indigo-50/50 flex items-center justify-between text-left transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                        {std.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {std.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {std.schoolName}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                        Class {std.classLevel}
                      </span>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {std.rollNo}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
