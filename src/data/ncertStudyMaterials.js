// Comprehensive NCERT Study Materials & Books for Classes 6, 7, 8, 9, 10
// Each class has its own distinct official NCERT textbooks, chapter breakdowns,
// formula sheets, and animated video lessons.

export const CLASS_STUDY_MATERIALS = {
  6: {
    classLevel: 6,
    motto: 'NCERT Foundation Stage: Exploring Wonder, Nature & Basic Math',
    officialBooks: [
      {
        id: 'book-6-eng',
        subjectId: 'english',
        title: 'Poorvi (Official Class 6 English)',
        hindiTitle: 'पूर्वी (अंग्रेज़ी पाठ्यपुस्तक)',
        code: 'fepr1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?fepr1=0-5',
        coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 5,
        badge: 'Newly Published NCERT 2024-25',
        description: 'New NCERT English textbook featuring fables, nature wisdom, sportsmanship, and cultural heritage.',
        chapters: [
          { num: 1, title: 'A Bottle of Dew', author: 'Sudha Murty', topic: 'Fable & Value of Labor', ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=1-5', videoId: 'vid-6-e-1' },
          { num: 2, title: 'The Friendship Bridge & The Unlikely Allies', author: 'Moral Folkloric Tale', topic: 'Empathy & Cooperation', ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=2-5', videoId: 'vid-6-e-2' },
          { num: 3, title: 'The Neem Tree: Nature’s Healing Pharmacy', author: 'Environmental Heritage', topic: 'Ayurveda & Biodiversity', ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=3-5', videoId: 'vid-6-e-3' },
          { num: 4, title: 'Change of Heart & Yoga: A Way of Life', author: 'Health & Wellness Unit', topic: 'Sportsmanship & Asanas', ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=4-5', videoId: 'vid-6-e-4' },
          { num: 5, title: 'Hamara Bharat & Ila Sachani: Embroidering Dreams', author: 'Inspirational Biographies', topic: 'Indian Heritage & Grit', ncertLink: 'https://ncert.nic.in/textbook.php?fepr1=5-5', videoId: 'vid-6-e-5' }
        ]
      },
      {
        id: 'book-6-math',
        subjectId: 'math',
        title: 'Mathematics (Class 6 NCERT)',
        hindiTitle: 'गणित (कक्षा 6)',
        code: 'femh1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?femh1=0-14',
        coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 14,
        badge: 'Official NCERT Core',
        description: 'Number patterns, large numbers, integers, fractions, geometry basics, and early algebra.',
        chapters: [
          { num: 1, title: 'Knowing Our Numbers', topic: 'Place Value & Roman Numerals', ncertLink: 'https://ncert.nic.in/textbook.php?femh1=1-14', videoId: 'vid-6-m-1' },
          { num: 2, title: 'Whole Numbers', topic: 'Number Line Operations & Properties', ncertLink: 'https://ncert.nic.in/textbook.php?femh1=2-14', videoId: 'vid-6-m-1' },
          { num: 3, title: 'Playing with Numbers', topic: 'Factors, Multiples, HCF & LCM', ncertLink: 'https://ncert.nic.in/textbook.php?femh1=3-14', videoId: 'vid-6-m-1' },
          { num: 6, title: 'Integers', topic: 'Positive, Negative & Number Line', ncertLink: 'https://ncert.nic.in/textbook.php?femh1=6-14', videoId: 'vid-6-m-1' },
          { num: 7, title: 'Fractions', topic: 'Proper, Improper & Equivalent Fractions', ncertLink: 'https://ncert.nic.in/textbook.php?femh1=7-14', videoId: 'vid-6-m-1' }
        ]
      },
      {
        id: 'book-6-sci',
        subjectId: 'science',
        title: 'Curiosity: Science (Class 6 NCERT)',
        hindiTitle: 'जिज्ञासा: विज्ञान (कक्षा 6)',
        code: 'fesc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?fesc1=0-12',
        coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 12,
        badge: 'Inquiry-Based Science',
        description: 'Exploring food sources, components of food, sorting materials, and living organisms.',
        chapters: [
          { num: 1, title: 'Food: Where Does It Come From?', topic: 'Plant & Animal Food Sources', ncertLink: 'https://ncert.nic.in/textbook.php?fesc1=1-12', videoId: 'vid-6-s-1' },
          { num: 2, title: 'Components of Food', topic: 'Nutrient Tests (Iodine/Starch, Proteins)', ncertLink: 'https://ncert.nic.in/textbook.php?fesc1=2-12', videoId: 'vid-6-s-1' },
          { num: 4, title: 'Sorting Materials into Groups', topic: 'Properties of Materials (Solubility, Transparency)', ncertLink: 'https://ncert.nic.in/textbook.php?fesc1=4-12', videoId: 'vid-6-s-1' }
        ]
      },
      {
        id: 'book-6-hin',
        subjectId: 'hindi',
        title: 'वसंत भाग-1 / मल्हार (हिन्दी)',
        hindiTitle: 'वसंत भाग-1 (कक्षा 6 हिन्दी)',
        code: 'fhvs1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?fhvs1=0-14',
        coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 14,
        badge: 'साहित्य एवं भाषा',
        description: 'केदारनाथ अग्रवाल, कृष्णा सोबती और प्रेमचंद की सुप्रसिद्ध बाल-साहित्य रचनाएँ।',
        chapters: [
          { num: 1, title: 'वह चिड़िया जो (कविता)', author: 'केदारनाथ अग्रवाल', topic: 'प्रकृति प्रेम एवं संतोष', ncertLink: 'https://ncert.nic.in/textbook.php?fhvs1=1-14', videoId: 'vid-6-h-1' },
          { num: 2, title: 'बचपन (संस्मरण)', author: 'कृष्णा सोबती', topic: 'बीते दौर की स्मृतियाँ', ncertLink: 'https://ncert.nic.in/textbook.php?fhvs1=2-14', videoId: 'vid-6-h-1' }
        ]
      }
    ]
  },

  7: {
    classLevel: 7,
    motto: 'NCERT Middle Stage: Scientific Inquiry, Fractions & Literary Depth',
    officialBooks: [
      {
        id: 'book-7-math',
        subjectId: 'math',
        title: 'Mathematics (Class 7 NCERT)',
        hindiTitle: 'गणित (कक्षा 7)',
        code: 'gemh1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?gemh1=0-15',
        coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 15,
        badge: 'Official NCERT Core',
        description: 'Integers, fractions & decimals, simple equations, lines & angles, and triangle properties.',
        chapters: [
          { num: 1, title: 'Integers', topic: 'Multiplication & Division of Integers', ncertLink: 'https://ncert.nic.in/textbook.php?gemh1=1-15', videoId: 'vid-7-m-1' },
          { num: 2, title: 'Fractions and Decimals', topic: 'Reciprocal Division (Keep-Change-Flip)', ncertLink: 'https://ncert.nic.in/textbook.php?gemh1=2-15', videoId: 'vid-7-m-1' },
          { num: 4, title: 'Simple Equations', topic: 'Setting Up & Solving Equations', ncertLink: 'https://ncert.nic.in/textbook.php?gemh1=4-15', videoId: 'vid-7-m-1' },
          { num: 5, title: 'Lines and Angles', topic: 'Complementary, Supplementary & Transversal', ncertLink: 'https://ncert.nic.in/textbook.php?gemh1=5-15', videoId: 'vid-7-m-1' }
        ]
      },
      {
        id: 'book-7-sci',
        subjectId: 'science',
        title: 'Science (Class 7 NCERT)',
        hindiTitle: 'विज्ञान (कक्षा 7)',
        code: 'gesc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?gesc1=0-18',
        coverImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 18,
        badge: 'Interactive Lab Modules',
        description: 'Nutrition in plants & animals, heat, acids & bases, and physical/chemical changes.',
        chapters: [
          { num: 1, title: 'Nutrition in Plants', topic: 'Autotrophs, Chlorophyll & Photosynthesis Lab', ncertLink: 'https://ncert.nic.in/textbook.php?gesc1=1-18', videoId: 'vid-7-s-1' },
          { num: 2, title: 'Nutrition in Animals', topic: 'Human Digestive Canal & Ruminants', ncertLink: 'https://ncert.nic.in/textbook.php?gesc1=2-18', videoId: 'vid-7-s-1' },
          { num: 4, title: 'Heat & Temperature', topic: 'Conduction, Convection & Radiation', ncertLink: 'https://ncert.nic.in/textbook.php?gesc1=4-18', videoId: 'vid-7-s-1' }
        ]
      },
      {
        id: 'book-7-eng',
        subjectId: 'english',
        title: 'Honeycomb (Class 7 English)',
        hindiTitle: 'हनीकॉम्ब (अंग्रेज़ी)',
        code: 'gehc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?gehc1=0-10',
        coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 10,
        badge: 'Classic English Literature',
        description: 'Thought-provoking stories and poems including Leo Tolstoy’s Three Questions and Gopal and the Hilsa Fish.',
        chapters: [
          { num: 1, title: 'Three Questions', author: 'Leo Tolstoy', topic: 'Wisdom & Living in the Present', ncertLink: 'https://ncert.nic.in/textbook.php?gehc1=1-10', videoId: 'vid-7-m-1' },
          { num: 2, title: 'A Gift of Chappals', author: 'Vasantha Surya', topic: 'Childhood Innocence & Kindness', ncertLink: 'https://ncert.nic.in/textbook.php?gehc1=2-10', videoId: 'vid-7-m-1' },
          { num: 3, title: 'Gopal and the Hilsa Fish', author: 'Comic Classic', topic: 'Wit & Overcoming Challenges', ncertLink: 'https://ncert.nic.in/textbook.php?gehc1=3-10', videoId: 'vid-7-m-1' }
        ]
      },
      {
        id: 'book-7-hin',
        subjectId: 'hindi',
        title: 'वसंत भाग-2 (कक्षा 7 हिन्दी)',
        hindiTitle: 'वसंत भाग-2 (हिन्दी)',
        code: 'ghvs1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?ghvs1=0-15',
        coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 15,
        badge: 'काव्य एवं निबंध',
        description: 'शिवमंगल सिंह सुमन की प्रसिद्ध कविता "हम पंछी उन्मुक्त गगन के" एवं दादी माँ की मर्मस्पर्शी कथा।',
        chapters: [
          { num: 1, title: 'हम पंछी उन्मुक्त गगन के', author: 'शिवमङ्गल सिंह "सुमन"', topic: 'स्वतंत्रता का महत्त्व', ncertLink: 'https://ncert.nic.in/textbook.php?ghvs1=1-15', videoId: 'vid-6-h-1' },
          { num: 2, title: 'दादी माँ (कहानी)', author: 'शिवप्रसाद सिंह', topic: 'पारिवारिक स्नेह एवं परंपरा', ncertLink: 'https://ncert.nic.in/textbook.php?ghvs1=2-15', videoId: 'vid-6-h-1' }
        ]
      }
    ]
  },

  8: {
    classLevel: 8,
    motto: 'NCERT Rigor Stage: Algebraic Equations, Cells, Forces & Advanced Grammar',
    officialBooks: [
      {
        id: 'book-8-math',
        subjectId: 'math',
        title: 'Mathematics (Class 8 NCERT)',
        hindiTitle: 'गणित (कक्षा 8)',
        code: 'hemh1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?hemh1=0-16',
        coverImage: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 16,
        badge: 'Core Board Foundation',
        description: 'Linear equations, algebraic expressions, identities, mensuration, and exponents.',
        chapters: [
          { num: 2, title: 'Linear Equations in One Variable', topic: 'Transposition Rule (+ to -, × to ÷)', ncertLink: 'https://ncert.nic.in/textbook.php?hemh1=2-16', videoId: 'vid-8-m-2' },
          { num: 9, title: 'Algebraic Expressions & Identities', topic: 'Binomial Identities (a+b)², (a-b)²', ncertLink: 'https://ncert.nic.in/textbook.php?hemh1=9-16', videoId: 'vid-8-m-1' },
          { num: 11, title: 'Mensuration', topic: 'Surface Area & Volume of Cylinder/Cubes', ncertLink: 'https://ncert.nic.in/textbook.php?hemh1=11-16', videoId: 'vid-8-m-3' }
        ]
      },
      {
        id: 'book-8-sci',
        subjectId: 'science',
        title: 'Science (Class 8 NCERT)',
        hindiTitle: 'विज्ञान (कक्षा 8)',
        code: 'hesc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?hesc1=0-18',
        coverImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 18,
        badge: '3D Simulation Modules',
        description: 'Cell structure and functions, force and pressure, sound, and microorganisms.',
        chapters: [
          { num: 8, title: 'Cell — Structure and Functions', topic: 'Plant vs Animal Cells (Cell Wall, Plastids)', ncertLink: 'https://ncert.nic.in/textbook.php?hesc1=8-18', videoId: 'vid-8-s-1' },
          { num: 11, title: 'Force and Pressure', topic: 'Pressure P = F / A & Non-contact Forces', ncertLink: 'https://ncert.nic.in/textbook.php?hesc1=11-18', videoId: 'vid-8-s-2' }
        ]
      },
      {
        id: 'book-8-eng',
        subjectId: 'english',
        title: 'Honeydew (Class 8 English)',
        hindiTitle: 'हनीड्यू (अंग्रेज़ी)',
        code: 'hehd1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?hehd1=0-10',
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 10,
        badge: 'Historical & Emotive Prose',
        description: 'WWI Christmas truce in Best Christmas Present, Tsunami heroism, and Indian history glimpses.',
        chapters: [
          { num: 1, title: 'The Best Christmas Present in the World', author: 'Michael Morpurgo', topic: 'Humanity Over War', ncertLink: 'https://ncert.nic.in/textbook.php?hehd1=1-10', videoId: 'vid-8-e-1' },
          { num: 2, title: 'The Tsunami', author: 'NCERT Chronicles', topic: 'Courage in Natural Calamity', ncertLink: 'https://ncert.nic.in/textbook.php?hehd1=2-10', videoId: 'vid-8-e-1' }
        ]
      },
      {
        id: 'book-8-hin',
        subjectId: 'hindi',
        title: 'वसंत भाग-3 (कक्षा 8 हिन्दी)',
        hindiTitle: 'वसंत भाग-3 (हिन्दी)',
        code: 'hhvs1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?hhvs1=0-18',
        coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 18,
        badge: 'हिन्दी व्याकरण एवं साहित्य',
        description: 'ध्वनि, लाख की चूड़ियाँ, बस की यात्रा एवं स्वर संधि (दीर्घ, गुण, वृद्धि) के नियम।',
        chapters: [
          { num: 1, title: 'ध्वनि (कविता)', author: 'सूर्यकांत त्रिपाठी "निराला"', topic: 'नवयुग का आह्वान', ncertLink: 'https://ncert.nic.in/textbook.php?hhvs1=1-18', videoId: 'vid-8-h-1' },
          { num: 2, title: 'लाख की चूड़ियाँ', author: 'कामतान नाथ', topic: 'हस्तशिल्प एवं मशीनी युग का दर्द', ncertLink: 'https://ncert.nic.in/textbook.php?hhvs1=2-18', videoId: 'vid-8-h-1' }
        ]
      }
    ]
  },

  9: {
    classLevel: 9,
    motto: 'NCERT Pre-Board Excellence: Coordinate Geometry, Laws of Motion & Classic Prose',
    officialBooks: [
      {
        id: 'book-9-math',
        subjectId: 'math',
        title: 'Mathematics (Class 9 NCERT)',
        hindiTitle: 'गणित (कक्षा 9)',
        code: 'iemh1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?iemh1=0-15',
        coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 15,
        badge: 'High School Rigor',
        description: 'Number systems, polynomials, coordinate geometry, linear equations in two variables, triangles.',
        chapters: [
          { num: 1, title: 'Number Systems', topic: 'Irrational Numbers & Real Number Line', ncertLink: 'https://ncert.nic.in/textbook.php?iemh1=1-15', videoId: 'vid-9-m-1' },
          { num: 2, title: 'Polynomials', topic: 'Splitting Middle Term Factorisation', ncertLink: 'https://ncert.nic.in/textbook.php?iemh1=2-15', videoId: 'vid-9-m-1' },
          { num: 3, title: 'Coordinate Geometry', topic: 'Cartesian Plane, Quadrants & Signs', ncertLink: 'https://ncert.nic.in/textbook.php?iemh1=3-15', videoId: 'vid-9-m-1' }
        ]
      },
      {
        id: 'book-9-sci',
        subjectId: 'science',
        title: 'Science (Class 9 NCERT)',
        hindiTitle: 'विज्ञान (कक्षा 9)',
        code: 'iesc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?iesc1=0-15',
        coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 15,
        badge: 'Physics & Chemistry Core',
        description: 'Matter in our surroundings, atoms & molecules, fundamental unit of life, motion & laws of motion.',
        chapters: [
          { num: 8, title: 'Motion', topic: 'Equations of Motion (v = u + at, s = ut + 1/2 at²)', ncertLink: 'https://ncert.nic.in/textbook.php?iesc1=8-15', videoId: 'vid-9-s-1' },
          { num: 9, title: 'Force and Laws of Motion', topic: 'Newton’s 3 Laws & Momentum Conservation', ncertLink: 'https://ncert.nic.in/textbook.php?iesc1=9-15', videoId: 'vid-9-s-1' }
        ]
      },
      {
        id: 'book-9-eng',
        subjectId: 'english',
        title: 'Beehive (Class 9 English)',
        hindiTitle: 'बीहाइव (अंग्रेज़ी)',
        code: 'iebe1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?iebe1=0-11',
        coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 11,
        badge: 'Modern Literature',
        description: 'Isaac Asimov’s futuristic vision "The Fun They Had" and Robert Frost’s "The Road Not Taken".',
        chapters: [
          { num: 1, title: 'The Fun They Had', author: 'Isaac Asimov', topic: 'Future of Digital Classrooms', ncertLink: 'https://ncert.nic.in/textbook.php?iebe1=1-11', videoId: 'vid-9-e-1' },
          { num: 2, title: 'The Sound of Music', author: 'Deborah Cowley', topic: 'Evelyn Glennie’s Triumph over Deafness', ncertLink: 'https://ncert.nic.in/textbook.php?iebe1=2-11', videoId: 'vid-9-e-1' }
        ]
      },
      {
        id: 'book-9-hin',
        subjectId: 'hindi',
        title: 'क्षितिज भाग-1 (कक्षा 9 हिन्दी)',
        hindiTitle: 'क्षितिज भाग-1 (हिन्दी)',
        code: 'ihks1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?ihks1=0-17',
        coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 17,
        badge: 'हिन्दी कथा साहित्य',
        description: 'प्रेमचंद की अमर कहानी "दो बैलों की कथा" (झूरी, हीरा, मोती) एवं कबीर की साखियाँ।',
        chapters: [
          { num: 1, title: 'दो बैलों की कथा', author: 'मुंशी प्रेमचंद', topic: 'पशु प्रेम, स्वाभिमान व मित्रता', ncertLink: 'https://ncert.nic.in/textbook.php?ihks1=1-17', videoId: 'vid-9-h-1' },
          { num: 2, title: 'ल्हासा की ओर', author: 'राहुल सांकृत्यायन', topic: 'तिब्बत यात्रा वृत्तांत', ncertLink: 'https://ncert.nic.in/textbook.php?ihks1=2-17', videoId: 'vid-9-h-1' }
        ]
      }
    ]
  },

  10: {
    classLevel: 10,
    motto: 'CBSE Board Master Class: Trigonometry, Chemical Equations, Electricity & Master Literature',
    officialBooks: [
      {
        id: 'book-10-math',
        subjectId: 'math',
        title: 'Mathematics (Class 10 NCERT)',
        hindiTitle: 'गणित (कक्षा 10)',
        code: 'jemh1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?jemh1=0-15',
        coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 15,
        badge: 'CBSE Board Examination Hub',
        description: 'Quadratic equations, arithmetic progressions, coordinate geometry, trigonometry, and surface areas.',
        chapters: [
          { num: 4, title: 'Quadratic Equations', topic: 'Roots, Factorisation & Discriminant D = b² - 4ac', ncertLink: 'https://ncert.nic.in/textbook.php?jemh1=4-15', videoId: 'vid-10-m-2' },
          { num: 8, title: 'Introduction to Trigonometry', topic: 'Ratios, Angle Values & sin²θ + cos²θ = 1', ncertLink: 'https://ncert.nic.in/textbook.php?jemh1=8-15', videoId: 'vid-10-m-1' },
          { num: 9, title: 'Some Applications of Trigonometry', topic: 'Heights and Distances (Angle of Elevation/Depression)', ncertLink: 'https://ncert.nic.in/textbook.php?jemh1=9-15', videoId: 'vid-10-m-1' }
        ]
      },
      {
        id: 'book-10-sci',
        subjectId: 'science',
        title: 'Science (Class 10 NCERT)',
        hindiTitle: 'विज्ञान (कक्षा 10)',
        code: 'jesc1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?jesc1=0-16',
        coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 16,
        badge: 'Board Practical & Theory',
        description: 'Chemical reactions & balancing, life processes, electricity, and magnetic effects of current.',
        chapters: [
          { num: 1, title: 'Chemical Reactions and Equations', topic: 'Balancing Equations (Law of Conservation of Mass)', ncertLink: 'https://ncert.nic.in/textbook.php?jesc1=1-16', videoId: 'vid-10-s-1' },
          { num: 6, title: 'Life Processes', topic: 'Nutrition, Respiration, Circulation & Nephrons', ncertLink: 'https://ncert.nic.in/textbook.php?jesc1=6-16', videoId: 'vid-10-s-3' },
          { num: 12, title: 'Electricity', topic: 'Ohm’s Law V = IR, Series & Parallel Resistors', ncertLink: 'https://ncert.nic.in/textbook.php?jesc1=12-16', videoId: 'vid-10-s-2' }
        ]
      },
      {
        id: 'book-10-eng',
        subjectId: 'english',
        title: 'First Flight (Class 10 English)',
        hindiTitle: 'फर्स्ट फ्लाइट (अंग्रेज़ी)',
        code: 'jeff1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?jeff1=0-11',
        coverImage: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 11,
        badge: 'CBSE Core English Reader',
        description: 'G.L. Fuentes’ A Letter to God, Nelson Mandela’s Long Walk to Freedom, and Anne Frank’s Diary.',
        chapters: [
          { num: 1, title: 'A Letter to God', author: 'G.L. Fuentes', topic: 'Unflinching Faith & Situational Irony', ncertLink: 'https://ncert.nic.in/textbook.php?jeff1=1-11', videoId: 'vid-10-e-1' },
          { num: 2, title: 'Nelson Mandela: Long Walk to Freedom', author: 'Nelson R. Mandela', topic: 'Inauguration, Courage & Twin Obligations', ncertLink: 'https://ncert.nic.in/textbook.php?jeff1=2-11', videoId: 'vid-10-e-2' }
        ]
      },
      {
        id: 'book-10-hin',
        subjectId: 'hindi',
        title: 'क्षितिज भाग-2 (कक्षा 10 हिन्दी)',
        hindiTitle: 'क्षितिज भाग-2 (हिन्दी)',
        code: 'jhks1',
        ncertUrl: 'https://ncert.nic.in/textbook.php?jhks1=0-17',
        coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
        chaptersCount: 17,
        badge: 'बोर्ड परीक्षा साहित्य एवं व्याकरण',
        description: 'स्वयं प्रकाश कृत "नेताजी का चश्मा", रामवृक्ष बेनीपुरी का "बालगोबिन भगत", एवं वाच्य परिवर्तन।',
        chapters: [
          { num: 1, title: 'नेताजी का चश्मा (कहानी)', author: 'स्वयं प्रकाश', topic: 'कैप्टन चश्मेवाले की देशभक्ति', ncertLink: 'https://ncert.nic.in/textbook.php?jhks1=1-17', videoId: 'vid-10-h-1' },
          { num: 2, title: 'हिन्दी व्याकरण: वाच्य परिवर्तन', author: 'CBSE व्याकरण', topic: 'कर्तृवाच्य, कर्मवाच्य एवं भाववाच्य नियम', ncertLink: 'https://ncert.nic.in/textbook.php?jhks1=2-17', videoId: 'vid-10-h-2' }
        ]
      }
    ]
  }
};
