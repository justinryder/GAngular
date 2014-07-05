(function(){
    "use strict";

    GAngular.directive('inputtext', function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            template:'<input type="text"/>',
            scope: { 
                //if there were attributes it would be shown here
            },
            link:function (scope, element, attrs, ctrl) {
                // DOM manipulation may happen here.      
            }
        }
    });

    GAngular.directive('version', function(version) {
      return function(scope, elm, attrs) {
        elm.text(version);
      };
    });
}())