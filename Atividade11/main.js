var aluno1 = new Object();
aluno1.ra = "0001234";
aluno1.nome = "Ken"

var aluno2 = {};
aluno2.ra = "12313";
aluno2["nome"] = "Mayara";

var aluno3 = {
  ra: "1234556",
  nome: "Gabriel"
}


alert("ra=" + aluno1.ra + " nome=" + aluno1.nome + "\n" + 
      "ra=" + aluno2.ra + " nome=" + aluno2.nome + "\n" + 
      "ra=" + aluno3.ra + " nome=" + aluno3.nome);

function Aluno(ra, nome){
  this.ra = ra;
  this.nome = nome;

  this.MostraDados =  (() =>  ("ra=" + this.ra + " nome=" + this.nome))
}

var aluno = new Aluno('123123', "Jaquiel");
alert(aluno.MostraDados());

var aluno5 = {};

var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno['nome'] = "Vitor";
alert(aluno5.ra + " " + aluno.nome);

function Aluno2() {
  var ra;
  var nome;

  this.setRa = function(value){
    this.ra = value;
  }

  this.setNome = function(value){
    this.nome = value;
  }

  this.getRa = function(){
    return this.ra;
  }

  this.getNome = function(){
    return this.nome;
  }
}

var aluno6 = new Aluno2()
aluno6.setRa('123')
aluno6.setNome('Dayane')

alert(aluno6.getRa() + " " + aluno6.getNome())