URL = 'https://tourtip-data.herokuapp.com/categories';

const categoriesList = document.querySelector('#categories-list');

fetch(URL)
  .then(res => res.json())
  .then(categories => {
    let categories_list = '';
    for (let i = 0; i < categories.length; i++) {
      categories_list += `
        <div class="my-3 main-card col-sm-12 col-lg-4">
          <div class="card" style="border-radius: 20px;">
            <div class="card-body text-center">
              <h5 class="card-title">${categories[i].name}</h5>
            </div>
            <img src="${categories[i].img}" class="img-fluid p-2" style="border-radius: 20px;" alt="Foto de esportes">
            <div class="card-body text-center">
              <a href="categoria-especifica.html?cg=${categories[i].category}">
                <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>
              </a>
            </div>
          </div>
        </div>
      `;

      categoriesList.innerHTML = categories_list;
    }
  })
