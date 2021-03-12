module.exports = class Generation {
  id = null
  games = null
  
  constructor (id, games) {
    if (!id) throw new Error('Missing `id` param')
    if (!games || games.length === 0)
      throw new Error('Missing `games` param, or v  alues')
    
    this.id = id
    this.games = games
  }
}