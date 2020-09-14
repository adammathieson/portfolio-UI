import {projects} from './projects.js'
import {animations} from './animation.js'
    
let current = 0 
const projectLoader = () => {
    let project = projects[current]
    
    const logos = window.document.querySelectorAll('.tech-logo div')
    const description = window.document.querySelector('#description')
    const images = window.document.querySelector('.image-container')
    const titles = window.document.querySelectorAll('.main-title')

    description.textContent = project.description

    logos.forEach(logo => {
        if (project.icons.includes(logo.id)) {
            logo.style.display = 'block'
        } else {
            logo.style.display = 'none'
        }
    })

    // Set image container width
    let imgWidth = Math.floor((1 / project.images.length) * 100)

    // Clear out old images
    if(images.children.length > 0) {
        while(images.firstChild) {
            images.removeChild(images.firstChild)
        }
    }

    // inset new images
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
    projectLoader()
    animations()
})

projectLoader()
animations()