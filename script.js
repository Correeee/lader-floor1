const selectorPolygons = document.getElementsByClassName('st0')
const logos = document.getElementsByClassName('logos')

const widthResponsive = 768

const marcas = []


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

    polygon.addEventListener(window.innerWidth > widthResponsive ? 'mouseout' : 'blur', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if (polygon.id.includes(logoName)) {
                logo.style.opacity = 0
            }
        }
    })
    

    polygon.addEventListener(window.innerWidth <= widthResponsive && 'focus', (e) => {

        const name = e.target.id

        const marca = marcas.find((marca, i) => marca.id == name)
        // console.log(marca)
        Toastify({
            text: marca.id.split(/(?=[A-Z])/).join(' '),
            avatar: marca.logo,
            duration: 3000,
            newWindow: true,
            close: true,
            stopOnFocus: true,
            onClick: function () { },
        }).showToast();
    })

}


