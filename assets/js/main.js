var url = 'https://api.promasters.net.br/cotacao/v1/valores?moedas=USD&alt=json';

var myapp = angular.module('dolarToday', []);

myapp.controller('dolarController', ['$scope', function($scope) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
        var json = xhr.responseText; // Response
        json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1'); // Turn JSONP in JSON
        json = JSON.parse(json); // Parse JSON

        $scope.$apply(function() {
            var value = parseFloat(json.valores.USD.valor);
            $scope.dolar = value.toFixed(2);
        });
    };

    xhr.send();
    $scope.result = 0;
    $scope.calculateResult = function() {
        var valueInput = $scope.inputValue;
        var valueInput = valueInput.replace("," , ".");
        var valueFloat = 0;
        valueFloat = parseFloat(valueInput);
        $scope.result = (valueFloat * $scope.dolar).toFixed(2);
        if (isNaN($scope.result)) {
            $scope.result = 0;
        }
    }
}]);
