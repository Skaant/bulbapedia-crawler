import GamesIdEnum from "../../_enums/gamesId.enum";
import GenerationsIdEnum from "../../_enums/generationsId.enum";
import RegionsIdEnum from "../../_enums/regionsId.enum";

export default class Game {
  generationId: GenerationsIdEnum = null
  id: GamesIdEnum = null
  regionId: RegionsIdEnum = null

  constructor(
    generationId: GenerationsIdEnum,
    id: GamesIdEnum,
    regionId: RegionsIdEnum
  ) {
    this.generationId = generationId
    this.id = id
    this.regionId = regionId
  }
}