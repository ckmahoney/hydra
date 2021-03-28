noise()
  .scale(1/10)
  .thresh(t => Math.sin(Math.log2(time)), 0.1)
  .out()
