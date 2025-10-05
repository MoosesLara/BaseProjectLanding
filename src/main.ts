import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header/header.html?raw";
import Footer from "./components/Footer/footer.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${Header}
${Footer}
`;
