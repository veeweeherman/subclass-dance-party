var makeBlurryDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;
    this.$node = $('<span class="dancer blurry"></span>');
      this.setPosition(top, left);
};

// pseudoclassical plumbing
makeBlurryDancer.prototype = Object.create(makeDancer.prototype);
makeBlurryDancer.prototype.constructor = makeBlurryDancer;

// define class methods
makeBlurryDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.blur();
}
