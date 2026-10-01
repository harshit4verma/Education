// Authentication & Registered Students Repository
// Admin can view all registered student details across Class 6, 7, 8, 9, 10

const AUTH_STORAGE_KEY = 'ncert_current_user';
const DIRECTORY_STORAGE_KEY = 'ncert_registered_students_directory';

export const INITIAL_STUDENTS_DIRECTORY = [
  {
    id: 'stud-001',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@delhischool.edu.in',
    classLevel: 8,
    rollNo: 'CBSE-08-014',
    schoolName: 'Delhi Public School, R.K. Puram',
    parentContact: '+91 98101 23456',
    registeredDate: '2026-08-15',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    examsTaken: 3,
    avgScore: 68,
    streakDays: 6,
    xp: 620,
    weakPoints: ['Algebra (Basic Subtraction in Transposition)', 'Algebraic Identities (2ab)']
  },
  {
    id: 'stud-002',
    name: 'Ananya Sen',
    email: 'ananya.sen@kolkatapublic.edu.in',
    classLevel: 10,
    rollNo: 'CBSE-10-022',
    schoolName: 'South Point High School, Kolkata',
    parentContact: '+91 98302 34567',
    registeredDate: '2026-08-20',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    examsTaken: 4,
    avgScore: 78,
    streakDays: 8,
    xp: 890,
    weakPoints: ['Quadratic Equations (Negative Sign Squaring in Discriminant)']
  },
  {
    id: 'stud-003',
    name: 'Diya Patel',
    email: 'diya.patel@ahmedabadacademy.org',
    classLevel: 10,
    rollNo: 'CBSE-10-008',
    schoolName: 'The Riverside School, Ahmedabad',
    parentContact: '+91 98791 45678',
    registeredDate: '2026-08-28',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    examsTaken: 2,
    avgScore: 65,
    streakDays: 4,
    xp: 480,
    weakPoints: ['Electricity (Parallel Resistor Reciprocal Inversion)', 'Chemical Reactions (Atom Balancing)']
  },
  {
    id: 'stud-004',
    name: 'Kabir Khan',
    email: 'kabir.khan@mumbaiinternational.edu.in',
    classLevel: 6,
    rollNo: 'CBSE-06-031',
    schoolName: 'Campion School, Mumbai',
    parentContact: '+91 98203 56789',
    registeredDate: '2026-09-02',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    examsTaken: 2,
    avgScore: 70,
    streakDays: 5,
    xp: 510,
    weakPoints: ['Poorvi English (Chapter 1 Fable Comprehension)', 'Integers (Double Negative Subtraction)']
  },
  {
    id: 'stud-005',
    name: 'Aditya Rao',
    email: 'aditya.rao@bangalorevidya.ac.in',
    classLevel: 10,
    rollNo: 'CBSE-10-045',
    schoolName: 'National Public School, Bangalore',
    parentContact: '+91 98451 67890',
    registeredDate: '2026-09-10',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    examsTaken: 3,
    avgScore: 62,
    streakDays: 3,
    xp: 420,
    weakPoints: ['Hindi Vyakaran (कर्तृवाच्य से कर्मवाच्य परिवर्तन में भाववाच्य का भ्रम)']
  },
  {
    id: 'stud-006',
    name: 'Sneha Kulkarni',
    email: 'sneha.k@puneeducation.org',
    classLevel: 7,
    rollNo: 'CBSE-07-019',
    schoolName: 'Symbiosis International School, Pune',
    parentContact: '+91 98220 78901',
    registeredDate: '2026-09-14',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    examsTaken: 1,
    avgScore: 80,
    streakDays: 7,
    xp: 350,
    weakPoints: ['Fractions (Division Reciprocal Rule)']
  },
  {
    id: 'stud-007',
    name: 'Rohan Verma',
    email: 'rohan.v@lucknowgrammar.in',
    classLevel: 9,
    rollNo: 'CBSE-09-012',
    schoolName: 'La Martiniere College, Lucknow',
    parentContact: '+91 94150 89012',
    registeredDate: '2026-09-18',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    examsTaken: 2,
    avgScore: 75,
    streakDays: 4,
    xp: 430,
    weakPoints: ['Polynomials (Splitting Middle Term Signs)', 'Mechanics (Equations of Motion)']
  }
];

export function getRegisteredStudentsDirectory() {
  try {
    const raw = localStorage.getItem(DIRECTORY_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(DIRECTORY_STORAGE_KEY, JSON.stringify(INITIAL_STUDENTS_DIRECTORY));
      return INITIAL_STUDENTS_DIRECTORY;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_STUDENTS_DIRECTORY;
  } catch (e) {
    console.error('Failed to load students directory:', e);
    return INITIAL_STUDENTS_DIRECTORY;
  }
}

export function registerNewStudent(studentData) {
  try {
    const directory = getRegisteredStudentsDirectory();
    const newStudent = {
      id: `stud-${Date.now()}`,
      name: studentData.name,
      email: studentData.email,
      classLevel: Number(studentData.classLevel),
      rollNo: studentData.rollNo || `CBSE-0${studentData.classLevel}-${Math.floor(100 + Math.random() * 900)}`,
      schoolName: studentData.schoolName || 'CBSE Affiliated Senior School',
      parentContact: studentData.parentContact || '+91 98000 00000',
      registeredDate: new Date().toISOString().split('T')[0],
      avatar: studentData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      examsTaken: 0,
      avgScore: 0,
      streakDays: 1,
      xp: 100,
      weakPoints: []
    };

    const updated = [newStudent, ...directory];
    localStorage.setItem(DIRECTORY_STORAGE_KEY, JSON.stringify(updated));
    setCurrentUser(newStudent);
    return newStudent;
  } catch (e) {
    console.error('Failed to register student:', e);
    return null;
  }
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) {
      // Default to Aarav Sharma (Class 8)
      const defaultUser = INITIAL_STUDENTS_DIRECTORY[0];
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(defaultUser));
      return defaultUser;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_STUDENTS_DIRECTORY[0];
  }
}

export function setCurrentUser(user) {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to set current user:', e);
  }
}

export function logoutCurrentUser() {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to logout user:', e);
  }
}
