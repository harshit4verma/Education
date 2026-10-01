// Weekly Examinations & Diagnostic Question Bank for CBSE Classes 6 - 9
// Each question has tagged topic, common misconception diagnostics, and brief remedial examples.

export const WEEKLY_EXAMS = [
  {
    id: 'exam-w1-class8',
    title: 'Weekly NCERT Diagnostic Exam - Week 1',
    description: 'Covers Class 8 Mathematics (Algebra & Linear Equations), Science (Cell & Force), English (Tenses), Hindi (Sandhi)',
    classLevel: 8,
    weekNumber: 1,
    timeLimitMinutes: 10,
    totalMarks: 30,
    badge: 'Weekly Milestone 01',
    requiredVideosWatched: 2,
    questions: [
      // QUESTION 1: MATHS - ALGEBRA (TRANSPOSITION)
      {
        id: 'q-8-m-1',
        subjectId: 'math',
        topic: 'Algebra',
        subtopic: 'Linear Equations & Transposition Rule',
        question: 'Solve for x in the equation: 3x + 7 = 22',
        options: [
          'x = 5',
          'x = 29/3',
          'x = 9.6',
          'x = -5'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Transposition Error: You added 7 to 22 instead of subtracting it (3x = 22 + 7 = 29). Remember that moving +7 across "=" makes it -7.',
          2: 'Decimal Estimation Error: You performed 29 ÷ 3 without simplifying the equation properly.',
          3: 'Sign Flip Error: You incorrectly appended a negative sign to the final answer.'
        },
        briefMistakeExample: {
          wrongMethod: '3x + 7 = 22  ➜  3x = 22 + 7  ➜  3x = 29  ➜  x = 29/3  ❌ (Added instead of subtracted)',
          correctMethod: '3x + 7 = 22  ➜  3x = 22 - 7  ➜  3x = 15  ➜  x = 15/3  ➜  x = 5  ✅',
          rule: 'NCERT Rule (Class 8 Ch 2): When transposing a term from LHS to RHS, + becomes -, - becomes +, × becomes ÷, and ÷ becomes ×.'
        },
        focusTip: 'Practice the Transposition Rule on linear equations. Always invert the sign before dividing by the coefficient of x.'
      },

      // QUESTION 2: MATHS - ALGEBRA (EXPANSION OF IDENTITIES)
      {
        id: 'q-8-m-2',
        subjectId: 'math',
        topic: 'Algebra',
        subtopic: 'Algebraic Identities (a + b)²',
        question: 'Expand the algebraic expression: (2x + 3y)²',
        options: [
          '4x² + 9y²',
          '4x² + 12xy + 9y²',
          '2x² + 6xy + 3y²',
          '4x² + 6xy + 9y²'
        ],
        correctIndex: 1,
        difficulty: 'Hard',
        commonMistakeAnalysis: {
          0: 'Missing 2ab Middle Term: You forgot the 2ab term completely! (a + b)² is NOT just a² + b².',
          2: 'Coefficient Squaring Error: You failed to square the numerical coefficients 2 and 3 (wrote 2x² instead of (2x)² = 4x²).',
          3: 'Middle Term Calculation Error: You multiplied 2x × 3y = 6xy but forgot to double it by multiplying by 2 (2 × 2x × 3y = 12xy).'
        },
        briefMistakeExample: {
          wrongMethod: '(2x + 3y)² = (2x)² + (3y)² = 4x² + 9y²  ❌ (Forgot the middle term 2ab)',
          correctMethod: '(a + b)² = a² + 2ab + b²  ➜  (2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y²  ✅',
          rule: 'NCERT Identity I (Class 8 Ch 9): The square of a binomial always has three terms: square of first, twice the product of both, and square of second.'
        },
        focusTip: 'Whenever expanding (a + b)², write out the 3 slots: [ ]² + 2[ ][ ] + [ ]² to never forget the middle term.'
      },

      // QUESTION 3: MATHS - ALGEBRA (COMBINING LIKE TERMS)
      {
        id: 'q-8-m-3',
        subjectId: 'math',
        topic: 'Algebra',
        subtopic: 'Like and Unlike Terms',
        question: 'Simplify the expression: 7x - 4y + 3x - 9y',
        options: [
          '10x - 13y',
          '4x - 5y',
          '-3xy',
          '10x + 13y'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Mismatched Subtraction: Subtracted 7x - 3x = 4x instead of grouping like terms (7x + 3x = 10x).',
          2: 'Illegal Variable Fusion: You combined x and y into xy! Variables of different types cannot be multiplied or fused during addition/subtraction.',
          3: 'Negative Integer Addition Mistake: Calculated -4y - 9y as +13y instead of -13y.'
        },
        briefMistakeExample: {
          wrongMethod: '-4y - 9y = +13y OR 7x - 4y = 3xy  ❌ (Wrong integer rule / fused unlike terms)',
          correctMethod: 'Group like terms: (7x + 3x) + (-4y - 9y) = 10x + (-13y) = 10x - 13y  ✅',
          rule: 'NCERT Rule: Only like terms (having the exact same variable powers) can be combined. When both coefficients are negative (-4 and -9), add values and keep the negative sign (-13).'
        },
        focusTip: 'Underline like terms with different colored pencils or symbols before combining them.'
      },

      // QUESTION 4: SCIENCE - CELL BIOLOGY
      {
        id: 'q-8-s-1',
        subjectId: 'science',
        topic: 'Science - Cell Biology',
        subtopic: 'Plant vs Animal Cell Organelles',
        question: 'Which of the following cell organelles is present exclusively in Plant Cells and is ABSENT in Animal Cells?',
        options: [
          'Mitochondria and Nucleus',
          'Cell Wall and Chloroplasts',
          'Cytoplasm and Ribosomes',
          'Cell Membrane and Vacuole'
        ],
        correctIndex: 1,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          0: 'Confusion with Core Organelles: Both plant and animal cells possess mitochondria (powerhouse) and a nucleus (control center).',
          2: 'Basic Cellular Structures: Cytoplasm and ribosomes exist in all living eukaryotic cells.',
          3: 'Vacuole Misconception: Animal cells do have small vacuoles, but Cell Wall & Chloroplasts are strictly unique to plants.'
        },
        briefMistakeExample: {
          wrongMethod: 'Thinking animal cells also have a cell wall to stay firm  ❌',
          correctMethod: 'Plants need rigid Cell Walls (cellulose) because they cannot move away from harsh weather. Chloroplasts contain chlorophyll for photosynthesis  ✅',
          rule: 'NCERT Science Ch 8: Plant cells have two key unique structures: (1) Rigid Cell Wall outside cell membrane, (2) Plastids (including Chloroplasts). Large central vacuole is also characteristic of plants.'
        },
        focusTip: 'Review the comparison table between Plant and Animal cells in NCERT Class 8 Chapter 8.'
      },

      // QUESTION 5: SCIENCE - FORCE & PRESSURE
      {
        id: 'q-8-s-2',
        subjectId: 'science',
        topic: 'Science - Mechanics',
        subtopic: 'Pressure Calculation (P = F / A)',
        question: 'A force of 100 N acts perpendicular to an area of 2 m². What is the pressure produced?',
        options: [
          '200 Pascal (Pa)',
          '50 Pascal (Pa)',
          '0.02 Pascal (Pa)',
          '98 Pascal (Pa)'
        ],
        correctIndex: 1,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          0: 'Multiplication Instead of Division: You multiplied Force × Area (100 × 2 = 200) instead of dividing.',
          2: 'Inverted Formula: You calculated Area ÷ Force (2 ÷ 100 = 0.02).',
          3: 'Arbitrary Subtraction: You subtracted area from force.'
        },
        briefMistakeExample: {
          wrongMethod: 'Pressure = Force × Area = 100 × 2 = 200 Pa  ❌ (Multiplied instead of divided)',
          correctMethod: 'Pressure = Force / Area = 100 N / 2 m² = 50 N/m² = 50 Pa  ✅',
          rule: 'NCERT Formula (Class 8 Ch 11): Pressure is defined as Force per unit Area. P = F / A. Unit is N/m² or Pascal (Pa).'
        },
        focusTip: 'Remember the formula triangle: F at the top, P and A at the bottom. To find P, divide F by A.'
      },

      // QUESTION 6: ENGLISH - TENSES
      {
        id: 'q-8-e-1',
        subjectId: 'english',
        topic: 'English - Tenses',
        subtopic: 'Present Perfect vs Simple Past',
        question: 'Choose the correct form to complete the sentence: "I _________ my homework just now, so I can go play outside."',
        options: [
          'have finished',
          'had finished',
          'will finish',
          'am finish'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Past Perfect Confusion: "Had finished" is only used when comparing an earlier past action before another past event.',
          2: 'Future Tense Error: "Will finish" denotes an uncompleted action, but the student can go outside because it is already done.',
          3: 'Grammatical Inconsistency: "Am finish" is ungrammatical English.'
        },
        briefMistakeExample: {
          wrongMethod: 'I had finished my homework just now  ❌ ("had finished" needs a reference past event)',
          correctMethod: 'I have finished my homework just now  ✅ ("just now" indicates an action recently completed with present relevance)',
          rule: 'NCERT English Grammar: Present Perfect (have/has + V3) is used for actions completed in the immediate past, especially with keywords like "just", "already", "yet".'
        },
        focusTip: 'Look for time marker words: "just now", "already", and "recently" signal the Present Perfect tense.'
      },

      // QUESTION 7: HINDI - SANDHI (दीर्घ एवं गुण संधि)
      {
        id: 'q-8-h-1',
        subjectId: 'hindi',
        topic: 'Hindi Vyakaran - Sandhi',
        subtopic: 'दीर्घ स्वर संधि (अ + आ = आ)',
        question: '"हिम + आलय" का सही संधि पद क्या होगा और इसमें कौन-सी संधि है?',
        options: [
          'हिमालय (दीर्घ स्वर संधि)',
          'हिमेलाय (गुण स्वर संधि)',
          'हिमलय (यण संधि)',
          'हिमालय (व्यंजन संधि)'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'गुण संधि का भ्रम: गुण संधि में अ + इ = ए बनता है, जबकि यहाँ अ + आ मिल रहे हैं।',
          2: 'मात्रा का लोप: आपने आ की दीर्घ मात्रा छोड़ दी।',
          3: 'संधि भेद की गलती: दोनों स्वर (अ + आ) मिलने के कारण यह स्वर संधि है, व्यंजन संधि नहीं।'
        },
        briefMistakeExample: {
          wrongMethod: 'हिम (म् + अ) + आलय = हिमलय अथवा व्यंजन संधि  ❌ (गलत नियम)',
          correctMethod: 'हिम के अंत में "अ" + आलय के शुरू में "आ" मिलकर दीर्घ "आ" बने = हिमालय (दीर्घ स्वर संधि) ✅',
          rule: 'NCERT हिंदी व्याकरण नियम: जब ह्रस्व या दीर्घ अ, इ, उ के बाद वही समान स्वर आए, तो दोनों मिलकर दीर्घ (आ, ई, ऊ) हो जाते हैं।'
        },
        focusTip: 'संधि करते समय प्रथम शब्द की अंतिम ध्वनि और द्वितीय शब्द की प्रथम ध्वनि को अलग करके देखें।'
      }
    ]
  },

  // ================= CLASS 9 WEEKLY EXAM =================
  {
    id: 'exam-w1-class9',
    title: 'Class 9 NCERT Weekly Diagnostic Arena - Week 1',
    description: 'Covers Class 9 Mathematics (Polynomials & Coordinate Geometry), Science (Motion & Laws), English & Hindi',
    classLevel: 9,
    weekNumber: 1,
    timeLimitMinutes: 12,
    totalMarks: 35,
    badge: 'Weekly Milestone 01',
    requiredVideosWatched: 2,
    questions: [
      {
        id: 'q-9-m-1',
        subjectId: 'math',
        topic: 'Algebra',
        subtopic: 'Polynomials - Splitting the Middle Term',
        question: 'Factorise the quadratic polynomial: x² + 5x + 6',
        options: [
          '(x + 2)(x + 3)',
          '(x - 2)(x - 3)',
          '(x + 1)(x + 6)',
          '(x - 1)(x + 6)'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Sign Confusion: In (x - 2)(x - 3), the sum is -5x, but the original polynomial has +5x.',
          2: 'Incorrect Factor Pair: Selected factors 1 and 6 whose sum is 7, not 5.',
          3: 'Mixed Sign Mismatch: Expanding (x - 1)(x + 6) gives x² + 5x - 6 (negative constant term).'
        },
        briefMistakeExample: {
          wrongMethod: 'Factors of 6: 1 & 6  ➜  sum is 1 + 6 = 7 (does not match middle term 5)  ❌',
          correctMethod: 'Factors of 6 whose sum is 5: 2 and 3  ➜  x² + 2x + 3x + 6 = x(x+2) + 3(x+2) = (x+2)(x+3)  ✅',
          rule: 'NCERT Class 9 Ch 2: For ax² + bx + c, find two numbers p and q such that p + q = b and pq = ac.'
        },
        focusTip: 'Always check both conditions: sum must equal coefficient of x, and product must equal constant term.'
      },
      {
        id: 'q-9-s-1',
        subjectId: 'science',
        topic: 'Science - Mechanics',
        subtopic: 'Equations of Motion (v = u + at)',
        question: 'A car starts from rest (u = 0) and accelerates uniformly at 2 m/s² for 5 seconds. What is its final velocity (v)?',
        options: [
          '10 m/s',
          '25 m/s',
          '2.5 m/s',
          '7 m/s'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Used Distance Formula: You computed s = 1/2 at² (1/2 × 2 × 25 = 25m) instead of velocity.',
          2: 'Divided Instead of Multiplied: You calculated t ÷ a = 5 ÷ 2 = 2.5 m/s.',
          3: 'Added acceleration to time: 2 + 5 = 7.'
        },
        briefMistakeExample: {
          wrongMethod: 'v = a + t = 2 + 5 = 7 m/s OR confused with distance s = 25  ❌',
          correctMethod: 'v = u + at = 0 + (2 m/s² × 5 s) = 10 m/s  ✅',
          rule: 'NCERT First Equation of Motion: v = u + at, where u is initial velocity, a is acceleration, and t is time elapsed.'
        },
        focusTip: 'Identify the given quantities first: Write down u, a, t and clearly state which equation links them to v.'
      }
    ]
  },

  // ================= CLASS 6 WEEKLY EXAM =================
  {
    id: 'exam-w1-class6',
    title: 'Class 6 NCERT Weekly Diagnostic Exam - Week 1',
    description: 'Covers Class 6 Mathematics (Integers & Numbers), Science (Food & Nutrition)',
    classLevel: 6,
    weekNumber: 1,
    timeLimitMinutes: 8,
    totalMarks: 20,
    badge: 'Foundation Star 01',
    requiredVideosWatched: 1,
    questions: [
      {
        id: 'q-6-m-1',
        subjectId: 'math',
        topic: 'Arithmetic & Integers',
        subtopic: 'Subtraction of Integers',
        question: 'Calculate: (-5) - (-8)',
        options: [
          '+3',
          '-13',
          '+13',
          '-3'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Negative Multi-Addition Error: You combined both signs into a bigger negative (-5 - 8 = -13).',
          2: 'Double Negation Confusion: Forgot that the initial -5 is negative.',
          3: 'Sign Subtraction Error: Subtracted 8 - 5 = 3 but attached a negative sign.'
        },
        briefMistakeExample: {
          wrongMethod: '(-5) - (-8) = -5 - 8 = -13  ❌ (Did not flip minus of minus into plus)',
          correctMethod: 'Subtracting a negative is adding positive: (-5) - (-8) = -5 + 8 = +3  ✅',
          rule: 'NCERT Class 6 Ch 6: To subtract an integer, add its additive inverse. The additive inverse of -8 is +8.'
        },
        focusTip: 'Remember: Two negative signs together (-(-)) turn into a positive plus (+).'
      },
      // QUESTION 2: CLASS 6 ENGLISH (NCERT POORVI CH 1: A BOTTLE OF DEW)
      {
        id: 'q-6-e-1',
        subjectId: 'english',
        topic: 'Poorvi English - Fables & Comprehension',
        subtopic: 'A Bottle of Dew (Sudha Murty) - Story Understanding',
        question: 'In NCERT Poorvi Chapter 1 ("A Bottle of Dew"), what was the real secret behind the bags of gold coins that Madhumati showed Rama Natha?',
        options: [
          'Wealth earned by selling bananas harvested over six years of diligent work',
          'Sage Mahipati chanted a magic spell that turned the five litres of dew into gold',
          'Rama Natha discovered a buried treasure under the banana plantation',
          'Madhumati had borrowed gold coins from a wealthy village merchant'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Magic Potion Confusion: You believed the dew actually turned into gold! In the story, the copper never turned into gold. The sage deliberately tricked Rama Natha to teach him that work is gold.',
          2: 'Fairytale Tropes: There was no buried treasure under the ground in Sudha Murty’s story.',
          3: 'Misunderstanding Character: Madhumati never borrowed money; she created prosperity by selling the crop.'
        },
        briefMistakeExample: {
          wrongMethod: 'Thinking Sage Mahipati created real magical gold from the 5 litres of dew  ❌',
          correctMethod: 'Sage Mahipati taught that honest labor on the plantation created the gold coins from selling bananas  ✅',
          rule: 'NCERT Poorvi Unit 1 Theme: Fables teach moral truths through everyday actions. "A Bottle of Dew" illustrates that disciplined hard work produces real wealth, not magic shortcuts.'
        },
        focusTip: 'Review the ending of Poorvi Chapter 1: Notice Sage Mahipati’s words when pointing to the banana crop.'
      },
      // QUESTION 3: CLASS 6 ENGLISH (NCERT POORVI VOCABULARY & GRAMMAR)
      {
        id: 'q-6-e-2',
        subjectId: 'english',
        topic: 'Poorvi English - Vocabulary & Moral',
        subtopic: 'Contextual Word Meanings & Themes in Poorvi',
        question: 'In "A Bottle of Dew", Rama Natha is described as being obsessed with finding a "magic potion". What does the word "potion" mean in the NCERT text?',
        options: [
          'A liquid with healing, magical, or medicinal properties',
          'A large metal pot used for cooking food in villages',
          'A parcel of agricultural land handed down by ancestors',
          'A gold coin minted by ancient royal kings'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Confusion with "Pot": Confused the word "potion" with "pot" or vessel.',
          2: 'Confusion with "Portion": Confused "potion" with "portion of land".',
          3: 'Confusion with treasure: Mixed up potion with coin.'
        },
        briefMistakeExample: {
          wrongMethod: 'Thinking a "potion" is a metal cooking pot  ❌ (Confused spelling with pot)',
          correctMethod: 'A "potion" is a magical or medicinal brew / liquid (जैसे: जादुई रस या काढ़ा)  ✅',
          rule: 'NCERT Poorvi Glossary: A potion is a special drink or liquid believed to have magical or extraordinary powers.'
        },
        focusTip: 'Check the Poorvi Chapter 1 Word Power glossary for exact definitions of key literary terms.'
      },
      // QUESTION 4: CLASS 6 SCIENCE
      {
        id: 'q-6-s-1',
        subjectId: 'science',
        topic: 'Biology - Health & Nutrients',
        subtopic: 'Deficiency Diseases & Balanced Diet',
        question: 'Which nutrient is primarily tested in a food sample using a few drops of dilute Iodine solution to see if it turns blue-black?',
        options: [
          'Starch (Carbohydrate)',
          'Proteins',
          'Fats',
          'Vitamin C'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Protein Test Confusion: Protein is tested with copper sulphate and caustic soda (violet color), not iodine.',
          2: 'Fat Test Error: Fats are tested by rubbing on a paper patch to see an oily translucent spot.',
          3: 'Vitamin Error: Vitamins are not tested with iodine solution in NCERT Class 6 experiments.'
        },
        briefMistakeExample: {
          wrongMethod: 'Iodine test = Protein test (Violet)  ❌ (Confused iodine with copper sulphate)',
          correctMethod: 'Iodine solution + Starch turns BLUE-BLACK  ✅',
          rule: 'NCERT Class 6 Science Ch 2: Blue-black coloration with dilute iodine indicates the presence of Starch.'
        },
        focusTip: 'Remember: Iodine turns Blue-Black for Starch (e.g. raw potato slice).'
      }
    ]
  },

  // ================= CLASS 7 WEEKLY EXAM =================
  {
    id: 'exam-w1-class7',
    title: 'Class 7 NCERT Weekly Diagnostic Exam - Week 1',
    description: 'Covers Class 7 Mathematics (Fractions) and Science (Photosynthesis)',
    classLevel: 7,
    weekNumber: 1,
    timeLimitMinutes: 8,
    totalMarks: 20,
    badge: 'Discovery Star 01',
    requiredVideosWatched: 1,
    questions: [
      {
        id: 'q-7-m-1',
        subjectId: 'math',
        topic: 'Arithmetic & Fractions',
        subtopic: 'Division of Fractions',
        question: 'Solve: 3/4 ÷ 1/2',
        options: [
          '3/2 (or 1.5)',
          '3/8',
          '2/3',
          '4/6'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Multiplied Straight Across: You multiplied (3×1)/(4×2) = 3/8 without reciprocating the divisor.',
          2: 'Reciprocated First Fraction: You flipped 3/4 into 4/3 instead of flipping 1/2.',
          3: 'Forgot to reduce or invert.'
        },
        briefMistakeExample: {
          wrongMethod: '3/4 ÷ 1/2 = (3 × 1) / (4 × 2) = 3/8  ❌ (Multiplied instead of using reciprocal)',
          correctMethod: '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1.5  ✅',
          rule: 'NCERT Class 7 Ch 2: Division of a fraction by another fraction means multiplying the first fraction by the reciprocal of the second fraction.'
        },
        focusTip: 'Use the Keep-Change-Flip rule: Keep the 1st fraction, Change ÷ to ×, Flip the 2nd fraction.'
      }
    ]
  },

  // ================= CLASS 10 WEEKLY EXAM =================
  {
    id: 'exam-w1-class10',
    title: 'Class 10 CBSE Board Diagnostic Arena - Week 1',
    description: 'Covers Class 10 Mathematics (Quadratic Equations & Trigonometry), Science (Electricity & Chemical Reactions), English (First Flight), Hindi (वाच्य)',
    classLevel: 10,
    weekNumber: 1,
    timeLimitMinutes: 15,
    totalMarks: 40,
    badge: 'Board Master 01',
    requiredVideosWatched: 2,
    questions: [
      // Q1: Class 10 Math - Quadratic Equations (Discriminant sign error)
      {
        id: 'q-10-m-1',
        subjectId: 'math',
        topic: 'Algebra - Quadratic Equations',
        subtopic: 'Discriminant & Nature of Roots (D = b² - 4ac)',
        question: 'Find the discriminant (D) of the quadratic equation: 2x² - 4x + 3 = 0, and state the nature of its roots.',
        options: [
          'D = -8 (No real roots)',
          'D = +40 (Two distinct real roots)',
          'D = +8 (Two distinct real roots)',
          'D = 0 (Two equal real roots)'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Negative Squaring Trap: You calculated (-4)² as -16, then did -16 - 24 or misapplied signs into +40.',
          2: 'Sign Addition Error: You added 16 + 24 = 40 or forgot the negative sign in -4ac.',
          3: 'Zero Discriminant Assumption: You assumed the equation factors evenly without evaluating 4ac.'
        },
        briefMistakeExample: {
          wrongMethod: 'D = (-4)² - 4(2)(3)  ➜  -16 - 24 = -40 OR 16 + 24 = 40  ❌ (Sign error with b²)',
          correctMethod: 'a = 2, b = -4, c = 3  ➜  D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, there are NO REAL ROOTS  ✅',
          rule: 'NCERT Class 10 Ch 4: (-b)² is always POSITIVE. If D = b² - 4ac < 0, the quadratic equation has no real roots (roots are complex).'
        },
        focusTip: 'Put parentheses around negative terms when squaring: (-4)² = +16, never -16.'
      },

      // Q2: Class 10 Math - Trigonometry (Opposite vs Adjacent ratio)
      {
        id: 'q-10-m-2',
        subjectId: 'math',
        topic: 'Trigonometry & Geometry',
        subtopic: 'Trigonometric Ratios in Right Triangle',
        question: 'In a right-angled triangle Δ ABC right-angled at B, if tan A = 4/3, what is the value of cos A?',
        options: [
          '3/5',
          '4/5',
          '5/3',
          '3/4'
        ],
        correctIndex: 0,
        difficulty: 'Easy',
        commonMistakeAnalysis: {
          1: 'Swapped Sine and Cosine: You calculated Opposite/Hypotenuse = 4/5, which is sin A, not cos A.',
          2: 'Inverted Reciprocal: You calculated sec A = 5/3 instead of cos A.',
          3: 'Cotangent Confusion: You took the reciprocal 3/4 which is cot A.'
        },
        briefMistakeExample: {
          wrongMethod: 'cos A = 4/5  ❌ (That is sin A = Opposite/Hypotenuse!)',
          correctMethod: 'tan A = Opp/Adj = 4/3. Hypotenuse = √(4² + 3²) = √25 = 5. Therefore cos A = Adj/Hyp = 3/5  ✅',
          rule: 'NCERT Class 10 Ch 8: SOH-CAH-TOA rule: sin = Opp/Hyp, cos = Adj/Hyp, tan = Opp/Adj.'
        },
        focusTip: 'Write down the three sides: Opposite = 4k, Adjacent = 3k, Hypotenuse = 5k. Then cos A = Adjacent / Hypotenuse = 3/5.'
      },

      // Q3: Class 10 Science - Physics (Electricity Parallel Resistors)
      {
        id: 'q-10-s-1',
        subjectId: 'science',
        topic: 'Science - Electricity',
        subtopic: 'Resistors in Parallel (1/R = 1/R₁ + 1/R₂)',
        question: 'Two resistors of 6 Ω and 3 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance (R_eq) of the combination?',
        options: [
          '2 Ω',
          '9 Ω',
          '0.5 Ω',
          '18 Ω'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Series Addition Error: You added 6 + 3 = 9 Ω. In parallel, equivalent resistance is always smaller than the smallest branch resistor!',
          2: 'Forgot to Reciprocate Final Answer: You computed 1/R = 1/6 + 1/3 = 3/6 = 1/2 = 0.5, but forgot to invert 1/R to get R = 2 Ω.',
          3: 'Multiplication Error: Multiplied 6 × 3 without dividing by sum.'
        },
        briefMistakeExample: {
          wrongMethod: 'R_eq = 6 + 3 = 9 Ω  OR  1/R_eq = 1/2  ➜  R_eq = 0.5 Ω  ❌ (Forgot to flip reciprocal)',
          correctMethod: '1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Inverting gives R_eq = 2 Ω  ✅',
          rule: 'NCERT Class 10 Ch 12: For two resistors in parallel: R_eq = (R₁ × R₂) / (R₁ + R₂) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.'
        },
        focusTip: 'Quick formula shortcut for 2 parallel resistors: Product over Sum: (R₁ × R₂) / (R₁ + R₂).'
      },

      // Q4: Class 10 Science - Chemistry (Balancing Chemical Equations)
      {
        id: 'q-10-s-2',
        subjectId: 'science',
        topic: 'Science - Chemical Reactions',
        subtopic: 'Balancing Chemical Equations (Conservation of Mass)',
        question: 'Consider the reaction of iron with steam: Fe + H₂O ➜ Fe₃O₄ + H₂. What are the correct stoichiometric coefficients when fully balanced?',
        options: [
          '3 Fe + 4 H₂O ➜ 1 Fe₃O₄ + 4 H₂',
          '1 Fe + 4 H₂O ➜ 1 Fe₃O₄ + 2 H₂',
          '3 Fe + 2 H₂O ➜ 1 Fe₃O₄ + 1 H₂',
          '3 Fe + 4 H₂O ➜ 1 Fe₃O₄ + 2 H₂'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Unbalanced Iron: Left 1 Fe on LHS while RHS has Fe₃.',
          2: 'Unbalanced Oxygen: 2 H₂O gives only 2 Oxygen atoms, but Fe₃O₄ requires 4 Oxygen atoms.',
          3: 'Unbalanced Hydrogen: 4 H₂O gives 8 H atoms on LHS, so RHS must have 4 H₂ (8 H atoms), not 2 H₂.'
        },
        briefMistakeExample: {
          wrongMethod: '3 Fe + 4 H₂O ➜ Fe₃O₄ + 2 H₂  ❌ (Hydrogen: 8 atoms on LHS vs 4 on RHS)',
          correctMethod: 'Fe: 3, O: 4 from 4H₂O, H: 4 × 2 = 8, so RHS needs 4H₂. Result: 3Fe + 4H₂O ➜ Fe₃O₄ + 4H₂  ✅',
          rule: 'NCERT Class 10 Ch 1: According to the Law of Conservation of Mass, the number of atoms of each element must remain equal on both LHS and RHS.'
        },
        focusTip: 'Balance the element with the maximum number of atoms first (Oxygen: 4 in Fe₃O₄), then balance Hydrogen, then Iron.'
      },

      // Q5: Class 10 English - First Flight (A Letter to God)
      {
        id: 'q-10-e-1',
        subjectId: 'english',
        topic: 'First Flight English - Prose & Irony',
        subtopic: 'A Letter to God (G.L. Fuentes) - Situational Irony',
        question: 'In NCERT First Flight Chapter 1 ("A Letter to God"), why is the ending considered deeply ironic?',
        options: [
          'Lencho called the post office employees "a bunch of crooks", unaware that they were the very people who collected money to help him',
          'The postmaster used the money to rebuild his own house instead of giving it to Lencho',
          'The hailstorm actually improved the soil quality and grew double the harvest',
          'God directly sent an angel to deliver the 100 pesos in cash to the valley'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'Factual Error: The postmaster was a kind and compassionate man who gave up part of his own salary to help.',
          2: 'Contradicts Story: The hailstorm completely destroyed the corn crop and stripped leaves bare.',
          3: 'Misinterpreting Realism: The story is a human fable grounded in irony, not supernatural fantasy.'
        },
        briefMistakeExample: {
          wrongMethod: 'Thinking the postmaster was a thief who stole 30 pesos  ❌',
          correctMethod: 'The employees performed an act of selfless charity, yet Lencho suspected them of being "crooks"  ✅',
          rule: 'NCERT Class 10 English: Situational irony occurs when the outcome of a situation is totally opposite to what the characters or audience expect.'
        },
        focusTip: 'Review the definition of Irony in First Flight Chapter 1: Notice how Lencho’s extreme faith blindfolded him to human benevolence.'
      },

      // Q6: Class 10 Hindi - Vyakaran (वाच्य परिवर्तन)
      {
        id: 'q-10-h-1',
        subjectId: 'hindi',
        topic: 'Hindi Vyakaran - Vachya',
        subtopic: 'कर्तृवाच्य से कर्मवाच्य में परिवर्तन',
        question: '"रमेश ने सुंदर चित्र बनाया।" — इस कर्तृवाच्य वाक्य का सही कर्मवाच्य रूप क्या होगा?',
        options: [
          'रमेश द्वारा सुंदर चित्र बनाया गया।',
          'रमेश से सुंदर चित्र नहीं बनाया जाता।',
          'रमेश सुंदर चित्र बनाएगा।',
          'चित्र ने रमेश को बनाया।'
        ],
        correctIndex: 0,
        difficulty: 'Medium',
        commonMistakeAnalysis: {
          1: 'भाववाच्य का भ्रम: "रमेश से सुंदर चित्र नहीं बनाया जाता" असमर्थतासूचक भाववाच्य की शैली है, और यहाँ कर्म (चित्र) मौजूद है।',
          2: 'काल परिवर्तन की गलती: मूल वाक्य भूतकाल में है, जबकि "बनाएगा" भविष्यत काल है।',
          3: 'अर्थहीन वाक्य: कर्ता और कर्म के स्थान को निरर्थक रूप से उलट दिया गया।'
        },
        briefMistakeExample: {
          wrongMethod: 'रमेश से सुंदर चित्र नहीं बनाया जाता  ❌ (भाववाच्य का रूप ले लिया)',
          correctMethod: 'कर्ता के साथ "द्वारा" + कर्म की प्रधानता + "जाना" क्रिया का रूप (बनाया गया) = रमेश द्वारा सुंदर चित्र बनाया गया  ✅',
          rule: 'NCERT कक्षा 10 हिन्दी व्याकरण: कर्मवाच्य में कर्ता के साथ "से" या "के द्वारा" लगता है, और क्रिया कर्म (चित्र - पुल्लिंग एकवचन) के अनुसार "बनाया गया" होती है।'
        },
        focusTip: 'कर्तृवाच्य से कर्मवाच्य बनाते समय कभी भी वाक्य का काल (Tense) न बदलें!'
      }
    ]
  }
];

