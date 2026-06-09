const suites=[
  {name:"The Engine Room",reason:"חברות שזזות מהר צריכות מרחב שמתאים לקצב — עם גישה מיידית לכל מה שצריך, ובלי בירוקרטיה.",tags:["אנרגיה גבוהה","גמישות מלאה","open space"],highlights:['80 מ"ר',"עד 30 אנשים","גישה מהירה לכניסה"],icons:["📐","👥","⚡"]},
  {name:"The Corner",reason:"שני חלונות, שני כיוונים — בדיוק כמו חברה שיודעת לחשוב בכמה כיוונים בו זמנית.",tags:["אור טבעי","נוף כפול","פינתית"],highlights:['110 מ"ר',"עד 45 אנשים","פינתית עם נוף כפול"],icons:["📐","👥","🏙️"]},
  {name:"The Kitchen Club",reason:"הרעיונות הכי טובים קורים ליד המטבח. הסוויטה הזו שם בדיוק — וגם הקפה.",tags:["ליד הקפה","אווירה חיה","מקצועי ואינפורמלי"],highlights:['95 מ"ר',"עד 35 אנשים","שני צעדים מהקפה"],icons:["📐","👥","☕"]},
  {name:"The Skyline",reason:"כי חברה כמו שלכם צריכה לראות רחוק — לא רק לחשוב רחוק. הנוף הפנורמי הוא שלכם.",tags:["נוף פנורמי","קומה גבוהה","פרמיום"],highlights:['140 מ"ר',"עד 60 אנשים","נוף פנורמי לתל אביב"],icons:["📐","👥","🌇"]},
  {name:"The Quiet Floor",reason:"כשצריך לחשוב בשקט — באמת בשקט — זו הסוויטה שנבנתה בשבילכם. ריכוז מוחלט.",tags:["שקט מוחלט","פוקוס","מבודד"],highlights:['120 מ"ר',"עד 45 אנשים","הכי שקטה בבניין"],icons:["📐","👥","🎧"]},
  {name:"The Flagship",reason:"הגדולה ביותר. הפרמיום ביותר. לחברות שלא מתפשרות — על כלום.",tags:["הכי גדולה","חדרי ישיבות פנימיים","פרסטיז'"],highlights:['220 מ"ר',"80+ אנשים","חדרי ישיבות פנימיים"],icons:["📐","👥","🏆"]}
];

const answers={};
let currentQ=0;
const totalQ=6;

function pickSuite(a){
  const size=a[1];
  const vibe=a[2];
  const style=a[3];
  const industry=a[0];
  const secret=a[5];
  if(size==="s80")return suites[5];
  if(vibe==="view"||secret==="aesthetic")return suites[3];
  if(vibe==="food"||secret==="vibe")return suites[2];
  if(style==="focus"||secret==="privacy"||vibe==="quiet")return suites[4];
  if(size==="s45")return suites[3];
  if(industry==="investment"||industry==="crypto")return suites[3];
  if(industry==="enterprise")return suites[1];
  if(industry==="tech")return suites[0];
  if(size==="s30")return suites[1];
  return suites[0];
}

function showSection(id){
  ["hero","quizSection","resultSection","contactSection"].forEach(s=>{
    const el=document.getElementById(s);
    if(!el)return;
    if(s==="quizSection"){
      el.classList.toggle("active",s===id);
      el.classList.toggle("hidden",s!==id);
    }else{
      el.classList.toggle("hidden",s!==id);
    }
  });
  window.scrollTo({top:0,behavior:"smooth"});
}

function updateProgress(){
  document.getElementById("progressFill").style.width=((currentQ+1)/totalQ*100)+"%";
  document.getElementById("questionCount").textContent=`שאלה ${currentQ+1} מתוך ${totalQ}`;
}

function goToQuestion(i){
  document.querySelectorAll(".question").forEach((q,j)=>{
    q.classList.remove("active","entering");
    if(j===i)q.classList.add("active","entering");
  });
  currentQ=i;
  updateProgress();
}

function showResult(){
  const s=pickSuite(answers);
  document.getElementById("resultSuiteName").textContent=s.name;
  document.getElementById("resultReason").textContent=s.reason;
  document.getElementById("resultTags").innerHTML=s.tags.map(t=>`<span class="tag">${t}</span>`).join("");
  document.querySelectorAll(".highlight-text").forEach((el,i)=>{if(s.highlights[i])el.textContent=s.highlights[i]});
  document.querySelectorAll(".highlight-icon").forEach((el,i)=>{if(s.icons[i])el.textContent=s.icons[i]});
  showSection("resultSection");
}

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("startBtn").addEventListener("click",()=>{showSection("quizSection");updateProgress()});
  if(document.getElementById("navCtaBtn")){
    document.getElementById("navCtaBtn").addEventListener("click",()=>{showSection("contactSection")});
  }
  document.querySelectorAll(".option").forEach(btn=>{
    btn.addEventListener("click",()=>{
      btn.closest(".question").querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
      btn.classList.add("selected");
      answers[currentQ]=btn.dataset.value;
      setTimeout(()=>{
        if(currentQ<totalQ-1)goToQuestion(currentQ+1);
        else showResult();
      },280);
    });
  });
  document.getElementById("showFormBtn").addEventListener("click",()=>showSection("contactSection"));
  document.getElementById("retakeBtn").addEventListener("click",()=>{
    Object.keys(answers).forEach(k=>delete answers[k]);
    document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
    currentQ=0;
    goToQuestion(0);
    showSection("quizSection");
  });
  document.getElementById("contactForm").addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("contactForm").classList.add("hidden");
    document.getElementById("formSuccess").classList.remove("hidden");
  });
});
