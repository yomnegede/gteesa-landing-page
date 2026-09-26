const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
function syncHeader(){header.classList.toggle('scrolled',window.scrollY>48)}
syncHeader();window.addEventListener('scroll',syncHeader,{passive:true});
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');nav.classList.remove('open')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus()}});
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox.querySelector('img');
const lightboxTitle=lightbox.querySelector('.lightbox-title');
const lightboxSource=lightbox.querySelector('figcaption a');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.image;lightboxImg.alt=item.dataset.alt;lightboxTitle.textContent=item.dataset.title;lightboxSource.href=item.dataset.source;lightbox.showModal()}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
