const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const id = urlParams.get('id');

const specificCityURL = 'http://localhost:3000/cidade_especifica';
const citiesList = document.querySelector('#specific-city');

fetch(specificCityURL)
  .then(res => res.json())
  .then(specific_city => {
    let specific_city_list = '';

    specific_city_list += `
      <div class="col-sm-12 col-lg-4 d-flex align-items-center">
            <img src="${specific_city[id].img}" class="img-fluid p-3" style="border-radius: 30px;"
              alt="Foto de esportes">
          </div>
          <div class="col-sm-12 col-lg-8 d-flex flex-column justify-content-evenly card-body text-center lh-base">
            <div class="card-title">
              <h2 class="text-center">${specific_city[id].name}</h2>
            </div>
            <p>${specific_city[id].description}</p>
          </div>
      `;

    citiesList.innerHTML = specific_city_list;
  })