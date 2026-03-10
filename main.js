let zIndex = 4;

function showgeorgian() {
    document.getElementById("georgian").style.display = "block";
    zIndex++;
    console.log(zIndex);
    document.getElementById("georgian").style.zIndex = zIndex;
    zIndex = 4;
    console.log(zIndex);
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";
}

function showsetian() {
    document.getElementById("osetian").style.display = "block";
    zIndex++;
    console.log(zIndex);
    document.getElementById("osetian").style.zIndex = zIndex;
    zIndex = 4;
    console.log(zIndex);
    // document.getElementById("georgian").style.display = "none";
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";

}

function showkazbeguri() {
    document.getElementById("kazbeguri").style.display = "block";
    zIndex++;
    console.log(zIndex);
    document.getElementById("kazbeguri").style.zIndex = zIndex;
    zIndex = 4;
    console.log(zIndex);
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
    // document.getElementById("mtiuluri").style.display = "none";

}
function showmtiuluri() {
    document.getElementById("mtiuluri").style.display = "block";
    zIndex++;
    console.log(zIndex);
    document.getElementById("mtiuluri").style.zIndex = zIndex;
    zIndex = 4;
    console.log(zIndex);
    // document.getElementById("kazbeguri").style.display = "none";
    // document.getElementById("osetian").style.display = "none";
    // document.getElementById("georgian").style.display = "none";
}

