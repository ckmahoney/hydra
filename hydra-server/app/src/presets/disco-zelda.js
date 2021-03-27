let { tan,cotan, asin, log2, sin, PI: pi} = Math

gradient(0.5)
.hue(0.3)
.saturate(3)
.blend(
  src(o0)
  .mask(
	shape(3)
	.rotate(_ => (time/4) % 360 )
	.scale( _=>sin(time/100))
  )
  , 0.5
)
.repeat(3)
.out()
