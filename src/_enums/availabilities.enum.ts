enum AvailabilitiesEnum {
  /** The Pokémon can be caught in-game. */
  caught = 'caught',
  /** The Pokémon can be caught in-game via swarm.
   * In Pokémon Colosseum and Pokémon XD,
   *  this instead means Pokémon can be snagged.
   * In Pokémon Sun, Moon, Ultra Sun and Ultra Moon,
   *  this instead means Pokémon can be caught
   *  through the Island Scan. */
  swarm = 'swarm',
  /** In Pokémon Diamond, Pearl, and Platinum,
   *  the Pokémon can be caught in-game via dual-slot mode.
   * In Pokémon Sword and Shield, the Pokémon can be
   *  caught in-game via a Max Raid Battle at a Pokémon Den.  */
  dual = 'dual',
  /** The Pokémon can be received from someone
   * (such as starter Pokémon, revived Fossil,
   *  in-game trade or gift). */
  received = 'received',
  /** The Pokémon cannot be caught in-game,
   *  but an earlier evolutionary stage can be obtained.
   * It can be evolved into the Pokémon in this game.
   * 
   * *This may also be used as a suffix for other methods to
   *  indicate that the Pokémon must be evolved from
   *  a Pokémon caught using that method.* */
  evolved = 'evolution',
  /** The Pokémon cannot be caught in-game,
   *  but a later evolutionary stage can be obtained.
   * It can be bred to produce the Pokémon in this game;
   *  this may also involve evolving the hatched Pokémon.
   * 
   * *This may also be used as a suffix for other methods to
   *  indicate that the Pokémon must be bred from a Pokémon
   *  caught using that method.* */
  bred = 'breading',
  /** The Pokémon can be caught in-game,
   *  but is only accessible through paid DLC.
   * 
   * *May also be used as a suffix for other methods to
   *  indicate that it can only be obtained through
   *  that method in paid DLC.* */
  paid_dlc = 'paid_dlc',
  /** In Pokémon Sword and Shield's The Crown Tundra DLC,
   *  the Pokémon can be caught in-game via a Max Raid Battle during
   *  a Dynamax Adventure in the Max Lair. */
  dynamax = 'dynamax',
  /** The Pokémon is obtainable in-game but
   *  requires some form of communication with
   *  another core series game in order to obtain it.
   * 
   * *This may also be used as a prefix for other methods to
   *  indicate that the Pokémon requires a specific method after
   *  communicating with another game.* */
  core = 'core',
  /** In Pokémon X and Y,
   *  the Pokémon can only be caught through the Friend Safari. */
  firend_safari = 'friend_safari',
  /** The Pokémon can be caught in-game,
   *  but only using an item obtained via
   *  distribution (such as the Eon Ticket).  */
  distribution = 'distribution',
  /** The Pokémon is available via Dream Radar. */
  dream_radar = 'dream_radar',
  /** The Pokémon was available via Dream World before
   *  it was shut down. */
  dream_world = 'dream_world',
  /** The Pokémon cannot be caught in-game,
   *  but an earlier evolutionary stage can be obtained.
   *  It can be evolved into the Pokémon in this game by trading.
   * 
   * *May also be used as a suffix for other methods to
   *  indicate that the Pokémon must be evolved through trading
   *  from a Pokémon caught using that method.* */
  trade_evolved = 'trade_evolved',
  /** The Pokémon was available to this game at
   *  some point via distributions in real life such as
   *  ExtremeSpeed Pikachu. Additionally,
   *  all Global Link promotions and game-based Pokémon
   *  distributions fall under this category.  */
  event = 'event',
  /** This Pokémon can be obtained only by trading it from
   *  another game or transferring it from a game in
   *  a previous generation. */
  trade = 'trade'
}

export default AvailabilitiesEnum