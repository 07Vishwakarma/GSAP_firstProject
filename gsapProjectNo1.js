let tl=gsap.timeline();
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    duration:1,
    delay:0.7,
    stagger:0.3,
    opacity:0
})
tl.from("img",{
    x:50,
    rotate:140,
    opacity:0,
    delay:0.7,
    stagger:0.3

})