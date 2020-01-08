var tl = new TimelineMax();



tl.from(".bag1", 1.5, {alpha: 0, ease: Back.easeInOut, x: -50})
    .from(".bag2", 1.5, {alpha: 0, ease: Back.easeInOut, x: -50}, "-=1")
    .from(".nicole", 2.5, {alpha: 0, opacity: 1}, "-=.5")
    .from(".text", 2.5, {alpha: 0, opacity: 1}, "-=1.5")
    .from(".web", 2.5, {alpha: 0, opacity: 1}, "-=1.5")
    .from(".sale", 1.5, {alpha: 0, ease: Elastic.easeInOut.config(.5, 0.1), y: -150}, "-=2")


