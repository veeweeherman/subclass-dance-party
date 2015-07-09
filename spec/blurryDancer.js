describe("blurryDancer", function() {

  var blurryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blurryDancer = new makeBlurryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blurryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blurryDancer.$node, 'fadeToggle');
    blurryDancer.step();
    expect(blurryDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blurryDancer, "step");
      expect(blurryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(blurryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blurryDancer.step.callCount).to.be.equal(2);
    });
  });
});
