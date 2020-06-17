
export const menuOpen = () => {

}

export const tabsAnimation = () => {
    const menu = document.querySelector('.menu-right')
    const arrow = document.querySelector('#arrow')
    const tabs = document.querySelectorAll('.menu-right nav a')
    
    arrow.addEventListener('click', () => {
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