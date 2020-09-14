import {projects} from './projects.js'
import {animations} from './animation.js'
    
let current = 0 
const projectLoader = () => {
    let project = projects[current]
    // console.log(project)
    
    const logos = window.document.querySelectorAll('.tech-logo div')
    const description = window.document.querySelector('#description')
    const images = window.document.querySelector('.image-container')
    const titles = window.document.querySelectorAll('.main-title')
    // console.log(images.children)

    
    description.textContent = project.description

    logos.forEach(logo => {
        if (project.icons.includes(logo.id)) {
            logo.style.display = 'block'
        }
    })


    // Clear out any images in container
    if(images.children.length > 0) {
        console.log(images.children.length)
        while(images.firstChild) {
            images.removeChild(images.firstChild)
        }
    }

    // to set image container width
    let imgWidth = Math.floor((1 / project.images.length) * 100)

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
                // console.log(title)
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

})
// projectLoader(projects)
animations()
