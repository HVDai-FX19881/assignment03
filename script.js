"use strict";

const openInfo = document.querySelector(".open-info");
const closeBtn = document.querySelector(".close--btn");
const submit = document.querySelector(".submit");
const enterEmail = document.querySelector(".enter--email");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {
  if (regex.test(enterEmail.value)) {
    openInfo.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    return;
  } else {
    alert("Valid email not address!");
  }
});

for (let i = 0; i < 6; i++) {
  const Example1 = document.getElementById(`Example--${i}`);
  Example1.addEventListener("show.bs.collapse", function () {
    document.querySelector(`.btnView--${i}`).textContent = "View Less";
  });
  Example1.addEventListener("hide.bs.collapse", function () {
    document.querySelector(`.btnView--${i}`).textContent = "View More";
  });
}
