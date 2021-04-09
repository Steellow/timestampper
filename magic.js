let h = 0;
let m = 0;
let s = 0;
let interval;

const tick = () => {
  s++;
  if (s >= 60) {
    s = 0;
    m++;
  }
  if (m >= 60) {
    m = 0;
    h++;
  }
  document.getElementById("h").innerHTML = pad(h);
  document.getElementById("m").innerHTML = pad(m);
  document.getElementById("s").innerHTML = pad(s);
};

const stamp = () => {
  let li = document.createElement("li");
  const currentTime = document.createTextNode(pad(h) + ":" + pad(m) + ":" + pad(s));
  li.appendChild(currentTime);
  document.getElementById("stamps").appendChild(li);
};

const start = () => {
  if (!interval) {
    interval = setInterval(tick, 1000);
    document.getElementById("startButton").textContent = "Pause";
  } else {
    clearInterval(interval);
    interval = null;
    document.getElementById("startButton").textContent = "Resume";
  }
};

const pad = (i) => i.toString().padStart(2, "0");

document.getElementById("startButton").onclick = start;
document.getElementById("stampButton").onclick = stamp;
