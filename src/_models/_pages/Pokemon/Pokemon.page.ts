const { JSDOM } = require('jsdom')
import Page from "../../Page/Page"
import PokedexEntryInterface from "../../_interfaces/PokedexEntry/PokedexEntry.interface"

export default class PokemonPage extends Page {
  private static readonly CACHE_PATH = '_cache/pokemons'

  constructor({ index, url }: PokedexEntryInterface) {
    const paddedIndex = index.toString().padStart(3, '0')
    /** 00X/00X */
    const folderFileName = paddedIndex + '/' + paddedIndex
    super({
      JSONCachePath: PokemonPage.CACHE_PATH
        + '/'
        + folderFileName
        + '.json',
      HTMLCachePath: PokemonPage.CACHE_PATH
        + '/'
        + folderFileName
        + '.html',
      url
    })
  }

  proceedHTMLToJSON(html: string) {
    const { document } = (new JSDOM(html)).window
    return { ok: 'true' }
  }
}