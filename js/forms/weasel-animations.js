
const weaselForwardFace = window.document.querySelector("#weasel-forward-face")
const weaselAltFace = window.document.querySelector("#weasel-alt-face")
const weaselScratching = window.document.querySelector("#weasel-scratch")

function weaselLookForward() {
    weaselAltFace.style.visibility = 'hidden'
    weaselForwardFace.style.visibility = 'visible'
    weaselScratching.style.visibility = 'hidden'
    tlFootStomp.pause()
}
function weaselLookBack() {
    weaselAltFace.style.visibility = 'visible'
    weaselForwardFace.style.visibility = 'hidden'
    weaselScratching.style.visibility = 'hidden'
    tlFootStomp.pause()

}

function weaselScratch() {
    weaselAltFace.style.visibility = 'hidden'
    weaselForwardFace.style.visibility = 'hidden'
    weaselScratching.style.visibility = 'visible'
    tlFootStomp.pause()

    var legScratch = anime({
        targets: '#scratch-leg',

        rotate: [-5, 5],
        translateX: [0, 5],
        duration: 80,
        easing: 'cubicBezier(0.475, 0.005, 1.000, 0.425)',
        loop: true,
        direction: 'alternate',
    })
}
var tlFootStomp = anime.timeline({
    loop: true, 
    direction: 'alternate', 
    easing: 'linear',
    duration: 100,
})
    .add ({
        targets: '#left-foot',
        translateY: [0, -3],
    })
    .add ({
        targets: '#right-foot',
        translateY: [-3, 0],
    })

function weaselFootStomp() {
    weaselAltFace.style.visibility = 'hidden'
    weaselForwardFace.style.visibility = 'visible'
    weaselScratching.style.visibility = 'hidden'
    
    tlFootStomp.restart()
}

const moves = [
    weaselLookBack,
    weaselScratch,
    weaselLookForward,
    weaselFootStomp,
]

function weaselChange() {
   let index = Math.round(Math.random() * moves.length)
   let time = Math.max(Math.round(Math.random() * 2000), 500)
    // console.log(index, time)
    setTimeout(() => {
        if (moves[index]) {
            moves[index].call()
        }        
        weaselChange()
    }, time)
}

weaselChange()