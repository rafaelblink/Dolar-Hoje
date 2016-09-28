var url = 'http://api.promasters.net.br/cotacao/v1/valores?moedas=USD&alt=json';

$(function(){
  $.getJSON(url, function(json) {
    var valor = parseFloat(json["valores"]["USD"]["valor"]);
    $("#valorDolar").text(valor.toFixed(2));
  });
});
