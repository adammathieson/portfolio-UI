// Text morph

// var fullBg = document.querySelector("#")

var curvedBg = "M0 0.00146484H1059.52C1059.52 0.00146484 1165.78 165.079 838.55 491.373C580.049 749.135 716.797 926.689 716.797 926.689H0V0.00146484Z"

var landingMorph = anime({
    targets: '.landing-bg',
    d: [
      { value: curvedBg
      }],
    easing: 'easeOutQuad',
    direction: 'alternate',
    duration: 2000,
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