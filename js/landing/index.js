// Text morph

// var fullBg = document.querySelector("#")

var curvedBg = "M0 0H1086.91C1086.91 0 1261.61 178.138 907.481 530.245C627.731 808.399 775.72 1000 775.72 1000H0V0Z"

var landingMorph = anime({
    targets: '.landing-bg',
    d: [
      { value: curvedBg
      }],
    easing: 'easeOutQuad',
    direction: 'alternate',
    duration: 10000,
    loop: true,



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
// Page transition ----> reveals img