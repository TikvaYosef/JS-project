let article = document.getElementById("weddingCakeImg")

for (let i = 0; i < products.length; i++) {

    if (products[i].category == "עוגות חתונה") {
    
            article.innerHTML += `<img src="${products[i].images}"id="birthday"> name:${products[i].name} price:${products[i].price} <button class="add">ADD</button>`
        
    }

}

let addBtn = document.getElementsByClassName("add")

let shoppingCart = [
    { id: 15, name: "Layers cake", price: 300, description: "עוגת קומות", category: "עוגות חתונה", images: "https://media.istockphoto.com/photos/wedding-cake-picture-id1270215762?k=20&m=1270215762&s=612x612&w=0&h=FFYtWAviE-lDmtGV0mndWxwCR_Dn0x6rmX0wcUbsOls=" },
    { id: 16, name: "Layers cake", price: 370, description: "עוגת קומות", category: "עוגות חתונה", images: "https://media.istockphoto.com/photos/traditional-wedding-cake-picture-id163744574?k=20&m=163744574&s=612x612&w=0&h=HD9mLTWZxq2JGLG7CQ5FdJtrjYtLRdA6HQA5M_0hZns=" },
    { id: 17, name: "Layers cake", price: 250, description: "עוגת קומות", category: "עוגות חתונה", images: "https://media.istockphoto.com/photos/flower-cake-picture-id157195431?k=20&m=157195431&s=612x612&w=0&h=wP5ITigdeCnihTnN_pJuPIpt8PfVGajezs69igzm-PM=" },
]




function addToArray(i) {
    
    shoppingCart.push(products[i])
    
}
for (let i = 0; i < addBtn.length; i++) {

    addBtn[i].addEventListener("click", function () { addToArray(i) });

}
console.log(shoppingCart)
