var botaogerar = document.getElementById("botao-gerar");
var cores = ['#CF2F2F', '#CF2FB2', '#732FCF', '#2F40CF', '#2FCFCA', '#36CF2F', '#CFC02F', '#F97D00', '#6F4535', '#787878', '#202020', '#009BDF'];
var jasorteou = 0;

botaogerar.addEventListener("click", function(){
	var listaHex = [];
	var hexanterior = [];
	jasorteou++;	
	

	for (i = 0; i < 3 ; i++){
		var codhex = "";
		var indiceArray = escolheCorNoArray();
		codhex += cores[indiceArray];
		listaHex.push(codhex);
		


		//-----------------SUBSTITUICAO E PINTURA -------------------//
		var hexgrupoa1 = document.getElementById("hex-grupo-a-1");
		hexgrupoa1.textContent = listaHex[0]
		var amostra1 = document.getElementById("amostra1");
		pintaDiv(amostra1,listaHex[0]);
				
		var hexgrupoa2 = document.getElementById("hex-grupo-a-2");
		hexgrupoa2.textContent = listaHex[1]
		var amostra2 = document.getElementById("amostra2");
		pintaDiv(amostra2,listaHex[1]);

		var hexgrupoa3 = document.getElementById("hex-grupo-a-3");
		hexgrupoa3.textContent = listaHex[2]
		var amostra3 = document.getElementById("amostra3");
		pintaDiv(amostra3,listaHex[2]);

	}

	//criar um ARRAY a partir de um HISTORICO de cores que são selecionadas para a paleta principal, e a partir deste pegar a posição 'array.length -1' e utiliza-la como fonte para as cores da 'paleta anterior'.

	// ---> verificar StackOverflow em ultimo caso.


});


function escolheCorNoArray(){
	return Math.floor(Math.random()*cores.length);
}

function pintaDiv(div,cor){
	div.style.backgroundColor = cor;
}