import PokemonPage from './src/_models/_pages/Pokemon/Pokemon.page'


(new PokemonPage(0)).JSONCacheExists()
  .then(result => console.log(result))