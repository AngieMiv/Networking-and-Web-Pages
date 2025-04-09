// script.js - Handles bilingual toggle logic
// script.js - Language switching logic for bilingual support

// Get toggle button, storing it into the const toggleButton
const toggleButton = document.getElementById('language-toggle');

// Store current language (default is 'en')
let currentLang = 'en';

/**
 * switchLanguage - Show elements of the selected language
 * @param {string} lang - 'en' or 'es'
 */
function switchLanguage(lang) {
  const esElements = document.querySelectorAll('.lang-es');
  const enElements = document.querySelectorAll('.lang-en');

  // Loop through all Spanish elements
  esElements.forEach(el => {
    el.classList.toggle('visible', lang === 'es');
    el.classList.toggle('hidden', lang !== 'es');
  });

  // Loop through all English elements
  enElements.forEach(el => {
    el.classList.toggle('visible', lang === 'en');
    el.classList.toggle('hidden', lang !== 'en');
  });

  // Update current language
  currentLang = lang;
}

// Toggle between 'en' and 'es' on button click
toggleButton.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  switchLanguage(newLang);
});

// Set initial language on page load
switchLanguage('en');
