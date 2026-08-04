const createBtn = document.querySelector("#btn");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector(".close");

const form = document.querySelector("form");
const productDiv =document.querySelector(".products")

const productsArr = [
  {
    productName: "Nike Air Max Sneakers",
    description: "Comfortable everyday sneakers with a lightweight design and cushioned sole.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    productName: "Classic White Sneakers",
    description: "Minimal white sneakers perfect for casual outfits and everyday fashion.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
  },
  {
    productName: "Oversized Black T-Shirt",
    description: "Premium cotton oversized T-shirt with a relaxed fit and modern streetwear style.",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
  },
  {
    productName: "Casual Check Shirt",
    description: "Stylish checkered shirt made with soft cotton fabric for casual and semi-formal wear.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
  },
  {
    productName: "Graphic Streetwear T-Shirt",
    description: "Trendy graphic T-shirt featuring a bold print and comfortable regular fit.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"
  }
];

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
    }
    else{
        productsArr.push(obj);
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
}