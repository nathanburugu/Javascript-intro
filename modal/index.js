"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
//this is what happens when you want to close the modal you click either on the closemodal button or on the overlay
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//this is what happens when you want to open the modal you click on the  buttons and the eventlistener completes a fuction that removes the classes which make the modal hidden
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(
    "click",
    openModal
    //   function () {
    //     console.log("button clicked");
    //     modal.classList.remove("hidden");
    //     overlay.classList.remove("hidden");
    //   }
  );
}
btnCloseModal.addEventListener(
  "click",
  closeModal
  // function () {
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  // }
);
overlay.addEventListener(
  "click",
  closeModal
  // function () {
  //   overlay.classList.add("hidden");
  //   modal.classList.add("hidden");
  // }
);

//the code below but shorter
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    !modal.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  ) {
    closeModal();
  }
});
//the code below but shorter

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" ) {//this means that if the pressed key is escape the code inside the curly brackets will be excecuted

//     if (
//       !modal.classList.contains("hidden") &&//this means that if the modal does not contain the hidden class the excecute the function below
//       !overlay.classList.contains("hidden")// means that if the overlay does not contain the hidden class then excecute the code below
//     ) {
//       closeModal();// this is just the function for the closemodal and remove overlay function here you have to invoke the function hence thats why it is writen in parenthesis and in the other areas it is not
//     }
//   }
// });
