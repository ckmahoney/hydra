shape(
  [4, 0.574, 6].fast(0.123).smooth(1.258),
  0,
  [0.2, 0.7].smooth(1)
)
  .color(0.2, 0.4, 0.3)
  .scrollX(() => Math.sin(time * 0.022))
  .add(
    shape(
      [4, 5, 11.017].fast(0.1).smooth(1),
      0.000001,
      [0.2, 0.865, 0.837, 0.3].smooth(1)
    )
      .color(0.6, 0.185, 0.5)
      .scrollY(0.179)
      .scrollX(() => Math.sin(time * 0.33))
  )
  .add(
    shape(
      [4, 2.114, 8.818].fast(0.124).smooth(0.778),
      0,
      [0.2, 0.7, 0.3].smooth(0.773)
    )
      .color(0.29, 0.4, 0.6)
      .scrollY(-0.35)
      .scrollX(() => Math.sin(time * 0.456) * -1)
  )
  .add(
    src(o0)
      .shift(0.002, 0.01, 0.001)
      .scrollX(
        [0.03, -0.033].fast(0.097).smooth(0.316)
      )
      .scale(
        [1.05, 0.416].fast(0.162).smooth(1),
        [1.273, 1.629, 1].fast(0.492).smooth(0.43)
      ),
    1.22
  )
  .modulate(voronoi(5.415, 2, 0.421))
  .out();
