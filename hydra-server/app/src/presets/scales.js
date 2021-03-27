let { round, log, log2, log10, exp, sin, cos, asin, acos, tan, cot, PI: pi } = Math

id = (i) =>
  i

lfo = (hz=1) => osc(pi*hz,1,0).pixelate(10,1)


fill = (n, _ = id) =>
  [...new Array(n)].map((u,i) =>_(i))

fillX = (n, x, _ = id) =>
  [...new Array(n)].map((u,i) =>_(i+x))

pallindrome = (list) =>
  [...list, ...list.concat().reverse()]

out = (src, buff) =>
  _ => src.scale(1,1,window.innerWidth/window.innerHeight).out()

breathingShape = ($) =>
  shape(fillX(50, 2, log2).map(round).fast(0.25), _ => sin(time)/4, 1)
  .rotate(_=>(time/600)%360)
  .repeat(10, 5)


out(
shape(3).color(1,0,0).mult(lfo())
  .add(shape(4).color(0,0,1).mult(lfo().invert()),1)
  .repeat()
  .modulateKaleid(osc(5,0.25,2),50)
  .scale(1/3)

)
