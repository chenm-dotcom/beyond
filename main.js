const suites = [
  {
    name: "The Engine Room",
    reason: "חברות שזזות מהר צריכות מרחב שמתאים לקצב — עם גישה מיידית לכל מה שצריך, ובלי בירוקרטיה.",
    tags: ["אנרגיה גבוהה", "גמישות מלאה", "open space"],
    size: '80 מ"ר', capacity: "עד 30 אנשים", feature: "גישה מהירה לכניסה"
  },
  {
    name: "The Corner",
    reason: "שני חלונות, שני כיוונים — בדיוק כמו חברה שיודעת לחשוב בכמה כיוונים בו זמנית.",
    tags: ["אור טבעי", "נוף כפול", "פינתית"],
    size: '110 מ"ר', capacity: "עד 45 אנשים", feature: "פינתית עם נוף כפול"
  },
  {
    name: "The Kitchen Club",
    reason: "הרעיונות הכי טובים קורים ליד המטבח. הסוויטה הזו שם בדיוק — וגם הקפה.",
    tags: ["ליד הקפה", "אווירה חיה", "מקצועי ואינפורמלי"],
    size: '95 מ"ר', capacity: "עד 35 אנשים", feature: "שני צעדים מהקפה"
  },
  {
    name: "The Skyline",
    reason: "כי חברה כמו שלכם צריכה לראות רחוק — לא רק לחשוב רחוק. הנוף הפנורמי הוא שלכם.",
    tags: ["נוף פנורמי", "קומה גבוהה", "פרמיום"],
    size: '140 מ"ר', capacity: "עד 60 אנשים", feature: "נוף פנורמי לתל אביב"
  },
  {
    name: "The Quiet Floor",
    reason: "כשצריך לחשוב בשקט — באמת בשקט — זו הסוויטה שנבנתה בשבילכם. ריכוז מוחלט.",
    tags: ["שקט מוחלט", "פוקוס", "מבודד"],
    size: '120 מ"ר', capacity: "עד 45 אנשים", feature: "הכי שקטה בבניין"
  },
  {
    name: "The Flagship",
    reason: "הגדולה ביותר. הפרמיום ביותר. לחברות שלא מתפשרות — על כלום.",
    tags: ["הכי גדולה", "חדרי ישיבות פנימיים", "פרסטיז'"],
    size: '220 מ"ר', capacity: "80+ אנשים", feature: "חדרי ישיבות פנימיים"
  },
  {
    name: "The Penthouse",
    reason: "הקומה הגבוהה ביותר. הנוף הכי מרשים. למי שרוצה שהעולם יראה אותם מלמטה.",
    tags: ["קומה עליונה", "360°", "אקסקלוסיבי"],
    size: '180 מ"ר', capacity: "עד 70 אנשים", feature: "נוף 360° לגוש דן"
  },
  {
    name: "The Garden Suite",
    reason: "גישה ישירה לגגות הירוקים. כי ביום שמש בתל אביב, המשרד הכי טוב הוא בחוץ.",
    tags: ["גישה לגג", "ירוק", "אוויר צח"],
    size: '100 מ"ר', capacity: "עד 40 אנשים", feature: "גישה לגג ירוק"
  },
  {
    name: "The Loft",
    reason: "תקרות גבוהות, אווירה קריאייטיבית, ואנרגיה שגורמת לך להרגיש כאילו אתה בברוקלין. רק עם יותר שמש.",
    tags: ["קריאייטיב", "תקרה גבוהה", "בוהמייני"],
    size: '75 מ"ר', capacity: "עד 25 אנשים", feature: "תקרות 4 מטר"
  },
  {
    name: "The Boardroom",
    reason: "חללי פגישות כמו שצריך. כי כשאתה מציג למשקיעים, הסביבה היא חלק מהדיל.",
    tags: ["ייצוגי", "פגישות", "אנטרנס מרשים"],
    size: '130 מ"ר', capacity: "עד 50 אנשים", feature: "חדרי ישיבות פרמיום"
  },
  {
    name: "The Studio",
    reason: "קטן, חמוד, יעיל. לצוות שיודע שגודל לא קובע — רק מה שאתה עושה איתו.",
    tags: ["בוטיק", "יעיל", "פרטי"],
    size: '65 מ"ר', capacity: "עד 20 אנשים", feature: "הכי אינטימי במתחם"
  }
];

const answers = {};
let currentQ = 0;
const totalQ = 6;

