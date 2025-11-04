
var m;
var n1;
var n2;
var n3;

m = n1;
if (n2 > m) m = n2;
if (n3 > m) m = n3;

if ((n1 == n2) && (n2 == n3))
  console.log("Combinação indesejada");
else
  console.log(m);

// Exibirá o maior entre três números lidos, exceto se os três valores forem iguais.
// Se os valores 1, 3 e 6 forem atribuídos às variáveis n1, n2 e n3 respectivamente, a variável m receberá o valor 1, em seguida o valor 3 e, por último, o valor 6.
// Se os valores 9, 7 e 2 forem atribuídos às variáveis n1, n2 e n3 respectivamente, a variável m receberá apenas o valor 9.
// Se os valores -1, -3 e -8 forem atribuídos às variáveis n1, n2 e n3 respectivamente, a variável m receberá apenas o valor -1.
// INCORRETO : Se os valores 7, 2 e 9 forem atribuídos às variáveis n1, n2 e n3 respectivamente, a variável m receberá o valor 7, em seguida o valor 2 e, por último, o valor 9.