import {showPage, focusHome} from './navigation.js'


document.getElementById('nav-links').addEventListener('click', e => showPage(e.target))

// make Home navigation link focus on load
document.addEventListener('load', focusHome())

