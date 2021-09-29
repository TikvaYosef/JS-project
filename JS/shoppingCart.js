
let table = document.getElementById("table1")
let addButton = document.getElementById("add")


let shoppingCart = [
  { id: 1, name: "chocolate cake", price: 250, description: "עוגת שוקולד", category: "עוגות ימי הולדת", images: "https://media.istockphoto.com/photos/female-preparing-zucchini-chocolate-brownies-in-kitchen-picture-id1255426184?k=20&m=1255426184&s=612x612&w=0&h=z4YTeLdcjswNGQazqtZZPOR7ZfJhc5Rkfp9P9xuQdBg=" },
  { id: 2, name: "chocolate cake", price: 150, description: "עוגת שוקולד", category: "עוגות ימי הולדת", images: "https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443__340.jpg" },
  { id: 45, name: "קאפקייק צבעוני", price: 80, description: "קאפקייק צבעוני", category: "קאפקייק", images: "https://media.istockphoto.com/photos/vanilla-cupcakes-with-pink-yellow-and-blue-icing-isolated-picture-id177047298?k=20&m=177047298&s=612x612&w=0&h=dkmdHsxEyUrOJh0Uq5BUkbCUONUtgczip5JfEWEJFFo=" },

]



function seeCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    table.innerHTML += `    
       <td> <img id="pics" src= "${shoppingCart[i].images}"></td>  
       <td>${shoppingCart[i].name}</td>  
       <td>${shoppingCart[i].price}</td>  
       <td><button onclick="clearObject(${i})">clear </button> </td> `;

  }
}
seeCart();
console.log(shoppingCart);



function clearObject(index) {
  shoppingCart.splice(index, 1);
  console.log(shoppingCart)
  table.innerHTML = ''
  seeCart()
  priceSum()
}

function priceSum() {
  var total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price;
    console.log(total);
    para.innerHTML = `Total: ${total}$`;
 
  }
  

  return total;
}
priceSum();


console.log(shoppingCart)