import { promises as fs } from "fs";
import fetch from 'node-fetch'
import PageInterface from "../_interfaces/Page/Page.interface";
import PageParamsInterface from "../_interfaces/PageParams/PageParams.interface";

export default abstract class Page implements PageInterface {

  protected static readonly REF_URL = 'https://bulbapedia.bulbagarden.net'

  protected JSONCachePath: string = null
  protected HTMLCachePath: string = null
  protected url: string = null

  constructor(params: PageParamsInterface) {
    Object.entries(params)
      .forEach(([ key, value ]) =>
        this[key] = value)
  }

  async get() {
    if (await this.JSONCacheExists()) {
      return this.retrieveFromJSONCache()
    }
    let html
    if (await this.HTMLCacheExists()) {
      html = await this.retrieveFromHTMLCache()
    } else {
      html = await this.retrieveFromUrl()
      await this.storeHTMLCache(html)
    }
    const json = this.proceedHTMLToJSON(html)
    await this.storeJSONCache(json)
    return json
  }

  private getModeCachePath(mode: 'JSON' | 'HTML'): string {
    return this[mode + 'CachePath']
  }

  private async cacheFileExists(mode: 'JSON' | 'HTML'): Promise<boolean> {
    const cachePath = this.getModeCachePath(mode)
    if (typeof cachePath !== 'string')
      throw new Error('`'
        + cachePath + '` not initialized')
    try {
      await fs.stat(cachePath)
      return true
    } catch (err) {
      if (err.code === 'ENOENT')
        return false
      throw err
    }
  }

  private async retrieveFromCache(mode: 'JSON' | 'HTML'): Promise<string> {
    return fs.readFile(
      this.getModeCachePath(mode),
      'utf-8'
    )
  }

  private async storeCache(
    mode: 'JSON' | 'HTML',
    content: string
  ): Promise<void> {
    const cachePath = this.getModeCachePath(mode)
    const splitCachePath = cachePath.split('/')
    let agregatingPath = ''
    /** 
     * Check that any level of folder hierarchy exists,
     *  otherwise creates it.
     */
    for await (const name of splitCachePath.slice(
      0,
      splitCachePath.length - 1
    )) {
      agregatingPath += name
      try {
        await fs.stat(agregatingPath)
      } catch (err) {
        if (err.code === 'ENOENT')
          await fs.mkdir(agregatingPath)
        else throw err
      }
      agregatingPath += '/'
    }
    await fs.writeFile(
      cachePath,
      content,
      'utf-8'
    )
  }

  async JSONCacheExists() {
    return this.cacheFileExists('JSON')
  }

  async retrieveFromJSONCache() {
    return JSON.parse(await this.retrieveFromCache('JSON'))
  }

  async HTMLCacheExists() {
    return this.cacheFileExists('HTML')
  }

  async retrieveFromHTMLCache() {
    return this.retrieveFromCache('HTML')
  }

  async retrieveFromUrl() {
    const res = await fetch(Page.REF_URL + this.url, {})
    return await res.text()
  }

  async storeHTMLCache(html: string) {
    return this.storeCache('HTML', html)
  }

  abstract proceedHTMLToJSON(html: string)

  async storeJSONCache(json: any) {
    return this.storeCache(
      'JSON',
      JSON.stringify(json)
    )
  }
}