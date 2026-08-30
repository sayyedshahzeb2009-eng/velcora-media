// Velcora Media — premium interactions
(() => {
  const gateMarkup = `
    <section class="login-gate" id="loginGate" data-on="false" aria-label="Velcora Media entrance">
      <div class="login-shell">
        <div class="login-brand"><span class="login-brand-mark">V</span><span>VELCORA MEDIA</span></div>
        <div class="login-kicker">Digital studio · Worldwide</div>
        <div class="lamp-scene" aria-label="Interactive lamp">
          <div class="lamp-light"></div>
          <svg class="lamp-svg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse class="inner-glow" cx="100" cy="110" rx="60" ry="30" />
            <rect class="lamp-base" x="92" y="100" width="16" height="160" rx="8" />
            <rect class="lamp-base" x="60" y="250" width="80" height="12" rx="6" />
            <g class="pull-cord"><line class="cord-line" x1="130" y1="110" x2="130" y2="180" /><circle class="cord-bead" cx="130" cy="190" r="6" /><circle class="cord-hit" cx="130" cy="190" r="25" fill="transparent" tabindex="0" role="button" aria-label="Pull the lamp cord" /></g>
            <path class="lamp-shade" d="M30 110 C 30 50, 170 50, 170 110 C 170 125, 30 125, 30 110 Z" />
          </svg>
        </div>
        <form class="login-form" id="velcoraLoginForm"><h1>Welcome.</h1><p class="sub">Pull the cord, then step inside the Velcora experience.</p><div class="form-row"><label for="velcoraName">Name</label><input id="velcoraName" type="text" placeholder="Your name" autocomplete="name" required></div><div class="form-row"><label for="velcoraEmail">Email</label><input id="velcoraEmail" type="email" placeholder="you@company.com" autocomplete="email" required></div><button class="login-submit" type="submit">Enter Velcora <span>↗</span></button><p class="login-hint">No account required · <span>Portfolio preview</span></p></form>
        <div class="login-footer"><span>US · UK · Canada · Australia · Europe</span><span>Premium digital experiences</span></div>
      </div>
    </section>`;
  document.body.insertAdjacentHTML('afterbegin', gateMarkup);
})();

const gate=document.getElementById('loginGate'),cordHit=document.querySelector('.cord-hit'),loginForm=document.getElementById('velcoraLoginForm'),nav=document.getElementById('nav'),dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
document.body.classList.add('login-locked');
function switchLamp(on){if(!gate)return;gate.dataset.on=String(on);gate.setAttribute('aria-hidden',on?'false':'true');}
if(gate){switchLamp(false);cordHit?.addEventListener('click',()=>switchLamp(gate.dataset.on!=='true'));cordHit?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();switchLamp(gate.dataset.on!=='true')}});document.querySelector('.lamp-shade')?.addEventListener('click',()=>switchLamp(gate.dataset.on!=='true'));loginForm?.addEventListener('submit',e=>{e.preventDefault();if(gate.dataset.on!=='true'){switchLamp(true);return}gate.classList.add('is-opening');document.body.classList.remove('login-locked');window.setTimeout(()=>gate.remove(),950)})}
window.addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',window.scrollY>30);const max=document.documentElement.scrollHeight-window.innerHeight;const progress=max>0?window.scrollY/max*100:0;const bar=document.querySelector('.page-progress');if(bar)bar.style.width=`${progress}%`},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(window.matchMedia('(pointer:fine)').matches){let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(dot)dot.style.transform=`translate3d(${mx}px,${my}px,0)`});const loop=()=>{rx+=(mx-rx)*.12;ry+=(my-ry)*.12;if(ring)ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;requestAnimationFrame(loop)};loop();document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-active'));el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-active'))});document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.16}px,${(e.clientY-r.top-r.height/2)*.16}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')})}
const art=document.querySelector('.hero-art'),v3d=document.querySelector('.v-3d');if(art&&v3d&&matchMedia('(pointer:fine)').matches){art.addEventListener('pointermove',e=>{const r=art.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;v3d.style.animationPlayState='paused';v3d.style.transform=`rotateX(${18-py*12}deg) rotateY(${-24+px*18}deg) rotateZ(-7deg) translateY(${py*-12}px)`});art.addEventListener('pointerleave',()=>v3d.style.animationPlayState='running')}
const menu=document.querySelector('.menu'),navLinks=document.querySelector('.nav-links');if(menu){menu.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))})}document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.style.scrollBehavior='auto';document.querySelectorAll('*').forEach(el=>{el.style.animationDuration='.001ms';el.style.transitionDuration='.001ms'})}
