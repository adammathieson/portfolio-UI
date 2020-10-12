import {projects} from './projects.js'
import {animations} from './animation.js'
import { figmaTls, tl_nodejsLogo, tl_svgLogo } from './animations/logoAnimations/index.js'

// timelines to reset
const tls = [...figmaTls, tl_nodejsLogo, tl_svgLogo]

let current = 0 
export const projectLoader = () => {
    let project = projects[current]
    
    const logos = window.document.querySelectorAll('.tech-logo div')
    const description = window.document.querySelector('#description')
    const images = window.document.querySelector('.image-container')
    const titles = window.document.querySelectorAll('.main-title')

    description.textContent = project.description

    if (logos.length) {
        logos.forEach(logo => {
            logo.style.display = 'none'
        })
        tls.forEach(el => el.reset())
    }

    // let iconWidth = Math.floor((1 / project.icons.length) * 100)
    logos.forEach(logo => {
        if (project.icons.includes(logo.id)) {
            logo.style.display = 'block'
            // logo.style.width = String(iconWidth) + '%'
        } 
    })
    tls.forEach(el => el.play())

    // Set image container width
    let imgWidth = Math.floor((1 / project.images.length) * 100)

    // Clear out old images
    if(images.children.length > 0) {
        while(images.firstChild) {
            images.removeChild(images.firstChild)
        }
    }

    // insert new images
    project.images.forEach(url => {
        const img = document.createElement('img')
        img.src = url
        img.style.width = String(imgWidth) + '%'
        images.appendChild(img)
    })

    // set title
    titles.forEach(title => {
        if (title.id === `${project.id}-title`) {
            title.style.display = 'block'
            } else {
                    title.style.display = 'none'
                }
    })
}
    
// Select a project
const nextBtn = window.document.querySelector('.next-control button')
nextBtn.addEventListener('click', () => {
    if (current === projects.length -1) {
        current = 0
        // projectLoader()
    } else {
        current++
        // console.log(current)
    }
    // animations()
    projectLoader()
    animations()
})

const chevronSvg = window.document.querySelector('.chevron-svg')
chevronSvg.addEventListener('click', () => {
    nextBtn.click()
})

projectLoader()
animations()