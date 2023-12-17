let slot1 = document.querySelector("#slot-1 div");
let slot2 = document.querySelector("#slot-2 div");
let slot3 = document.querySelector("#slot-3 div");

let input = document.querySelector("#speed");
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");

let res = document.querySelector("#result p");

const emojies = ["😅", "🤣", "😍", "🥱", "😱", "😡", "🤒", "🤡", "👹", "🙈"];

let animation;
let rootElem = document.querySelector(":root");
let rootStyle = getComputedStyle(rootElem);
let initialSpeed = rootStyle.getPropertyValue("--speed");
let newSpeed = initialSpeed;

function initial() {
  slot1.classList.remove("spin");
  slot2.classList.remove("spin");
  slot3.classList.remove("spin");
  btnStart.disabled = false;
  input.disabled = false;
}

function getRandomEmoji() {
  return emojies[Math.floor(Math.random() * emojies.length)];
}

function updateSpinAnimation(newSpeed) {
  if (animation) clearInterval(animation);
  animation = setInterval(() => {
    slot1.textContent = getRandomEmoji();
    slot2.textContent = getRandomEmoji();
    slot3.textContent = getRandomEmoji();
  }, 1000 / Number(newSpeed));
}

input.addEventListener("change", function (e) {
  newSpeed = e.target.value;
  document.documentElement.style.setProperty("--speed", newSpeed);
});

function startSpinSlot() {
  if (newSpeed === initialSpeed) {
    updateSpinAnimation(initialSpeed);
  } else {
    updateSpinAnimation(newSpeed);
  }
  slot1.classList.add("spin");
  slot2.classList.add("spin");
  slot3.classList.add("spin");
  res.innerHTML = `Get Set Spin !!!`
  btnStart.disabled = true;
  input.disabled = true;
}

function stopSpinSlot() {
  clearInterval(animation);
  initial();
  check();
  console.log("slot stopped ✋🏻");
}

function check() {
  if (
    slot1.textContent === slot2.textContent &&
    slot2.textContent === slot3.textContent
  ) {
    res.innerHTML = `Well Done, You Win ! 😎😎😎`;
  } else {
    res.innerHTML = `Oops!, Wanna give another try`;
  }
}

window.onload = initial();
