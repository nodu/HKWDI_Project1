

angular.module('tickeyApp')
	.directive("tickleMe", function(){
	  return {
	    restrict: 'A', // E or EA
	    link: function (scope, element, attrs) {
	      // <div data-action="">
	      // console.log(attrs.something);
	      // console.log(attrs.somethingNotExist);

	      // console.log(scope.somethingNotExist);

	      element.bind('click', function() {
	      	alert("Don't tickle me ~ ");
	      });
	      element.bind("mouseenter", function (){
					// do something
					console.log("something has been done")

				});
				element.bind("mouseleave", function (){
					// do something
					console.log("something has been UNdone")

				});

	    }
	  }
	})
