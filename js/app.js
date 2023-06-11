// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//changed from const to let in global scope as error was coming up further down the line of code
let showingSubMenu = false;

const mainEl = document.getElementById("main")
console.log(mainEl)
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h2>"

mainEl.className = 'flex-ctr'

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.className = 'flex-around'


menuLinks.forEach(function(link) {
let a = document.createElement('a')
a.setAttribute('href', link.href);
a.innerText = link.text;
topMenuEl.append(a);
})

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.className = "flex-around"
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu a');//grabs all a tags inside top menu

topMenuEl.addEventListener('click', handleClick);
function handleClick(evt){ 

 // const link = evt.target;//store evt.target in variable? evt.target directly should work?
  
evt.preventDefault()

if (evt.target.tagName !== "A"){
  return
  }
  console.log(evt.target.textContent);
   
  if (evt.target.classList.contains('active')) {
    evt.target.classList.remove('active');
    showingSubMenu = false;//already decalred in global scope
    subMenuEl.style.top = '0';  
    return;
    } 


  //for (let i = 0; i < topMenuLinks.length; i++){
  //  document.querySelector('.active').classList.remove('active')}

  topMenuLinks.forEach(function(rmv){
    rmv.classList.remove('active')
  })
  console.log(menuLinks);
evt.target.classList.add('active');



let linkData = menuLinks.find(function(linkObj){
  
  return linkObj.text === evt.target.textContent
})

console.log(linkData)

showingSubMenu = "subLinks" in linkData
console.log(showingSubMenu);
/*if (("subLinks")) {
  showingSubMenu = true;
} else {
  showingSubMenu = false;
}*/

if (showingSubMenu === true) { 
  buildSubMenu(linkData.subLinks)
  subMenuEl.style.top = '100%';

} else {
  subMenuEl.style.top = '0'
  mainEl.innerHTML = '<h1>about</h1>'
}

}

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
subLinks.forEach(function(link){
  let a = document.createElement('a')
  a.setAttribute('href', link.href)
  a.textContent = link.text
  subMenuEl.append(a);
})
      }
      

subMenuEl.addEventListener('click', handleClick2)

function handleClick2(evt){
evt.preventDefault();
if (evt.target.tagName !== 'A') return 
console.log(evt.target.textContent)

showingSubMenu = false;
subMenuEl.style.top = '0'
  
topMenuLinks.forEach(function(rmv){
rmv.classList.remove('active');
})
//console.log(topMenuLinks)

mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`
}





