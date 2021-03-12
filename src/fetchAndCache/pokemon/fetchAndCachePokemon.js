const fetch = require('node-fetch')
const { promises: fs } = require('fs')
const { pokemonCachePath } = require('../../config')

/** @note `index` is different of `id` (1-><-*). */
module.exports = async pokedexEntry => {
  const cacheFilePath = pokemonCachePath
    + pokedexEntry.index + '.html'
  /** 1. Trying cache resolution */
  try {
    const stat = await fs.stat(cacheFilePath)
    /** Refresh cache at most every week */
    if (Date.now() <= (stat.mtimeMs + 1000 * 60 * 60 * 24 * 7))
      /** content */
      return await fs.readFile(
        cacheFilePath,
        'utf-8'
      )
    /** else ... go to 2. */
  } catch (err) {
    if (err.code !== 'ENOENT')
      throw err
    /** File not found ... go to 2. */
  }

  /** 2. Retrieving data & cache provisioning */
  const res = await fetch('https://bulbapedia.bulbagarden.net'
    + pokedexEntry.url)
  const content = await res.text()
  await fs.writeFile(
    cacheFilePath,
    content
  )
  return content
}