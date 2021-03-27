osc(1.407, 0.048, 1.364)
  .kaleid()
  .mult(osc(36.263, 0.001, 0.288).rotate(1.541))
  .blend(o0, 0.442)
  .modulateScale(osc(11.88, 0.062), -0.045)
  .scale(
    0.206,
    () => 0.185 + 0.027 * Math.sin(0.099 * time)
  )
  .out(o0);
