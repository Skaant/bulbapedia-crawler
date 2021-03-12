const fetch = require('node-fetch')
const fs = require('fs')

module.exports = async url => {

  const res = await fetch(url)
  const content = await res.text()
  const id = content
    .match(/title="List of Pokémon by National Pokédex number"\>\<span.*\>.*\#(\d*)/)[1]
  console.log(id)
  fs.writeFileSync(
    '_cache/pokemons/' + id + '.html',
    content
  )
}