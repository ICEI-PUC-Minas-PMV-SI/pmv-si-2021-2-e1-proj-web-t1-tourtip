const arrayLocations = ['bh_bares', 'bh_cinemas', 'bh_museus', 'bh_parquespublicos', 'bh_restaurantes', 'bh_turisticos'];
//intial, modify last
const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const lc = urlParams.get('lc');
const nb = urlParams.get('nb');


let i = lc || 0;
let j = nb || 3;
const localBaseURL = "http://localhost:3000";
const localURLTotal = localBaseURL + "/" + arrayLocations[j]; 

const localName = document.getElementById("local-name");
const localAdress = document.getElementById('local-adress');
const localDescription = document.getElementById('local-description');
const localLink = document.getElementById('local-link');

fetch(localURLTotal)
  .then(res => res.json())
  .then(local => {
    localName.innerHTML = `<h2>${local[i].name}</h2>`;
    localAdress.innerHTML = `<p>${local[i].address}</p>`;
    localDescription.innerHTML = `<p>${local[i].description}</p>`;
    localLink.innerHTML = `<a href="${local[i].link}">${local[i].link}</a>`;
    /* console.log("Passei aqui"); */
  });




//Pensar na utilização do id, para cidade, mesma lógica, só mais uma query.