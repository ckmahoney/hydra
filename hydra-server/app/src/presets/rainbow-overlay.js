let { sin, PI: pi} = Math

 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enterlet {sin, PI: pi } = Math

id = $ =>$

fill = (n, x, _ = id) =>
  [...new Array(n)].map((u,i) =>_(i+x))

pallindrome = (list) =>
  [...list, ...list.concat().reverse()]


voronoi(pallindrome(fill(1000, 0, id)).fast(1/10))
  .color(2)
  .blend(
	osc(1/100)
	.rotate(({time})=>(time%360)/2)
	.modulateRepeatX(
	  osc(25,0.1,0.5)
		.kaleid(50)
		.scale(({time})=>Math.sin(time*1)*0.5+1)
		.modulate(noise(0.6,0.5)),
		0.5)
		.layer(
		  osc(pi*8,0.1,2)
		  .mask(
			shape(4,$=>1,1)
			.modulateRotate(osc(0.1))
		  )
		)
	, 0.35
  )
  .out()
