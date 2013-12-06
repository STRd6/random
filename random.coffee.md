Random
======

Some useful methods for generating random things.

Helpers
-------

`τ` is the circle constant.

    τ = 2 * Math.PI

`U` returns a continuous uniform distribution between `min` and `max`.

    U = (min, max) ->
      ->
        Math.random() * (max - min) + min

`standardUniformDistribution` is the uniform distribution between [0, 1]

    standardUniformDistribution = U(0, 1)

`rand` is a helpful shortcut for generating random numbers from a standard
uniform distribution or from a discreet set of integers.

    rand = (n) ->
      if n
        Math.floor(n * standardUniformDistribution())
      else
        standardUniformDistribution()

Methods
-------

    module.exports = Random =

Returns a random angle, uniformly distributed, between 0 and τ.

      angle: ->
        rand() * τ

A binomial distribution.

      binomial: (n=1, p=0.5) ->
        [0...n].map ->
          if rand() < p
            1
          else
            0
        .reduce (a, b) ->
          a + b
        , 0

Returns a random float between two numbers.

      between: (min, max) ->
        rand() * (max - min) + min

Returns random integers from [0, n) if n is given.
Otherwise returns random float between 0 and 1.

      rand: rand

Returns random float from [-n / 2, n / 2] if n is given.
Otherwise returns random float between -0.5 and 0.5.

      signed: (n=1) ->
        (n * rand()) - (n / 2)
