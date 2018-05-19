let testLibrary = require("../testLibrary.js");
let apiKey = require("../apiKey.js");
apiKey = apiKey.apiData;

(function sampleTest() {
testLibrary.evaluation.isTrue(5 === 5);
})(this);

(function buildAPIForHeadlines() {
  testLibrary.evaluation.isTrue(
    apiKey.builtKey() === (apiKey.apiBase+ apiKey.editorPicks + apiKey.key)
  );
})(this);