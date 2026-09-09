"use strict";

const $=id=>document.getElementById(id);
const all=selector=>[...document.querySelectorAll(selector)];
const reduce=matchMedia("(prefers-reduced-motion: reduce)");

let language="en";
try{
language=localStorage.getItem("siteLanguage")==="el"?"el":"en";
}catch{}

const categories={
websites:{
en:["Websites","Websites for businesses, studios and new ideas."],
el:["Ιστοσελίδες","Ιστοσελίδες για επιχειρήσεις, studios και νέες ιδέες."]
},
eshops:{
en:["E-shops","Online stores with clear product pages and an easy shopping experience."],
el:["E-shops","Ηλεκτρονικά καταστήματα με ξεκάθαρες σελίδες προϊόντων και εύκολη διαδικασία αγοράς."]
},
games:{
en:["Browser Games","Games and quizzes you can play directly in your browser."],
el:["Browser Games","Παιχνίδια και quiz που παίζεις απευθείας στον browser."]
},
apps:{
en:["Apps","Applications in development: a new game and an e-book reader with voice reading."],
el:["Εφαρμογές","Εφαρμογές υπό ανάπτυξη: ένα νέο παιχνίδι και ένας e-book reader με φωνητική ανάγνωση."]
},
tools:{
en:["Digital Tools","Useful tools for organising information and simplifying everyday tasks."],
el:["Digital Tools","Χρήσιμα εργαλεία για οργάνωση πληροφοριών και απλοποίηση καθημερινών εργασιών."]
},
modeling:{
en:["3D Modeling","Three-dimensional models and visualisations for products and creative projects."],
el:["3D Modeling","Τρισδιάστατα μοντέλα και απεικονίσεις για προϊόντα και δημιουργικά projects."]
},
music:{
en:["Music & Beats","Original music and beats produced in FL Studio."],
el:["Μουσική & Beats","Πρωτότυπη μουσική και beats με παραγωγή στο FL Studio."]
}
};

const requestedCategory=new URLSearchParams(location.search).get("category");
const categoryKey=Object.hasOwn(categories,requestedCategory||"")
?requestedCategory
:null;

const homeURL=new URL(location.href);
homeURL.search="";
homeURL.hash="";

function categoryURL(key){
const url=new URL(homeURL);
url.searchParams.set("category",key);
return url.href;
}

function translated(element,en,el){
element.dataset.en=en;
element.dataset.el=el;
element.textContent=language==="el"?el:en;
return element;
}

function makeElement(tag,className,text){
const element=document.createElement(tag);
if(className)element.className=className;
if(text!==undefined)element.textContent=text;
return element;
}

const extraStyle=document.createElement("style");

