const { JSDOM } = require('jsdom')
const { promises: fs } = require('fs')
const fetchAndCachePokedex = require('../../fetchAndCache/pokedex/fetchAndCachePokedex')
const PagePokedex = require('../../_models/PagePokedex/PagePokedex')
const { gamesIndexByGeneration } = require('../../_models/PagePokedex/PagePokedex')
const { caught, swarm, dual, received, evolved, bred, paid_dlc, dynamax, core, firend_safari, distribution, dream_radar, dream_world, trade_evolved, event, trade } = require('../../_enums/availabilities.enum')
const { pokedexJSONPath } = require('../../config')

const AVAILABILTY_CHARS = {
  'C': caught,
  'S': swarm,
  'D': dual,
  'R': received,
  'E': evolved,
  'B': bred,
  'CD': paid_dlc,
  'DA': dynamax,
  'CC': core,
  'FS': firend_safari,
  'EV': distribution,
  'DR': dream_radar,
  'DW': dream_world,
  'ET': trade_evolved,
  'Ev': event,
  'T': trade
}

module.exports = async () => {
  const content = await fetchAndCachePokedex()
  const { document } = (new JSDOM(content)).window
  const pokemons = PagePokedex.generationsSectionSelector
    .map((sectionSelector, genIndex) => {
      const tBody = document.querySelector(`[id*="${ sectionSelector }"]`)
        .parentNode
        .nextElementSibling
        .children[0]
      const genPokemons = [ ...tBody.children ]
        .slice(2)
        .map(row => {
          const nameCell = row.children[2].children[0]
          const pokemon = {
            id: row.children[0].innerHTML.trim(),
            name: nameCell.innerHTML,
            url: nameCell.getAttribute('href'),
            availabilities: {}
          }
          Object.entries(gamesIndexByGeneration[genIndex])
            .forEach(([ gameId, sectionGameIndex ]) => {
              pokemon.availabilities[gameId] = (row.children[sectionGameIndex]
                .innerHTML
                .match(/C(?![DA])|S|D(?![ARW])|R|E(?![VTv])|B|CD|DA|CC|FS|EV|DR|DW|ET|Ev|T/g)
                  || [])
                .map(value => AVAILABILTY_CHARS[value])
            })
          return pokemon
        })
      return genPokemons
    })
    .flat()

  await fs.writeFile(
    pokedexJSONPath,
    JSON.stringify(pokemons)
  )

  return pokemons
}