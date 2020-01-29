var searchbox = document.querySelector('input.search-box');
var searchbutton = document.querySelector('button.search-button');
var spanicon = document.querySelector('span.fa');

searchbutton.addEventListener('click', function() {
    searchbutton.classList.add('active');
    searchbox.classList.add('active', 'slide-in-right');
    searchbox.focus();
    spanicon.classList.replace('fa-search', 'fa-spinner');
    spanicon.classList.add('rotate-scale-up');
    console.log('actie');
});

var main = document.querySelector('main');

main.addEventListener('click', function() {
  spanicon.classList.replace('fa-spinner', 'fa-search');
  searchbox.classList.remove('active');
  searchbutton.classList.remove('active');
  spanicon.classList.remove('rotate-scale-up');
  console.log('klik weg');
});


function myFunction() {
  // Declare variables
  var input, filter, section, card, i, txtValue;
  input = document.querySelector('input.search-box');
  filter = input.value.toUpperCase();

  section = document.getElementById("mySection");
  card = section.getElementsByClassName('card');


  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < card.length; i++) {
    a = card[i].getElementsByClassName("title_test")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}

