import { JSDOM } from 'jsdom'
import GenerationsIdEnum from '../../../_enums/generationsId.enum'
import Page from '../../Page/Page'

enum GenerationsStatsGroupEnum {
  I = 'I',
  II_V = 'II_V',
  VI = 'VI',
  VII = 'VII',
  VIII = 'VIII'
}

const GENERATION_TO_GROUP = {
  [GenerationsIdEnum.I]: GenerationsStatsGroupEnum.I,
  [GenerationsIdEnum.II]: GenerationsStatsGroupEnum.II_V,
  [GenerationsIdEnum.III]: GenerationsStatsGroupEnum.II_V,
  [GenerationsIdEnum.IV]: GenerationsStatsGroupEnum.II_V,
  [GenerationsIdEnum.V]: GenerationsStatsGroupEnum.II_V,
  [GenerationsIdEnum.VI]: GenerationsStatsGroupEnum.VI,
  [GenerationsIdEnum.VII]: GenerationsStatsGroupEnum.VII,
  [GenerationsIdEnum.VIII]: GenerationsStatsGroupEnum.VIII
}

const GROUP_URL = {
  [GenerationsStatsGroupEnum.I]: '/wiki/List_of_Pokémon_by_base_stats_(Generation_I)',
  [GenerationsStatsGroupEnum.II_V]: '/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_II-V)',
  [GenerationsStatsGroupEnum.VI]: '/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_VI)',
  [GenerationsStatsGroupEnum.VII]: '/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_VII)',
  [GenerationsStatsGroupEnum.VIII]: '/wiki/List_of_Pokémon_by_base_stats_(Generation_VIII-present)'
}

export default class GenerationsStatsPage extends Page {
  private static readonly CACHE_PATH = '_cache/generations-stats'
  private generationId: GenerationsIdEnum

  constructor(generationId: GenerationsIdEnum) {
    const generationGroup = GENERATION_TO_GROUP[generationId]
    /** 'abc/abc' */
    const folderFileId = generationId + '/' + generationId
    const folderFileGroup = generationGroup + '/' + generationGroup
    super({
      JSONCachePath: GenerationsStatsPage.CACHE_PATH
        + '/'
        + folderFileId
        + '.json',
      HTMLCachePath: GenerationsStatsPage.CACHE_PATH
        + '/'
        + folderFileGroup
        + '.html',
      url: GROUP_URL[generationGroup]
    })
    this.generationId = generationId
  }

  proceedHTMLToJSON(html: string) {
    const { document } = (new JSDOM(html)).window
    return {
      generationId: this.generationId,
      generationGroup: GENERATION_TO_GROUP[this.generationId]
    }
  }
}