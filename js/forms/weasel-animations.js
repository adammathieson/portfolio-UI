
const weaselForwardFace = window.document.querySelector("#weasel-forward-face")
const weaselAltFace = window.document.querySelector("#weasel-alt-face")
const weaselScratching = window.document.querySelector("#weasel-scratch")

export function weaselLookBack() {
    weaselAltFace.style.visibility = 'visible'
    weaselForwardFace.style.visibility = 'hidden'
    weaselScratching.style.visibility = 'hidden'
}

export function weaselScratch() {
    weaselAltFace.style.visibility = 'hidden'
    weaselForwardFace.style.visibility = 'hidden'
    weaselScratching.style.visibility = 'visible'

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

// weaselLookBack()
// weaselScratch()
