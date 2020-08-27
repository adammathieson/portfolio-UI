// Text morph
var adamChars = document.querySelectorAll('#adam path')
var mathiesonChars = document.querySelectorAll('#mathieson path')
var webChars = document.querySelectorAll('#web path')
var developerChars = document.querySelectorAll('#developer path')

// var fullBg = document.querySelector("#")
console.log(adamChars)
console.log(mathiesonChars)
console.log(webChars)
console.log(developerChars)

var nameMorph = anime({
    targets: adamChars,
    scaleX: 0,
    easing: 'linear',
    duration: 1000,
    stagger: 100,
    delay: anime.stagger(1000),
    transformOrigin: "13% 0%"
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