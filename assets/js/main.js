var url = 'http://api.promasters.net.br/cotacao/v1/valores?moedas=USD&alt=json';

var myapp = angular.module('dolarToday', []);
var value = 0;
$(".calculate").focus();

myapp.controller('dolarController', ['$scope', function ($scope) {
  $.getJSON(url, function(json) {
        $scope.$apply(function(){
            value = parseFloat(json["valores"]["USD"]["valor"]);
            $scope.dolar = value.toFixed(2);
        });
    });
}]);
