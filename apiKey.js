(function(exports) {

  apiKey = function() {
    this.apiBase = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?";
    this.key = "&api-key=39b865d4-e26b-4c23-8d8e-8e86db537acf";
    this.editorPicks = "q=world";
    this.date = currentDate();
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