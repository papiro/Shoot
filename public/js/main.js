['rock', 'scissors', 'paper'].forEach(function(item) {
  const elem = document.getElementById(item);
  elem.addEventListener('click', function(event) {
    alert(item.charAt(0).toUpperCase() + item.slice(1) + ' has been chosen');
  });
});
