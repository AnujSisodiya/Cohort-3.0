const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".user");
const url = document.querySelector("#url")
const submitBtn = form.querySelector("button");

let editIndex = -1;

let userData = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "id": 2,
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "id": 3,
    "name": "Catherine Lee",
    "email": "catherine.lee@example.com",
    "image": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "id": 4,
    "name": "David Brown",
    "email": "david.brown@example.com",
    "image": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "id": 5,
    "name": "Emma Wilson",
    "email": "emma.wilson@example.com",
    "image": "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

const ui = () =>{
  users.innerHTML = "";
  userData.forEach((elem,index) => {
    users.innerHTML += `<div class="user-card">
            <div class="img-box"><img src="${elem.image}" 
                alt="Images">
            </div>
            <div class="text">
                <h3>Name- ${elem.name}</h3>
                <p>Email- ${elem.email}</p>
            </div>
            <div class="actions">
                <button onclick="editCard(${index})"id="edit">Edit</button>
                <button onclick="delCard(${index})" id="del">Delete</button>
            </div>
        </div>`;
  });
};

ui();

form.addEventListener("submit", (events)=>{
    events.preventDefault();
    let name = inp1.value;
    let email = inp2.value;
    let image = url.value;

    if(name.trim() === "" && email.trim() === "" && image.trim() === "") return;
    
    if(editIndex === -1){
    userData.push({
        id: userData.length ? userData[userData.length - 1].id + 1 : 1,
        name,
        email,
        image
    });
    }
    else{
        userData[editIndex].name = name;
        userData[editIndex].email=email;
        userData[editIndex].image=image;

        editIndex = -1;
        submitBtn.innerText = "Submit";
    }
    ui();

    form.reset(); 
 
});

let delCard = (index) =>{
    userData.splice(index,1);
    ui();
};

let editCard = (index) => {
   editIndex = index;
   
   inp1.value = userData[editIndex].name;
   inp2.value = userData[editIndex].email;
   url.value = userData[editIndex].image;
   submitBtn.innerText = "Update";

}