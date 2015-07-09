var makeTinyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;
  // this.$node = $('<span class="dancer tiny"></span>');
  this.$node = $('<span class="dancer" class="dancer tiny"><img src="http://i.imgur.com/vDNZM1D.gif"></span>');
  this.setPosition(top, left);
};

// pseudoclassical plumbing
makeTinyDancer.prototype = Object.create(makeDancer.prototype);
makeTinyDancer.prototype.constructor = makeTinyDancer;

// define class methods
makeTinyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
 
  this.$node.toggle("explode")
  
}
