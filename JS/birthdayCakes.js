


let section1 = document.getElementById("birthdayCakeContainer")


for (let i = 0; i < products.length; i++) {

    if (products[i].category == "עוגות ימי הולדת") {
        section1.innerHTML += `<article id ="birthdayCakeImg"> <img src="${products[i].images}"id="birthday"> name:${products[i].name} price:${products[i].price} <button class="add">ADD</button> </article>`
    
    }

}
let article1 = document.getElementById("birthdayCakeImg")

let addBtn = document.getElementsByClassName("add")

let shoppingCart = [
    { id: 1, name: "chocolate cake", price: 250, description: "עוגת שוקולד", category: "עוגות ימי הולדת", images: "https://media.istockphoto.com/photos/female-preparing-zucchini-chocolate-brownies-in-kitchen-picture-id1255426184?k=20&m=1255426184&s=612x612&w=0&h=z4YTeLdcjswNGQazqtZZPOR7ZfJhc5Rkfp9P9xuQdBg=" },
    { id: 2, name: "chocolate cake", price: 150, description: "עוגת שוקולד", category: "עוגות ימי הולדת", images: "https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443__340.jpg" },
]




function addToArray(i) {
    
    shoppingCart.push(products[i])
    
}
for (let i = 0; i < addBtn.length; i++) {

    addBtn[i].addEventListener("click", function () { addToArray(i) });

}
console.log(shoppingCart)
















//  לולאות שרצות על 2 התמונות במערך ומציגות אותן

// for (let i = 0; i < products.length; i++) {
//     // let article1 = document.getElementById("birthdayCakeImg")
//     for (let j = 0; j < products[i].images.length; j++) {
//         if (products[j].category == "עוגות ימי הולדת") {
//             article1.innerHTML += `<img src="${products[i].images[j]}" id="birthday"><button id="add">ADD</button> <button id="remove">REMOVE</button> `
//         }             
//     }
// }




// addButton.onclick = () => {
//     shoppingCart.innerHTML += `${products}`

// }









