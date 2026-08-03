const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url")




form.addEventListener("submit", (events)=>{
    events.preventDefault();
});

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
]