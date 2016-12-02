var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var CountdownForm = require('CountdownForm');

describe('CountdownForm', ()=>{
	it('should exist', () => {
		expect(CountdownForm).toExist();
	});

  it('should call Countdown.handleSubmit', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm  
        handleSubmit={spy} 
        
        strSeconds={"109"} 
      />); 

    var $el = $(ReactDOM.findDOMNode(countdownForm));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call Countdown.handleSubmit', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(
    <CountdownForm  
    handleSubmit={spy} 

    strSeconds={"109a"} 
    />); 

    var $el = $(ReactDOM.findDOMNode(countdownForm));
    TestUtils.Simulate.submit($el.find('form')[0]);    
    expect(spy).toNotHaveBeenCalled();
  });
});