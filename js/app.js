// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  

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



