export default interface PokemonGamesAvailabilitiesInterface {
  index: number
  id: string
  name: string
  // url: string
  /** @prop {{[gameId: GamesIdEnum]: AvailabilitiesEnum[]}} */
  gamesAvailabilities?: {
    [gameId: string ]: string[]
  }
}