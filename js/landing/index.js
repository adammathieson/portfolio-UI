import { landingAnimations } from './landingAnimations.js'
// Replay animation on resize

// window.resize event listener
var delay = 500
var throttled = false
window.addEventListener('resize', function() {
    if (!throttled) {
        tlLanding.reset()
        tlLanding.restart()
        // landingAnimations()

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
    tlLanding.reset()
    tlLanding.restart()
    landingAnimations()
}

let tlLanding = landingAnimations()