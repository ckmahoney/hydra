voronoi(1,1,5) //.brightness(()=>Math.random()*0.15)
  .modulatePixelate(osc(0.001,0.5),100)
  .scale( 0.01 )
.add(
  src( o0 )
  .colorama(2)
  , 0.5
  )
.mult(
  shape( [3,4,3,3] )
  .modulateScale( osc(0.2), 0.3 )
  .modulateRotate( osc(2), 0.2 )
  .colorama( $=>Math.sin(time/100))
  .repeat( 1, 2 )
  .modulateScale( osc(0.2), 0.3 )
  .rotate($=>Math.sin(time/100))
  .scale($=>Math.cos(time/100))
  )
.mask(
  noise( 5, 0.5 )
  .repeat( 10 )
)
.blend(
  osc(0.2, -2)
  , $ => Math.sin(time)
)
.out(o0)
