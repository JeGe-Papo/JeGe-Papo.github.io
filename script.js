const cursor=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menu=document.querySelector('.menu-btn');
const navbar=document.querySelector('.navbar');
menu.addEventListener('click',()=>navbar.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navbar.classList.remove('open')));

const search=document.querySelector('#search');
const filter=document.querySelector('#filter');
const cards=[...document.querySelectorAll('.cert-card')];
const empty=document.querySelector('#empty');
function applyCertificates(){
  const q=search.value.toLowerCase().trim();
  const f=filter.value;
  let visible=0;
  cards.forEach(card=>{
    const matchText=card.dataset.name.includes(q);
    const matchFilter=f==='all'||card.dataset.cat===f;
    const show=matchText&&matchFilter;
    card.style.display=show?'grid':'none';
    if(show) visible++;
  });
  empty.style.display=visible?'none':'block';
}
search.addEventListener('input',applyCertificates);
filter.addEventListener('change',applyCertificates);

document.querySelectorAll('.placeholder-link').forEach(link=>{
  link.addEventListener('click',e=>e.preventDefault());
});
