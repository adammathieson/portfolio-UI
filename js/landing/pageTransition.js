var page = document.querySelector('#landing-svg')
var landingContainer = document.querySelector('.landing-container')

var tabletWidth = 620
var mobileWidth = 450

function setPageTransition() {
    let transitionCurve
    const curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"
    const curvedBgMobile = "M0 0H824.265C824.265 0 1228.7 207.512 824.265 540.025C485.813 818.285 1121 1000 1121 1000H0V0Z"
    const deviceWidth = window.innerWidth
    const deviceHeight = window.innerHeight
    landingContainer.setAttribute('height', String(deviceHeight))
    page.setAttribute('height', String(deviceHeight))
    if (deviceWidth < mobileWidth) {
        transitionCurve = curvedBgMobile
    } else {
        transitionCurve = curvedBg
    }
    const tl_pageTransition = anime.timeline({
    })
    .add({
        targets: '#landing-bg-full',
        d: [
            { value: transitionCurve
            }],
        easing: 'easeOutQuad',
        direction: 'alternate',
        duration: 1500,
    })
}


export function pageTransition() {
    setPageTransition()
}
