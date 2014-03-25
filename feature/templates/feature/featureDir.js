define(['ang/app'], function (app) {
    app.register.directive('<%= featureName %>', [function(){
    	return function($scope, $el, attrs) {
	      $el.text('DRIECTIVE INJECTED TEXT <%= featureName %>Dir.js');
	    };
    }]);
});