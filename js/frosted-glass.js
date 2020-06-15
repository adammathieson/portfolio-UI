
export const tabsAnimation = () => {
    const tabs = document.querySelectorAll('.menu-right nav a')
    let duration = 1

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.animation = `fade-in ${duration}s`
        duration += 1
    }

}