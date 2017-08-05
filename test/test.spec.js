import myFunction from '../src/components/app'
import { expect } from 'chai'

describe('My function', function() {
  it('does maths', function() {
    const result = myFunction(5,4)
    expect(result).to.eql(6)
  })
})
