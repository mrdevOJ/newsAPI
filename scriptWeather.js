fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127758&units=metric&appid=dd424f21f0dc76a6bbc59a696e0f34cc')
.then(response => response.json()).then(london => {


    console.log(london);


     $(document).ready(function() {

  var name =london.name;
var temp =london.main.temp;
var humidity =london.main.humidity;

$("#London").html(" "+ name);   
    $("#London-temp").html(" " + temp +"°");   
$("#London-hmidity").html("   "+ humidity+ "%");

})
    });
    //////////////////////////////// rabat
fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.971588&lon=-6.849813&units=metric&appid=dd424f21f0dc76a6bbc59a696e0f34cc')
.then(response => response.json()).then(london => {


    console.log(london);


     $(document).ready(function() {

  var name =london.name;
var temp =london.main.temp;
var humidity =london.main.humidity;

$("#Rabat").html(" "+ name);   
    $("#Rabat-temp").html(" " + temp +"°");   
$("#Rabat-hmidity").html("   "+ humidity+ "%");

})
    });

    ///////////////////////////////////// mekka 
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.407827&lon=39.819423&units=metric&appid=dd424f21f0dc76a6bbc59a696e0f34cc')
.then(response => response.json()).then(london => {


    console.log(london);


     $(document).ready(function() {

  var name =london.name;
var temp =london.main.temp;
var humidity =london.main.humidity;

$("#Mekka").html(" "+ name);   
    $("#Mekka-temp").html(" " + temp +"°");   
$("#Mekka-hmidity").html("   "+ humidity+ "%");

})
    });


    //////////////////////////////////////// paris
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&units=metric&appid=dd424f21f0dc76a6bbc59a696e0f34cc')
.then(response => response.json()).then(london => {


    console.log(london);


     $(document).ready(function() {

  var name =london.name;
var temp =london.main.temp;
var humidity =london.main.humidity;

$("#Paris").html(" "+ name);   
    $("#Paris-temp").html(" " + temp +"°");   
$("#Paris-hmidity").html("   "+ humidity+ "%");

})
    });
    ////////////////////////////////////// new york
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&units=metric&appid=dd424f21f0dc76a6bbc59a696e0f34cc')
.then(response => response.json()).then(london => {


    console.log(london);


     $(document).ready(function() {

  var name =london.name;
var temp =london.main.temp;
var humidity =london.main.humidity;

$("#NK").html(" "+ name);   
    $("#NK-temp").html(" " + temp +"°");   
$("#Nk-hmidity").html("   "+ humidity+ "%");

})
    });
