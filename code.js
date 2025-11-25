// Variables
var temp;
var weather;
var price;
var population = 500000;
var msg = "";
var img = "";


// Update screen when any input changes
onEvent("Temp", "change", updateScreen);
  updateScreen();
onEvent("Weather", "change", updateScreen);
  updateScreen();
onEvent("Prices", "change", updateScreen);
  updateScreen();
onEvent("Population", "input", updateScreen);
  updateScreen();

// Main function: decides state and shows image
function updateScreen() {
  temp = getText("Temp");
  weather = getText("Weather");
  price = getText("Prices");
  population = getNumber("Population");
  setText("popMeter", population);

  

  if (temp == "Hot" && weather == "Sunny" && population < 1000000) {
    msg = "Arizona is a great fit!";
    img = "assets/aRIZONA.jpg";
  } else if ((temp == "Cold" || weather == "Snowy") && population < 500000) {
    msg = "Alaska might be perfect!";
    img = "assets/Alaska.jpg";
  } else if (price == "High" && weather == "Sunny") {
    msg = "Colorado could be your new home!";
    img = "assets/colorado-frommers.jpg";
  } else if (price == "Low" && population >= 1000000) {
    msg = "Texas is a great choice!";
    img = "assets/texas.jpg";
  } else if (weather == "Rainy" && temp == "Cold") {
    msg = "Michigan might suit you!";
    img = "assets/mich.jpg";
  } else {
    msg = "No match yet. Try adjusting your choices.";
    img = "";
  }

  setText("Outcome", msg);
  setImageURL("StateImage", img);
}
