const app = document.getElementById('root')

const logo = document.createElement('img')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://site.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl&lang=en&region=ww&contentorigin=espn&groups=', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  var today = new Date().getTime()
  if (request.status >= 200 && request.status < 400) {
    data.sports[0].leagues[0].events.forEach(game => {
      var pastGame = today < new Date(game.date).getTime()
      const thisGame = {
        name: game.name,
        team1: {
          name: game.competitors[0].name,
          score: game.competitors[0].score,
          logo: game.competitors[0].logo,
        },
        team2: {
          name: game.competitors[1].name,
          score: game.competitors[1].score,
          logo: game.competitors[1].logo,
        },
        description: `O jogo ${pastGame ? "ocorrerá " : "ocorreu"} em ${new Date(game.date).toLocaleString()} no ${game.location}, transmitido pela ${game.broadcast}`,
        linkStats: game.link
      }
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = thisGame.name
      
      const logo1 = document.createElement('img')
      logo1.setAttribute('class', 'teamLogoLeft')
      logo1.src = thisGame.team1.logo
      
      const logo2 = document.createElement('img')
      logo2.setAttribute('class', 'teamLogoRight')
      logo2.src = thisGame.team2.logo
      

      const p = document.createElement('p')
      p.textContent = `${thisGame.team1.name} ${thisGame.team1.score} x ${thisGame.team2.name} ${thisGame.team2.score}`
      p.setAttribute('class', 'teamScore')

      const description = document.createElement('p')
      description.setAttribute('class', 'description')
      description.textContent = thisGame.description

      const linkESPN = document.createElement('a')
      linkESPN.setAttribute('class', 'linkESPN')
      linkESPN.setAttribute('target', "_blank")
      linkESPN.textContent = 'Veja todas as informações do jogo aqui!'
      linkESPN.href = thisGame.linkStats

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(logo1)
      card.appendChild(logo2)
      card.appendChild(p)
      card.appendChild(description)
      card.appendChild(linkESPN)

    });
  } else {
    console.log('error')
  }
}

request.send()