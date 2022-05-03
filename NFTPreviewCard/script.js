const overlay = document.querySelector(".overlay");
const image = document.querySelector(".image-link");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

overlay.style.display = "none";

console.log(window.innerWidth)

if (window.innerWidth > 600) {
  image.addEventListener("mouseover", async () => {
    overlay.style.display = "flex";
    overlay.style.animation = "Overlay .5s ease";
    await sleep(500);
  });

  image.addEventListener("mouseleave", async () => {
    overlay.style.animation = "OverlayOut .5s ease";
    await sleep(500);
    overlay.style.display = "none";
  });
}
