define([
    "angular",
    "deps"
], function(angular, deps) {
    angular.module("app", deps);
    angular.bootstrap(document, ["app"]);
});
