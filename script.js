const selectorPolygons = document.getElementsByClassName('st0')
const logos = document.getElementsByClassName('logos')

const widthResponsive = 768

const marcas = []

const popUp = document.getElementsByClassName('popUp')[0]
const backPopUp = document.getElementsByClassName('backPopUp')[0]

for (let i = 0; i < selectorPolygons.length; i++) {
    const polygon = selectorPolygons[i];

    if (polygon.id) {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if (polygon.id.includes(logoName)) {
                marcas.push({
                    id: polygon.id,
                    logo: logo.getAttribute('xlink:href')
                })
            }
        }
    }

    polygon.addEventListener(window.innerWidth > widthResponsive ? 'mouseover' : 'focus', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if (polygon.id.includes(logoName)) {
                logo.style.opacity = 1
            }
        }
    })

    polygon.addEventListener('click', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if (polygon.id.includes(logoName)) {
                logo.style.opacity = 1
            }
        }
    })

    polygon.addEventListener(window.innerWidth > widthResponsive ? 'mouseout' : 'blur', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if (polygon.id.includes(logoName)) {
                logo.style.opacity = 0
            }
        }
    })


    polygon.addEventListener('click', (e) => {

        const name = e.target.id

        const marca = marcas.find((marca, i) => marca.id == name)
        const logoContainer = document.getElementById('popUpLogo')
        logoContainer.src = marca.logo
        popUp.classList.add(name)
        popUp.style.display = 'flex'
        backPopUp.style.display = 'flex'
        const polygon = document.getElementById(name)
        polygon.style.fill = 'var(--color-sky)'
    })

}

function closePopUp() {

    const polygonId = popUp.className.split(' ')[1]
    const polygon = document.getElementById(polygonId)
    if (popUp.style.display != 'none') {
        popUp.style.display = 'none'
        backPopUp.style.display = 'none'
        polygon.style.fill = 'var(--color-grey)'
        popUp.classList.remove(polygonId)
    }
}

