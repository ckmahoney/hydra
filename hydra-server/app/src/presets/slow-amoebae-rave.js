noise()
  .scale($=> Math.tan(time/1000))
  .thresh(Math.sin(Math.log2(time)), ([...new Array(10)].map((u,i) => (1/i)* ((i%2) ? -1 : 1 ))).fast(0.25))
  .layer(
	osc(_=>Math.sin(time/256)/8,3,2)
	  .mask(src(o0).saturate())
  )
  .out()
