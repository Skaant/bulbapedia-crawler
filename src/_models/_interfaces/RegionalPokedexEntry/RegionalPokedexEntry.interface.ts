import TypesEnum from '../../../_enums/types.enum'

export default interface RegionalPokedexEntryInterface {
  index: number,
  /** National index */
  id: string,
  regionalId: string,
  types: [
    TypesEnum,
    TypesEnum?
  ]
}