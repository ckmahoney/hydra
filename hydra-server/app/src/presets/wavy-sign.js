noise( 5, 10 )
.colorama($=>Math.sin(time))
.blend(
  noise( 10 )
    .colorama(2)
  , 0.5
)
.mask(
  shape(7).rotate($=>Math.sin(time))
  .blend(
    shape( 3 )
    .colorama()
    .rotate($=>Math.cos(time))
    .modulateScale(osc())
  , 0.5
  )
)
.out()
