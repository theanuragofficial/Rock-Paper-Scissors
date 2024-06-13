const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user-result i");
const cpuResult = document.querySelector(".cpu-result i");
const result = document.querySelector(".result");
const optionIcons = document.querySelectorAll(".option-icon");

const icons = ["fa-hand-back-fist", "fa-hand", "fa-hand-scissors"];

optionIcons.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    icon.classList.add("active");

    userResult.src = cpuResult.className = `fa-regular fa-hand-back-fist`;
    userResult.src = userResult.className = `fa-regular fa-hand-back-fist`;
    result.textContent = "Wait...";

    optionIcons.forEach((icon2, index2) => {
      if (index !== index2) {
        icon2.classList.remove("active");
      }
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      const iconClass = icons[index];

      userResult.className = `fa-regular ${iconClass}`;

      let randomNumber = Math.floor(Math.random() * 3);

      cpuResult.className = `fa-regular ${icons[randomNumber]}`;

      let cpuValue = ["R", "P", "S"][randomNumber];

      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SP: "User",
        SR: "Cpu",
      };

      let outcomeValue = outcomes[userValue + cpuValue];

      result.textContent =
        userValue === cpuValue ? "It is a draw." : `${outcomeValue} Won!`;
    }, 2500);
  });
});
