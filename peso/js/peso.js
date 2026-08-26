
function calculapeso()
{
	var altura=ficha.altura.value;
	var sexo=ficha.sexo.value;

	if (sexo=='masculino')
			pesoideal= (72.7*altura)-58;
	else 
			pesoideal=(62.1*altura)- 44.7;
	ficha.pesoideal.value=Math.round(pesoideal);
	return true;
}