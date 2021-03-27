let { log2, sin, PI: pi} = Math

 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enterlet {sin, PI: pi } = Math

id = $ =>$

fill = (n, x, _ = id) =>
  [...new Array(n)].map((u,i) =>_(i+x))

pallindrome = (list) =>
  [...list, ...list.concat.reverse()]



noise()
  .scale(1/10)
  .thresh(sin(log2(time)), 0.1)
  .out()
