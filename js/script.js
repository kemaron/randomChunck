var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

// pobieram zart ze strony wskazanej w 'url', odpowiedź parsuje przy pomocy JSON
function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }

//wywołanie po pierwszym wczytaniu
getJoke();