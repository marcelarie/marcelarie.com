
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

export {showPage}
