const createBtn = document.querySelector("#btn");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector(".close");

const form = document.querySelector("form");
const productDiv =document.querySelector(".products")

const productsArr = JSON.parse(localStorage.getItem("products")) || [];

let updateIndex = null;

let ui = () => {
    productDiv.innerHTML = "";
    productsArr.forEach((elem ,index)=>{
        productDiv.innerHTML+= `<div class="product-card">
            <div class="img">
                <img src="${elem.image}" alt="Shoe Image">
            </div>
            <div class="text">
                <h3>${elem.productName}</h3>
                <p>${elem.description}</p>
                <p>${elem.price}</p>
            </div>
            <div class="btns">
                <button id="update" onclick="updateProduct('${elem.productName}')">Update</button>
                <button id="delete"onclick="delProduct('${index}')">Delete</button>
            </div>
        </div>`
    });
};
ui();
createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click",()=>{
    formDiv.style.display = "none";
     form.reset();
});

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let productName = event.target[0].value;
    let description = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;

    if( productName.trim() === "" || description.trim() === "" || price.trim() === "" || image.trim() === ""){
        alert("Please fill all the fields")
        return;
    }

    let obj = {
        productName,
        description,
        price,
        image
    };

    if(updateIndex !== null){
     productsArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products",JSON.stringify(productsArr));
    }
    else{
        productsArr.push(obj);
        localStorage.setItem("products",JSON.stringify(productsArr));
    }
    ui();
    form.reset();
    formDiv.style.display = "none";
});

let updateProduct = (name) =>{
    formDiv.style.display ="flex";
    let product = productsArr.find((elem) => elem.productName === name);
    updateIndex = productsArr.findIndex((elem) => elem.productName === name);

    form[0].value = product.productName;
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.image;
};

let delProduct = (index) =>{
   productsArr.splice(index,1);
   ui();
   localStorage.setItem("products",JSON.stringify(productsArr));
}