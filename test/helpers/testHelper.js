//set the test environment
process.env.NODE_ENV = 'test';

//imports
import chai from 'chai'
global.assert = chai.assert;
global.expect = chai.expect;

chai.should();
chai.config.includeStack = true;
