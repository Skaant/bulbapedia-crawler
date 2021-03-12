import { promises as fs } from "fs";
import PageInterface from "../_interfaces/Page/Page.interface";
import PageParamsInterface from "../_interfaces/PageParams/PageParams.interface";

export default abstract class Page implements PageInterface {

  protected JSONCachePath: string = null
  protected HTMLCachePath: string = null
  protected url: string = null

  constructor(params: PageParamsInterface) {
    Object.entries(params)
      .forEach(([ key, value ]) =>
        this[key] = value)
  }

  async JSONCacheExists() {
    if (typeof this.JSONCachePath !== 'string')
      throw new Error('JSONCachePath not initialized')
    try {
      await fs.stat(this.JSONCachePath)
      return true
    } catch (err) {
      if (err.code === 'ENOENT')
        return false
      throw err
    }
  }
}