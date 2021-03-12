export default interface PageInterface {
  
  JSONCacheExists(): Promise<boolean>
  /* retrieveFromJSONCache(): string
  HTMLCacheExists(): boolean
  retrieveFromHTMLCache(): string
  retrieveFromUrl(): string
  storeHTMLCache(): void
  proceedHTMLToJSON(): string
  storeJSONCache(): void */
}