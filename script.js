const selectorPolygons = document.getElementsByClassName('st0')
const logos = document.getElementsByClassName('logos')


for (let i = 0; i < selectorPolygons.length; i++) {
    const polygon = selectorPolygons[i];

    polygon.addEventListener('mouseover', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if(polygon.id.includes(logoName)){
                console.log(logo.style.opacity = 1)
            }
        }
    })

    polygon.addEventListener('mouseout', () => {
        for (let i = 0; i < logos.length; i++) {
            const logo = logos[i];
            const logoName = logo.id.split('-')[1]
            if(polygon.id.includes(logoName)){
                console.log(logo.style.opacity = 0)
            }
        }
    })

}