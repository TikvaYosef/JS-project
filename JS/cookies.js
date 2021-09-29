


let article1 = document.getElementById("cookiesImg")


for (let i = 0; i < products.length; i++) {

    if (products[i].category == "עוגיות") {
        
            article1.innerHTML += `<img src="${products[i].images}"id="birthday"> ${products[i].name} ${products[i].price}$ <button class="add">ADD</button>`
        
    }

}

let addBtn = document.getElementsByClassName("add")

let shoppingCart = [
    { id:30, name:"עוגיות קריסמס" , price:100 , description:"עוגיות קריסמס" , category:"עוגיות" , images: "https://media.istockphoto.com/photos/delicious-beautiful-christmas-gingerbread-cookies-on-wooden-rustic-picture-id1292250863?k=20&m=1292250863&s=612x612&w=0&h=HTi8xK8DEG4YXX-lz1aLUqqW83cm03pCNaUotxNaACQ=" },
    { id:31, name:"עוגיות שוקו-צ'יפס" , price:80 , description:"עוגיות שוקו-צ'יפס" , category:"עוגיות" , images: "https://media.istockphoto.com/photos/coockies-picture-id1316476857?k=20&m=1316476857&s=612x612&w=0&h=dx8m3n7EbrlARvAYDlwC3yao-vCNpwJb-LJ3CCGmp0M=" },
    { id:32 , name:"עוגיות שקדים" , price:75 , description: "עוגיות שקדים", category:"עוגיות" , images: "https://media.istockphoto.com/photos/coockies-and-almond-picture-id115024904?k=20&m=115024904&s=612x612&w=0&h=48sbq9S0FfjxnfqEmksgj4QgSnst0ZT0Cl6JJFCe5Wc=" },
]




function addToArray(i) {
    
    shoppingCart.push(products[i])
    
}
for (let i = 0; i < addBtn.length; i++) {

    addBtn[i].addEventListener("click", function () { addToArray(i) });

}
console.log(shoppingCart)

