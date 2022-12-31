"use strict";

//email form submit event
const btnSM = document.querySelector(".btn-submit");
const inputForm = document.querySelector(".input-form");
const selfInfo = document.querySelector(".quan-info");
const form = document.getElementById("form");
const email = document.getElementById("email");
const text = document.getElementById("text");

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i;

// const regex =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const regex =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const regex =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// ;

btnSM.addEventListener("click", function () {
  if (email.value.match(regex)) {
    inputForm.classList.toggle("hidden");
    selfInfo.classList.toggle("hidden");
  } else {
    form.classList.add("invalid");
    text.style.color = "#f44336";
    if (email.value == "") {
      text.innerHTML = "Please Enter Your Email";
    } else {
      text.innerHTML = "Wrong syntax, please try again!";
    }
  }
});

//View more - view less click event
let btnVM = document.querySelectorAll(".btn-vm");
let hide = document.querySelectorAll(".hide");
let appear = document.querySelectorAll(".appear");

for (let i = 0; i < appear.length; i++) {
  let a = function () {
    if (hide[i].classList.contains("hidden")) {
      btnVM[i].classList.toggle("d-none");
    }
  };

  appear[i].addEventListener("mouseover", function () {
    a(i);
  });
  appear[i].addEventListener("mouseout", function () {
    a(i);
  });

  btnVM[i].addEventListener("click", function () {
    hide[i].classList.toggle("hidden");
    btnVM[i].classList.toggle("active");
    btnVM[i].classList.toggle("unactive");
  });
}

//Scroll to the top of page
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
