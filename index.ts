import PokedexPage from './src/_models/_pages/Pokedex/Pokedex.page'
import PokemonPage from './src/_models/_pages/Pokemon/Pokemon.page'
import PokedexEntryInterface from './src/_models/_interfaces/PokedexEntry/PokedexEntry.interface'


(new PokedexPage()).get()
  .then(result =>
    (new PokemonPage(result[0] as PokedexEntryInterface)).get()
      .then(result => console.log(result))
  )