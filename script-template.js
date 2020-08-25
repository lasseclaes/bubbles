//alert("hey")
// step 1. .content
const templateEl = document.querySelector('template').content;
//2. true


for (let i = 0; i < 100; i++) {
  const clone = templateEl.cloneNode(true);
  //3 change the content
  clone.querySelector('h2').textContent = "hey";
  const price = 400;
  //  clone.querySelector('.price').textContent = price + ",-";
  clone.querySelector('.price').textContent = `${price}`;
  //4
  const parentEl = document.querySelector('main');
  //5
  parentEl.appendChild(clone);
}
