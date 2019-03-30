let addCarProducts = document.getElementById('add-car').addEventListener('click', addCar);

function addCar() {
  let count = document.getElementById('count');
  count.innerHTML++;
  document.getElementById('add-car').innerHTML = "Quitar del carrito";
}