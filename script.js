
function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML = "Good morning, I am Arnav Joshi";
    } else if (h>-12 && h<18) {
        E.innerHTML = "Good afternoon, I am Arnav Joshi";
    } else if (h>=18 && h<20) {
        E.innerHTML = "Good evening, I am Arnav Joshi";
    } else {
        E.innerHTML = "Good night, I am Arnav Joshi";
    }
}
L = window.location.href;
console.log(L)
if (L.includes('index.html')) {
    greetingFunc();
}

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}

/* function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreBTN").style.display = "none";
} */

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
    $("#shortIntro").show();
});

$("#readMore").click(function() {
    $("#shortIntro").hide();
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("comment");

    var msg = document.getElementById("ValidateMsg");

    if (!userName.checkValidity()
    || !userEmail.checkValidity()
    || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}

function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

let map;
async function initMap() {
    const position = { lat: 40.44332926007748, lng:-79.94249584843838 };
    const position1 = { lat: 40.4548, lng:-79.9326 };
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "CMU",
    });

    const marker1 = new AdvancedMarkerElement({
        map: map,
        position: position1,
        title: "Shadyside",
    });
}


initMap();
