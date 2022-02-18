let windowswad = document.querySelector('.imgheader');
let windowOws = document.querySelector('.overlay');

windowswad.onclick = function() {
        windowOws.style.display = "block";
};


let windowclose = document.querySelector('.overlayclose');
windowclose.onclick = function() {
    windowOws.style.display = "none";
}