extraStyle.textContent=`
body:has(.hero)>nav{
    position:relative;
    inset:auto;
    min-height:78px;
    padding:15px var(--pad);
    background:var(--bg);
}
.logo{
    gap:8px;
    font-family:Arial,Helvetica,sans-serif;
    font-size:28px;
    font-weight:700;
    letter-spacing:2px;
    line-height:1;
}
.logo-three{
    position:relative;
    width:36px;
    height:36px;
    display:grid;
    place-items:center;
    flex-shrink:0;
    color:#fff;
    font-size:25px;
    font-weight:800;
    line-height:1;
}
.logo-three::before{
    content:"";
    position:absolute;
    inset:0;
    border:1px solid #3b8edb;
    border-right-color:transparent;
    border-radius:50%;
    transform:rotate(-30deg);
}
.logo-word{
    gap:0;
    letter-spacing:2px;
}
.logo-word small{
    align-self:flex-end;
    color:#3b8edb;
    font-size:8px;
    font-weight:600;
    letter-spacing:2px;
    margin-top:1px;
}
.hero{
    display:flex;
    align-items:center;
    position:relative;
    isolation:isolate;
    min-height:620px;
    padding:85px var(--pad);
    gap:0;
    overflow:hidden;
}
.hero-content{
    position:relative;
    z-index:2;
    grid-area:auto;
    width:48%;
    max-width:660px;
    min-width:0;
    margin:0;
}
.hero h1{
    font-size:clamp(42px,5.1vw,78px);
    line-height:1.07;
    letter-spacing:-.04em;
    margin:25px 0 30px;
}
.hero-image{
    position:absolute;
    grid-area:auto;
    left:33%;
    right:auto;
    top:0;
    bottom:0;
    width:74%;
    height:100%;
    z-index:0;
    overflow:visible;
    transform:translateY(var(--hero-shift,0px));
}
.hero-image img{
    display:block;
    width:100%;
    height:100%;
    max-width:none;
    object-fit:contain;
    object-position:center;
    opacity:.9;
    mask-image:linear-gradient(90deg,transparent,#000 20%);
    -webkit-mask-image:linear-gradient(90deg,transparent,#000 20%);
}
.hero::after{
    content:"";
    display:block;
    position:absolute;
    inset:0;
    z-index:1;
    pointer-events:none;
    background:linear-gradient(
        0deg,
        var(--bg),
        transparent 16%,
        transparent 85%,
        var(--bg)
    );
}
.hero-mark{
    display:none!important;
}
.hero-bottom p{
    max-width:560px;
    font-size:16px;
}
.hero .round-link{
    margin-top:2px;
}
.service-layout{
    display:block;
}
.service-list{
    position:static;
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:12px 35px;
}
.category-link{
    display:grid;
    grid-template-columns:minmax(0,1fr) auto;
    align-items:start;
    gap:10px 20px;
    padding:19px 0;
    color:var(--ink);
}
.category-link strong{
    font-size:26px;
    font-weight:400;
    line-height:1.2;
    letter-spacing:-.5px;
}
.category-link small{
    grid-column:1;
    color:var(--muted);
    font-size:14px;
    line-height:1.7;
    max-width:370px;
}
.category-arrow{
    grid-column:2;
    grid-row:1;
    color:var(--blue);
    font-size:25px;
    transition:transform .4s var(--ease);
}
.category-link:hover .category-arrow{
    transform:translate(4px,-4px);
}
.category-link:hover strong{
    color:var(--blue);
}
.portfolio-page{
    min-height:60vh;
    padding:45px var(--pad) 80px;
}
.portfolio-back{
    display:inline-flex;
    align-items:center;
    min-height:44px;
    color:var(--muted);
    font-size:13px;
    margin-bottom:35px;
}
.portfolio-back:hover{
    color:var(--blue);
}
.portfolio-intro{
    max-width:760px;
    margin-bottom:35px;
}
.portfolio-intro h1{
    font-size:clamp(37px,4.8vw,64px);
    margin:18px 0;
    line-height:1.1;
}
.portfolio-intro>p:last-child{
    color:var(--muted);
    max-width:600px;
    font-size:16px;
}
.portfolio-tabs{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin:30px 0 40px;
}
.portfolio-tabs a{
    padding:9px 14px;
    background:var(--panel);
    color:var(--muted);
    font-size:13px;
    border-radius:3px;
}
.portfolio-tabs a[aria-current="page"]{
    background:var(--blue);
    color:var(--bg);
}
.portfolio-tabs a:hover{
    color:var(--ink);
}
.portfolio-tabs a[aria-current="page"]:hover{
    color:var(--bg);
}
.portfolio-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:28px;
}
.portfolio-grid .work-item{
    width:100%;
    min-width:0;
    margin:0;
}
.portfolio-empty{
    max-width:670px;
    background:var(--panel);
    padding:30px;
}
.portfolio-empty h2{
    font-size:25px;
    margin-bottom:14px;
}
.portfolio-empty p{
    color:var(--muted);
    font-size:15px;
    max-width:520px;
}
.portfolio-contact{
    display:inline-flex;
    align-items:center;
    gap:20px;
    min-height:44px;
    color:var(--blue);
    font-size:14px;
    margin-top:20px;
}
@media(min-width:1500px){
    .hero{min-height:680px}
}
@media(max-width:950px) and (min-width:701px){
    .hero{
        min-height:560px;
        padding-top:70px;
        padding-bottom:70px;
    }
    .hero h1{font-size:44px}
    .hero-content{width:48%}
    .hero-image{left:34%;width:74%}
}
@media(max-width:700px){
    body:has(.hero)>nav{min-height:78px}
    .hero{
        display:block;
        min-height:0;
        padding:280px var(--pad) 55px;
    }
    .hero-content{
        width:100%;
        max-width:600px;
    }
    .hero h1{font-size:clamp(40px,8vw,56px)}
    .hero-image{
        left:20%;
        top:0;
        bottom:auto;
        width:100%;
        height:260px;
        transform:none!important;
    }
    .hero-image img{
        object-fit:contain;
        object-position:center;
        mask-image:none;
        -webkit-mask-image:none;
    }
    .hero-bottom p{font-size:15px}
    .logo{font-size:24px}
    .logo-three{width:32px;height:32px;font-size:23px}
    .service-list{grid-template-columns:1fr;gap:4px}
    .category-link strong{font-size:24px}
    .portfolio-page{padding-top:25px;padding-bottom:55px}
    .portfolio-grid{grid-template-columns:1fr}
    .portfolio-tabs{margin-bottom:30px}
    .portfolio-empty{padding:23px}
}
@media(max-width:400px){
    .logo{font-size:21px;gap:6px}
    .logo-word small{font-size:7px;letter-spacing:1.5px}
    .logo-three{width:30px;height:30px;font-size:22px}
    .hero{padding-top:240px}
    .hero-image{height:220px}
    .hero h1{font-size:40px}
}
`;

