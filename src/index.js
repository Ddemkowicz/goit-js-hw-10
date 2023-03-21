import './css/styles.css';

const log = console.log;
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

// input.addEventListener('input', () => {
//   fetchCountry()
//     .then(names => renderCountryList(names))
//     .catch(error => console.log(error));
// });

// function fetchCountry() {
//   return fetch('https://restcountries.com/v3.1').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderCountryList(names) {
//   const markup = names
//     .map(name => {
//       return `<li>
//           <p><b>Name</b>: ${name.name.official}</p>
//           <p><b>Capital</b>: ${name.capital}</p>
//           <p><b>Population</b>: ${name.population}</p>
//           <p><b>Flag</b>: ${name.flags}</p>
//           <p><b>Languages</b>: ${name.languages}</p>
//         </li>`;
//     })
//     .join('');
//   countryList.innerHTML = markup;
// }
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  log(input.value);
});

input.addEventListener('input', fetchCountries);
function fetchCountries(name) {
  input.value = name;
  fetch('https://restcountries.com/v3.1/name/{name}');
  log('fetchCountries: ', fetchCountries);
}
// const fetchCountries = fetch('https://restcountries.com/v3.1/name/poland');
// fetchCountries
//   .then(response => {
//     log('response: ', response);
//     const countryData = response.json();
//     log('countryData: ', countryData);
//     return countryData;
//   })
//   .then(name => {
//     log('name: ', name);
//   });
