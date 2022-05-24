const cities = require('../../data/cidades.json');
const categories  = require('../../data/categorias.json');
const cidade_especifica = require('../../data/cidade-especifica.json');
const bh_bares  = require('../../data/bh/bh-bares.json');
const bh_cinemas  = require('../../data/bh/bh-cinemas.json');
const bh_museus  = require('../../data/bh/bh-museus.json');
const bh_parquespublicos  = require('../../data/bh/bh-parquespublicos.json');
const bh_restaurantes  = require('../../data/bh/bh-restaurates.json');
const bh_turisticos  = require('../../data/bh/bh-turisticos.json');

module.exports = () => ({
  cities: cities,
  categories: categories,
  cidade_especifica: cidade_especifica,
  bh_bares: bh_bares,
  bh_cinemas: bh_cinemas,
  bh_museus: bh_museus,
  bh_parquespublicos: bh_parquespublicos,
  bh_restaurantes: bh_restaurantes,
  bh_turisticos: bh_turisticos
});