// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // this.setPosition = (top, left)
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
// console.log("this.setPosition: ",this.setPosition)
  //this.setPosition(top, left);
  // use jQuery to create an HTML <span> tag
};

// pseudoclassical plumbing


// define class methods
makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  this.$node.css({'top':top, 'left':left});
};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

makeDancer.prototype.lineUp = function(){
  // this.setPosition(top,0);
  // this.$node.css({'transition': 'width 2s, height 4s'});
  this.$node.animate({left:0}, 10000)
};
