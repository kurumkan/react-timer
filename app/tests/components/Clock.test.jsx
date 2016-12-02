var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', ()=>{
	it('should exist', () => {
		expect(Clock).toExist();
	});
  

  describe('should render clock to output',()=>{
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      //$el = dom root of the component
      //findDOMNode converts our component into html      
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe("01:02");
    });
  });
  
  describe('formatSeconds', ()=>{
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = "10:15";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = "01:01";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
  
});