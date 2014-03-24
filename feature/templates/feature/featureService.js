define(['ang/app','featuresPath/<%= featureName %>/<%= featureName %>Service'], function (app,dhUtil) {
    app.register.factory('<%= featureName %>Service', ['$http', function ($http) {
    	var obj = function (threshold, execAsap) {
            //
        }

        obj.prototype.whatev = function(){
            
        }
    	
        function returnNew(threshold){
            return new obj(threshold);
        }

        return returnNew();
    }]);
});