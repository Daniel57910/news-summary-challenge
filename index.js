const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";


window.onload = function () {
  console.log("HELLO");
  testAPI(url);
  
};

testAPI = function() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let id = document.getElementById('test');
      let input = data.response.content.webTitle;
      id.innerText = input;
    });
};

