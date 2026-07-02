document.addEventListener("DOMContentLoaded", () => {

    const map = document.getElementById("world-map-svg");

    map.addEventListener("load", () => {

        const svgDoc = map.contentDocument;

        if (!svgDoc) return;

        const paths = svgDoc.querySelectorAll("path");

        paths.forEach(path => {

            const id = (path.id || "").toLowerCase();
            const className = (path.getAttribute("class") || "").toLowerCase();

            const isOcean =
            id.includes("ocean") ||
            id.includes("sea") ||
            id.includes("background") ||
            className.includes("ocean");

            if (isOcean) {
                path.style.fill = "transparent";
                path.style.stroke = "transparent";
                path.style.cursor = "default";
                return;
            }

            const isArgentina =
                id === "ar" ||
                className.includes(" ar");

            const isUruguay =
                id === "uy" ||
                className.includes(" uy");

            const isAvailable =
                isArgentina ||
                isUruguay;

            if (isAvailable) {
                path.style.fill = "#444444";
                path.style.stroke = "#777777";
                path.style.strokeWidth = "0.9";
                path.style.cursor = "pointer";
                path.style.transition = "all 0.3s ease";

                path.addEventListener("mouseenter", () => {
                    path.style.fill = "#d4af37";
                    path.style.stroke = "#ffffff";
                    path.style.strokeWidth = "1";
            });

                path.addEventListener("mouseleave", () => {
                    path.style.fill = "#444444";
                    path.style.stroke = "#777777";
                    path.style.strokeWidth = "0.9";
            });

                path.addEventListener("click", () => {
                    if (isArgentina) {
                        window.location.href = "country/america/argentina.html";
                    }

                    if (isUruguay) {
                        window.location.href = "country/america/uruguay.html";
                    }
            });

            } else {
                path.style.fill = "#2a2a2a";
                path.style.stroke = "#3a3a3a";
                path.style.strokeWidth = "0.5";
                path.style.cursor = "default";
            }

        });

    });

});