

const projectStroke = anime({
    targets: '.project-title-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    // direction: 'alternate',
    // endDelay: 1000,
    delay: 1000,
    // loop: true
});

// console.log(projectStroke)