let { tan,cotan, asin, log2, sin, PI: pi} = Math

id = $ =>$

fill = (n, x, _ = id) =>
  [...new Array(n)].map((u,i) =>_(i+x))

pallindrome = (list) =>
  [...list, ...list.concat.reverse()]

noise()
  .scale($=> tan(time/1000))
  .thresh(sin(log2(time)), fill(10, 0, i => (1/i)* ((i%2) ? -1 : 1 )).fast(0.25))
  .layer(
	osc(_=>sin(time/256)/8,3,2)
	  .mask(src(o0).saturate())
  )
  .out()
