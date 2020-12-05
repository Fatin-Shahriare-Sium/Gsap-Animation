let tl=gsap.timeline()

tl.from(".t1",{duration:1.5,opacity:0,display:"none",fontWeigth:"blod"})
.from(".t2",{duration:1.5,opacity:0,delay:1,fontWeigth:"blod",display:"none"})










.to(".opener",{
    duration:2,
y:-1000,
ease:Power2.easeOut,
delay:0


})






.to("#pic",{
    duration:3,
    // opacity:.0,
    // scaleX:2,
    motionPath:{
        path:[{x:500,y:100},{x:500,y:300},{x:-1,y:30},{x:1000,y:-150}],
        curviness:1,
        autoRotate:true
    }
})
.to(".box",{
    duration:2,
    x:0,y:250

})
.to(".box",{
    duration:1,
    x:1050

})
.to("#pic",{
    duration:3,
    y:.0000000000001
})
.to(".box",{
    duration:1,
    y:180
})





