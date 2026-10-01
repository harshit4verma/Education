# NCERT AnimAcademy (CBSE Classes 6 - 10)
### Official NCERT Animated Concept Learning, Speech Read-Aloud & AI Mistake Diagnostic Exams

A modern educational web platform designed for CBSE students of **Class 6, 7, 8, 9, and 10** to master topics through **interactive animations, scene-by-scene textbook adaptations with speech read-aloud, and simulation labs** across **Mathematics, Science, English, and Hindi**, paired with an intelligent **AI Proctor & Mistake Analyzer** and a comprehensive **Teacher & Admin Command Center**.

---

## 🌟 Key Features

### 1. Animated Video Lessons & Official NCERT Books Reader
* **Classes Covered**: Class 6, Class 7, Class 8, Class 9, and Class 10.
* **Official NCERT Books Integrated** ([NCERT Textbook Portal](https://ncert.nic.in/textbook.php?ln=en)):
  * **Class 6**: *Poorvi* (`fepr1`) - Units 1 to 5 (*A Bottle of Dew*, *The Unlikely Best Friends*, *Neem Baba*, *Change of Heart*, *Hamara Bharat*).
  * **Class 7**: *Honeycomb* (`gehc1`) - Chapters 1 to 4 (*Three Questions*, *The Squirrel*, *A Gift of Chappals*, *The Rebel*).
  * **Class 8**: *Honeydew* (`hehd1`) - Chapters 1 to 5 (*The Best Christmas Present in the World*, *The Ant and the Cricket*, *The Tsunami*, *Geography Lesson*, *Glimpses of the Past*).
  * **Class 9**: *Beehive* (`iebe1`) - Chapters 1 to 4 (*The Fun They Had*, *The Sound of Music*, *The Little Girl*, *A Truly Beautiful Mind*).
  * **Class 10**: *First Flight* (`jeff1`) - Chapters 1 to 4 (*A Letter to God*, *Dust of Snow*, *Nelson Mandela: Long Walk to Freedom*, *Two Stories about Flying*).
* **Audio Voice Read-Aloud Narration**: Built with Web Speech API (`SpeechSynthesis`) with play, pause, and rate controls.
* **Scene-by-Scene Visual Dialogue Cards**: Character dialogue bubbles, story narration, and animated visual cues.
* **Direct NCERT Links**: Clickable links opening official chapter PDFs and digital textbooks on `ncert.nic.in`.
* **Vocabulary Glossary & Comprehension Quizzes**: Instant checks with confetti and XP rewards.

### 2. Dynamic Class-Specific Study Materials Hub
* Instant live filtering by **Class 6, 7, 8, 9, or 10**:
  * 📐 **Mathematics** (Algebra, Linear Equations, Polynomials, Quadratic Equations, Real Numbers, Mensuration, Fractions, Integers).
  * 🔬 **Science** (Cell Biology, Force & Pressure, Motion & Kinematics, Photosynthesis, Atoms & Molecules, Light, Chemical Reactions).
  * 📚 **English** (Grammar, Tenses, Voice, and Chapter-wise NCERT Readers).
  * ✍️ **Hindi (हिन्दी)** (संधि, समास, व्याकरण नियम, वसंत, क्षितिज एवं स्पर्श).

### 3. Interactive Animation Labs & Simulators
* *Poorvi Chapter 1-5 Studio*: Animated scenes with voice read-aloud and interactive morning dew collector.
* *Algebra Balance Scale*: Visualizes transposition $3x + 7 = 22 \to 3x = 15 \to x = 5$ on physical balancing pans.
* *Photosynthesis Chloroplast Lab*: Adjust sunlight, water, and $\text{CO}_2$ to generate glucose and $\text{O}_2$.
* *Hindi Sandhi Visualizer*: Merges phonemes (e.g. हिम + आलय = हिमालय) with dynamic phonetic animation.
* *Physics Motion Tracker*: Real-time $v = u + at$ and $s = ut + \frac{1}{2}at^2$ car simulator.

### 4. Weekly Exam Arena with AI Mistake Observer
* Periodic and weekly tests after completing animation modules.
* **Live AI Proctor**: While the student takes the test, the AI observes response patterns and isolates conceptual misconceptions in real-time.
* **Microscopic Mistake Diagnosis**:
  * Pinned down to the exact error (e.g., in Maths: *"Transposition Error: You added 7 instead of subtracting 7"*).
* **Side-by-Side Example Comparison**:
  * ❌ *Student Mistake*: $3x + 7 = 22 \implies 3x = 22 + 7 = 29 \implies x = 29/3$
  * ✅ *Correct NCERT Method*: $3x + 7 = 22 \implies 3x = 22 - 7 = 15 \implies x = 15/3 = 5$
* **What You Have To Focus On Next**:
  * Actionable recommendations and tailored practice drills.
  * 24/7 **AI Shikshak Chat** for instant doubt clearing.

### 5. Student Registration & Login Portal
* Students register with Full Name, Class (6–10), School Name, Roll Number, and Parent Contact / Email.
* Profiles persist in browser local storage.
* Instant demo profile switcher for quick testing across grades.

### 6. Teacher & Admin Command Center
* **Registered Students Directory**: Complete view of every student's Class, School, Roll Number, Parent Contact, and Exam Average.
* **Exam Submissions & Error Breakdown**: Microscopic insights into common student misconceptions across Maths, Science, English, and Hindi.
* **Misconception Radar & Diagnostic Dossiers**: Side-by-side analysis of wrong methods vs NCERT correct methods.
* **Remedial Dispatch**: Teachers can send targeted video lessons and worksheets directly to students.

### 7. Classy Light Educational Theme
* Elegant, distraction-free light palette with glassmorphism, responsive navigation, and smooth micro-animations.

---

## 🚀 Running Locally

The app is built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.

```bash
# Clone the repository
git clone https://github.com/harshit4verma/Education.git

# Navigate to project directory
cd Education

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit the app in your browser at:
`http://localhost:5173/`

To create a production build:
```bash
npm run build
```
