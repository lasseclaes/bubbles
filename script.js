window.addEventListener("load", () => {
  setupCircles();
})

function setupCircles() {
  const cs = document.querySelector('div');
  cs.forEach(el => {
      el.style.transform = ´translate($ {
          Math.random() * 100;
        }
        vh´; console.log('hey');
      });
  }
