// Text morph
var adamChars = document.querySelectorAll('#adam path')
var mathiesonChars = document.querySelectorAll('#mathieson path')
var webChars = document.querySelectorAll('#web path')
var developerChars = document.querySelectorAll('#developer path')

var curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"
var curvedBgMobile = "M0 0H824.265C824.265 0 1228.7 207.512 824.265 540.025C485.813 818.285 1121 1000 1121 1000H0V0Z"

// var adam = document.querySelector('#adam')

// Nav
var navTabs = document.querySelectorAll('.navbar nav a')

// Device
var page = document.querySelector('#landing-svg')
var landingBg = document.querySelector('.landing-container')
let deviceWidth = window.innerWidth


// Set height of transition svg, bg element
function setBackgroundHeight() {
    var curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"
    var curvedBgMobile = "M0 0H824.265C824.265 0 1228.7 207.512 824.265 540.025C485.813 818.285 1121 1000 1121 1000H0V0Z"
    // deviceWidth = window.innerWidth
    // console.log(deviceHeight, deviceWidth)
    deviceWidth = window.innerWidth
    var deviceHeight = window.innerHeight
    page.setAttribute('height', String(deviceHeight))
    landingBg.setAttribute('height', String(deviceHeight)+'1')
    console.log('->>> ', landingBg.getAttribute('height'), deviceWidth)
    deviceWidth < mobileWidth ? console.log("curvedBgMobile") : console.log('curvedBg')
    return deviceWidth < mobileWidth ? curvedBgMobile : curvedBg
}
// setElementHeight()

var tabletWidth = 620
var mobileWidth = 450
// console.log(deviceWidth)

// Main landing timeline
var tl = anime.timeline({
    duration: 3000,
})

// first name pop up
tl.add({
    targets: "#adam",
    translateY: [50, 0],
    opacity: 1,
    duration: 2000,
    delay: 1000,
    easing: 'easeOutQuad',
})

// last name drop down
.add({
    targets: "#mathieson",
    translateY: [-50, 0],
    opacity: 1,
    duration: 2000,
    easing: 'easeOutQuad',
}, '-=2000')

// Page transition ----> reveals img
.add({
    targets: '#landing-bg-full',
    d: [
        { value: setBackgroundHeight()
        }],
    easing: 'easeOutQuad',
    direction: 'alternate',
    duration: 2000,
    loop: true,
}, '-=2000')

// fade in tabs
.add({
    targets: deviceWidth > mobileWidth ? [...navTabs].reverse() : [...navTabs],
    opacity: 1,
    easing: 'linear',
    duration: 700,
    delay: anime.stagger(250),
})

// fade out first and last name
.add({
    targets: [ ...adamChars, ...mathiesonChars ],
    opacity: 0,
    easing: 'linear',
    duration: 700,
    direction: 'alternate',
    delay: anime.stagger(250),
    loop: true,
}, '+=1000')

// fade in title
.add({
    targets: [ ...webChars, ...developerChars],
    opacity: 1,
    easing: 'linear',
    duration: 700,
    direction: 'alternate',
    delay: anime.stagger(250),
    loop: true,
}, '-=3000')

// Replay animation on resize
// console.log(tl)
// async function restartAnimation() {
    //     await setElementHeight()
    //     // console.log(window.innerHeight)
    //     // tl.update()
    //     tl.restart()
    // }
    
    // window.resize event listener
var delay = 250
var throttled = false
window.addEventListener('resize', function() {
    if (!throttled) {
        setBackgroundHeight()
        tl.restart()
        throttled = true;
      // set a timeout to un-throttle
        setTimeout(function() {
            throttled = false;            
        }, delay);
    }  
});

let resizeId;
window.addEventListener('resize', () => {
    clearTimeout(resizeId)
    resizeId = setTimeout(doneResizing, 500)

})


function doneResizing(){
    setBackgroundHeight()
    tl.reset()
    tl.restart()
}