// import meals from '../package.json';
import menuTemplate from './templates/menutemplate.hbs';
import './sass/main.scss';
import elMarkup from './menu.json';

const menuList = document.querySelector('.js-menu');
console.log(menuList);


function createGallery(cards) {
  return cards.map(menuTemplate).join('');
}

const cardMarkup = createGallery(elMarkup);
menuList.insertAdjacentHTML('beforeend', cardMarkup);


// переключение темы //

const bodyEl = document.querySelector('body');
const switcher = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcher.addEventListener ('change', onCheckBoxChange);

const STORAGE_KEY = 'theme';

const currentTheme = localStorage.getItem('STORAGE_KEY');

if (currentTheme === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  switcher.checked = true;
}

function onThemeBodyChange(addClass, delClass) {
  bodyEl.classList.remove(delClass);
  bodyEl.classList.add(addClass);
  localStorage.setItem('STORAGE_KEY', addClass);
}

function onCheckBoxChange(event) {
  const checked = switcher.checked;
  if (checked) {
    onThemeBodyChange(Theme.DARK, Theme.LIGHT);
  } else {
    onThemeBodyChange(Theme.LIGHT, Theme.DARK);
  }
}

