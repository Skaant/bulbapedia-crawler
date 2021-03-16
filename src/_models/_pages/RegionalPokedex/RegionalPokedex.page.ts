import { JSDOM } from 'jsdom'
import RegionsIdEnum from '../../../_enums/regionsId.enum'
import Page from '../../Page/Page'
import { REGIONS_URL } from './_data/data'
import RegionalPokedexEntryInterface from '../../_interfaces/RegionalPokedexEntry/RegionalPokedexEntry.interface'
import TypesEnum from '../../../_enums/types.enum'

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
      url: REGIONS_URL[regionId]
    })
    this.regionId = regionId
  }

  proceedHTMLToJSON(html: string) {
    const { document } = (new JSDOM(html)).window
  
    const rows = document.querySelector('[id=".23001_-_.23051_Bulbasaur_-_Dugtrio"]')
      .parentNode
      .nextElementSibling
      .children[0]
      .children as HTMLTableRowElement[]

    return [ ...rows ].slice(1)
      .map((row: HTMLTableRowElement, index) => ({
        index,
        id: row.children[1].innerHTML.replace(/[\s\#\n]/g, ''),
        regionalId: row.children[0].innerHTML.replace(/[\s\#\n]/g, ''),
        types: [
          row.children[4].children[0].children[0].innerHTML.toLowerCase() as TypesEnum,
          ...(row.children[5]
            ? [ row.children[5].children[0].children[0].innerHTML.toLowerCase() as TypesEnum ]
            : [])
        ]
      } as RegionalPokedexEntryInterface))
  }
}