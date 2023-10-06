// document.body.style.textAlign = "center";

const headings = document.querySelectorAll("h1");
for(const h1 of headings){
    h1.style.background = "seagreen";
    h1.style.color = "white";
}

const sections = document.querySelectorAll("section");
for(const section of sections){
    section.style.border = "5px solid seagreen";
    section.style.background = "#b6f5b0";
}

const placesContainer = document.getElementById("places-container");
placesContainer.style.background = "#faa0ad";
placesContainer.style.border = "5px solid #f5425a";

const placesTitle = document.getElementById("places-title");
placesTitle.style.background = "#f5425a";

placesTitle.classList.add("bg-red");
placesTitle.classList.remove("bg-red");