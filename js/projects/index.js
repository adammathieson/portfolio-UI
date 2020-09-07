import {projects} from './projects.js'
import {animations} from './animation.js'
// console.log(projects)

    const projectLoader = (projectArr, id) => {
        let project = projectArr[id]
        // console.log(project.icons)
        
        const logos = window.document.querySelectorAll('.tech-logo div')
        const description = window.document.querySelector('#description')
        const images = window.document.querySelector('.image-container')
        
        description.textContent = project.description

        logos.forEach(logo => {
            if (project.icons.includes(logo.id)) {
                logo.style.display = 'block'
            }
        })

        project.images.forEach(url => {
            const img = document.createElement('img')
            img.src = url
            images.appendChild(img)
        })
    
}

projectLoader(projects, 'wmp')
animations()
