// Declarar uma variável qualquer, que receba um objeto vazio.
var meuCarro = new Object(); 

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = new Object();
pessoa.nome = "Luís";
pessoa.sobrenome = "Seifert"
pessoa.sexo = "masculino";
pessoa.idade = 28;
pessoa.altura = 1.82;
pessoa.peso = 80;
pessoa.andando = false;
pessoa.caminhouQuantosMetros = 0;

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function() {return pessoa.idade = pessoa.idade+1;}
  
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.fazerAniversario();
console.log(pessoa.idade);
pessoa.fazerAniversario();
console.log(pessoa.idade);
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metrosCaminhados) {
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metrosCaminhados;
    console.log(pessoa.caminhouQuantosMetros);
    pessoa.andando = true;
}
pessoa.andar(1);


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
    //return console.log( "Olá! Meu nome é "+pessoa.nome+" "+pessoa.sobrenome);
    return pessoa.nome+" "+pessoa.sobrenome;
}
pessoa.nomeCompleto();

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function() {
    console.log("Olá, eu tenho "+pessoa.idade+" anos");
}
pessoa.mostrarIdade();

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function() {
    console.log("Eu peso "+pessoa.peso+" kg.");
}
pessoa.mostrarPeso();

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function() {
    console.log("minha altura é "+ pessoa.altura+" m;");
}
pessoa.mostrarAltura();

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/


/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/


/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/


/*
Faça a `pessoa` fazer 3 aniversários.
*/


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/


/*
Se a pessoa ainda está andando, faça-a parar.
*/


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)
pessoa.apresentacao = function() {
    var sex = "o";
    if(pessoa.sexo == "feminino") {
        sex = "a";
    }
    var anos = "Anos";
    if(pessoa.idade == 1) {
        anos = "Ano";
    }
    var metros = "metros";
    if(pessoa.metrosCaminhados == 1){
        metros = "metro";
    }
    console.log("Olá, eu sou "+sex+ " "+pessoa.nomeCompleto()+", tenho "+pessoa.idade+" "+anos+" ,"+pessoa.altura+" "+metros+", meu peso é "+pessoa.peso+"  e, só hoje, eu já caminhei "+pessoa.caminhouQuantosMetros+" "+metros);
}
pessoa.apresentacao();