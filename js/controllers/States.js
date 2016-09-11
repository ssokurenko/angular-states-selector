app.controller('States', function States($scope, $http) {
    $scope.state = 'Alabama';
    $http.get('data/states.json').success(function (data) {
        $scope.states = data;
    });
    $scope.select = function (state) {
        $scope.selected = state.name + ' (' + state.abbreviation + ')';
    }
});