const btn = document.getElementById("bgBtn");

const colors = ["#f3f6ff", "#fff3e0", "#e8f5e9", "#fce4ec", "#ede7f6"];
let i = 0;

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
});