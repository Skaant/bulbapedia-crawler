const fetch = require('node-fetch')
const { promises: fs } = require('fs')
const { pokedexCachePath } = require('../../config')

module.exports = async () => {
  /** 1. Trying cache resolution */
  try {
    const stat = await fs.stat(pokedexCachePath)
    /** Refresh cache every week */
    if (Date.now() <= (stat.mtimeMs + 1000 * 60 * 60 * 24 * 7))
      /** content */
      return await fs.readFile(
        pokedexCachePath,
        'utf-8'
      )
    /** else ... go to 2. */
  } catch (err) {
    if (err.code !== 'ENOENT')
      throw err
    /** File not found ... go to 2. */
  }

  /** 2. Retrieving data & cache provisioning */
  const res = await fetch('https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_availability')
  const content = await res.text()
  await fs.writeFile(
    pokedexCachePath,
    content
  )
  return content
}