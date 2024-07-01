function updateTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current time in UTC: ${currentTimeUTC}`;

  const currentDay = new Date().toLocaleString("en-US", {
    weekday: "long",
  });
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current day of the week: ${currentDay}`;
}

updateTime();
setInterval(updateTime, 1000);
