var max_comics = 10;
var base_url = "https://adamgyee12.github.io/ImperfectComics/";
var comic_base_url = base_url + "?comic=";

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var comic_id = getUrlParameter('comic');

window.onload = initialize();

function initialize(){

  // Add parameter to first pageload
  if (location.href == base_url){
    location.href = comic_base_url + max_comics;
  }

  // Check bounds
  if (comic_id < 1 || comic_id > max_comics) location.href = comic_base_url + max_comics;

  // Load comic
  $("#comic_strip").attr("src", "comics/comic" + comic_id + ".png");
}

document.getElementById("next").onclick = function () {
    if (comic_id){
      comic_id++;
      if (comic_id > max_comics) comic_id = 1;
      location.href = comic_base_url + comic_id;
    }
};

document.getElementById("prev").onclick = function () {
    if (comic_id){
      comic_id--;
      if (comic_id < 1) comic_id = max_comics;
      location.href = comic_base_url + comic_id;
    }
};

document.getElementById("random").onclick = function () {
    comic_id = Math.floor((Math.random() * max_comics) + 1);

    location.href = comic_base_url + comic_id;

};
