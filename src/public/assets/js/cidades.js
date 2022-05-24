citiesURL = 'http://localhost:3000/cities';

const citiesList = document.querySelector('#cities-list');

fetch(citiesURL)
  .then(res => res.json())
  .then(cities => {
    let cities_list = '';
    for (let i = 0; i < cities.length; i++) {
      cities_list += `
      <div class="my-3 main-card col-sm-12 col-lg-4">
        <div class="card" style="border-radius: 20px;">
            <div>
              <div class="card-body text-center">
                  <h5 class="card-title">${cities[i].name}</h5>
              </div>
              <img src="${cities[i].img}" class="img-fluid p-2" style="border-radius: 20px;" alt="Foto de esportes">
            </div>
            <div class="card-body text-center">
              <a href="cidade-especifica.html?id=${cities[i].id}">
                <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>                
              </a>
            </div>
        </div>
      </div>
      `;

      citiesList.innerHTML = cities_list;
    }
  })
