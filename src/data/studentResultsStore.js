// Store and diagnostic repository for Student Exam Submissions & Teacher/Admin Observation
// Captures microscopic cognitive errors across Maths (subtraction, multiplication, algebra),
// Science, English, and Hindi chapter-by-chapter.

const STORAGE_KEY = 'ncert_student_exam_submissions';

export const INITIAL_STUDENT_SUBMISSIONS = [
  // 1. MATHS - Basic Subtraction in Transposition (Class 8)
  {
    id: 'sub-001',
    studentName: 'Aarav Sharma',
    rollNo: 'CBSE-08-014',
    classLevel: 8,
    examId: 'exam-w1-class8',
    examTitle: 'Weekly NCERT Diagnostic Exam - Week 1',
    submittedAt: '2026-09-30T10:45:00Z',
    score: 18,
    totalMarks: 30,
    percentage: 60,
    subject: 'math',
    weakTopics: ['Algebra (Linear Equations & Basic Subtraction)'],
    mistakesSummary: [
      {
        subjectId: 'math',
        subjectName: 'Mathematics',
        chapter: 'Chapter 2: Linear Equations in One Variable',
        topic: 'Algebra',
        basicSkillFlag: 'Basic Subtraction in Transposition Rule',
        question: 'Solve for x in the equation: 3x + 7 = 22',
        studentChoice: 'x = 29/3',
        correctChoice: 'x = 5',
        mistakeAnalysis: 'Arithmetic Sign Reversal: Student added 7 to 22 (3x = 22 + 7 = 29) instead of subtracting 7 (3x = 22 - 7 = 15). The student is not solid in basic addition/subtraction inversion during equation transposition.',
        wrongMethod: '3x + 7 = 22  ➜  3x = 22 + 7  ➜  3x = 29  ➜  x = 29/3  ❌ (Added instead of subtracted)',
        correctMethod: '3x + 7 = 22  ➜  3x = 22 - 7  ➜  3x = 15  ➜  x = 15/3  ➜  x = 5  ✅',
        ncertRule: 'NCERT Class 8 Ch 2: When transposing a term across "=", + becomes -, - becomes +.',
        teacherFocusRecommendation: 'Assign NCERT Ex 2.1 Q1-Q8. Practice moving single integers across "=" with colored signs before touching multi-step equations.',
        teacherNote: 'Aarav is confident in algebra formulation, but consistently forgets to invert the positive sign into subtraction during transposition.'
      },
      {
        subjectId: 'math',
        subjectName: 'Mathematics',
        chapter: 'Chapter 9: Algebraic Expressions and Identities',
        topic: 'Algebra',
        basicSkillFlag: 'Binomial Expansion (Middle Term 2ab)',
        question: 'Expand the algebraic expression: (2x + 3y)²',
        studentChoice: '4x² + 9y²',
        correctChoice: '4x² + 12xy + 9y²',
        mistakeAnalysis: 'Omitted 2ab Cross-Product: The student simply squared individual terms (a² + b²) without multiplying 2 × a × b.',
        wrongMethod: '(2x + 3y)² = (2x)² + (3y)² = 4x² + 9y²  ❌ (Missing middle term 2ab)',
        correctMethod: '(a + b)² = a² + 2ab + b²  ➜  4x² + 2(2x)(3y) + 9y² = 4x² + 12xy + 9y²  ✅',
        ncertRule: 'NCERT Identity I: (a + b)² = a² + 2ab + b².',
        teacherFocusRecommendation: 'Have student draw geometric area rectangles to visually understand why the two rectangular regions 2ab exist.',
        teacherNote: 'Needs visual simulator drill on Algebraic identities.'
      }
    ],
    teacherInterventionStatus: 'Action Required',
    teacherPrescription: 'Re-watch Class 8 Algebra Balance Scale module + complete Worksheet #2 on basic transposition.'
  },

  // 2. MATHS - Quadratic Discriminant Sign Error (Class 10)
  {
    id: 'sub-002',
    studentName: 'Ananya Sen',
    rollNo: 'CBSE-10-022',
    classLevel: 10,
    examId: 'exam-w1-class10',
    examTitle: 'Class 10 CBSE Board Diagnostic Arena - Week 1',
    submittedAt: '2026-09-30T14:20:00Z',
    score: 28,
    totalMarks: 40,
    percentage: 70,
    subject: 'math',
    weakTopics: ['Quadratic Equations (Negative Sign Squaring in Discriminant)'],
    mistakesSummary: [
      {
        subjectId: 'math',
        subjectName: 'Mathematics',
        chapter: 'Chapter 4: Quadratic Equations',
        topic: 'Algebra - Quadratic Equations',
        basicSkillFlag: 'Basic Negative Integer Multiplication & Squaring',
        question: 'Find the discriminant (D) of: 2x² - 4x + 3 = 0',
        studentChoice: 'D = +40 (Two distinct real roots)',
        correctChoice: 'D = -8 (No real roots)',
        mistakeAnalysis: 'Negative multiplication & sign error: When computing (-4)², the student either wrote -16 or added 16 + 24 = 40 instead of 16 - 24 = -8. Fundamental arithmetic weakness in squaring negative coefficients and applying subtraction.',
        wrongMethod: 'D = (-4)² - 4(2)(3)  ➜  -16 - 24 = -40 OR 16 + 24 = 40  ❌ (Sign calculation error)',
        correctMethod: 'D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, there are no real roots  ✅',
        ncertRule: 'NCERT Class 10 Ch 4: (-b)² is strictly positive (+16). Always evaluate 4ac before performing subtraction.',
        teacherFocusRecommendation: 'Drill on arithmetic of directed numbers: (-a)² = +a², and -(4ac). Assign NCERT Ex 4.4 Q1.',
        teacherNote: 'Solid in finding coefficients a, b, c, but signs in arithmetic calculation let her down.'
      }
    ],
    teacherInterventionStatus: 'Reviewed',
    teacherPrescription: 'Review basic integer multiplication worksheet before solving next board mock.'
  },

  // 3. SCIENCE - Physics Electricity Parallel Resistor Inversion (Class 10)
  {
    id: 'sub-003',
    studentName: 'Diya Patel',
    rollNo: 'CBSE-10-008',
    classLevel: 10,
    examId: 'exam-w1-class10',
    examTitle: 'Class 10 CBSE Board Diagnostic Arena - Week 1',
    submittedAt: '2026-10-01T09:15:00Z',
    score: 25,
    totalMarks: 40,
    percentage: 62,
    subject: 'science',
    weakTopics: ['Electricity (Parallel Resistor Reciprocal Inversion)'],
    mistakesSummary: [
      {
        subjectId: 'science',
        subjectName: 'Science',
        chapter: 'Chapter 12: Electricity',
        topic: 'Science - Electricity',
        basicSkillFlag: 'Reciprocal Fraction Inversion (1/R to R)',
        question: 'Two resistors of 6 Ω and 3 Ω in parallel across 12 V battery. Find R_eq.',
        studentChoice: '0.5 Ω',
        correctChoice: '2 Ω',
        mistakeAnalysis: 'Arithmetic Reciprocal Inversion Omission: The student correctly computed 1/R = 1/6 + 1/3 = 3/6 = 1/2, but stopped there and reported 1/2 = 0.5 Ω! She forgot to take the reciprocal R = 2 Ω.',
        wrongMethod: '1/R_eq = 1/6 + 1/3 = 3/6 = 1/2  ➜  R_eq = 0.5 Ω  ❌ (Forgot to flip reciprocal!)',
        correctMethod: '1/R_eq = 1/2  ➜  Invert both sides: R_eq = 2/1 = 2 Ω  ✅',
        ncertRule: 'NCERT Class 10 Ch 12: 1/R_eq = 1/R₁ + 1/R₂. You must always invert the resulting fraction to get the actual resistance R_eq.',
        teacherFocusRecommendation: 'Teach the direct product-over-sum formula: R_eq = (R₁ × R₂) / (R₁ + R₂) to eliminate reciprocal flip slips.',
        teacherNote: 'Conceptual physics logic is clear, but mathematical final inversion step is frequently skipped.'
      },
      {
        subjectId: 'science',
        subjectName: 'Science',
        chapter: 'Chapter 1: Chemical Reactions and Equations',
        topic: 'Science - Chemical Reactions',
        basicSkillFlag: 'Conservation of Mass & Stoichiometric Coefficients',
        question: 'Balance: Fe + H₂O ➜ Fe₃O₄ + H₂',
        studentChoice: '3 Fe + 4 H₂O ➜ 1 Fe₃O₄ + 2 H₂',
        correctChoice: '3 Fe + 4 H₂O ➜ 1 Fe₃O₄ + 4 H₂',
        mistakeAnalysis: 'Hydrogen Atom Balancing Slip: Student balanced Oxygen (4 H₂O ➜ 4 O) but forgot that 4 H₂O contains 4 × 2 = 8 Hydrogen atoms, so RHS needed 4 H₂, not 2 H₂.',
        wrongMethod: '4 H₂O gives 8 H on LHS, but student wrote 2 H₂ (only 4 H) on RHS  ❌',
        correctMethod: 'Fe: 3, O: 4, H: 4 × 2 = 8  ➜  RHS needs 4 H₂. Equation: 3Fe + 4H₂O ➜ Fe₃O₄ + 4H₂  ✅',
        ncertRule: 'NCERT Class 10 Ch 1: Law of Conservation of Mass: number of atoms of each element must balance.',
        teacherFocusRecommendation: 'Use atom-counting tally boxes (Element | Reactants | Products) for every reaction.',
        teacherNote: 'Requires systematic table method for equation balancing.'
      }
    ],
    teacherInterventionStatus: 'Action Required',
    teacherPrescription: 'Assign NCERT Chapter 1 In-Text Questions Q1-Q3 & Chapter 12 Parallel Resistor Practice.'
  },

  // 4. ENGLISH - Poorvi Class 6 Chapter 1 Fable Comprehension (Class 6)
  {
    id: 'sub-004',
    studentName: 'Kabir Khan',
    rollNo: 'CBSE-06-031',
    classLevel: 6,
    examId: 'exam-w1-class6',
    examTitle: 'Class 6 NCERT Weekly Diagnostic Exam - Week 1',
    submittedAt: '2026-10-01T11:00:00Z',
    score: 12,
    totalMarks: 20,
    percentage: 60,
    subject: 'english',
    weakTopics: ['Poorvi English (Chapter 1 Fable Comprehension & Moral Insight)'],
    mistakesSummary: [
      {
        subjectId: 'english',
        subjectName: 'English (Poorvi)',
        chapter: 'Poorvi Unit 1 / Chapter 1: A Bottle of Dew',
        topic: 'Poorvi English - Fables & Comprehension',
        basicSkillFlag: 'Distinguishing Literal Magic vs Fable Moral Lesson',
        question: 'What was the real secret behind the bags of gold coins shown by Madhumati?',
        studentChoice: 'Sage Mahipati chanted a magic spell that turned the five litres of dew into gold',
        correctChoice: 'Wealth earned by selling bananas harvested over six years of diligent work',
        mistakeAnalysis: 'Misinterpretation of Moral Narrative: The student took the sage’s dew challenge literally as real magic, failing to comprehend that the story is an allegory teaching that disciplined human labor is the true "magic potion".',
        wrongMethod: 'Student believed copper metal really turned into gold via magic potion  ❌',
        correctMethod: 'Rama Natha worked for 6 years cultivating banana trees; Madhumati sold the harvested fruit to accumulate the gold coins  ✅',
        ncertRule: 'NCERT Poorvi Unit 1 Central Theme: Honest physical labour and perseverance create prosperity; shortcuts and potions are illusions.',
        teacherFocusRecommendation: 'Have student re-watch the Poorvi Chapter 1 Scene 4 & 5 animation highlighting Madhumati’s banana market sales.',
        teacherNote: 'Struggles with metaphorical reading comprehension. Needs guided discussion on moral fables.'
      },
      {
        subjectId: 'math',
        subjectName: 'Mathematics',
        chapter: 'Chapter 6: Integers',
        topic: 'Arithmetic & Integers',
        basicSkillFlag: 'Double Negative Integer Subtraction',
        question: 'Calculate: (-5) - (-8)',
        studentChoice: '-13',
        correctChoice: '+3',
        mistakeAnalysis: 'Double Negation Sign Error: Student saw two minus signs and simply combined numbers into -13 (-5 - 8 = -13), failing to apply -(-8) = +8.',
        wrongMethod: '(-5) - (-8)  ➜  -5 - 8 = -13  ❌ (Did not invert minus of minus into plus)',
        correctMethod: '(-5) - (-8) = -5 + 8 = +3  ✅',
        ncertRule: 'NCERT Class 6 Ch 6: Subtracting an integer means adding its additive inverse: -(-a) = +a.',
        teacherFocusRecommendation: 'Use the number line model: start at -5, turning facing left and walking backwards 8 steps lands at +3.',
        teacherNote: 'Needs number line visualization sheet.'
      }
    ],
    teacherInterventionStatus: 'Action Required',
    teacherPrescription: 'Replay Poorvi Animated Story Scene 5 + Number Line integers practice.'
  },

  // 5. HINDI - Class 10 Vachya Conversion & Chapter 1 Understanding (Class 10)
  {
    id: 'sub-005',
    studentName: 'Aditya Rao',
    rollNo: 'CBSE-10-045',
    classLevel: 10,
    examId: 'exam-w1-class10',
    examTitle: 'Class 10 CBSE Board Diagnostic Arena - Week 1',
    submittedAt: '2026-10-01T12:30:00Z',
    score: 22,
    totalMarks: 40,
    percentage: 55,
    subject: 'hindi',
    weakTopics: ['Hindi Vyakaran (कर्तृवाच्य से कर्मवाच्य परिवर्तन में भाववाच्य का भ्रम)'],
    mistakesSummary: [
      {
        subjectId: 'hindi',
        subjectName: 'हिन्दी',
        chapter: 'हिन्दी व्याकरण: वाच्य (Voice)',
        topic: 'Hindi Vyakaran - Vachya',
        basicSkillFlag: 'कर्मवाच्य और भाववाच्य में अंतर एवं काल का संरक्षण',
        question: '"रमेश ने सुंदर चित्र बनाया।" का कर्मवाच्य रूप क्या होगा?',
        studentChoice: 'रमेश से सुंदर चित्र नहीं बनाया जाता।',
        correctChoice: 'रमेश द्वारा सुंदर चित्र बनाया गया।',
        mistakeAnalysis: 'वाच्य भेद और असमर्थतासूचक भ्रम: छात्र ने कर्मवाच्य के स्थान पर असमर्थतासूचक भाववाच्य की शैली चुन ली, और वाक्य में "नहीं" जोड़कर उसका काल और अर्थ दोनों विकृत कर दिए। सकर्मक क्रिया (चित्र बनाना) में कर्मवाच्य बनता है।',
        wrongMethod: 'रमेश से सुंदर चित्र नहीं बनाया जाता  ❌ (भाववाच्य और नकारात्मक बना दिया)',
        correctMethod: 'कर्ता के साथ "द्वारा" + कर्म (चित्र) पुल्लिंग अनुसार क्रिया "बनाया गया" = रमेश द्वारा सुंदर चित्र बनाया गया  ✅',
        ncertRule: 'NCERT कक्षा 10 हिन्दी व्याकरण: कर्तृवाच्य से कर्मवाच्य बनाते समय कर्ता के बाद "से/के द्वारा" जोड़ते हैं और क्रिया कर्म के लिंग-वचन अनुसार होती है। वाक्य का काल और भाव कभी नहीं बदलता।',
        teacherFocusRecommendation: 'सीबीएसई बोर्ड परीक्षा नियम: सकर्मक क्रिया = कर्मवाच्य; अकर्मक क्रिया = भाववाच्य। 10 वाक्यों का वाच्य रूपांतरण अभ्यास कराएं।',
        teacherNote: 'वाच्य के तीनों भेदों के नियमों में भ्रम है। विशेष रूप से कर्मवाच्य और भाववाच्य के अंतर को स्पष्ट करना आवश्यक है।'
      }
    ],
    teacherInterventionStatus: 'Action Required',
    teacherPrescription: 'अभ्यास पुस्तिका से वाच्य परिवर्तन पृष्ठ 42-45 हल करवाएं।'
  }
];

export function getStoredSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STUDENT_SUBMISSIONS));
      return INITIAL_STUDENT_SUBMISSIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_STUDENT_SUBMISSIONS;
  } catch (e) {
    console.error('Failed to load student submissions:', e);
    return INITIAL_STUDENT_SUBMISSIONS;
  }
}

export function saveStudentSubmission(submission) {
  try {
    const current = getStoredSubmissions();
    const updated = [submission, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save student submission:', e);
    return INITIAL_STUDENT_SUBMISSIONS;
  }
}

export function updateTeacherIntervention(submissionId, status, teacherNote) {
  try {
    const current = getStoredSubmissions();
    const updated = current.map((sub) => {
      if (sub.id === submissionId) {
        return {
          ...sub,
          teacherInterventionStatus: status || sub.teacherInterventionStatus,
          teacherNote: teacherNote !== undefined ? teacherNote : sub.teacherNote
        };
      }
      return sub;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update teacher intervention:', e);
    return null;
  }
}
