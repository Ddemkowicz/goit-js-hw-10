import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const log = console.log;
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

function testDebounce() {
  log(input.value);
  Notiflix.Notify.failure('ROBIE TEST');
}
const deboTest = debounce(testDebounce, DEBOUNCE_DELAY);
const btn = document.querySelector('button');
btn.addEventListener('click', deboTest);
