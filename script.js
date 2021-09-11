const logo = document.getElementsByClassName('logo')[0]
const navBar = document.getElementsByClassName('nav-bar')[0]

const load = () => {
    setTimeout(() => {
        logo.style.opacity = "1"
        logo.style.height = "15%"
        logo.style.top = "-4%"
        logo.style.left = "0"
    }, 3450)
} 

let drop = () => {
    console.log('Clicked!')
    const text = document.getElementsByClassName('more')[0]
    text.classList.remove('hidden')
    const arrow = document.getElementsByClassName('dropdown')[0]
    console.log(!text.classList.contains('fly'))
    if (!text.classList.contains('fly')){
        console.log("Yea")
        arrow.classList.add('rotated')
        text.classList.add('fly')
        text.classList.remove('fall')
    } else {
        arrow.classList.remove('rotated')
        text.classList.remove('fly')
        text.classList.add('fall')
    }
}

const copy = () => {
    const cb = navigator.clipboard;
    const text = "thescriptinglegend@gmail.com"
    cb.writeText(text).then(() => alert('Email copied'));
}

let scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const project = document.querySelector('.project')
const pDetails = document.querySelector('#p1-details')

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

function loop() {
    if (isElementInViewport(project) && logo.style.opacity == "1") {
        project.classList.remove('deactive');
        project.classList.remove('deactiveate')
        project.classList.add('active');

        pDetails.classList.remove('inactive')
        pDetails.classList.add('activeD')
    } else {
        project.classList.remove('active');
        project.classList.add('deactiveate');

        pDetails.classList.remove('activeD')
        pDetails.classList.add('inactive')
    }
  
    scroll(loop);
}

loop()