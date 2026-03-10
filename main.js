let zIndex = 4;

function showgeorgian() {
    document.getElementById("georgian").style.display = "block";
    document.getElementById("georgian").style.zIndex = zIndex++;
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";
}

function showsetian() {
    document.getElementById("osetian").style.display = "block";
    document.getElementById("osetian").style.zIndex = zIndex++;
    // document.getElementById("georgian").style.display = "none";
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";

}

function showkazbeguri() {
    document.getElementById("kazbeguri").style.display = "block";
    document.getElementById("kazbeguri").style.zIndex = zIndex++;
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";

}
function showmtiuluri() {
    document.getElementById("mtiuluri").style.display = "block";
    document.getElementById("mtiuluri").style.zIndex = zIndex++;
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
}

