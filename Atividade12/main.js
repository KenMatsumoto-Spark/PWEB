class Retangulo{
  constructor(x, y){
    this.base = x;
    this.altura = y;
  }

  calculaArea(){
    return (this.altura * this.base)
  }
}


class Conta{
  constructor(nome, banco, numConta, saldo){
    this.nomeCorretista = nome;
    this.banco = banco;
    this.numConta = numConta;
    this.saldo = saldo;
  }
}

class Corrente extends Conta{

  setSaldoEspecial(value){
    this.saldoEspecial = value;
  }

  getSaldoEspecial(){
    return this.saldoEspecial;
  }

}

class Poupanca extends Conta{

  setJuros(value){
    this.juros = value;
  }
  
  getJuros(){
    return this.juros;
  }

  setDataVencimento(value){
    this.dataVencimento = value;
  }

  getDataVencimento(){
    return this.dataVencimento;
  }
}

var retangulo = new Retangulo(12, 42);
alert("area do retangulo: " + retangulo.calculaArea())

var corrente = new Corrente("Amicia", "Santander", "123124124", 3000)
corrente.setSaldoEspecial(3200)

var poupanca = new Poupanca("Hugo", "Santander", "123124124", 3000)
poupanca.setJuros(0.2)
poupanca.setDataVencimento(new Date("2002-12-01"))

alert("nome: " + corrente.nomeCorretista + "\nbanco: " + corrente.banco + "\nnumero Da Conta: " + corrente.numConta + "\nSaldo: " + corrente.saldo + "\nSaldo Especial:" + corrente.getSaldoEspecial())
alert("nome: " + poupanca.nomeCorretista + "\nbanco: " + poupanca.banco + "\nnumero Da Conta: " + poupanca.numConta + "\nSaldo: " + poupanca.saldo + "\nJuros" + poupanca.getJuros() + "\nData de Vencimento: " + poupanca.getDataVencimento())