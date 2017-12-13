const one = document.getElementById('rock');
const two = document.getElementById('paper');
const three = document.getElementById('scissors');

one.addEventListener('click', function(event) {
  alert('Rock has been chosen');
});

two.addEventListener('click', function(event) {
  alert('Paper has been chosen');
});

three.addEventListener('click', function(event) {
  alert('Scissors has been chosen');
});
