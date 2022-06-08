let api_key = process.env.API_KEY;
let query = 'Lagoa+da+Pampulha';
const mapURL = `https://www.google.com/maps/embed/v1/place?key=${api_key}
&q=${query}`

function showEnv() {
  console.log(api_key, query);
}

export default showEnv;