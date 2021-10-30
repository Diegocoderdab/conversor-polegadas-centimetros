var valorTexto = prompt("Escreva um valor em polegadas :")

var valorInteiro = parseFloat(valorTexto).toFixed(2)

alert("O valor em polegadas que você deseja converter é : " +valorInteiro+ " ? ")

var valorReal = (valorInteiro*2.54).toFixed(2)

alert("O valor em Centímetros é : "+valorReal)