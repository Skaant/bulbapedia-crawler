const { JSDOM } = require('jsdom')
const { promises: fs } = require('fs')
const fetchAndCachePokemon = require('../../fetchAndCache/pokemon/fetchAndCachePokemon')
const { pokemonCachePath } = require('../../config')

module.exports = async pokedexEntry => {
  const pokemonJSONPath = pokemonCachePath
    + pokedexEntry.index + '.json'
  try {
    await fs.stat(pokemonJSONPath)
    return JSON.parse(await fs.readFile(
      pokemonJSONPath,
      'utf-8'
    ))
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
  const content = await fetchAndCachePokemon(pokedexEntry)
  const { document } = (new JSDOM(content)).window

  return document

  /* await fs.writeFile(
    pokedexJSONPath,
    JSON.stringify(pokemons)
  )

  return pokemons */
}