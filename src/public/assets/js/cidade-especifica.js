const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const id = urlParams.get('id');

const specificCityURL = 'http://localhost:3000/cidade_especifica';
const citiesList = document.querySelector('#specific-city');
const citiesPlacesList = document.querySelector('#specific-city-places');
const citiesPlacesCategories = document.querySelector('#specific-city-categories');

fetch(specificCityURL)
  .then(res => res.json())
  .then(specific_city => {
    let specific_city_list = '';
    let specific_city_places_list = '';
    let specific_city_places_categories = '';

    specific_city_list += `
      <div class="col-sm-12 col-lg-4 d-flex align-items-center">
        <img src="${specific_city[id].img}" class="img-fluid p-3" style="border-radius: 30px;" alt="Foto de esportes">
      </div>
      <div class="col-sm-12 col-lg-8 d-flex flex-column justify-content-evenly card-body text-center lh-base">
        <div class="card-title">
          <h2 class="text-center">${specific_city[id].name}</h2>
        </div>
        <p>${specific_city[id].description}</p>
      </div>
    `;
    citiesList.innerHTML = specific_city_list;

    for (let i = 0; i < specific_city[id].places.length; i++) {
      specific_city_places_list += `      
      <div class="card-body text-center">
        <a href="local.html?ct=${specific_city[id].places[i].category}&id=${specific_city[id].places[i].id}">
          <button type="button" class="btn btn-success home-item_card-button px-5 py-2">${specific_city[id].places[i].name}</button>
        </a>
      </div>
      `;
      citiesPlacesList.innerHTML = specific_city_places_list;
    }

    for (let i = 0; i < specific_city[id].categories.length; i++) {
      specific_city_places_categories += `
      <div class="card-body text-center">
        <a href="">
          <button type="button" class="btn btn-success home-item_card-button px-5 py-2">${specific_city[id].categories[i].name}</button>
        </a>
      </div>
      `;
      citiesPlacesCategories.innerHTML = specific_city_places_categories;
    }
  })