document.head.append(extraStyle);

function buildCategoryLinks(){
const list=document.querySelector(".service-list");
if(!list)return;

list.replaceChildren();
list.removeAttribute("role");
list.setAttribute(
"aria-label",
language==="el"?"Κατηγορίες έργων":"Project categories"
);

Object.entries(categories).forEach(([key,category])=>{
const link=makeElement("a","category-link");
link.href=categoryURL(key);

const title=translated(
makeElement("strong"),
category.en[0],
category.el[0]
);

const arrow=makeElement("span","category-arrow","↗");
arrow.setAttribute("aria-hidden","true");

const description=translated(
makeElement("small"),
category.en[1],
category.el[1]
);

link.append(title,arrow,description);
list.append(link);
});

const detail=document.querySelector(".service-detail");
if(detail)detail.hidden=true;

const heading=document.querySelector(".service-heading h2");
if(heading){
translated(
heading,
"Explore what we create.",
"Δες όσα δημιουργούμε."
);
}
}

function buildPortfolio(){
if(!categoryKey)return;

const main=$("main");
if(!main)return;

const gameCards=all(".work-item").map(card=>card.cloneNode(true));
const category=categories[categoryKey];

main.replaceChildren();

const page=makeElement("section","portfolio-page");

const back=translated(
makeElement("a","portfolio-back"),
"← Back to the studio",
"← Επιστροφή στο studio"
);
back.href=homeURL.href;

const intro=makeElement("div","portfolio-intro");
intro.setAttribute("data-reveal","");

const label=translated(
makeElement("p","eyebrow"),
"OUR WORK",
"ΤΑ ΕΡΓΑ ΜΑΣ"
);

const title=translated(
makeElement("h1"),
category.en[0],
category.el[0]
);

const description=translated(
makeElement("p"),
category.en[1],
category.el[1]
);

intro.append(label,title,description);

const tabs=makeElement("div","portfolio-tabs");
tabs.setAttribute("role","navigation");
tabs.setAttribute("aria-label","Project categories");

Object.entries(categories).forEach(([key,item])=>{
const link=translated(
makeElement("a"),
item.en[0],
item.el[0]
);

link.href=categoryURL(key);
if(key===categoryKey)link.setAttribute("aria-current","page");
tabs.append(link);
});

page.append(back,intro,tabs);

if(categoryKey==="games"&&gameCards.length){
const grid=makeElement("div","portfolio-grid");
gameCards.forEach(card=>grid.append(card));
page.append(grid);
}else{
const empty=makeElement("div","portfolio-empty");
empty.setAttribute("data-reveal","");

const heading=translated(
makeElement("h2"),
"Coming soon.",
"Σύντομα."
);

const text=translated(
makeElement("p"),
"The first projects in this category will be added here.",
"Οι πρώτες δουλειές αυτής της κατηγορίας θα προστεθούν εδώ."
);

const contact=translated(
makeElement("a","portfolio-contact"),
"Discuss a project ↗",
"Μίλησέ μας για το project σου ↗"
);

contact.href=new URL("contact.html",homeURL).href;
empty.append(heading,text,contact);
page.append(empty);
}

main.append(page);

all(".menu-link").forEach(link=>{
const href=link.getAttribute("href");
if(href?.startsWith("#")){
const target=new URL(homeURL);
target.hash=href;
link.href=target.href;
}
});
}

