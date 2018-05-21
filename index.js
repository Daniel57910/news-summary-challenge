(function(exports) {
window.onload = function () {
  console.log("HELLO");
  apiData = window.apiData;
  window.data = getHeadlines(apiData.builtKey());
};

function getHeadlines(url) {
  fetch(url)
  .then((resp) => resp.json()).then (function (data) {
    return data;
  });
}
})(this);  
/*
testAPI = function() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let id = document.getElementById('test');
      let input = data.response.content.webTitle;
      id.innerText = input;
    });
};
*/
