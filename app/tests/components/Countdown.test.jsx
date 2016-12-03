var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown', ()=>{
	it('should exist', () => {
		expect(Countdown).toExist();
	});

  describe('handleSubmit', ()=>{
    
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSubmit(10);
      expect(countdown.state.count).toBe(10);    
      expect(countdown.state.countdownStatus).toBe("started");

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);    
        done();
      }, 1001);
    });
  });
  
  describe('start stop timer', ()=>{
    
    it('should stop countdown on 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSubmit(2);     

      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);    
        done();
      }, 4001);
    });
    it('should pause timer', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSubmit(20);     
      countdown.handleStatusChange("paused");
      var currentCount = countdown.state.count;
      setTimeout(()=>{
        expect(countdown.state.count).toBe(currentCount);    
        expect(countdown.state.countdownStatus).toBe('paused');    
        done();
      }, 3001);
    });
    it('should stop timer', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSubmit(20);     
      countdown.handleStatusChange("stopped");      
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);    
        expect(countdown.state.countdownStatus).toBe('stopped');    
        done();
      }, 3001);
    });
  });
});