Random = require "../random"

ok = assert
equals = assert.equal
test = it

describe "Random", ->
  
  test "methods", ->
    [
      "angle"
      "binomial"
      "between"
      "rand"
      "signed"
    ].forEach (name) ->
      ok(Random[name], name)

  it "should have binomial", ->
    result = Random.binomial()

    assert result is 1 or result is 0
