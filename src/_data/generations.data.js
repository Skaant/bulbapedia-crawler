const { red, green, yellow, gold, silver, cristal, ruby, sapphire, fireRed, leafGreen, emerald, pearl, platinium, heartGold, soulSilver, black, white, black2, white2, alpha_sapphire, moon, ultra_sun, ultra_moon, sword, shield, brilliant_diamond, shining_pearl } = require("../_enums/gamesId.enum");
const Generation = require("../_models/Generation/Generation");

module.exports = [
  new Generation(1, [
    red,
    green,
    blue,
    yellow
  ]),
  new Generation(2, [
    gold,
    silver,
    cristal,
  ]),
  new Generation(3, [
    ruby,
    sapphire,
    fireRed,
    leafGreen,
    emerald
  ]),
  new Generation(4, [
    diamond,
    pearl,
    platinium,
    heartGold,
    soulSilver
  ]),
  new Generation(5, [
    black,
    white,
    black2,
    white2
  ]),
  new Generation(6, [
    x,
    y,
    omega_ruby,
    alpha_sapphire,
  ]),
  new Generation(7, [
    sun,
    moon,
    ultra_sun,
    ultra_moon
  ]),
  new Generation(8, [
    sword,
    shield,
    brilliant_diamond,
    shining_pearl
  ])
]