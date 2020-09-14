import {projects} from './projects.js'
import {animations} from './animation.js'
    

    const projectLoader = (projectArr) => {
        let current = 0
        let project = projectArr[current]
        // console.log(project)
        
        const logos = window.document.querySelectorAll('.tech-logo div')
        const description = window.document.querySelector('#description')
        const images = window.document.querySelector('.image-container')
        const titles = window.document.querySelectorAll('.title-container div')
        const nextBtn = window.document.querySelector('.next-control button')

        
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
            if (title.id === `${project.id}-title`) {
                title.style.display = 'block'
            }
        })

        // Select a project

        nextBtn.addEventListener('click', () => {
            if (current === projectArr.length -1) {
                current = 0
            } else {
                current++
                projectLoader(projects)
                console.log(current)
            }
        })


    
}

projectLoader(projects)
animations()
