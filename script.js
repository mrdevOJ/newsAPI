

fetch("https://api.currencyfreaks.com/latest?apikey=beeb18a50e2c4221b1f584dfb8b49daa").then((result)=>{
    let myData= result.json();
return myData;
})
.then((curency)=>{
$(document).ready(function() {
var SAR =curency.rates["SAR"];
 var MAD =curency.rates["MAD"];
 var EGP =curency.rates["EGP"];
 var EUR =curency.rates["EUR"];

       
$("#SAR").html(Math.round(SAR*100)/100);   
    $("#MAD").html(Math.round(MAD*100)/100);   
$("#EGP").html(Math.round(EGP*100)/100);
$("#EUR").html(Math.round(EUR*100)/100);   

})
});

fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c9e309366c144116b1eff06313e7130d")
.then(respons=>respons.json())
.then((news)=>{


    console.log(news)

    $(document).ready(function() {

for(var i=0; i<news.articles.length; i++){
    

    
    let x = Math.floor((Math.random() * 100) + 1);
 var Artictitle = news.articles[i* x];
 titre=Artictitle.title;
 desc = Artictitle.description;
 date = Artictitle.publishedAt;
 img =Artictitle.urlToImage;
 link=Artictitle.url;

   $('#artictitle').html(titre);
    $('#description').html(desc);
    $('#date').html(date);
    $('#img').attr("src",img);
    $('#link').attr("href",link);
        }
        
    })
})
