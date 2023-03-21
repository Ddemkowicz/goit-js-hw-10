import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const log = console.log;
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
input.addEventListener('input', () => {
  fetchCountries;
});

const inputInfo = () => {
  if (countryData.length > 10)
    Notiflix.Notify.info(
      `Too many matches found. Please enter a more specific name.`
    );
};

function testDebounce() {
  log(input.value);
  Notiflix.Notify.failure('Cogito ergo sum');
}
const deboTest = debounce(testDebounce, DEBOUNCE_DELAY);
const btn = document.querySelector('button');
btn.addEventListener('click', deboTest);
