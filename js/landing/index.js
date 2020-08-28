// Text morph
var adamChars = document.querySelectorAll('#adam path')
var mathiesonChars = document.querySelectorAll('#mathieson path')
var webChars = document.querySelectorAll('#web path')
var developerChars = document.querySelectorAll('#developer path')

var adam = document.querySelector('#adam')

var curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"

// console.log(adamChars)
// console.log(mathiesonChars)
// console.log(webChars)
// console.log(developerChars)

// Main landing timeline
var tl = anime.timeline({
    duration: 3000,
})

// first name pop up
tl.add({
    targets: "#adam",
    translateY: [50, 0],
    opacity: 1,
    duration: 1500,
    delay: 1000,
    easing: 'easeInOutQuint',
})

// last name drop down
.add({
    targets: "#mathieson",
    translateY: [-50, 0],
    opacity: 1,
    duration: 1500,
    easing: 'easeInOutQuint',
}, '-=1500')

// Page transition ----> reveals img
.add({
    targets: '#landing-bg-full',
    d: [
        { value: curvedBg
        }],
    easing: 'easeOutQuad',
    direction: 'alternate',
    duration: 2000,
    loop: true,
}, '-=1500')

// fade out first and last name
.add({
    targets: [ ...adamChars, ...mathiesonChars ],
    opacity: 0,
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    stagger: 100,
    delay: anime.stagger(300),
    loop: true,
})

// fade in title
.add({
    targets: [ ...webChars, ...developerChars],
    opacity: 1,
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    stagger: 100,
    delay: anime.stagger(300),
    loop: true,
}, '-=4000')