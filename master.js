(function() {
  var Random, U, rand, standardUniformDistribution, τ;

  τ = 2 * Math.PI;

  U = function(min, max) {
    return function() {
      return Math.random() * (max - min) + min;
    };
  };

  standardUniformDistribution = U(0, 1);

  rand = function(n) {
    if (n) {
      return Math.floor(n * standardUniformDistribution());
    } else {
      return standardUniformDistribution();
    }
  };

  module.exports = Random = {
    angle: function() {
      return rand() * τ;
    },
    between: function(min, max) {
      return rand() * (max - min) + min;
    },
    rand: rand,
    signed: function(n) {
      if (n == null) {
        n = 1;
      }
      return (n * rand()) - (n / 2);
    }
  };

}).call(this);

//# sourceURL=random.coffee