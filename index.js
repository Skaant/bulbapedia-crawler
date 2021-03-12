const proceedContentPokedex = require("./src/proceedContent/pokedex/proceedContentPokedex");
const proceedContentPokemon = require("./src/proceedContent/pokemon/proceedContentPokemon");

proceedContentPokedex()
  .then(content => {
    proceedContentPokemon({
      index: 0,
      ...content[0]
    })
  })