import Notiflix from 'notiflix';

export default function fetchCountries() {
  const name =
    `https://restcountries.com/v3.1/name/` +
    input.value.trim() +
    '?fields=name,capital,population,flags,languages';
  return fetch(`${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    const countryData = response.json();
    // const response2 = response.clone();
    console.log(countryData);
    return countryData;
  });
}
const input = document.querySelector('#search-box');
console.log(fetchCountries());
