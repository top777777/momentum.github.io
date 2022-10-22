const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bgImage"); //* class 추가

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
