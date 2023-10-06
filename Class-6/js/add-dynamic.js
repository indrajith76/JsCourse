const placeList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText = "BandorBan";
placeList.appendChild(li);

const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Games";
section.appendChild(h1);

const ul = document.createElement("ul");
section.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "Football";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Cricket";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Hocky";
ul.appendChild(li3);
mainContainer.appendChild(section);

const mobileSection = document.createElement("section");
mobileSection.innerHTML = `
<h1>My Mobiles:</h1>
<ul>
    <li>Xaomi</li>
    <li>Apple</li>
    <li>Readmi</li>
    <li>Oppo</li>
</ul>
`;
mainContainer.appendChild(mobileSection);
