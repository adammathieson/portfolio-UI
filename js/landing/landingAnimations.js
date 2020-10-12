// Text morph
var adamChars = document.querySelectorAll('#adam path')
var mathiesonChars = document.querySelectorAll('#mathieson path')
var webChars = document.querySelectorAll('#web path')
var developerChars = document.querySelectorAll('#developer path')

// Nav
var navTabs = document.querySelectorAll('.navbar nav a')

// Device
let deviceWidth = window.innerWidth
    
var tabletWidth = 620
var mobileWidth = 450

// Main landing timeline
export var tl_tabReveal = anime.timeline({
})
.add({
    targets: deviceWidth > mobileWidth ? [...navTabs].reverse() : [...navTabs],
    opacity: 1,
    easing: 'linear',
    duration: 700,
    delay: anime.stagger(250),
})



export var tl_titleReveal = anime.timeline({
    // duration: 4000,
    loop: true,
    repeatDelay: 4000,
    direction: 'alternate',
    // repeat: -1
})
    // first name pop up
.add({
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
// fade out first and last name
.add({
    targets: [ ...adamChars, ...mathiesonChars ],
    opacity: 0,
    easing: 'linear',
    duration: 500,
    // repeat: 10,
    // direction: 'alternate',
    delay: anime.stagger(250),
    loop: true,
})

// fade in title
.add({
    targets: [ ...webChars, ...developerChars],
    opacity: 1,
    easing: 'linear',
    duration: 500,
    // direction: 'alternate',
    delay: anime.stagger(250),
    loop: true,
}, '-=3000')
.add({
    targets: [ ...webChars],
    translateX: [0, 30],
    translateY: [0, -30],
    easing: 'linear',
    duration: 6000,
})
.add({
    targets: [ ...developerChars],
    translateX: [0, -30],
    translateY: [0, 30],
    easing: 'linear',
    duration: 6000,
}, '-=6000')
.add({
    targets: [ ...webChars, ...developerChars],
    opacity: [1, 0],
    easing: 'linear',
    duration: 2000,
}, '-=400')
.add({
    targets: [ ...webChars, ...developerChars],
    opacity: 0,
    duration: 2000,
})