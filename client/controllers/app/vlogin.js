angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app, $timeout) {
    'use strict';
    app.init($scope);
    $scope.bLoading = false;
    $scope.sLoginUser = '';
    $scope.sLoginPass = '';
    $scope.sTest="nd"
    $scope.fLogin = function (sLoginUser, sLoginPass) {
        console.log('sUser=' + sLoginUser);
        console.log('sPass=' + sLoginPass);
        $scope.bLoading = true;
        var timer = $timeout(function () {
            console.warn("move home page");
            app.go('app.tasklist');
        }, 2000);
    };
}