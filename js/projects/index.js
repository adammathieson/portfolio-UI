import {projects} from './projects.js'
import {animations} from './animation.js'
// console.log(projects)

    const projectLoader = (projectArr, id) => {
        let project = projectArr[id]
        // console.log(project.icons)
        
        const logos = window.document.querySelectorAll('.tech-logo div')
        const description = window.document.querySelector('#description')
        const images = window.document.querySelector('.image-container')
        const titles = window.document.querySelectorAll('.title-container div')

        
        description.textContent = project.description

        logos.forEach(logo => {
            if (project.icons.includes(logo.id)) {
                logo.style.display = 'block'
            }
        })

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
            if (title.id === `${id}-title`) {
                title.style.display = 'block'
            }
            // console.log(title)
        })


    
}

projectLoader(projects, 'endrsd')
animations()
