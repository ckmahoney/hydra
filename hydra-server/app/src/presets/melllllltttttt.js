voronoi( 5, 10 ) 
.colorama($=>Math.cos(time))
.blend(
  noise( 10 )
    .colorama(2)
  , 0.5
  )
.mask(
  shape(3).rotate($=>Math.sin(time))
  .blend( 
    shape( 133 )
    .colorama()
    .rotate($=>-Math.cos(time))
    .modulateScale(osc(10))
  , 0.5
  )
)
. out()