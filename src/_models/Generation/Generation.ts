import GamesIdEnum from "../../_enums/gamesId.enum"
import GenerationsIdEnum from "../../_enums/generationsId.enum"

export default class Generation {
  id: GenerationsIdEnum = null
  gamesId: GamesIdEnum[] = null
  
  constructor (
    id: GenerationsIdEnum,
    gamesId: GamesIdEnum[]
  ) {

    this.id = id
    this.gamesId = gamesId
  }
}