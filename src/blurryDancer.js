var makeBlurryDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;
    this.$node = $('<span class="dancer" id="blurryDancer"><img src="http://s3-ec.buzzfed.com/static/2014-10/31/14/enhanced/webdr10/anigif_enhanced-24286-1414778847-2.gif"></span>');
    this.setPosition(top, left);
    this.degree = 0;
};

// pseudoclassical plumbing
makeBlurryDancer.prototype = Object.create(makeDancer.prototype);
makeBlurryDancer.prototype.constructor = makeBlurryDancer;

// define class methods
makeBlurryDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle("explode");
  this.$node.rotate(this.degree)
	this.degree += -5;
}

jQuery.fn.rotate = function(degree){
	$(this).css({'transform': 'rotate('+degree+'deg)'})
	return $(this)
}