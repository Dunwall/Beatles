const x=document.getElementById("beat");

function getLocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser";
    }
}

function showPosition(posititon)
{
    document.getElementById("output").innerText="Latitude: "+ position.coords.latitude+"<br>Longitude: " + position.coords.longitude;
}