import { JSDOM } from 'jsdom'
import RegionsIdEnum from '../../../_enums/regionsId.enum'
import Page from '../../Page/Page'

const REGIONS_URL = {
  [RegionsIdEnum.kanto]: '/wiki/List_of_Pok%C3%A9mon_by_Kanto_Pok%C3%A9dex_number',
  [RegionsIdEnum.johto_1]: '/wiki/List_of_Pok%C3%A9mon_by_New_Pok%C3%A9dex_number',
  [RegionsIdEnum.johto_2]: '/wiki/List_of_Pok%C3%A9mon_by_Johto_Pok%C3%A9dex_number',
  [RegionsIdEnum.hoenn_1]: '/wiki/List_of_Pok%C3%A9mon_by_Hoenn_Pok%C3%A9dex_number_(Generation_III)',
  [RegionsIdEnum.hoenn_2]: '/wiki/List_of_Pok%C3%A9mon_by_Hoenn_Pok%C3%A9dex_number_(Generation_VI)',
  [RegionsIdEnum.sinnoh_1]: '/wiki/List_of_Pok%C3%A9mon_by_Hoenn_Pok%C3%A9dex_number_(Generation_VI)',
  [RegionsIdEnum.sinnoh_2]: '/wiki/List_of_Pok%C3%A9mon_by_Hoenn_Pok%C3%A9dex_number_(Generation_VI)',
  [RegionsIdEnum.unova_1]: '/wiki/List_of_Pok%C3%A9mon_by_Unova_Pok%C3%A9dex_number_(Black_and_White)',
  [RegionsIdEnum.unova_2]: '/wiki/List_of_Pok%C3%A9mon_by_Unova_Pok%C3%A9dex_number_(Black_2_and_White_2)',
  [RegionsIdEnum.kalos]: '/wiki/List_of_Pok%C3%A9mon_by_Kalos_Pok%C3%A9dex_number',
  [RegionsIdEnum.aloha_1]: '/wiki/List_of_Pok%C3%A9mon_by_Alola_Pok%C3%A9dex_number_(Sun_and_Moon)',
  [RegionsIdEnum.aloha_2]: '/wiki/List_of_Pok%C3%A9mon_by_Alola_Pok%C3%A9dex_number_(Ultra_Sun_and_Ultra_Moon)',
  [RegionsIdEnum.galar]: '/wiki/List_of_Pok%C3%A9mon_by_Galar_Pok%C3%A9dex_number'
}

export default class RegionalPokedexPage extends Page {
  private static readonly CACHE_PATH = '_cache/regional-pokedex'
  private regionId: RegionsIdEnum

  constructor(regionId: RegionsIdEnum) {
    /** 'abc/abc' */
    const folderFileName = regionId + '/' + regionId
    super({
      JSONCachePath: RegionalPokedexPage.CACHE_PATH
        + '/'
        + folderFileName
        + '.json',
      HTMLCachePath: RegionalPokedexPage.CACHE_PATH
        + '/'
        + folderFileName
        + '.html',
      url: Page.REF_URL
        + REGIONS_URL[regionId]
    })
    this.regionId = regionId
  }

  proceedHTMLToJSON(html: string) {
    const { document } = (new JSDOM(html)).window
    return { regionId: this.regionId }
  }
}