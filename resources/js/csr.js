const app = document.getElementById("app");

// ========== HEADER SECTION ==========

const header = document.createElement("header");

//logo + title
const topHeading = document.createElement("div");
topHeading.className = "top-heading";

const topContainer = document.createElement("div");
topContainer.className = "top-container";

const logo = document.createElement("img");
logo.className = "logo";
logo.src =
  "https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/secret-agent-supply/resources/images/logo.png";
logo.alt = "logo image";

const title = document.createElement("span");
title.className = "title";
title.textContent = "SECRET AGENT SUPPLY INC. - CSR";

topContainer.appendChild(logo);
topContainer.appendChild(title);
topHeading.appendChild(topContainer);
header.appendChild(topHeading);

// 2. Hero section
const motorContainer = document.createElement("div");
motorContainer.className = "motor-container";

const headBox = document.createElement("div");
headBox.className = "head-box";

const newArrival = document.createElement("div");
newArrival.className = "new-arrival";

const h4 = document.createElement("h4");
h4.textContent = "NEW ARRIVAL";
const h1 = document.createElement("h1");
h1.textContent = "SPORT BIKES AND MOTORCYCLES";

newArrival.appendChild(h4);
newArrival.appendChild(h1);
headBox.appendChild(newArrival);
motorContainer.appendChild(headBox);
header.appendChild(motorContainer);

// Navbar
const nav = document.createElement("nav");
const navContainer = document.createElement("ul");
navContainer.className = "nav-container";

const navItems = [
  "Eyewear",
  "Apparel",
  "Gadgets",
  "Vehicles",
  "Classes",
  "Contact",
];
navItems.forEach(function (name) {
  const span = document.createElement("span");
  span.className = "nav-name";
  span.textContent = name;
  navContainer.appendChild(span);
});

nav.appendChild(navContainer);
header.appendChild(nav);

// Nav: small screen (Menu)
const navSmall = document.createElement("nav");
navSmall.className = "small-screen-size";
const ul = document.createElement("ul");
const li = document.createElement("li");
li.className = "nav-name";
li.textContent = "Menu";
ul.appendChild(li);
navSmall.appendChild(ul);
header.appendChild(navSmall);

app.appendChild(header);

// ========== main section ==========
const main = document.createElement("main");
main.className = "main-container";

const products = document.createElement("div");
products.className = "products";

//pen product
const pen = document.createElement("div");
pen.className = "pen";

const penImageWrapper = document.createElement("div");
penImageWrapper.className = "image";

const penImage = document.createElement("img");
penImage.src =
  "https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/secret-agent-supply/resources/images/pen.png";
penImage.alt = "pen image";

pen.appendChild(penImageWrapper);
penImageWrapper.appendChild(penImage);

const penName = document.createElement("span");
penName.className = "image-name";
penName.textContent = "Exploding Pen";
pen.appendChild(penName);

products.appendChild(pen);

// watch product
const watch = document.createElement("div");
watch.className = "watch";

const watchImageWrapper = document.createElement("div");
watchImageWrapper.className = "image";

const watchImage = document.createElement("img");
watchImage.src =
  "https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/secret-agent-supply/resources/images/watch.png";
watchImage.alt = "image of a silver watch";

watch.appendChild(watchImageWrapper);
watchImageWrapper.appendChild(watchImage);

const watchName = document.createElement("span");
watchName.className = "image-name";
watchName.textContent = "Cellular Watch";
watch.appendChild(watchName);
products.appendChild(watch);

// Glasses product
const glasses = document.createElement("div");
glasses.className = "glasses";

const glassesImageWrapper = document.createElement("div");
glassesImageWrapper.className = "image";

const glassesImage = document.createElement("img");
glassesImage.src =
  "https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/secret-agent-supply/resources/images/glasses.png";
glassesImage.alt = "a black sun glasses";

glasses.appendChild(glassesImageWrapper);
glassesImageWrapper.appendChild(glassesImage);

const glassesName = document.createElement("span");
glassesName.className = "image-name";
glassesName.textContent = "Thermal Glasses";

glasses.appendChild(glassesName);
products.appendChild(glasses);

main.appendChild(products);
app.appendChild(main);

//========= lower section ============

const lowerSection = document.createElement("div");
lowerSection.className = "lower-container";

// Location box
const locationBox = document.createElement("div");
locationBox.className = "location-box";

const locationDiv = document.createElement("div");
locationDiv.className = "location";
const locationSpan = document.createElement("span");
locationSpan.textContent = "Location";
locationDiv.appendChild(locationSpan);
locationBox.appendChild(locationDiv);

const locationCoords = document.createElement("p");
locationCoords.textContent = "-47.346436, 84.32354";
locationBox.appendChild(locationCoords);

lowerSection.appendChild(locationBox);

// Hours box
const hoursBox = document.createElement("div");
hoursBox.className = "hours-box";

const hoursDiv = document.createElement("div");
hoursDiv.className = "hours";
const hoursSpan = document.createElement("span");
hoursSpan.textContent = "Hours";
hoursDiv.appendChild(hoursSpan);
hoursBox.appendChild(hoursDiv);

const hoursText = document.createElement("p");
hoursText.textContent = "0800 - 1800";
hoursBox.appendChild(hoursText);

lowerSection.appendChild(hoursBox);

main.appendChild(lowerSection);

//========== footer ==============

const footer = document.createElement("footer");

const footerSpan = document.createElement("span");
footerSpan.className = "footer-box";
footerSpan.textContent = "Copyright Secret Agent Supply Inc.";

const footerLink = document.createElement("a");
footerLink.className = "view-csr-link";
footerLink.href = "SSR.html";
footerLink.target = "_blank";
footerLink.textContent = "View page in SSR";

footer.appendChild(footerSpan);
footer.appendChild(footerLink);

app.appendChild(footer);
