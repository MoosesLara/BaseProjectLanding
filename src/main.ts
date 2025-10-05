import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header/header.html?raw";
import Hero from "./components/Hero/hero.html?raw";
import About from "./components/About/about.html?raw";
import BestFeatures from "./components/BestFeatures/best.html?raw";
import TopDestinations from "./components/TopDestinations/destinations.html?raw";
import Say from "./components/Say/say.html?raw";
import Discount from "./components/Discount/discount.html?raw";
import Footer from "./components/Footer/footer.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${Header}
${Hero}
${About}
${BestFeatures}
${TopDestinations}
${Say}
${Discount}
${Footer}
`;
