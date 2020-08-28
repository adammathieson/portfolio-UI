// Text morph
var adamChars = document.querySelectorAll('#adam path')
var mathiesonChars = document.querySelectorAll('#mathieson path')
var webChars = document.querySelectorAll('#web path')
var developerChars = document.querySelectorAll('#developer path')

var adam = document.querySelector('#adam')

// console.log(adamChars)
// console.log(mathiesonChars)
// console.log(webChars)
// console.log(developerChars)
var firstNamePopUp = anime({
    targets: "#adam",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuint',
})

var lastNamePopDown = anime({
    targets: "#mathieson",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuint',
})

var nameMorph = anime({
    targets: [ ...adamChars, ...mathiesonChars ],
    opacity: 0,
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    stagger: 100,
    delay: anime.stagger(300),
    loop: true,
    autoplay: false,
})

var titleMorph = anime({
    targets: [ ...webChars, ...developerChars],
    opacity: 1,
    easing: 'linear',
    duration: 2000,
    direction: 'alternate',
    stagger: 100,
    delay: anime.stagger(300),
    loop: true,
    autoplay: false,
})

// Page transition ----> reveals img
var curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"

var landingMorph = anime({
    targets: '.landing-bg',
    d: [
        { value: curvedBg
        }],
    easing: 'easeOutQuad',
    direction: 'alternate',
    duration: 5000,
    loop: true,
    delay: 1000,
    // autoplay: false,
});
    console.log(landingMorph)

    //   var tl = anime.timeline({
    //     easing: 'easeOutExpo',
    //     duration: 750
    //   });
    
    //   // Add children
    //   tl
    //   .add({
        //     targets: '.basic-timeline-demo .el.triangle',
        
        //   });