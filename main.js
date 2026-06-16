const S=[
  {name:"The Engine Room",reason:"חברות שזזות מהר צריכות מרחב שמתאים לקצב — עם גישה מיידית לכל מה שצריך.",tags:["אנרגיה גבוהה","גמישות מלאה","open space"],stats:[{n:'80',l:'מ"ר'},{n:'30',l:'אנשים מקסימום'},{n:'כניסה ישירה',l:'יתרון'}]},
  {name:"The Corner",reason:"שני חלונות, שני כיוונים — בדיוק כמו חברה שיודעת לחשוב בכמה כיוונים בו זמנית.",tags:["אור טבעי","נוף כפול","פינתית"],stats:[{n:'110',l:'מ"ר'},{n:'45',l:'אנשים מקסימום'},{n:'נוף כפול',l:'ייחוד'}]},
  {name:"The Kitchen Club",reason:"הרעיונות הכי טובים קורים ליד המטבח. הסוויטה הזו שם בדיוק — וגם הקפה.",tags:["ליד הקפה","אווירה חיה","מקצועי"],stats:[{n:'95',l:'מ"ר'},{n:'35',l:'אנשים מקסימום'},{n:'2 צעדים',l:'מהקפה'}]},
  {name:"The Skyline",reason:"כי חברה כמו שלכם צריכה לראות רחוק — לא רק לחשוב רחוק. הנוף הפנורמי הוא שלכם.",tags:["נוף פנורמי","קומה גבוהה","פרמיום"],stats:[{n:'140',l:'מ"ר'},{n:'60',l:'אנשים מקסימום'},{n:'פנורמי',l:'נוף'}]},
  {name:"The Quiet Floor",reason:"כשצריך לחשוב בשקט — באמת בשקט — זו הסוויטה שנבנתה בשבילכם.",tags:["שקט מוחלט","פוקוס","מבודד"],stats:[{n:'120',l:'מ"ר'},{n:'45',l:'אנשים מקסימום'},{n:'הכי שקטה',l:'בבניין'}]},
  {name:"The Flagship",reason:"הגדולה ביותר. הפרמיום ביותר. לחברות שלא מתפשרות — על כלום.",tags:["הכי גדולה","חדרי ישיבות פנימיים","פרסטיז'"],stats:[{n:'220',l:'מ"ר'},{n:'80+',l:'אנשים'},{n:'פנטהאוס',l:'עסקי'}]},
];
function pick(a){
  if(a[1]==='s80')return S[5];
  if(a[2]==='view'||a[5]==='aesthetic')return S[3];
  if(a[2]==='food'||a[5]==='vibe')return S[2];
  if(a[3]==='focus'||a[5]==='privacy')return S[4];
  if(a[1]==='s45')return S[3];
  if(a[0]==='investment'||a[0]==='crypto')return S[3];
  if(a[0]==='enterprise')return S[1];
  if(a[0]==='tech')return S[0];
  if(a[1]==='s30')return S[1];
  return S[0];
}
const ans={};let cur=0;const T=6;
const $=id=>document.getElementById(id);
function openQ(){$('quizModal').classList.add('open');document.body.style.overflow='hidden';refresh()}
function closeQ(){$('quizModal').classList.remove('open');document.body.style.overflow=''}
function goTo(i){
  document.querySelectorAll('.question').forEach((q,j)=>q.classList.toggle('active',j===i));
  cur=i;refresh();
}
function refresh(){
  $('stepLabel').textContent=`שאלה ${cur+1} / ${T}`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
  const ok=ans[cur]!=null;
  const nb=$('nextBtn');
  nb.classList.toggle('on',ok);nb.disabled=!ok;
  nb.textContent=cur===T-1?'← ראו את התוצאה':'← הבא';
  $('backBtn').classList.toggle('hidden',cur===0);
}
function showResult(){
  closeQ();
  const s=pick(ans);
  $('rName').textContent=s.name;
  $('rReason').textContent=s.reason;
  $('rTags').innerHTML=s.tags.map(t=>`<span class="tag">${t}</span>`).join('');
  $('rStats').innerHTML=s.stats.map((st,i)=>(i>0?'<div class="sdiv"></div>':'')+`<div class="stat"><span class="snum">${st.n}</span><span class="slbl">${st.l}</span></div>`).join('');
  $('hero').classList.add('hidden');
  $('resultSection').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('DOMContentLoaded',()=>{
  $('startBtn').addEventListener('click',()=>{goTo(0);openQ()});
  $('navCtaBtn').addEventListener('click',()=>$('contactSection').scrollIntoView({behavior:'smooth'}));
  $('quizClose').addEventListener('click',closeQ);
  $('quizBackdrop').addEventListener('click',closeQ);
  document.querySelectorAll('.radio-opt').forEach(el=>{
    el.addEventListener('click',()=>{
      el.closest('.question').querySelectorAll('.radio-opt').forEach(r=>r.classList.remove('sel'));
      el.classList.add('sel');ans[cur]=el.querySelector('input').value;refresh();
    });
  });
  document.querySelectorAll('.pill').forEach(el=>{
    el.addEventListener('click',()=>{
      el.closest('.question').querySelectorAll('.pill').forEach(p=>p.classList.remove('sel'));
      el.classList.add('sel');ans[cur]=el.dataset.v;refresh();
      setTimeout(()=>{if(cur<T-1)goTo(cur+1);else showResult()},300);
    });
  });
  $('nextBtn').addEventListener('click',()=>{
    if(!$('nextBtn').classList.contains('on'))return;
    if(cur<T-1)goTo(cur+1);else showResult();
  });
  $('backBtn').addEventListener('click',()=>{if(cur>0)goTo(cur-1)});
  $('showFormBtn').addEventListener('click',()=>$('contactSection').scrollIntoView({behavior:'smooth'}));
  $('retakeBtn').addEventListener('click',()=>{
    Object.keys(ans).forEach(k=>delete ans[k]);
    document.querySelectorAll('.radio-opt,.pill').forEach(el=>el.classList.remove('sel'));
    $('resultSection').classList.add('hidden');$('hero').classList.remove('hidden');
    goTo(0);openQ();window.scrollTo({top:0});
  });
  $('contactForm').addEventListener('submit',e=>{
    e.preventDefault();
    $('contactForm').classList.add('hidden');$('formSuccess').classList.remove('hidden');
  });
  refresh();
});