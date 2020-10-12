import './landingAnimations.js'
import { pageTransition } from './pageTransition.js'
// Replay animation on resize

// window.resize event listener
var delay = 500
var throttled = false
window.addEventListener('resize', async function() {
    if (!throttled) {
        throttled = false
        pageTransition()
        // tl_pageTransition.reset()
        // tl_pageTransition.play()

        // console.log(tl_pageTransition)

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
    // tl_pageTransition.reset()
    // tl_pageTransition.play()
    pageTransition()
    // tl_pageTransition.play()
    // pageTransition()
    // setBackgroundHeight()
    // tlLandMain.reset()
    // tlLandMain.play()
    // landingAnimations()
}
pageTransition()
// tl_pageTransition.play()
// let tlLanding = landingAnimations()