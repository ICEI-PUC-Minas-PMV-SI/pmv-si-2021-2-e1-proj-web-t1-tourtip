const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const id = urlParams.get('id');

const specificCityURL = 'https://tourtip-data.herokuapp.com/cidade_especifica';
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
        <div class="row justify-content-around align-items-center card-body text-center p-0">
          <div class="col-lg-6">
            <img class="img-fluid" style="border-radius: 20px" src="${specific_city[id].places[i].imgs[0]}">
          </div>
          <div class="col-lg-6 d-flex flex-column">
            <div>
              <h2 class="text-center">${specific_city[id].places[i].name}<h2>
            </div>
            <div>
              <a href="local.html?ct=${specific_city[id].places[i].category}&id=${specific_city[id].places[i].id}">
                <button type="button" class="btn btn-success home-item_card-button my-3 px-5 py-2">Explorar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
      citiesPlacesList.innerHTML = specific_city_places_list;
    }

    for (let i = 0; i < specific_city[id].categories.length; i++) {
      specific_city_places_categories += `
      <div class="card-body text-center">            
        <div class="row justify-content-around align-items-center card-body text-center p-0">
          <div class="col-lg-6">
            <img class="img-fluid" style="border-radius: 20px" src="${specific_city[id].categories[i].imgs[0]}">
          </div>
          <div class="col-lg-6 d-flex flex-column">
            <div>
              <h2 class="text-center">${specific_city[id].categories[i].name}<h2>
            </div>
            <div>
              <a href="categoria-especifica.html?cg=${specific_city[id].categories[i].category}">
                <button type="button" class="btn btn-success home-item_card-button my-3 px-5 py-2">Explorar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
      citiesPlacesCategories.innerHTML = specific_city_places_categories;
    }
  })
