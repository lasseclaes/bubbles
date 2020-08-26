window.addEventListener("load", () => {
  setupCircles2();
})

//first
//function setupCircles() {
//  const cs = document.querySelectorAll('div');
//  cs.forEach(el => {
//    //    console.log(`$ {
//    //      hi
//    //    }`);
//    el.style.transform = `translate(${
//            Math.random() * 100
//          }vw, ${
//            Math.random() * 100
//          }vh)`;
//    el.addEventListener("mouseover", c => {
//      el.style.background =
//        `hsl(${Math.random()*360}, 70%, 70%)`;
//      el.style.transform = `translate(${
//            Math.random() * 100
//          }vw, ${
//            Math.random() * 100
//          }vh)`;
//    })
//  })
//}

function transform(elem) {
  elem.style.transform = `translate(${
            Math.random() * 100
          }vw, ${
            Math.random() * 100
          }vh)`;
}

function setupCircles2() {
  const cs = document.querySelectorAll('div');
  cs.forEach(el => {
    //    console.log(`$ {
    //      hi
    //    }`);
    transform(el);

    el.addEventListener("mouseover", c => {
      el.style.background =
        `hsl(${Math.random()*360}, 70%, 70%)`;
      transform(el);
    })
  })
}
