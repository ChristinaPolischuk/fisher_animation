// initialise ScrollMagic controller
var controller = new ScrollMagic.Controller();

// create Tween
var tween = TweenMax.to("#js-animation", 1.0, {
	backgroundPosition: "0 100%",
	ease: SteppedEase.config(31)
})

// build scene
var scene = new ScrollMagic.Scene({ duration: 1500 })
	.triggerHook("onCenter")
	.setPin("#js-pinned")
	.setTween(tween)
	.addTo(controller);