$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer)

    dancer.$node.on("mouseover", function(event){
      $('.dancer').css({'transform': 'rotate(180deg)' })
      // alert("hello");
    });

  });

    

  $(".lineUp").on("click", function(event){
    window.dancers.forEach(function(dancer){
        dancer.lineUp();
    });
  })

// console.log($('.dancer'))



});

  //   var dancerLineUpFunctionName = $(this).data("data-dancer-lineup-function-name");
  //   var dancerLineUpFunction = window[dancerLineUpFunctionName];

  //   // loop thru the array that holds all dancer, and invoke lineUp() on each of them
  //   // loop thru the div with all the spans w class "dancer"

  //   for (var i = 0; i < $('body.div.span').length; i++) {
  //     if ($('span').hasClass("dancer")) {
  //       makeDancer.lineUp($('span'))
  //     }
  
  //   };
  // });

