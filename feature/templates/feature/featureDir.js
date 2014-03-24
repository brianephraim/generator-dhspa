define(['ang/app'], function (app) {
    app.register.directive('<%= featureNameDashed %>', [function(){
    	return function($scope, $el, attrs) {
	      elm.text('DRIECTIVE INJECTED TEXT <%= featureName %>Dir.js');
	    };
    }]);
});