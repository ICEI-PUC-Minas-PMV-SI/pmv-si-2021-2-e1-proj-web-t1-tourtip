const cities = require('../../data/cidades.json');
const categories  = require('../../data/categorias.json');
const cidade_especifica = require('../../data/cidade-especifica.json');
const bh_bares  = require('../../data/bh/bh-bares.json');
const bh_cinemas  = require('../../data/bh/bh-cinemas.json');
const bh_museus  = require('../../data/bh/bh-museus.json');
const bh_parquespublicos  = require('../../data/bh/bh-parquespublicos.json');
const bh_restaurantes  = require('../../data/bh/bh-restaurates.json');
const bh_turisticos  = require('../../data/bh/bh-turisticos.json');
const ctg_bares  = require('../../data/ctg/ctg-bares.json');
const ctg_cinemas  = require('../../data/ctg/ctg-cinemas.json');
const ctg_museus  = require('../../data/ctg/ctg-museus.json');
const ctg_parquespublicos  = require('../../data/ctg/ctg-parquespublicos.json');
const ctg_restaurantes  = require('../../data/ctg/ctg-restaurantes.json');
const ctg_turisticos  = require('../../data/ctg/ctg-turisticos.json');
const btm_bares  = require('../../data/btm/btm-bares.json');
const btm_cinemas  = require('../../data/btm/btm-cinemas.json');
const btm_museus  = require('../../data/btm/btm-museus.json');
const btm_parquespublicos  = require('../../data/btm/btm-parquespublicos.json');
const btm_restaurantes  = require('../../data/btm/btm-restaurantes.json');
const btm_turisticos  = require('../../data/btm/btm-turisticos.json');

module.exports = () => ({
  cities: cities,
  categories: categories,
  cidade_especifica: cidade_especifica,
  bh_bares: bh_bares,
  bh_cinemas: bh_cinemas,
  bh_museus: bh_museus,
  bh_parquespublicos: bh_parquespublicos,
  bh_restaurantes: bh_restaurantes,
  bh_turisticos: bh_turisticos,
  ctg_bares: ctg_bares,
  ctg_cinemas: ctg_cinemas,
  ctg_museus: ctg_museus,
  ctg_parquespublicos: ctg_parquespublicos,
  ctg_restaurantes: ctg_restaurantes,
  ctg_turisticos: ctg_turisticos,
  btm_bares: btm_bares,
  btm_cinemas: btm_cinemas,
  btm_museus: btm_museus,
  btm_parquespublicos: btm_parquespublicos,
  btm_restaurantes: btm_restaurantes,
  btm_turisticos: btm_turisticos
});