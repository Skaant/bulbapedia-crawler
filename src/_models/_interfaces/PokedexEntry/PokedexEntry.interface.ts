export default interface PokedexEntryInterface {
  index: number
  id: string
  name: string
  url: string
  availabilities: string[] | null
}