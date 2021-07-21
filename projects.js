const infoDiv = document.querySelector('#info')

const infoCalc = document.createElement('div');
infoDiv.appendChild(infoCalc);
infoCalc.setAttribute('id', 'infOne')

const infoEas = document.createElement('div');
infoDiv.appendChild(infoEas);
infoEas.setAttribute('id', 'infTwo')

const infoRps = document.createElement('div');
infoDiv.appendChild(infoRps);
infoRps.setAttribute('id', 'infThree')

function info(section, text) {
    section.textContent = text;

    section.classList.add("full");
}

function erase(section) {
    section.textContent = "";
    section.classList.remove("full");
}

let textCalculator = "This project is a on-screen calculator was made using: HTML, JS and CSS."
const calc = document.querySelector('#calc');
calc.addEventListener('mouseover', () => { info(infoCalc, textCalculator) });
calc.addEventListener('mouseout', () => { erase(infoCalc) });

let textEas = "Is a Browser version of something between a sketchpad and an Etch-A-Sketch, usin most of the DOM fundaments of JS."
const eas = document.querySelector('#eas');
eas.addEventListener('mouseover', () => { info(infoEas, textEas) });
eas.addEventListener('mouseout', () => { erase(infoEas, "full") });

let textRps = "This is a retro-version of the old game, Rock, Paper & Scissor. This was one of the first projects using JS"
const rps = document.querySelector('#rps');
rps.addEventListener('mouseover', () => { info(infoRps, textRps) });
rps.addEventListener('mouseout', () => { erase(infoRps) });