document.querySelector('.menu-link[href="#projects"]')?.remove();

const heroLink=document.querySelector('.hero a[href="#projects"]');
if(heroLink){
heroLink.href="#services";

const label=heroLink.querySelector("[data-en]");
if(label){
translated(
label,
"Explore our services",
"Δες τις υπηρεσίες μας"
);
}
}

buildCategoryLinks();
buildPortfolio();

if(!categoryKey){
document.querySelector("#projects")?.remove();
}

function setLanguage(value){
language=value==="el"?"el":"en";
document.documentElement.lang=language;

all("[data-en][data-el]").forEach(element=>{
element.textContent=element.dataset[language];
});

$("grBtn")?.setAttribute("aria-pressed",String(language==="el"));
$("enBtn")?.setAttribute("aria-pressed",String(language==="en"));
$("grBtn")?.classList.toggle("active",language==="el");
$("enBtn")?.classList.toggle("active",language==="en");

$("menuOverlay")?.setAttribute(
"aria-label",
language==="el"?"Μενού":"Menu"
);

document.querySelector(".service-list")?.setAttribute(
"aria-label",
language==="el"?"Κατηγορίες έργων":"Project categories"
);

document.querySelector(".portfolio-tabs")?.setAttribute(
"aria-label",
language==="el"?"Κατηγορίες έργων":"Project categories"
);

if(categoryKey){
document.title=
categories[categoryKey][language][0]+" — Threepoint Studio ATH";
}

try{localStorage.setItem("siteLanguage",language)}catch{}
}

$("grBtn")?.addEventListener("click",()=>setLanguage("el"));
$("enBtn")?.addEventListener("click",()=>setLanguage("en"));

const animations=new Set();

function play(element,frames,options={}){
if(!element||reduce.matches||!element.animate)return;

const animation=element.animate(frames,{
duration:850,
easing:"cubic-bezier(.22,1,.36,1)",
...options
});

animations.add(animation);
const done=()=>animations.delete(animation);
animation.onfinish=done;
animation.oncancel=done;

return animation;
}

const overlay=$("menuOverlay");
const menuButton=$("menuButton");
let previousFocus;
let previousOverflow="";

function closeMenu(){
if(!overlay?.classList.contains("active"))return;

overlay.classList.remove("active");
previousFocus?.focus();
overlay.inert=true;
overlay.setAttribute("aria-hidden","true");
menuButton?.setAttribute("aria-expanded","false");
document.body.style.overflow=previousOverflow;
}

if(overlay){
overlay.inert=true;
overlay.setAttribute("aria-hidden","true");
overlay.setAttribute("role","dialog");
overlay.setAttribute("aria-modal","true");
}

menuButton?.addEventListener("click",()=>{
if(!overlay||overlay.classList.contains("active"))return;

previousFocus=document.activeElement;
previousOverflow=document.body.style.overflow;

overlay.inert=false;
overlay.classList.add("active");
overlay.setAttribute("aria-hidden","false");
menuButton.setAttribute("aria-expanded","true");
document.body.style.overflow="hidden";

$("closeButton")?.focus();

all(".menu-link").forEach((element,index)=>{
play(element,[
{opacity:0,transform:"translateY(18px)"},
{opacity:1,transform:"translateY(0)"}
],{
delay:80+index*65,
fill:"backwards"
});
});
});

$("closeButton")?.addEventListener("click",closeMenu);

overlay?.addEventListener("click",event=>{
if(event.target===overlay)closeMenu();
});

all(".menu-link").forEach(link=>{
link.addEventListener("click",closeMenu);
});

