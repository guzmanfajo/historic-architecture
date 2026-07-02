const buildingCards = document.querySelectorAll(".building");

buildingCards.forEach(card => {
    
    card.addEventListener("click", () => {
        
        const link = card.dataset.link;

        if (link) {
            window.location.href = link;
        }
    });
});