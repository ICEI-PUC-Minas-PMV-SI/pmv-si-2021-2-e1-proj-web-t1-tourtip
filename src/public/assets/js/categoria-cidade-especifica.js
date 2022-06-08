const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const cg = urlParams.get('cg');

const specificCategoryURL = `https://tourtip-data.herokuapp.com/${cg}`;
const specificCategory = document.querySelector('#specific-category');
const specificCategoryTitle = document.querySelector('#specific-category-title');

fetch(specificCategoryURL)
  .then(res => res.json())
  .then(specific_category => {
    let specific_categories_list = '';
    let specific_categories_title = '';

    specific_categories_list += `
    <h1 class="d-flex justify-content-center text-white mt-5" style="font-size: 1.5rem;">${specific_category[i].category} em ${specific_category[i].city}</h1>
    `;
    specificCategoryTitle.innerHTML = specific_categories_title;

    for (let i = 0; i < specific_category.length; i++) {
      specific_categories_list += `
      <div class="container">
        <div class="bg-white my-5" style="border-radius: 20px">      
          <div class="row align-items-center m-0 py-3">        
            <div class="col-sm-12 col-lg-4">
              <div class="card border-0" style="border-radius: 20px">
                <img src="${specific_category[i].imgs[0]}" class="img-fluid  py-1" style="border-radius: 25px"
                  alt="..." />
              </div>
            </div>
            <div class="col-sm-12 col-lg-8 d-flex">
              <div class="row justify-content-between align-items-center m-0 py-3 text-center">
                <div class="col-sm-12 col-lg-4 py-3">
                  <h2 class="text-center">${specific_category[i].name}</h2>
                </div>
                <div class="col-sm-12 col-lg-4 py-3">
                  <p>${specific_category[i].address}</p>
                </div>
                <div class="col-sm-12 col-lg-4 py-3 d-flex justify-content-center">
                  <a href="local.html?ct=bh_${cg}&id=${specific_category[i].id}">
                    <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      specificCategory.innerHTML = specific_categories_list;
    }
  })