document.addEventListener("keydown",event=>{
if(!overlay?.classList.contains("active"))return;

if(event.key==="Escape"){
event.preventDefault();
closeMenu();
return;
}

if(event.key==="Tab"){
const controls=[...overlay.querySelectorAll(
"a[href],button:not([disabled])"
)].filter(element=>element.getClientRects().length);

const first=controls[0];
const last=controls.at(-1);

if(event.shiftKey&&document.activeElement===first){
event.preventDefault();
last?.focus();
}else if(!event.shiftKey&&document.activeElement===last){
event.preventDefault();
first?.focus();
}
}
});

let project=
document.querySelector(".contact-choice.active")?.dataset.project||
"Website";

all(".contact-choice").forEach(button=>{
button.setAttribute(
"aria-pressed",
String(button.classList.contains("active"))
);

button.addEventListener("click",()=>{
project=button.dataset.project||"Website";

all(".contact-choice").forEach(element=>{
element.classList.toggle("active",element===button);
element.setAttribute("aria-pressed",String(element===button));
});
});
});

$("gmailButton")?.addEventListener("click",event=>{
event.preventDefault();

window.open(
"https://mail.google.com/mail/u/0/?fs=1"+
"&to=threepointstudioath@gmail.com"+
"&su="+encodeURIComponent("3POINT STUDIO - "+project+" Project")+
"&tf=cm",
"_blank",
"noopener,noreferrer"
);
});

const image=document.querySelector(".hero-image img");

if(image){
const mark=document.querySelector(".hero-mark");

const loaded=()=>{
if(!image.naturalWidth)return;
image.hidden=false;
if(mark)mark.hidden=true;
};

const failed=()=>{
image.hidden=true;
if(mark)mark.hidden=false;
};

image.addEventListener("load",loaded);
image.addEventListener("error",failed);

if(image.complete){
if(image.naturalWidth)loaded();
else failed();
}
}

let observer;
const pending=new Set();

function show(element){
pending.delete(element);
element.style.removeProperty("opacity");
observer?.unobserve(element);

play(element,[
{opacity:0,transform:"translateY(26px)"},
{opacity:1,transform:"translateY(0)"}
]);
}

function setupMotion(){
if(reduce.matches)return;

all(".hero .eyebrow,.hero h1,.hero-bottom").forEach((element,index)=>{
play(element,[
{opacity:0,transform:"translateY(28px)"},
{opacity:1,transform:"translateY(0)"}
],{
duration:1000,
delay:index*130,
fill:"backwards"
});
});

if(!("IntersectionObserver" in window))return;

observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting)show(entry.target);
});
},{
rootMargin:"0px 0px -20px 0px"
});

all("[data-reveal],.founder-card").forEach(element=>{
if(element.getBoundingClientRect().bottom<=0||!element.animate)return;

observer.observe(element);
pending.add(element);
element.style.opacity="0";
});
}

function stopMotion(){
observer?.disconnect();

pending.forEach(element=>{
element.style.removeProperty("opacity");
});

pending.clear();
animations.forEach(animation=>animation.cancel());
animations.clear();

document.querySelector(".hero")?.style.removeProperty("--hero-shift");
}

reduce.addEventListener("change",()=>{
stopMotion();
if(!reduce.matches)setupMotion();
});

document.addEventListener("focusin",event=>{
pending.forEach(element=>{
if(element.contains(event.target)){
pending.delete(element);
observer?.unobserve(element);
element.style.removeProperty("opacity");
}
});
});

const hero=document.querySelector(".hero");
const desktop=matchMedia("(min-width:701px)");
let frame=0;

function scrollArt(){
frame=0;
if(!hero)return;

if(reduce.matches||!desktop.matches){
hero.style.removeProperty("--hero-shift");
return;
}

const offset=Math.max(0,Math.min(hero.offsetHeight,scrollY));
hero.style.setProperty("--hero-shift",Math.round(offset*.06)+"px");
}

if(hero){
addEventListener("scroll",()=>{
if(!frame)frame=requestAnimationFrame(scrollArt);
},{passive:true});

desktop.addEventListener("change",scrollArt);
scrollArt();
}

setLanguage(language);

try{
setupMotion();
}catch{
stopMotion();
}