window.addEventListener("load", () => {
  setupCircles();
})

function setupCircles() {
  const cs = document.querySelectorAll('div');
  cs.forEach(el => {
    //    console.log(`$ {
    //      hi
    //    }`);
    el.style.transform = `translate(${
            Math.random() * 100
          }vw, ${
            Math.random() * 100
          }vh)`;
  })
}
