import { JSDOM } from 'jsdom'
import Page from "../../Page/Page"
import { availabilityChars, gamesIndexByGeneration, generationsSectionSelector } from './_data/data'

export default class PokedexPage extends Page {
  private static readonly CACHE_PATH = '_cache/pokedex'
  private static readonly PAGE_URL = '/wiki/List_of_Pokémon_by_availability'

  constructor() {
    super({
      JSONCachePath: PokedexPage.CACHE_PATH
        + '.json',
      HTMLCachePath: PokedexPage.CACHE_PATH
        + '.html',
      url: Page.REF_URL
        + PokedexPage.PAGE_URL
    })
  }

  proceedHTMLToJSON(html: string) {
    const { document } = (new JSDOM(html)).window
    return generationsSectionSelector
      .map((sectionSelector, genIndex) => {
        const tBody = document.querySelector(`[id*="${ sectionSelector }"]`)
          .parentNode
          .nextElementSibling
          .children[0]
        const genPokemons = [ ...tBody.children ]
          .slice(2)
          .map((row, index) => {
            const nameCell = row.children[2].children[0]
            const pokemon = {
              index: index + 1,
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
                  .map(value => availabilityChars[value])
              })
            return pokemon
          })
        return genPokemons
      })
      .flat()
  }
}