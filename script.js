const btnAdd = document.querySelector("#btnAdd");
const alldons = document.querySelector(".allDons");
let divContainer;

btnAdd.addEventListener("click", function () {
  const divsContainer = document.querySelector("#divsContainer");

  const inputField = document.querySelector("input");

  if (inputField.value === "") return;

  divContainer = document.createElement("div");

  const h2 = document.createElement("h2");
  const btnDone = document.createElement("button");

  divContainer.className = "mt-4 px-3 flex justify-between items-center";
  h2.textContent = inputField.value;

  btnDone.className = "bg-green-500 rounded-lg p-2 m-1";
  btnDone.textContent = "Done";

  divContainer.appendChild(h2);
  divContainer.appendChild(btnDone);
  divsContainer.appendChild(divContainer);
  inputField.value = "";
});

alldons.addEventListener("click", function (e) {
  const done = e.target.closest(".bg-green-500");
  // done.remove();
  divContainer.remove();
  console.log(done);
});
