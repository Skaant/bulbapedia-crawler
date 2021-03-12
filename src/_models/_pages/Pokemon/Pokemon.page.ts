import Page from "../../Page/Page"

export default class PokemonPage extends Page {
  static readonly CACHE_PATH = '_cache/pokemons/'

  constructor(index: number) {
    super({
      JSONCachePath: PokemonPage.CACHE_PATH
        + '/' + index + '.json'
    })
  }
}