function pickSuite(a) {
  const industry = a[0], size = a[1], vibe = a[2], style = a[3], situation = a[4], secret = a[5];
  if (size === "s80") return suites[5]; // Flagship
  if (secret === "wellness" && vibe === "fitness") return suites[6]; // Penthouse
  if (vibe === "view" && size === "s45") return suites[6]; // Penthouse
  if (vibe === "view" || (secret === "aesthetic" && size === "s45")) return suites[3]; // Skyline
  if (vibe === "food" || secret === "vibe") return suites[2]; // Kitchen Club
  if (style === "focus" || secret === "privacy") return suites[4]; // Quiet Floor
  if (size === "s45" && style === "meetings") return suites[9]; // Boardroom
  if (industry === "investment" || industry === "crypto") return suites[3]; // Skyline
  if (industry === "enterprise" && style === "meetings") return suites[9]; // Boardroom
  if (industry === "enterprise") return suites[1]; // Corner
  if (vibe === "events" || style === "meetings") return suites[9]; // Boardroom
  if (industry === "lifestyle" || style === "hybrid") return suites[8]; // Loft
  if (situation === "expanding") return suites[7]; // Garden Suite
  if (industry === "tech" && size === "s15") return suites[0]; // Engine Room
  if (size === "s15" && style === "focus") return suites[10]; // Studio
  if (size === "s15") return suites[0]; // Engine Room
  if (size === "s30") return suites[1]; // Corner
  return suites[0];
}

function openQuiz() {
  document.getElementById("quizSection").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuiz() {
  document.getElementById("quizSection").classList.remove("active");
  document.body.style.overflow = "";
}

function scrollToContact() {
  closeQuiz();
  document.getElementById("contactSection").classList.remove("hidden");
  setTimeout(() => document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" }), 80);
}

function updateDots() {
  const dots = document.querySelectorAll(".quiz-dot");
  dots.forEach((d, i) => d.classList.toggle("active", i === currentQ));
  document.getElementById("questionCount").textContent = `שאלה ${currentQ + 1}`;
  const nextBtn = document.getElementById("quizNext");
  const isLast = currentQ === totalQ - 1;
  nextBtn.textContent = isLast ? "← See the result" : "← Next";
  nextBtn.disabled = answers[currentQ] === undefined;
  document.getElementById("quizBack").style.visibility = currentQ === 0 ? "hidden" : "visible";
}

function goToQuestion(i) {
  document.querySelectorAll(".question").forEach((q, j) => {
    q.classList.remove("active", "entering");
    if (j === i) q.classList.add("active", "entering");
  });
  currentQ = i;
  updateDots();
}

function showResult() {
  closeQuiz();
  const s = pickSuite(answers);
  document.getElementById("resultSuiteName").textContent = s.name;
  document.getElementById("resultReason").textContent = s.reason;
  document.getElementById("resultTags").innerHTML = s.tags.map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("statSize").textContent = s.size;
  document.getElementById("statCapacity").textContent = s.capacity;
  document.getElementById("statFeature").textContent = s.feature;
  document.getElementById("heroSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("contactSection").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  // Build dots
  const dotsContainer = document.getElementById("quizDots");
  for (let i = 0; i < totalQ; i++) {
    const d = document.createElement("span");
    d.className = "quiz-dot";
    dotsContainer.appendChild(d);
  }
  updateDots();

  document.getElementById("startBtn").addEventListener("click", () => { updateDots(); openQuiz(); });
  document.getElementById("navCtaBtn").addEventListener("click", scrollToContact);
  document.getElementById("quizClose").addEventListener("click", closeQuiz);
  document.getElementById("quizBackdrop").addEventListener("click", closeQuiz);

  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".question").querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      btn.classList.add("selected");
      answers[currentQ] = btn.dataset.value;
      updateDots();
    });
  });

  document.getElementById("quizNext").addEventListener("click", () => {
    if (answers[currentQ] === undefined) return;
    if (currentQ < totalQ - 1) goToQuestion(currentQ + 1);
    else showResult();
  });

  document.getElementById("quizBack").addEventListener("click", () => {
    if (currentQ > 0) goToQuestion(currentQ - 1);
  });

  document.getElementById("showFormBtn").addEventListener("click", scrollToContact);
  document.getElementById("showFormBtn2").addEventListener("click", scrollToContact);

  document.getElementById("retakeBtn2").addEventListener("click", () => {
    Object.keys(answers).forEach(k => delete answers[k]);
    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
    currentQ = 0;
    goToQuestion(0);
    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("contactSection").classList.add("hidden");
    document.getElementById("heroSection").classList.remove("hidden");
    openQuiz();
  });

  document.getElementById("retakeBtn").addEventListener("click", () => {
    Object.keys(answers).forEach(k => delete answers[k]);
    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
    currentQ = 0;
    goToQuestion(0);
    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("contactSection").classList.add("hidden");
    document.getElementById("heroSection").classList.remove("hidden");
    openQuiz();
  });

  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("contactForm").classList.add("hidden");
    document.getElementById("formSuccess").classList.remove("hidden");
  });
});
