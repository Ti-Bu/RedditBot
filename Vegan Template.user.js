// ==UserScript==
// @name         Vegan Template
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  none
// @author       TB
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1500px;height: 1000px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://github.com/Ti-Bu/GoVegan/blob/main/foobar.png"
}

setInterval(function () {overlayImage.src = "https://github.com/Ti-Bu/GoVegan/blob/main/foobar.png"}, 30000);
