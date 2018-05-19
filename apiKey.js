(function(exports) {

const url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key-39b865d4-e26b-4c23-8d8e-8e86db537acf";

apiKey = function() {
  this.apiBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?";
  this.key = "&api-key=39b865d4-e26b-4c23-8d8e-8e86db537acf";
  this.editorPicks = "q=world";
};

apiKey.prototype.builtKey = function() {
  return (this.apiBase + this.editorPicks + this.key);
};

exports.apiData = new apiKey();

  function currentDate() {
    return new Date().toISOString().slice(0, getDeleteIndex());
  }

  function getDeleteIndex() {
     return new Date().toISOString().indexOf("T");
  }

})(this);