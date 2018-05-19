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
