//set the test environment
process.env.NODE_ENV = 'test'

//imports
import chai from 'chai'

chai.should()
chai.config.includeStack = true
