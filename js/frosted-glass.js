
const arrow = document.querySelector('#arrow')
const menu = document.querySelector('.menu-right')
const tabs = document.querySelectorAll('.menu-right nav a')

const tl = gsap.timeline({defaults:{duration: 1}})

export const menuOpen = () => {
    
}

export const arrowAnimation = () => {
    const rotate = tl.to("#arrow", {rotate: 180})
    
    if (rotate.reversed()) {
        console.log(tl.reversed())
        tl.play()
    } else {
        // console.log(tl.reversed())
        tl.reverse()
    }
}

arrow.addEventListener('click', arrowAnimation )


export const tabsAnimation = () => {
    
    
    arrow.addEventListener('click', () => {
        // console.log(tl.play())
        // console.log(tl.reversed())


        // if (tl.reversed()) {
        //     tl.play()
        // } else (
        //     tl.reverse()
        // )
        // gsap.to("#arrow", {duration: 1, rotate: 180, xPercent: -30})d

        menu.classList.toggle('menu-active')
        tabs.forEach((tab, index) => {
            if (tab.style.animation) {
                tab.style.animation = ''
            } else {
                tab.style.animation = `tabs-fade-in 0.5s ease forwards ${index/7 + 0.3}s`
            }
            // console.log(index/7)
            // console.log(tab.style.animation)
        })
    })

}
