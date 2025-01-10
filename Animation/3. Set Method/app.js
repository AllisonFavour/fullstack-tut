gsap.set('.box', {
    opacity: 0,
    backgroundColor: 'yellow'
});

gsap.to('.box', {
    opacity: 1,
    backgroundColor: 'crimson',
    duration: 3,
    y: 10,
    repeat: -1,
    yoyo: true,
})