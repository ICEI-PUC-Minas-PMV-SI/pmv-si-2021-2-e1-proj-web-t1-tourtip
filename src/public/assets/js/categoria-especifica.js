const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const id = urlParams.get('id');

const specificCityURL = 'http://localhost:3000/categoria_especificas';
const categoriesList = document.querySelector('#specific-categories');
const categoriesPlacesList = document.querySelector('#specific-categories-places');
const CategoriesPlaces = document.querySelector('#specific-categories');

fetch(specificCategoriesURL)
  .then(res => res.json())
  .then(specific_categories => {
    let specific_categories_list= '';
    let specific_categories_places_list;
    let specific_categories= '';

    specific_categories_list += `
      <div class="col-sm-12 col-lg-8 d-flex">
        <img src="${specific_categories[id].img}" img src="assets/img/praça-da-liberdade-1.jpg" class="img-fluid  py-1" style="border-radius: 25px"
     </div>
     <div class="col-sm-12 col-lg-8 d-flex">
     <div class="row justify-content-between align-items-center m-0 py-3 text-center">
     <div class="col-sm-12 col-lg-4 py-3">
     <h2 class="text-center">Praça da Liberdade</h2>
     </div>
        <p>${specific_categories[id].description}</p>
      </div>
    `;
    citiesList.innerHTML = specific_categories_list;

    for (let i = 0; i < specific_categories[id].places.length; i++) {
      specific_categories_list += `      
      <div class="card-body text-center">
        <a href="local.html?ct=${specific_city[id].places[i].category}&id=${specific_city[id].places[i].id}">
        <button type="button" class="btn btn-success home-item_card-button px-5 py-2">${specific_categories[id].places[i].name}</button>
        </a>
      </div>
      `;
      citiesPlacesList.innerHTML = specific_city_places_list;
    }

    for (let i = 0; i < specific_categories[id].categories.length; i++) {
      specific_categories_places_lis += `
      <div class="card-body text-center">
        <a href="">
          <button type="button" class="btn btn-success home-item_card-button px-5 py-2">
          ${specific_categories[id].categories[i].name}</button>
        </a>
      </div>
      `;
      Categories.innerHTML = specific_categories;
    }
  })
