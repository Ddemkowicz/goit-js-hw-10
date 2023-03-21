import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');

const input = document.querySelector('#search-box');
console.log(fetchCountries());

export default function fetchCountries() {
  const name =
    `https://restcountries.com/v3.1/name/` +
    input.value.trim() +
    '?fields=name,capital,population,flags,languages';
  return fetch(`${name}`)
    .then(response => {
      if (response.status == 404 && input.value != '') {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }
      const countryData = response.json();
      console.log(countryData);
      return countryData;
    })
    .then(countryArr => {
      console.log(countryArr);
      if (countryArr.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      createList(countryArr);
    })
    .catch(error => {
      console.error(error);
    });
}

function createList(countries) {
  let listHtml = '';
  if (countries.length > 1 && countries.length < 11) {
    countries.forEach(country => {
      listHtml += `<li><img src="${country.flags.svg}" alt="flag" width="20px">
${country.name.official}</li>`;
    });
    countryList.innerHTML = listHtml;
  } else if (countries.length == 1) {
    countries.forEach(country => {
      const languages = Object.values(country.languages).join(', ');
      console.log(languages);
      listHtml += `
            <li><img src="${country.flags.svg}" alt="flag" width="40px">  ${country.name.official}</li>
            <li>Capital: ${country.capital}</li>
            <li>Population: ${country.population}</li>
             <li>Languages: ${languages}</li>
          `;
    });
    countryList.innerHTML = listHtml;
  } else if (input.value == '') {
    countryList.innerHTML = '';
  }
}
