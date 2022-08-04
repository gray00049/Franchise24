document.addEventListener('DOMContentLoaded', () => {
  let headerBlock = document.querySelector('.header__view');
  headerBlock.addEventListener('click', toggleHeader);
});


// Function to show|hide header menu
function toggleHeader() {
  document.querySelector('.header').classList.toggle('open');
}