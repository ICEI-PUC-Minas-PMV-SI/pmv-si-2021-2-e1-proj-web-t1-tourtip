const { api_key } = require("./server");

const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const ct = urlParams.get('ct');
const id = urlParams.get('id');

const specificCityURL = `https://tourtip-data.herokuapp.com/${ct}/${id}`;
const placeInfo = document.querySelector('#place');
const placeImgs = document.querySelector('#place_imgs');

fetch(specificCityURL)
  .then(res => res.json())
  .then(place => {
    let place_list = '';
    let place_img_list = '';

    place_list += `
    <div class="card my-5 py-3" style="border-radius: 20px">
      <div class="card-body">
        <h1>${place.name}</h1>
      </div>
    </div>
    <div class="card my-5 py-3" style="border-radius: 20px">
      <div class="card-body">
        <h2>Endereço</h2>
        <p>${place.address}</p>
      </div>
    </div>
    <div class="card my-5 py-3" style="border-radius: 20px">
      <div class="card-body">
        <iframe
          width="100%"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=${api_key}
            &q=Lagoa+da+Pampulha">
        </iframe>
      </div>
    </div>
    <div class="card my-5 py-3" style="border-radius: 20px">
      <div class="card-body">
        <h2>Link</h2>
        <a href="${place.link}" target="_blank"><p>${place.link}</p></a>
      </div>
    </div>
    `;
    placeInfo.innerHTML = place_list;

    for (let i = 0; i < place.imgs.length; i++) {
      place_img_list += `
      <img
        src="${place.imgs[i]}"
        class="img-fluid p-4"
        style="border-radius: 40px"
        alt="..."
      />
      `;
      placeImgs.innerHTML = place_img_list;
    }
  })
