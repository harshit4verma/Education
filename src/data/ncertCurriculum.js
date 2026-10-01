// NCERT Curriculum Data for Classes 6 to 9
// Subjects: Mathematics, Science, English, Hindi

export const SUBJECTS = [
  { id: 'math', name: 'Mathematics', hindiName: 'गणित', icon: '📐', color: 'from-blue-600 to-indigo-600', badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { id: 'science', name: 'Science', hindiName: 'विज्ञान', icon: '🔬', color: 'from-emerald-600 to-teal-600', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { id: 'english', name: 'English', hindiName: 'अंग्रेज़ी', icon: '📚', color: 'from-amber-600 to-orange-600', badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  { id: 'hindi', name: 'Hindi', hindiName: 'हिन्दी', icon: '✍️', color: 'from-rose-600 to-pink-600', badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
];

export const INITIAL_VIDEOS = [
  // ================= CLASS 8 MATHS =================
  {
    id: 'vid-8-m-1',
    classLevel: 8,
    subjectId: 'math',
    title: 'Algebraic Expressions & Identities - Visualized with Balance Scale',
    chapter: 'Chapter 9: Algebraic Expressions and Identities',
    topic: 'Algebra',
    duration: '14:20',
    views: '18.4K',
    ncertRef: 'NCERT Class 8 Math, Page 137',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator', // built-in interactive animated simulator
    simulatorType: 'algebra',
    description: 'Learn how variables, constants, coefficients, and operations form algebraic expressions. See how addition, subtraction, and like terms balance out like physical weights!',
    keyPoints: [
      'Terms are added to form expressions (e.g. 4x + 5)',
      'Like terms have the same algebraic factors (e.g. 7x and -5x)',
      'Standard identities: (a + b)² = a² + 2ab + b²',
      'Transposition rule: Moving a term across "=" changes its sign (+ becomes -, × becomes ÷)'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50' // NCERT educational embed
  },
  {
    id: 'vid-8-m-2',
    classLevel: 8,
    subjectId: 'math',
    title: 'Linear Equations in One Variable - Step-by-Step Animation',
    chapter: 'Chapter 2: Linear Equations in One Variable',
    topic: 'Algebra',
    duration: '16:45',
    views: '24.1K',
    ncertRef: 'NCERT Class 8 Math, Page 21',
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'algebra',
    description: 'Master solving equations where the variable has power 1. Visualizing the balance scale method: whatever you do to LHS, you must do to RHS.',
    keyPoints: [
      'Linear equation has degree 1 (e.g., 2x - 3 = 7)',
      'Transposition changes positive to negative, multiplication to division',
      'Equations with variables on both sides: collect variable terms on one side'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },
  {
    id: 'vid-8-m-3',
    classLevel: 8,
    subjectId: 'math',
    title: 'Mensuration: 2D & 3D Area & Volume Animation',
    chapter: 'Chapter 11: Mensuration',
    topic: 'Geometry & Mensuration',
    duration: '18:10',
    views: '12.9K',
    ncertRef: 'NCERT Class 8 Math, Page 169',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'geometry',
    description: '3D animated unfolding of cubes, cuboids, and cylinders to understand surface area and volume intuitively without memorizing blind formulas.',
    keyPoints: [
      'Area of trapezium = 1/2 × (sum of parallel sides) × height',
      'Total surface area of cylinder = 2πr(r + h)',
      'Volume of cylinder = πr²h'
    ],
    videoUrl: 'https://www.youtube.com/embed/zH0j7Kq1l2c'
  },

  // ================= CLASS 8 SCIENCE =================
  {
    id: 'vid-8-s-1',
    classLevel: 8,
    subjectId: 'science',
    title: 'Cell - Structure and Functions 3D Animated Journey',
    chapter: 'Chapter 8: Cell — Structure and Functions',
    topic: 'Biology - Cell Biology',
    duration: '15:30',
    views: '31.2K',
    ncertRef: 'NCERT Class 8 Science, Page 90',
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'cell',
    description: 'Travel inside plant and animal cells with rich 3D animations. Discover the cell wall, cell membrane, nucleus, mitochondria, vacuoles, and plastids.',
    keyPoints: [
      'Robert Hooke observed cells in cork slice in 1665',
      'Plant cells have an outer rigid layer called Cell Wall (absent in animal cells)',
      'Chloroplasts contain green pigment chlorophyll essential for photosynthesis',
      'Nucleus contains chromosomes carrying genes that transfer traits'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },
  {
    id: 'vid-8-s-2',
    classLevel: 8,
    subjectId: 'science',
    title: 'Force and Pressure: Interactive Animated Physics Lab',
    chapter: 'Chapter 11: Force and Pressure',
    topic: 'Physics - Mechanics',
    duration: '17:05',
    views: '20.5K',
    ncertRef: 'NCERT Class 8 Science, Page 127',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'motion',
    description: 'Understand Contact vs Non-Contact forces, Atmospheric Pressure, and how pressure = force / area with animated real-world demonstrations.',
    keyPoints: [
      'Force is a push or pull upon an object resulting from interaction',
      'Pressure = Force / Area. Smaller area produces greater pressure',
      'Fluids (liquids and gases) exert pressure on the walls of containers'
    ],
    videoUrl: 'https://www.youtube.com/embed/uNfI3k1xYfg'
  },

  // ================= CLASS 8 ENGLISH =================
  {
    id: 'vid-8-e-1',
    classLevel: 8,
    subjectId: 'english',
    title: 'Tenses Masterclass: Present, Past & Future Animated Timeline',
    chapter: 'Grammar: The Complete Tense Guide (Honeydew & It So Happened)',
    topic: 'Grammar - Tenses',
    duration: '19:40',
    views: '42.7K',
    ncertRef: 'NCERT Class 8 English Grammar',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'grammar',
    description: 'Never get confused between Simple Past, Present Perfect, and Past Continuous again! Animated timelines show exactly when an action happened and how to choose the right auxiliary verb.',
    keyPoints: [
      'Simple Present expresses habitual actions and universal truths (e.g. The sun rises in the east)',
      'Present Perfect connects past actions with present consequences (has/have + V3)',
      'Past Perfect is used for the earlier of two completed past actions (had + V3)'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },
  {
    id: 'vid-8-e-2',
    classLevel: 8,
    subjectId: 'english',
    title: 'Active and Passive Voice: Animated Transformation Rules',
    chapter: 'Grammar: Voice & Sentence Structures',
    topic: 'Grammar - Active & Passive',
    duration: '14:50',
    views: '19.8K',
    ncertRef: 'NCERT Class 8 English Grammar Workbook',
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'grammar',
    description: 'Learn how the subject and object switch places, why verb becomes 3rd form (Past Participle), and how pronouns transform (He -> Him, They -> Them).',
    keyPoints: [
      'Subject becomes Object with preposition "by"',
      'Main verb always transforms into its Past Participle (V3) form',
      'Auxiliary verb changes based on the tense of the sentence'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },

  // ================= CLASS 8 HINDI =================
  {
    id: 'vid-8-h-1',
    classLevel: 8,
    subjectId: 'hindi',
    title: 'संधि (Sandhi) और उसके भेद - सचित्र एनीमेशन',
    chapter: 'व्याकरण: संधि विचार (स्वर, व्यंजन, विसर्ग)',
    topic: 'Hindi Vyakaran - Sandhi',
    duration: '16:15',
    views: '28.9K',
    ncertRef: 'NCERT कक्षा 8 वसंत भाग-3 एवं व्याकरण',
    thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'hindi-sandhi',
    description: 'दो वर्णों के परस्पर मेल से जो विकार (परिवर्तन) उत्पन्न होता है उसे संधि कहते हैं। स्वर संधि के 5 भेद: दीर्घ, गुण, वृद्धि, यण और अयादि को एनीमेशन से आसानी से समझें।',
    keyPoints: [
      'दीर्घ संधि: अ/आ + अ/आ = आ (जैसे: हिम + आलय = हिमालय)',
      'गुण संधि: अ/आ + इ/ई = ए, अ/आ + उ/ऊ = ओ (जैसे: नर + ईश = नरेश)',
      'वृद्धि संधि: अ/आ + ए/ऐ = ऐ, अ/आ + ओ/औ = औ (जैसे: एक + एक = एकैक)',
      'यण संधि: इ/ई + अन्य स्वर = य् (जैसे: प्रति + एक = प्रत्येक)'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-8-h-2',
    classLevel: 8,
    subjectId: 'hindi',
    title: 'समास और उसके 6 भेद - कार्टून एनीमेशन द्वारा पहचान',
    chapter: 'व्याकरण: समास (अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि)',
    topic: 'Hindi Vyakaran - Samas',
    duration: '15:40',
    views: '22.1K',
    ncertRef: 'NCERT कक्षा 8 हिंदी व्याकरण',
    thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'hindi-sandhi',
    description: 'समास का शाब्दिक अर्थ है संक्षेप। दो या दो से अधिक शब्दों के मेल से बने नए शब्द को समास कहते हैं। सामासिक पद और विग्रह को चुटकियों में समझें।',
    keyPoints: [
      'द्विगु समास: पहला पद संख्यावाचक होता है (जैसे: चौराहा = चार राहों का समूह)',
      'द्वंद्व समास: दोनों पद प्रधान होते हैं और बीच में "और/या" लुप्त होता है (जैसे: माता-पिता)',
      'बहुव्रीहि समास: दोनों पद मिलकर किसी तीसरे विशेष अर्थ का बोध कराते हैं (जैसे: लंबोदर = श्री गणेश)'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },

  // ================= CLASS 9 MATHS =================
  {
    id: 'vid-9-m-1',
    classLevel: 9,
    subjectId: 'math',
    title: 'Polynomials & Factor Theorem: 3D Visualization',
    chapter: 'Chapter 2: Polynomials',
    topic: 'Algebra',
    duration: '21:10',
    views: '35.6K',
    ncertRef: 'NCERT Class 9 Math, Page 28',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'algebra',
    description: 'Understand zeroes of a polynomial, degree, remainder theorem, and factorising quadratic polynomials by splitting the middle term with visual area models.',
    keyPoints: [
      'Zero of polynomial p(x) is a number c such that p(c) = 0',
      'Remainder Theorem: If p(x) is divided by (x - a), remainder is p(a)',
      'Splitting middle term: Find two numbers whose sum is b and product is ac'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },
  {
    id: 'vid-9-m-2',
    classLevel: 9,
    subjectId: 'math',
    title: 'Lines and Angles: Animated Geometric Proofs',
    chapter: 'Chapter 6: Lines and Angles',
    topic: 'Geometry',
    duration: '18:40',
    views: '16.8K',
    ncertRef: 'NCERT Class 9 Math, Page 90',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'geometry',
    description: 'Watch parallel lines cut by a transversal with color-coded alternate interior, corresponding, and co-interior angles.',
    keyPoints: [
      'Linear pair angles sum to 180°',
      'Vertically opposite angles are equal',
      'If two parallel lines are cut by a transversal, alternate interior angles are equal'
    ],
    videoUrl: 'https://www.youtube.com/embed/zH0j7Kq1l2c'
  },

  // ================= CLASS 9 SCIENCE =================
  {
    id: 'vid-9-s-1',
    classLevel: 9,
    subjectId: 'science',
    title: 'Motion: Distance, Velocity & Acceleration Animated Graphing',
    chapter: 'Chapter 8: Motion',
    topic: 'Physics - Mechanics',
    duration: '22:15',
    views: '48.9K',
    ncertRef: 'NCERT Class 9 Science, Page 98',
    thumbnail: 'https://images.unsplash.com/photo-1517976487502-5c82245b7f14?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'motion',
    description: 'Interactive motion simulator showing an animated electric car driving with real-time distance-time and velocity-time graphs. Understand the 3 equations of motion!',
    keyPoints: [
      'Speed = Distance / Time (scalar); Velocity = Displacement / Time (vector)',
      'Acceleration a = (v - u) / t',
      'Three equations of motion: v = u + at, s = ut + 1/2 at², v² - u² = 2as'
    ],
    videoUrl: 'https://www.youtube.com/embed/uNfI3k1xYfg'
  },
  {
    id: 'vid-9-s-2',
    classLevel: 9,
    subjectId: 'science',
    title: 'Structure of the Atom: Rutherford & Bohr Models Animated',
    chapter: 'Chapter 4: Structure of the Atom',
    topic: 'Chemistry - Atomic Structure',
    duration: '17:50',
    views: '29.3K',
    ncertRef: 'NCERT Class 9 Science, Page 46',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'cell',
    description: 'Gold foil alpha particle experiment animated. See electrons orbiting in discrete shells (K, L, M, N) and learn valency calculation.',
    keyPoints: [
      'Protons & neutrons reside in dense nucleus; electrons orbit in shells',
      'Max electrons in shell = 2n² (K: 2, L: 8, M: 18)',
      'Valency is the combining capacity of an atom to achieve octet'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },

  // ================= CLASS 7 MATHS & SCIENCE =================
  {
    id: 'vid-7-m-1',
    classLevel: 7,
    subjectId: 'math',
    title: 'Fractions and Decimals: Visual Pizza Slices & Number Line',
    chapter: 'Chapter 2: Fractions and Decimals',
    topic: 'Arithmetic & Fractions',
    duration: '13:20',
    views: '15.2K',
    ncertRef: 'NCERT Class 7 Math, Page 29',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'algebra',
    description: 'Visualizing improper fractions, mixed numbers, and multiplying fractions with animated slicing visuals.',
    keyPoints: [
      'Reciprocal of a non-zero fraction is obtained by swapping numerator and denominator',
      'Division of fractions: Multiply the dividend by the reciprocal of the divisor',
      'Multiplying decimals: Count decimal places from the right'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },
  {
    id: 'vid-7-s-1',
    classLevel: 7,
    subjectId: 'science',
    title: 'Nutrition in Plants: Photosynthesis 3D Sunlight & Stomata Lab',
    chapter: 'Chapter 1: Nutrition in Plants',
    topic: 'Biology - Photosynthesis',
    duration: '16:00',
    views: '26.4K',
    ncertRef: 'NCERT Class 7 Science, Page 1',
    thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'photosynthesis',
    description: 'Interactive Chloroplast and leaf simulator! Adjust sunlight intensity and CO2 levels to observe glucose and oxygen generation in real time.',
    keyPoints: [
      'Autotrophic nutrition: Plants prepare food from CO₂ and H₂O in the presence of sunlight and chlorophyll',
      'Equation: 6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂',
      'Stomata are microscopic pores guarded by bean-shaped guard cells'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },

  // ================= CLASS 6 MATHS & SCIENCE =================
  {
    id: 'vid-6-m-1',
    classLevel: 6,
    subjectId: 'math',
    title: 'Knowing Our Numbers & Integers: Animated Thermometer & Ladder',
    chapter: 'Chapter 1 & 6: Knowing Our Numbers & Integers',
    topic: 'Arithmetic & Integers',
    duration: '12:45',
    views: '14.8K',
    ncertRef: 'NCERT Class 6 Math, Page 1',
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'algebra',
    description: 'Understand positive and negative numbers with animated elevator and submarine diving visuals. Learn why subtracting a negative is adding a positive!',
    keyPoints: [
      'Whole numbers together with negative numbers form Integers (... -3, -2, -1, 0, 1, 2, 3 ...)',
      'On a number line, moving right increases value, moving left decreases value',
      'Subtracting a negative number is equivalent to adding its opposite: a - (-b) = a + b'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },
  {
    id: 'vid-6-s-1',
    classLevel: 6,
    subjectId: 'science',
    title: 'Components of Food: Nutrients & Balanced Diet Animation',
    chapter: 'Chapter 2: Components of Food',
    topic: 'Biology - Health & Nutrients',
    duration: '13:50',
    views: '18.1K',
    ncertRef: 'NCERT Class 6 Science, Page 8',
    thumbnail: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'photosynthesis',
    description: 'Carbohydrates, proteins, fats, vitamins, and minerals. Animated food testing laboratory with iodine test for starch and copper sulphate for protein.',
    keyPoints: [
      'Carbohydrates and fats are energy-giving foods',
      'Proteins are body-building foods needed for growth and repair',
      'Vitamins protect our body against diseases (Vitamin A for eyes, Vitamin C for immunity, Vitamin D for bones)'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },

  // ================= CLASS 6 ENGLISH (NCERT POORVI - CHAPTERS 1 TO 5) =================
  {
    id: 'vid-6-e-1',
    classLevel: 6,
    subjectId: 'english',
    title: 'Chapter 1: A Bottle of Dew & The Raven and the Fox [NCERT fepr1=1-5]',
    chapter: 'Poorvi Chapter 1 (Unit 1: Fables and Folk Tales)',
    topic: 'Literature & Moral Fables',
    chapterNum: 1,
    duration: '18:30',
    views: '54.2K',
    ncertRef: 'NCERT Poorvi Link: https://ncert.nic.in/textbook.php?fepr1=1-5',
    ncertDirectUrl: 'https://ncert.nic.in/textbook.php?fepr1=1-5',
    thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    isPoorviFeatured: true,
    description: 'Chapter 1 from official NCERT Poorvi. Experience Sudha Murty’s story of Rama Natha, his wife Madhumati, and Sage Mahipati collecting morning dew for 6 years to learn that hard work is the true magic potion! Also includes Aesop’s fable "The Raven and the Fox".',
    keyPoints: [
      'Official NCERT Chapter 1 Link: https://ncert.nic.in/textbook.php?fepr1=1-5',
      'Rama Natha spent years believing in a magic potion to turn copper into gold',
      'Sage Mahipati instructed him to plant banana trees and collect 5 litres of morning dew',
      'For six years, Rama Natha and Madhumati tended the plantation, selling bananas in the market',
      'Sudha Murty’s moral: Hard work and dedication is the only true magic that brings prosperity'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },
  {
    id: 'vid-6-e-2',
    classLevel: 6,
    subjectId: 'english',
    title: 'Chapter 2: The Unlikely Best Friends & The Chair [NCERT fepr1=2-5]',
    chapter: 'Poorvi Chapter 2 (Unit 2: Friendship)',
    topic: 'Friendship & Empathy',
    chapterNum: 2,
    duration: '16:40',
    views: '38.9K',
    ncertRef: 'NCERT Poorvi Link: https://ncert.nic.in/textbook.php?fepr1=2-5',
    ncertDirectUrl: 'https://ncert.nic.in/textbook.php?fepr1=2-5',
    thumbnail: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    isPoorviFeatured: true,
    description: 'Chapter 2 from official NCERT Poorvi. Animated story of the unbreakable bond between Gajaraj the royal elephant and Bholu the stray dog, plus the test of true friends in "The Chair".',
    keyPoints: [
      'Official NCERT Chapter 2 Link: https://ncert.nic.in/textbook.php?fepr1=2-5',
      'Gajaraj the elephant refused food when his stray dog companion was separated from him',
      'The King recognized that genuine friendship transcends size, species, and status',
      'The Chair teaches how true companions stand with us during life’s most difficult moments'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },
  {
    id: 'vid-6-e-3',
    classLevel: 6,
    subjectId: 'english',
    title: 'Chapter 3: Neem Baba & Spices that Heal Us [NCERT fepr1=3-5]',
    chapter: 'Poorvi Chapter 3 (Unit 3: Nurturing Nature)',
    topic: 'Environment & Traditional Healing',
    chapterNum: 3,
    duration: '15:20',
    views: '41.3K',
    ncertRef: 'NCERT Poorvi Link: https://ncert.nic.in/textbook.php?fepr1=3-5',
    ncertDirectUrl: 'https://ncert.nic.in/textbook.php?fepr1=3-5',
    thumbnail: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    isPoorviFeatured: true,
    description: 'Chapter 3 from official NCERT Poorvi. Amber talks with the 100-year-old grandfather Neem tree, uncovering traditional herbal medicine, antibacterial properties, and India’s healing spices.',
    keyPoints: [
      'Official NCERT Chapter 3 Link: https://ncert.nic.in/textbook.php?fepr1=3-5',
      'Neem (Azadirachta indica) is hailed as the "village pharmacy" across India',
      'Turmeric, ginger, and cloves protect the human body against ailments naturally',
      'Nurturing nature and protecting ancient trees guarantees life and health for future generations'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },
  {
    id: 'vid-6-e-4',
    classLevel: 6,
    subjectId: 'english',
    title: 'Chapter 4: Change of Heart & Yoga — A Way of Life [NCERT fepr1=4-5]',
    chapter: 'Poorvi Chapter 4 (Unit 4: Sports and Wellness)',
    topic: 'Sportsmanship & Mindfulness',
    chapterNum: 4,
    duration: '17:15',
    views: '32.6K',
    ncertRef: 'NCERT Poorvi Link: https://ncert.nic.in/textbook.php?fepr1=4-5',
    ncertDirectUrl: 'https://ncert.nic.in/textbook.php?fepr1=4-5',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    isPoorviFeatured: true,
    description: 'Chapter 4 from official NCERT Poorvi. Inspiring animated sports race where an athlete stops to help an injured rival cross the finish line, followed by essential daily yoga asanas for students.',
    keyPoints: [
      'Official NCERT Chapter 4 Link: https://ncert.nic.in/textbook.php?fepr1=4-5',
      'True victory lies in sportsmanship, kindness, and lifting up fallen competitors',
      'Yoga asanas (Tadasana, Vrikshasana) sharpen concentration and relieve student exam stress',
      'Integrity and perseverance outshine gold medals in the game of life'
    ],
    videoUrl: 'https://www.youtube.com/embed/uNfI3k1xYfg'
  },
  {
    id: 'vid-6-e-5',
    classLevel: 6,
    subjectId: 'english',
    title: 'Chapter 5: Hamara Bharat & Ila Sachani: Embroidering Dreams [NCERT fepr1=5-5]',
    chapter: 'Poorvi Chapter 5 (Unit 5: Culture and Tradition)',
    topic: 'Heritage & Indomitable Courage',
    chapterNum: 5,
    duration: '19:45',
    views: '46.1K',
    ncertRef: 'NCERT Poorvi Link: https://ncert.nic.in/textbook.php?fepr1=5-5',
    ncertDirectUrl: 'https://ncert.nic.in/textbook.php?fepr1=5-5',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    isPoorviFeatured: true,
    description: 'Chapter 5 from official NCERT Poorvi. A grand cultural voyage across India’s vibrant festivals and kites, followed by the true inspirational life of Ila Sachani, who overcame disability to embroider masterworks with her feet!',
    keyPoints: [
      'Official NCERT Chapter 5 Link: https://ncert.nic.in/textbook.php?fepr1=5-5',
      'Hamara Bharat showcases the breathtaking diversity, crafts, and unity of India',
      'Ila Sachani from Surat mastered traditional Gujarati embroidery using her toes and feet',
      'Determination and passion can overcome any physical obstacle to achieve national acclaim'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },

  // ================= CLASS 6 HINDI =================
  {
    id: 'vid-6-h-1',
    classLevel: 6,
    subjectId: 'hindi',
    title: 'कक्षा 6 हिन्दी: वह चिड़िया जो (कविता) - सचित्र गायन एवं एनीमेशन',
    chapter: 'वसंत भाग-1: पाठ 1 — वह चिड़िया जो (केदारनाथ अग्रवाल)',
    topic: 'Hindi Literature - Poetry',
    duration: '11:20',
    views: '33.4K',
    ncertRef: 'NCERT कक्षा 6 वसंत भाग-1',
    thumbnail: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'hindi-sandhi',
    description: 'नीले पंखों वाली छोटी संतोषी चिड़िया का सुंदर सजीव एनीमेशन। प्रकृति के प्रति प्रेम, संतोष और स्वाभिमान का भाव समझें।',
    keyPoints: [
      'चिड़िया दूध भरे जुंडी के दानों को रुचि से खाती है',
      'वह बूढ़े वन-बाबा के लिए मीठे कंठ से गाती है',
      'उफनती नदी से जल का मोती ले जाती है और स्वयं पर गर्व करती है'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },

  // ================= CLASS 10 MATHEMATICS =================
  {
    id: 'vid-10-m-1',
    classLevel: 10,
    subjectId: 'math',
    title: 'Introduction to Trigonometry: Right Triangle Ratios & Identity Lab',
    chapter: 'Chapter 8: Introduction to Trigonometry',
    topic: 'Trigonometry & Geometry',
    duration: '20:15',
    views: '48.5K',
    ncertRef: 'NCERT Class 10 Math, Chapter 8',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'trigonometry',
    description: 'Explore trigonometric ratios (sin, cos, tan, cosec, sec, cot) for acute angles in a right-angled triangle. Test angle variations from 15° to 75° and verify sin²θ + cos²θ = 1 live!',
    keyPoints: [
      'sin θ = Opposite / Hypotenuse, cos θ = Adjacent / Hypotenuse, tan θ = Opposite / Adjacent',
      'Values of standard angles: sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, tan 45° = 1',
      'Key Pythagorean Identity: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ',
      'CBSE Trap Alert: Swapping angle from A to C swaps Opposite and Adjacent sides!'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },
  {
    id: 'vid-10-m-2',
    classLevel: 10,
    subjectId: 'math',
    title: 'Quadratic Equations: Finding Roots & The Discriminant Method (b² - 4ac)',
    chapter: 'Chapter 4: Quadratic Equations',
    topic: 'Algebra',
    duration: '18:40',
    views: '39.8K',
    ncertRef: 'NCERT Class 10 Math, Chapter 4',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'algebra',
    description: 'Understand standard quadratic form ax² + bx + c = 0, factorization method, and the quadratic formula x = (-b ± √(b² - 4ac)) / 2a with discriminant root analysis.',
    keyPoints: [
      'Standard form: ax² + bx + c = 0 where a ≠ 0',
      'Discriminant D = b² - 4ac governs the nature of roots',
      'If D > 0: Two distinct real roots; If D = 0: Two equal real roots; If D < 0: No real roots',
      'Common Mistake Trap: Negative b sign error when calculating -(-b) in the quadratic formula'
    ],
    videoUrl: 'https://www.youtube.com/embed/zH0j7Kq1l2c'
  },

  // ================= CLASS 10 SCIENCE =================
  {
    id: 'vid-10-s-1',
    classLevel: 10,
    subjectId: 'science',
    title: 'Chemical Reactions and Equations: Balancing & Reaction Types 3D',
    chapter: 'Chapter 1: Chemical Reactions and Equations',
    topic: 'Chemistry',
    duration: '17:30',
    views: '52.1K',
    ncertRef: 'NCERT Class 10 Science, Chapter 1',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'motion',
    description: '3D animated voyage into chemical transformations. Learn the law of conservation of mass, hit-and-trial balancing method, combination, decomposition, displacement, and redox reactions.',
    keyPoints: [
      'Law of Conservation of Mass: Total mass of elements in products = total mass in reactants',
      'Never change subscripts inside formulas (e.g. H₂O remains H₂O, change coefficient 2H₂O)',
      'Types: Combination (A+B→AB), Decomposition (AB→A+B), Displacement (Fe+CuSO₄→FeSO₄+Cu)',
      'Redox: Oxidation is gain of oxygen/loss of electrons; Reduction is loss of oxygen/gain of electrons'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },
  {
    id: 'vid-10-s-2',
    classLevel: 10,
    subjectId: 'science',
    title: 'Electricity: Ohm’s Law (V = IR), Series vs Parallel Circuit Animation',
    chapter: 'Chapter 12: Electricity',
    topic: 'Physics',
    duration: '19:10',
    views: '44.3K',
    ncertRef: 'NCERT Class 10 Science, Chapter 12',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'motion',
    description: 'Visualize electric charge flow, electric current (I = Q/t), potential difference (V = W/Q), and Ohm’s Law. See how electrons flow through series vs parallel resistor combinations.',
    keyPoints: [
      'Ohm’s Law: V = IR at constant temperature (V-I graph is a straight line through origin)',
      'Series combination: R_total = R₁ + R₂ + R₃ (same current through all resistors)',
      'Parallel combination: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ (same voltage across all branches)',
      'Joule’s Law of Heating: H = I²Rt'
    ],
    videoUrl: 'https://www.youtube.com/embed/uNfI3k1xYfg'
  },
  {
    id: 'vid-10-s-3',
    classLevel: 10,
    subjectId: 'science',
    title: 'Life Processes: Nutrition, Double Circulation & Nephron Excretion 3D',
    chapter: 'Chapter 6: Life Processes',
    topic: 'Biology',
    duration: '22:00',
    views: '61.7K',
    ncertRef: 'NCERT Class 10 Science, Chapter 6',
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'photosynthesis',
    description: 'Step inside the human body with 3D CGI visuals: stomatal opening, human digestive system, double circulation in the 4-chambered heart, and filtration of nitrogenous waste in nephrons.',
    keyPoints: [
      'Autotrophic vs Heterotrophic Nutrition: Role of stomata guard cells in gaseous exchange',
      'Aerobic respiration produces 38 ATP vs Anaerobic (yeast/lactic acid in muscle cramps)',
      'Double Circulation: Oxygenated blood from lungs to left atrium; deoxygenated blood to right atrium',
      'Nephron: Glomerulus ultrafiltration followed by selective reabsorption in renal tubules'
    ],
    videoUrl: 'https://www.youtube.com/embed/84jVz03-K38'
  },

  // ================= CLASS 10 ENGLISH =================
  {
    id: 'vid-10-e-1',
    classLevel: 10,
    subjectId: 'english',
    title: 'First Flight Chapter 1: A Letter to God by G.L. Fuentes — Animated Story & Irony',
    chapter: 'First Flight: Chapter 1',
    topic: 'English Literature',
    duration: '16:25',
    views: '55.3K',
    ncertRef: 'NCERT Class 10 First Flight, Chapter 1',
    thumbnail: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    description: 'The dramatic animated story of Lencho, whose ripe corn field was destroyed by a devastating hailstorm. His absolute faith leads him to write a letter to God demanding 100 pesos, leading to a profound situational irony.',
    keyPoints: [
      'Lencho’s house was the only one in the entire valley situated on the crest of a low hill',
      'A sudden hailstorm ruined the corn crop completely ("not a leaf remained on the trees")',
      'The postmaster and post office workers collected 70 pesos out of kindness to preserve Lencho’s faith',
      'Irony: Lencho suspected the post office employees of stealing 30 pesos, calling them "a bunch of crooks"'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-10-e-2',
    classLevel: 10,
    subjectId: 'english',
    title: 'First Flight Chapter 2: Nelson Mandela: Long Walk to Freedom Animated',
    chapter: 'First Flight: Chapter 2',
    topic: 'English Literature',
    duration: '18:50',
    views: '38.2K',
    ncertRef: 'NCERT Class 10 First Flight, Chapter 2',
    thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'poorvi-dew',
    description: 'Historical animation of the 10th of May inauguration at Pretoria amphitheater. Nelson Mandela reflects on the extraordinary sacrifices of South African freedom fighters and the true meaning of courage.',
    keyPoints: [
      'Mandela was sworn in as South Africa’s first democratic, non-racial Black President',
      'Courage is not the absence of fear, but the triumph over it',
      'Man’s twin obligations: to his family (parents, wife, children) and to his people, community, and country',
      'The oppressor must be liberated just as surely as the oppressed'
    ],
    videoUrl: 'https://www.youtube.com/embed/f1vyLio7d50'
  },

  // ================= CLASS 10 HINDI =================
  {
    id: 'vid-10-h-1',
    classLevel: 10,
    subjectId: 'hindi',
    title: 'कक्षा 10 क्षितिज भाग-2: नेताजी का चश्मा (स्वयं प्रकाश) - सचित्र कहानी एनीमेशन',
    chapter: 'क्षितिज भाग-2: पाठ 1 — नेताजी का चश्मा',
    topic: 'Hindi Literature - Story',
    duration: '15:45',
    views: '47.8K',
    ncertRef: 'NCERT कक्षा 10 क्षितिज भाग-2',
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'hindi-sandhi',
    description: 'हालदार साहब, पानवाले और कैप्टन चश्मेवाले की मार्मिक कहानी। समझिए कि देशभक्ति केवल सीमाओं पर नहीं, बल्कि हृदय में देश के महापुरुषों के प्रति आदर में निवास करती है।',
    keyPoints: [
      'कस्बे के मुख्य चौराहे पर नेताजी सुभाषचंद्र बोस की संगमरमर की प्रतिमा स्थापित थी',
      'मूर्तिकार मास्टर मोतीलाल प्रतिमा पर चश्मा बनाना भूल गए थे',
      'गरीब लंगड़ा "कैप्टन" चश्मेवाला रोज अपनी फेरी से मूर्ति को वास्तविक चश्मा पहनाता था',
      'कैप्टन की मृत्यु के बाद बच्चों द्वारा सरकंडे का चश्मा लगाना यह दिखाता है कि नई पीढ़ी में भी देशभक्ति जीवित है'
    ],
    videoUrl: 'https://www.youtube.com/embed/URUJD5NEXC8'
  },
  {
    id: 'vid-10-h-2',
    classLevel: 10,
    subjectId: 'hindi',
    title: 'कक्षा 10 हिन्दी व्याकरण: वाच्य एवं वाच्य परिवर्तन (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
    chapter: 'हिन्दी व्याकरण: वाच्य (Voice)',
    topic: 'Hindi Vyakaran',
    duration: '14:30',
    views: '36.9K',
    ncertRef: 'NCERT कक्षा 10 हिन्दी व्याकरण',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    videoType: 'simulator',
    simulatorType: 'hindi-sandhi',
    description: 'क्रिया के उस रूप को वाच्य कहते हैं जिससे पता चले कि वाक्य में प्रधानता कर्ता की है, कर्म की है या भाव की। सीबीएसई बोर्ड परीक्षा के नियम एवं उदाहरण।',
    keyPoints: [
      'कर्तृवाच्य: क्रिया का लिंग-वचन कर्ता के अनुसार होता है (उदा. सोहन पत्र लिखता है)',
      'कर्मवाच्य: क्रिया का लिंग-वचन कर्म के अनुसार होता है और "द्वारा/से" का प्रयोग (उदा. सोहन द्वारा पत्र लिखा जाता है)',
      'भाववाच्य: क्रिया अकर्मक होती है और भाव की प्रधानता होती है (उदा. मुझसे अब चला नहीं जाता)',
      'सीबीएसई बोर्ड परीक्षा ट्रिक: सकर्मक क्रिया का भाववाच्य नहीं बन सकता, केवल कर्मवाच्य बनता है'
    ],
    videoUrl: 'https://www.youtube.com/embed/zH0j7Kq1l2c'
  }
];
