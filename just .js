// Sidebar active highlight
document.querySelectorAll(".menu button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".menu button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Join button toggle
document.querySelectorAll(".join").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Requested";
    btn.disabled = true;
    btn.style.opacity = 0.7;
  });
});

// Countdown Timer
const timerElement = document.getElementById("timer");
let totalSeconds = 1 * 24 * 3600 + 18 * 3600 + 30 * 60 + 55; // 1d 18h 30m 55s

function updateTimer() {
  if (totalSeconds <= 0) return;
  totalSeconds--;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  timerElement.textContent = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

setInterval(updateTimer, 1000);