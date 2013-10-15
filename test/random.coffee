Random = require "../random"

ok = assert
equals = assert.equal
test = it

describe "Random", ->
  
  test "methods", ->
    [
      "angle"
      "between"
      "rand"
      "signed"
    ].forEach (name) ->
      ok(Random[name], name)
