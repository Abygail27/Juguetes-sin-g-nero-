let addCarProducts = document.getElementsByClassName('add-car')

for (let i = 0; i < addCarProducts.length; i++) {
  const element = addCarProducts[i];
  element.addEventListener('click', addCar);
}

function addCar() {
  let count = document.getElementById('count');
  count.innerHTML++;
  for (let i = 0; i < addCarProducts.length; i++) {
    const element = addCarProducts[i];
    element.innerHTML = "Eliminar del carrito";
  }
    
}

