app.controller('adminCtrl', function ($scope, $rootScope, $http, menu, mdDialog) {

    // Slider

    $http.get('/data/personas').then(function (data) {
        $scope.contactos = data.data;
        console.log(data.data);
    });


});
