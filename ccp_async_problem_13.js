let count = 0;

let interval = setInterval(() => {
  count++;
  console.log("Loading...");

  if (count == 5) {
    clearInterval(interval);
    console.log("Loaded successfully!");
  }
}, 1000);

interval()