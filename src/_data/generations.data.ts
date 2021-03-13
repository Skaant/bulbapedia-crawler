import GenerationsIdEnum from "../_enums/generationsId.enum";
import GamesIdEnum from "../_enums/gamesId.enum";
const Generation = require("../_models/Generation/Generation");

export default {
  [GenerationsIdEnum.I]: new Generation(
    GenerationsIdEnum.I,
    [
      GamesIdEnum.red,
      GamesIdEnum.green,
      GamesIdEnum.blue,
      GamesIdEnum.yellow
    ]
  ),
  [GenerationsIdEnum.II]: new Generation(
    GenerationsIdEnum.II,
    [
      GamesIdEnum.gold,
      GamesIdEnum.silver,
      GamesIdEnum.crystal,
    ]
  ),
  [GenerationsIdEnum.III]: new Generation(
    GenerationsIdEnum.III,
    [
      GamesIdEnum.ruby,
      GamesIdEnum.sapphire,
      GamesIdEnum.fireRed,
      GamesIdEnum.leafGreen,
      GamesIdEnum.emerald
    ]
  ),
  [GenerationsIdEnum.IV]: new Generation(
    GenerationsIdEnum.IV,
    [
      GamesIdEnum.diamond,
      GamesIdEnum.pearl,
      GamesIdEnum.platinium,
      GamesIdEnum.heartGold,
      GamesIdEnum.soulSilver
    ]
  ),
  [GenerationsIdEnum.V]: new Generation(
    GenerationsIdEnum.V,
    [
      GamesIdEnum.black,
      GamesIdEnum.white,
      GamesIdEnum.black2,
      GamesIdEnum.white2
    ]
  ),
  [GenerationsIdEnum.VI]: new Generation(
    GenerationsIdEnum.VI,
    [
      GamesIdEnum.x,
      GamesIdEnum.y,
      GamesIdEnum.omega_ruby,
      GamesIdEnum.alpha_sapphire,
    ]
  ),
  [GenerationsIdEnum.VII]: new Generation(
    GenerationsIdEnum.VII,
    [
      GamesIdEnum.sun,
      GamesIdEnum.moon,
      GamesIdEnum.ultra_sun,
      GamesIdEnum.ultra_moon
    ]
  ),
  [GenerationsIdEnum.VIII]: new Generation(
    GenerationsIdEnum.VIII,
    [
      GamesIdEnum.sword,
      GamesIdEnum.shield,
      /* GamesIdEnum.brilliant_diamond,
      GamesIdEnum.shining_pearl */
    ]
  )
]