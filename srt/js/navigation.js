
function showPage(clicked) {
    const currentLinkId = clicked.textContent.toLowerCase()
    const activeLink = document.getElementById(currentLinkId)
    if (activeLink) {
        const navigationLinks = ['home', 'blog', 'projects'];
        const linksToHide = navigationLinks.filter(link => link !== currentLinkId)
        linksToHide.forEach(link => {
            document.getElementById(link).classList.add('none')
        })
        document.getElementById(currentLinkId).classList.remove('none')
    }
}

function focusHome() {
    const home = document.getElementById('home')
    if (!home.classList.contains('none')) {
        document.getElementById('nav-home').focus()
    }
}

export {showPage, focusHome}