// Quick Remedial Practice Generator for weak topics
export const REMEDIAL_PRACTICE_BANK = {
  'Algebra': [
    {
      q: 'Solve: 2x - 5 = 11. What is the value of x?',
      options: ['x = 8', 'x = 3', 'x = 6', 'x = 16'],
      correctIndex: 0,
      explanation: '2x = 11 + 5 = 16. Then x = 16 / 2 = 8. (Transposed -5 to become +5)'
    },
    {
      q: 'What is the coefficient of x in the term -7xy?',
      options: ['-7y', '7', '-7', 'y'],
      correctIndex: 0,
      explanation: 'Leaving out x, the remaining algebraic factor is -7y.'
    },
    {
      q: 'Expand: (x + 4)²',
      options: ['x² + 8x + 16', 'x² + 16', 'x² + 4x + 16', '2x + 8'],
      correctIndex: 0,
      explanation: 'Identity: (a + b)² = a² + 2ab + b² = x² + 2(x)(4) + 4² = x² + 8x + 16.'
    }
  ],
  'Science - Mechanics': [
    {
      q: 'If Force = 60 N and Area = 3 m², find Pressure.',
      options: ['20 Pa', '180 Pa', '63 Pa', '0.05 Pa'],
      correctIndex: 0,
      explanation: 'Pressure = Force / Area = 60 / 3 = 20 Pa.'
    },
    {
      q: 'Which of the following is a non-contact force?',
      options: ['Gravitational Force', 'Frictional Force', 'Muscular Force', 'Tension Force'],
      correctIndex: 0,
      explanation: 'Gravity acts across space without physical contact, whereas friction and muscular forces require direct touch.'
    }
  ],
  'Hindi Vyakaran - Sandhi': [
    {
      q: '"विद्या + आलय" की संधि क्या होगी?',
      options: ['विद्यालय', 'विद्यलय', 'विद्योदय', 'विद्याल'],
      correctIndex: 0,
      explanation: 'आ + आ मिलकर दीर्घ आ बनते हैं: विद्या + आलय = विद्यालय (दीर्घ स्वर संधि)।'
    },
    {
      q: '"सूर्य + उदय" का संधि रूप क्या होगा?',
      options: ['सूर्योदय', 'सूर्यादय', 'सूर्येदय', 'सूर्यउदय'],
      correctIndex: 0,
      explanation: 'अ + उ मिलकर ओ बनते हैं: सूर्य + उदय = सूर्योदय (गुण स्वर संधि)।'
    }
  ],
  'English - Tenses': [
    {
      q: 'She ________ (watch) television when the telephone rang.',
      options: ['was watching', 'is watching', 'watched', 'has watched'],
      correctIndex: 0,
      explanation: 'Past Continuous tense is used for an ongoing action interrupted by another past action.'
    }
  ],
  'Poorvi English - Fables & Comprehension': [
    {
      q: 'In "A Bottle of Dew", who was the wise sage who advised Rama Natha?',
      options: ['Sage Mahipati', 'Sage Valmiki', 'Sage Vashistha', 'Sage Agastya'],
      correctIndex: 0,
      explanation: 'Sage Mahipati was the wise mentor who designed the 6-year dew collection challenge.'
    },
    {
      q: 'What crop did Rama Natha plant over his large inherited land?',
      options: ['Banana trees', 'Mango orchards', 'Wheat and barley', 'Sugarcane stalks'],
      correctIndex: 0,
      explanation: 'He planted thousands of banana saplings because their broad leaves collected winter morning dew.'
    }
  ],
  'Algebra - Quadratic Equations': [
    {
      q: 'If the discriminant D = b² - 4ac = 0 for a quadratic equation, what is the nature of its roots?',
      options: ['Two equal real roots', 'Two distinct real roots', 'No real roots', 'Infinite roots'],
      correctIndex: 0,
      explanation: 'When D = 0, both roots are equal and real: x = -b / (2a).'
    },
    {
      q: 'Find the discriminant of 3x² - 5x + 2 = 0.',
      options: ['D = 1 (Two distinct real roots)', 'D = -1 (No real roots)', 'D = 49', 'D = 0'],
      correctIndex: 0,
      explanation: 'D = (-5)² - 4(3)(2) = 25 - 24 = 1 > 0.'
    }
  ],
  'Trigonometry & Geometry': [
    {
      q: 'What is the value of sin 30° + cos 60°?',
      options: ['1', '√3', '1/2', '0'],
      correctIndex: 0,
      explanation: 'sin 30° = 1/2 and cos 60° = 1/2. Sum = 1/2 + 1/2 = 1.'
    },
    {
      q: 'If sin θ = 1/√2, what is the acute angle θ?',
      options: ['45°', '30°', '60°', '90°'],
      correctIndex: 0,
      explanation: 'From the standard NCERT trigonometric table, sin 45° = 1/√2.'
    }
  ],
  'Science - Electricity': [
    {
      q: 'What is the equivalent resistance when two 4 Ω resistors are connected in parallel?',
      options: ['2 Ω', '8 Ω', '16 Ω', '1 Ω'],
      correctIndex: 0,
      explanation: '1/R = 1/4 + 1/4 = 2/4 = 1/2 ➜ R = 2 Ω.'
    },
    {
      q: 'Which law states that V is directly proportional to I at constant temperature?',
      options: ['Ohm’s Law', 'Joule’s Law', 'Coulomb’s Law', 'Ampere’s Law'],
      correctIndex: 0,
      explanation: 'Ohm’s Law states V = IR.'
    }
  ],
  'Hindi Vyakaran - Vachya': [
    {
      q: '"पक्षी आकाश में उड़ते हैं।" — यह कौन-सा वाच्य है?',
      options: ['कर्तृवाच्य', 'कर्मवाच्य', 'भाववाच्य', 'मिश्रवाच्य'],
      correctIndex: 0,
      explanation: 'यहाँ क्रिया "उड़ते हैं" कर्ता (पक्षी) के अनुसार है, अतः यह कर्तृवाच्य है।'
    },
    {
      q: '"माली द्वारा पौधे सींचे जाते हैं।" — यह कौन-सा वाच्य है?',
      options: ['कर्मवाच्य', 'कर्तृवाच्य', 'भाववाच्य', 'अकर्मक वाच्य'],
      correctIndex: 0,
      explanation: 'कर्ता के साथ "द्वारा" तथा क्रिया कर्म "पौधे" के अनुसार है, अतः कर्मवाच्य है।'
    }
  ]
};
