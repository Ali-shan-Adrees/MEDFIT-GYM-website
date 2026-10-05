
const header=document.querySelector('header');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
const topBtn=document.querySelector('.top-btn');

window.addEventListener('scroll',()=>{
  if(header) header.classList.toggle('scrolled',window.scrollY>30);
  if(topBtn) topBtn.classList.toggle('show',window.scrollY>500);
});
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open);
    document.body.style.overflow=open?'hidden':'';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open'); document.body.style.overflow='';
  }));
}
if(topBtn) topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const form=document.querySelector('#contactForm');
if(form){
 form.addEventListener('submit',e=>{
   e.preventDefault();
   if(!form.checkValidity()){form.reportValidity();return}
   const msg=document.querySelector('.form-msg');
   if(msg){msg.classList.add('show');msg.textContent='Thank you. Your message has been prepared successfully. Medfit Gym can be contacted directly at +92 321 1673824.'}
   form.reset();
 });
}
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item img').forEach(img=>{
 img.addEventListener('click',()=>{
   if(lightbox&&lightboxImg){lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add('open')}
 });
});
if(lightbox){
 lightbox.addEventListener('click',e=>{
   if(e.target===lightbox||e.target.classList.contains('close-lightbox')) lightbox.classList.remove('open');
 });
}
