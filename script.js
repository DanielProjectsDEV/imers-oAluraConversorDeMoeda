var ValorEmBitcoin = 30;
var CotacaoEmBitcoin = 178965.66;

var ValorEmReal = ValorEmBitcoin * CotacaoEmBitcoin;

ValorEmReal = ValorEmReal.toFixed(2);

alert ("R$" + ValorEmReal);
