// script.js - Handles bilingual toggle logic
// script.js - Language switching logic for bilingual support

// Get toggle button
const toggleButton = document.getElementById('language-toggle');

// Store current language (default is 'en')
let currentLang = 'en';

/**
 * switchLanguage - Shows content in selected language
 * @param {string} lang - 'en' or 'es'
 */
function switchLanguage(lang) {
  const esElements = document.querySelectorAll('.lang-es');
  const enElements = document.querySelectorAll('.lang-en');

  esElements.forEach(el => el.style.display = lang === 'es' ? '' : 'none');
  enElements.forEach(el => el.style.display = lang === 'en' ? '' : 'none');

  currentLang = lang;
}

// Button toggles between 'en' and 'es'
toggleButton.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  switchLanguage(newLang);
});
