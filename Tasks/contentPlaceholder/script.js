const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");

const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = ` <img
    src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    alt="developer"/>
    
    `;

  title.innerHTML = "Lorem ipsum dolor sit amet consect";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil";

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" />';

  name.innerHTML = "Saharan";
  date.innerHTML = "OCT 09, 2000";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
