//trying to get closer
//by Ritchse
//instagram.com/ritchse

osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
	.modulateScale(noise(3.5,0.25).modulateScale(osc(15).rotate(()=>Math.sin(time/2))),0.6)
	.color(1,0.5,0.4).contrast(1.4)
	//.add(src(o0).modulate(o0,.04),.6)
	.brightness(0.1).contrast(1.2)
	.modulateScale(osc(0.25),0.1)
  .out()
