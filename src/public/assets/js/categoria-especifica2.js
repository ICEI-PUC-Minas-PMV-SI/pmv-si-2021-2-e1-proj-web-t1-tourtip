const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const cg = urlParams.get('cg');

const bhSpecificCategoryURL = `http://localhost:3000/bh_${cg}`;
const ctgSpecificCategoryURL = `http://localhost:3000/ctg_${cg}`;
const btmSpecificCategoryURL = `http://localhost:3000/btm_${cg}`;
const bgSpecificCategory = document.querySelector('#bh-specific-category');
const ctgSpecificCategory = document.querySelector('#ctg-specific-category');
const btmSpecificCategory = document.querySelector('#btm-specific-category');

fetch(bhSpecificCategoryURL)
  .then(res => res.json())
  .then(bh_specific_category => {
    let bh_specific_categories_list = '';

    for (let i = 0; i < bh_specific_category.length; i++) {
      bh_specific_categories_list += `
      <div class="bg-white my-5" style="border-radius: 20px">      
        <div class="row align-items-center m-0 py-3">        
          <div class="col-sm-12 col-lg-4">
            <div class="card border-0" style="border-radius: 20px">
              <img src="${bh_specific_category[i].imgs[0]}" class="img-fluid  py-1" style="border-radius: 25px"
                alt="..." />
            </div>
          </div>
          <div class="col-sm-12 col-lg-8 d-flex">
            <div class="row justify-content-between align-items-center m-0 py-3 text-center">
              <div class="col-sm-12 col-lg-4 py-3">
                <h2 class="text-center">${bh_specific_category[i].name}</h2>
              </div>
              <div class="col-sm-12 col-lg-4 py-3">
                <p>${bh_specific_category[i].address}</p>
              </div>
              <div class="col-sm-12 col-lg-4 py-3 d-flex justify-content-center">
                <a href="local.html?ct=bh_${cg}&id=${bh_specific_category[i].id}">
                  <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      bgSpecificCategory.innerHTML = bh_specific_categories_list;
    }
  })

fetch(ctgSpecificCategoryURL)
  .then(res => res.json())
  .then(ctg_specific_category => {
    let ctg_specific_categories_list = '';

    for (let i = 0; i < ctg_specific_category.length; i++) {
      ctg_specific_categories_list += `
      <div class="bg-white my-5" style="border-radius: 20px">      
        <div class="row align-items-center m-0 py-3">        
          <div class="col-sm-12 col-lg-4">
            <div class="card border-0" style="border-radius: 20px">
              <img src="${ctg_specific_category[i].imgs[0]}" class="img-fluid  py-1" style="border-radius: 25px"
                alt="..." />
            </div>
          </div>
          <div class="col-sm-12 col-lg-8 d-flex">
            <div class="row justify-content-between align-items-center m-0 py-3 text-center">
              <div class="col-sm-12 col-lg-4 py-3">
                <h2 class="text-center">${ctg_specific_category[i].name}</h2>
              </div>
              <div class="col-sm-12 col-lg-4 py-3">
                <p>${ctg_specific_category[i].address}</p>
              </div>
              <div class="col-sm-12 col-lg-4 py-3 d-flex justify-content-center">
                <a href="local.html?ct=ctg_${cg}&id=${ctg_specific_category[i].id}">
                  <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      ctgSpecificCategory.innerHTML = ctg_specific_categories_list;
    }
  })

fetch(btmSpecificCategoryURL)
  .then(res => res.json())
  .then(btm_specific_category => {
    let btm_specific_categories_list = '';

    for (let i = 0; i < btm_specific_category.length; i++) {
      btm_specific_categories_list += `
      <div class="bg-white my-5" style="border-radius: 20px">      
        <div class="row align-items-center m-0 py-3">        
          <div class="col-sm-12 col-lg-4">
            <div class="card border-0" style="border-radius: 20px">
              <img src="${btm_specific_category[i].imgs[0]}" class="img-fluid  py-1" style="border-radius: 25px"
                alt="..." />
            </div>
          </div>
          <div class="col-sm-12 col-lg-8 d-flex">
            <div class="row justify-content-between align-items-center m-0 py-3 text-center">
              <div class="col-sm-12 col-lg-4 py-3">
                <h2 class="text-center">${btm_specific_category[i].name}</h2>
              </div>
              <div class="col-sm-12 col-lg-4 py-3">
                <p>${btm_specific_category[i].address}</p>
              </div>
              <div class="col-sm-12 col-lg-4 py-3 d-flex justify-content-center">
                <a href="local.html?ct=btm_${cg}&id=${btm_specific_category[i].id}">
                  <button type="button" class="btn btn-success home-item_card-button px-5 py-2">Explorar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      btmSpecificCategory.innerHTML = btm_specific_categories_list;
    }
  })
