gradient(0.1)
.blend( 
  osc(1, 2)
  , $ => Math.sin(time)
)
.brightness( $ => Math.sin(time/1) - 0.1)
.diff(osc().repeat(3,50).scale(0.003))
.out()