const input = document.querySelector('#phone');
window.intlTelInput(input, {
  initialCountry: 'ua',
  separateDialCode: true,
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js',
});
