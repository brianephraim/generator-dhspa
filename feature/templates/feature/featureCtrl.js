define(['ang/app','featuresPath/<%= featureName %>/<%= featureName %>Service'], function (app) {
    app.register.controller('<%= featureName %>Ctrl', [
        '$scope','$timeout','$localStorage','hubConnectionService','$rootScope','$stateParams','pubSubService','$q',
        function($scope,$timeout,$localStorage,hubConnectionService,$rootScope,$stateParams,pubSubService, $q){
            //pubSubService.publish('blankMessage-'+$scope.widgetNamespace,['arguments-etc'],$scope);
            //pubSubService.subscribe('blankMessage-'+$scope.widgetNamespace,function(){},$scope);


            //$scope.widgetNamespace = $scope.$id;
            //$scope.$widgetScope = $scope;

            // $scope.$storage = $localStorage;

            // var hub = hubConnectionService.hub;
            // var hubConnectPromise = hubConnectionService.connectPromise;
            // var hubConnectPromiseThen = hubConnectionService.connectPromiseThen;


            // hub.addRPC("send")
            // hub.addRPC("subscribe")
            // hub.addRPC("getUserWithFields")
            // hub.addRPC("getUser")
            // hub.addRPC("unsubscribe");

            // hub.connection.logging = false;

            // var channel = 'channelName';
            // hub.rpc.subscribe(channel).then((function (channel) {
            //     return function () {                            };
            // })(channel));

            //hub.rpc.send(channel, name, message);

            //hub.rpc.getUser(username).then(function(user){})['catch'](function(err) {});
            
            

            


        }
    ]);
});