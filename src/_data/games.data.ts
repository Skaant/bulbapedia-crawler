import GamesIdEnum from "../_enums/gamesId.enum";
import GenerationsIdEnum from "../_enums/generationsId.enum";
import RegionsIdEnum from "../_enums/regionsId.enum";
import Game from "../_models/Game/Game";

export default {
  [GamesIdEnum.red]: new Game(
    GenerationsIdEnum.I,
    GamesIdEnum.red,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.blue]: new Game(
    GenerationsIdEnum.I,
    GamesIdEnum.blue,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.green]: new Game(
    GenerationsIdEnum.I,
    GamesIdEnum.green,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.yellow]: new Game(
    GenerationsIdEnum.I,
    GamesIdEnum.yellow,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.gold]: new Game(
    GenerationsIdEnum.II,
    GamesIdEnum.gold,
    RegionsIdEnum.johto_1
  ),
  [GamesIdEnum.silver]: new Game(
    GenerationsIdEnum.II,
    GamesIdEnum.silver,
    RegionsIdEnum.johto_1
  ),
  [GamesIdEnum.crystal]: new Game(
    GenerationsIdEnum.II,
    GamesIdEnum.crystal,
    RegionsIdEnum.johto_1
  ),
  [GamesIdEnum.ruby]: new Game(
    GenerationsIdEnum.III,
    GamesIdEnum.ruby,
    RegionsIdEnum.hoenn_1
  ),
  [GamesIdEnum.sapphire]: new Game(
    GenerationsIdEnum.III,
    GamesIdEnum.sapphire,
    RegionsIdEnum.hoenn_1
  ),
  [GamesIdEnum.fireRed]: new Game(
    GenerationsIdEnum.III,
    GamesIdEnum.fireRed,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.leafGreen]: new Game(
    GenerationsIdEnum.III,
    GamesIdEnum.leafGreen,
    RegionsIdEnum.kanto
  ),
  [GamesIdEnum.emerald]: new Game(
    GenerationsIdEnum.III,
    GamesIdEnum.emerald,
    RegionsIdEnum.hoenn_1
  ),
  [GamesIdEnum.diamond]: new Game(
    GenerationsIdEnum.IV,
    GamesIdEnum.diamond,
    RegionsIdEnum.sinnoh_1
  ),
  [GamesIdEnum.pearl]: new Game(
    GenerationsIdEnum.IV,
    GamesIdEnum.pearl,
    RegionsIdEnum.sinnoh_1
  ),
  [GamesIdEnum.platinium]: new Game(
    GenerationsIdEnum.IV,
    GamesIdEnum.platinium,
    RegionsIdEnum.sinnoh_2
  ),
  [GamesIdEnum.heartGold]: new Game(
    GenerationsIdEnum.IV,
    GamesIdEnum.heartGold,
    RegionsIdEnum.johto_2
  ),
  [GamesIdEnum.soulSilver]: new Game(
    GenerationsIdEnum.IV,
    GamesIdEnum.soulSilver,
    RegionsIdEnum.johto_2
  ),
  [GamesIdEnum.black]: new Game(
    GenerationsIdEnum.V,
    GamesIdEnum.black,
    RegionsIdEnum.unova_1
  ),
  [GamesIdEnum.white]: new Game(
    GenerationsIdEnum.V,
    GamesIdEnum.white,
    RegionsIdEnum.unova_1
  ),
  [GamesIdEnum.black2]: new Game(
    GenerationsIdEnum.V,
    GamesIdEnum.black2,
    RegionsIdEnum.unova_2
  ),
  [GamesIdEnum.white2]: new Game(
    GenerationsIdEnum.V,
    GamesIdEnum.white2,
    RegionsIdEnum.unova_2
  ),
  [GamesIdEnum.x]: new Game(
    GenerationsIdEnum.VI,
    GamesIdEnum.x,
    RegionsIdEnum.kalos
  ),
  [GamesIdEnum.y]: new Game(
    GenerationsIdEnum.VI,
    GamesIdEnum.y,
    RegionsIdEnum.kalos
  ),
  [GamesIdEnum.omega_ruby]: new Game(
    GenerationsIdEnum.VI,
    GamesIdEnum.omega_ruby,
    RegionsIdEnum.hoenn_2
  ),
  [GamesIdEnum.alpha_sapphire]: new Game(
    GenerationsIdEnum.VI,
    GamesIdEnum.alpha_sapphire,
    RegionsIdEnum.hoenn_2
  ),
  [GamesIdEnum.sun]: new Game(
    GenerationsIdEnum.VII,
    GamesIdEnum.sun,
    RegionsIdEnum.aloha_1
  ),
  [GamesIdEnum.moon]: new Game(
    GenerationsIdEnum.VII,
    GamesIdEnum.moon,
    RegionsIdEnum.aloha_1
  ),
  [GamesIdEnum.ultra_sun]: new Game(
    GenerationsIdEnum.VII,
    GamesIdEnum.ultra_sun,
    RegionsIdEnum.aloha_2
  ),
  [GamesIdEnum.ultra_moon]: new Game(
    GenerationsIdEnum.VII,
    GamesIdEnum.ultra_moon,
    RegionsIdEnum.aloha_2
  ),
  [GamesIdEnum.sword]: new Game(
    GenerationsIdEnum.VIII,
    GamesIdEnum.sword,
    RegionsIdEnum.galar
  ),
  [GamesIdEnum.shield]: new Game(
    GenerationsIdEnum.VIII,
    GamesIdEnum.shield,
    RegionsIdEnum.galar
  ),
  /* [GamesIdEnum.brilliant_diamond]: new Game(
    GenerationsIdEnum.VIII,
    GamesIdEnum.brilliant_diamond,
    RegionsIdEnum.
  ),
  [GamesIdEnum.shining_pearl]: new Game(
    GenerationsIdEnum.VIII,
    GamesIdEnum.shining_pearl,
    RegionsIdEnum.
  ) */
}