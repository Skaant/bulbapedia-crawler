export default interface PageInterface {
  
  get(): Promise<any>
  JSONCacheExists(): Promise<boolean>
  retrieveFromJSONCache(): Promise<any>
  HTMLCacheExists(): Promise<boolean>
  retrieveFromHTMLCache(): Promise<string>
  retrieveFromUrl(): Promise<string>
  storeHTMLCache(html: string): Promise<void>
  proceedHTMLToJSON(html: string)
  storeJSONCache(json: any): Promise<void>
}