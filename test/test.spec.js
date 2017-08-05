
import myFunction from "../src/components/app"

describe("My function", function() {
    it('does maths', function() {
      const result = myFunction(5,4)
      expect(result).to.eql(6)
    })
})
