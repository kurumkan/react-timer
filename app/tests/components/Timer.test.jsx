var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Timer = require('Timer');

describe('Timer', ()=>{
	it('should exist', () => {
		expect(Timer).toExist();
	});
  describe('start stop pause timer', ()=>{   
     it('should start on countdown status "started" ', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange("started");
      setTimeout(()=>{
        expect(timer.state.count).toBe(1);    
        expect(timer.state.countdownStatus).toBe("started");    
        done();
      }, 1001);
    }); 

    it('should pause on countdown status "paused" ', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10})
      timer.handleStatusChange("started");
      timer.handleStatusChange("paused");
      setTimeout(()=>{
        expect(timer.state.count).toBe(10);    
        expect(timer.state.countdownStatus).toBe("paused");    
        done();
      }, 1001);
    });  

    it('should stop on countdown status "stopped" ', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10})
      timer.handleStatusChange("started");
      timer.handleStatusChange("stopped");
      setTimeout(()=>{
        expect(timer.state.countdownStatus).toBe("stopped");    
        expect(timer.state.count).toBe(0);    
        done();
      }, 1001);
    });  

  });
});