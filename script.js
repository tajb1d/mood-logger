function logMood(mood) {
    const moodList = document.getElementById("moodList");
    const li = document.createElement("li");
    li.textContent = `${mood} — ${new Date().toLocaleTimeString()}`;
    moodList.appendChild(li);
  }
  