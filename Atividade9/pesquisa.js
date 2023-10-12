var opinions = []

const form = document.getElementById('mainForm');
const app = document.getElementById('root')

const logo = document.createElement('img')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

form.addEventListener('submit', () => {
  event.preventDefault()

  form.reset()
})

function sendOpinion() {
  const age = document.getElementById('idade').value
  const sex = document.getElementById('sexo').value
  const score = document.getElementById('opiniao').value
  
  
  const newOpinion = {
    age: Number(age),
    sex,
    score
  }

  opinions.push(newOpinion)

  alert("Obrigado por enviar sua opinião.")
}

function Resultado(){
  
  let agesTotal = 0;
  let oldest = null;
  let youngest = null;
  let pessimoCount = 0;
  let otimoEBom = 0;
  let masc = 0;
  let fem = 0;

  opinions.forEach((opinion) => {
    console.log(opinion)
    if(oldest === null) oldest = opinion.age
    if(youngest === null) youngest = opinion.age

    if(youngest > opinion.age) youngest = opinion.age
    if(oldest < opinion.age) oldest = opinion.age
    if(opinion.score == "1") pessimoCount += 1;
    if(opinion.sex == "f") fem += 1;
    if(opinion.sex == "m") masc += 1;
    if(["1", "2"].includes(opinion.score)) otimoEBom += 1;
    agesTotal += opinion.age

  })

  const mediaIdades = (agesTotal / opinions.length).toFixed(2);
  const percentagemOtimoEBom = ((otimoEBom / opinions.length)*100).toFixed(2);


  const card = document.createElement('div')
  card.setAttribute('class', 'result')

  const mediaIdade = document.createElement('p')
  mediaIdade.setAttribute('class', 'results')
  mediaIdade.textContent = "Media das idades: " + mediaIdades

  const maisVelha = document.createElement('p')
  maisVelha.setAttribute('class', 'results')
  maisVelha.textContent = "Pessoa mais velha: " + oldest

  const maisNova = document.createElement('p')
  maisNova.setAttribute('class', 'results')
  maisNova.textContent = "Pessoa mais nova: " + youngest

  const qntPessimo = document.createElement('p')
  qntPessimo.setAttribute('class', 'results')
  qntPessimo.textContent = "Quantidade de pessimos: " + pessimoCount

  const porcentagem = document.createElement('p')
  porcentagem.setAttribute('class', 'results')
  porcentagem.textContent = "Porcentagem de bons e otimos: " + percentagemOtimoEBom

  const masculino = document.createElement('p')
  masculino.setAttribute('class', 'results')
  masculino.textContent = "Numero de homens: " + masc

  const feminino = document.createElement('p')
  feminino.setAttribute('class', 'results')
  feminino.textContent = "Numero de Mulheres: " + fem

  container.appendChild(card)
  card.appendChild(mediaIdade)
  card.appendChild(maisVelha)
  card.appendChild(maisNova)
  card.appendChild(qntPessimo)
  card.appendChild(porcentagem)
  card.appendChild(masculino)
  card.appendChild(feminino)
}


