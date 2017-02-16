$(document).ready(function() {

  document.getElementById("searchbar").onkeyup = function() {
    search()
  };

  function search() {
    var input = document.getElementById("searchbar").value;
    wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search=" + input + "&callback=?";
    $.getJSON(wikiUrl, function(data) {
      display = data;
    });
  } 

  $("#submitForm").submit(function(event) {
    setTimeout(loadData, 320);
    event.preventDefault();
    $("#output").empty();
  });

  function loadData() {
    for (i = 0; i < display[1].length; i++) {
      $("#output").prepend("<div class=\"excerpt\"><a href=" + display[3][i] + "><h1>" + display[1][i] + "</h1>" + "<span>" + display[2][i] + "</span></div></br>"); 
    }
  }
}); //document ready