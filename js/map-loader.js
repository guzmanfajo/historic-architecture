const map = document.getElementById("world-map-svg");

function updateMap() {
    const mobile = window.innerWidth <= 768;

    const newSrc = mobile
        ? "img/maps/world-map-mobile.svg"
        : "img/maps/world-map.svg";

    if (map.data !== newSrc) {
        map.data = newSrc;
    }
}

updateMap();

window.addEventListener("resize", updateMap);