
let article1 = document.getElementById("cupCakeImg")


for (let i = 0; i < products.length; i++) {

    if (products[i].category == "קאפקייק") {
        
            article1.innerHTML += `<img src="${products[i].images}"id="birthday"> name:${products[i].name} price:${products[i].price} <button class="add">ADD</button>`
        
    }

}

let addBtn = document.getElementsByClassName("add")

let shoppingCart = [
    { id:45 , name:"קאפקייק צבעוני" , price:80 , description:"קאפקייק צבעוני" , category:"קאפקייק" , images: "https://media.istockphoto.com/photos/vanilla-cupcakes-with-pink-yellow-and-blue-icing-isolated-picture-id177047298?k=20&m=177047298&s=612x612&w=0&h=dkmdHsxEyUrOJh0Uq5BUkbCUONUtgczip5JfEWEJFFo=" },
    { id:46 , name:"קאפקייק צבעוני" , price:150 , description:"קאפקייק צבעוני" , category:"קאפקייק" , images: "https://media.istockphoto.com/photos/colorful-celebration-cupcakes-picture-id1298641925?k=20&m=1298641925&s=612x612&w=0&h=YenLeWIuwMQ3BmTrZyvGBrlCDpvq1kmW-UjNgOyuRNw=" },
    { id:47 , name:"קאפקייק צבעוני" , price:250 , description:"קאפקייק צבעוני" , category:"קאפקייק" , images: "https://media.istockphoto.com/photos/row-of-colorful-cupcakes-picture-id1303885507?k=20&m=1303885507&s=612x612&w=0&h=zSZPg8XLErTRqStQmnHt_-SKVk7iWyT1-5xX8BjRWO0=" },
]




function addToArray(i) {
    
    shoppingCart.push(products[i])
    
}
for (let i = 0; i < addBtn.length; i++) {

    addBtn[i].addEventListener("click", function () { addToArray(i) });

}
console.log(shoppingCart)