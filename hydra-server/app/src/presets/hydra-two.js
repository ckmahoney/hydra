osc(0.2, 2)
  .color(0.2, _=>Math.sin(time), 0.2)
  .posterize(0.1)
  .blend(
    shape(666)
    .colorama(2)
    .repeat(100, 100)
    .modulateKaleid(osc(0.5))
    , _ => Math.sin(time/1000)
  )
  .blend(
    shape(3)
    .repeat(10, 10)
    .colorama()
    .modulateKaleid(osc(0.5))
    , _ => Math.cos(time/1000)/2
  )
  .out()