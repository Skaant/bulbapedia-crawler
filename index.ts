import GamesAvailabilityPage from './src/_models/_pages/GamesAvailability/GamesAvailability.page'
import RegionsIdEnum from './src/_enums/regionsId.enum'
import RegionalPokedexPage from './src/_models/_pages/RegionalPokedex/RegionalPokedex.page'
import GenerationsIdEnum from './src/_enums/generationsId.enum'
import GenerationsStatsPage from './src/_models/_pages/GenerationsStatsPokemon/GenerationsStatsPokemon.page'

const regionsId = Object.keys(RegionsIdEnum)
const generationsId = Object.keys(GenerationsIdEnum)

Promise.all([
  (new GamesAvailabilityPage()).get(),
  (new RegionalPokedexPage(RegionsIdEnum.kanto)).get(),
  (new GenerationsStatsPage(GenerationsIdEnum.I)).get()
  /* ...regionsId
    .map(regionId =>
      (new RegionalPokedexPage(RegionsIdEnum[regionId]).get())),
  ...generationsId
    .map(generationId =>
      (new GenerationsStatsPage(GenerationsIdEnum[generationId]).get())) */
])
  .then(([
    gamesAvailability,
    ...result
  ]) => {

    const regionalPokedexes = result.slice(0, regionsId.length)
    const generationsStats = result.slice(regionsId.length)

    console.log('test memory usage')
  })