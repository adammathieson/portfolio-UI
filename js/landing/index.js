import { tlLandMain, tlTitleReveal, setBackgroundHeight } from './landingAnimations.js'
// Replay animation on resize

// window.resize event listener
var delay = 500
var throttled = false
window.addEventListener('resize', async function() {
    if (!throttled) {
        setBackgroundHeight()
        tlLandMain.reset()
        tlLandMain.restart()

        throttled = false
      // set a timeout to un-throttle
        setTimeout(function() {
            throttled = true       
        }, delay)
    }  
});

let resizeId
window.addEventListener('resize', () => {
    clearTimeout(resizeId)
    resizeId = setTimeout(doneResizing, 500)
})

function doneResizing() {
    tlLandMain.reset()
    tlLandMain.restart()
    landingAnimations()
}

// let tlLanding = landingAnimations()