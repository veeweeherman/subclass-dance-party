var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;
  this.$node = $('<span class="dancer" class="dancer blinky"><img src="http://ak-hdl.buzzfed.com/static/enhanced/webdr03/2013/3/10/11/anigif_enhanced-buzz-1725-1362928275-0.gif"></span>');
  this.setPosition(top, left);
  // this.lineUp(bottom)
};

// pseudoclassical plumbing
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// define class methods
makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}





  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
