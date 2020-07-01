const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")


const tl = gsap.timeline({repeat: 3, repeatDelay: .1, yoyo: true})
    tl.set("#nose", {transformOrigin: "50% 50%"})
    tl.to("#lEye", {rx: 0, duration: .1})
    tl.to("#rEye", {r: 0, duration: .1})
    tl.fromTo("#nose", {rotate: -10}, {rotate: 10, duration: .1})

// gsap.timeline().from("#rEye", {r: 0})
console.log('forms!!!')