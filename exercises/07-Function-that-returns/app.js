var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///
var dollarToYen=(numero)=>{
	var resultado1=dollarToEuro(numero);
	var resultado2=euroToYen(resultado1);
	return resultado2;
}

console.log(dollarToYen(137));