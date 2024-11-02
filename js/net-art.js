const colors = ["#6fa4ac", "#3d5b60", "#ffffff", "#474b4a", "#92cbd4"];

document.addEventListener("mousemove", (event) => {
  const circle = document.createElement("div");
  circle.className = "circle";

  const size = Math.random() * 30 + 10;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.background = colors[Math.floor(Math.random() * colors.length)];

  circle.style.left = `${event.pageX - size / 2}px`;
  circle.style.top = `${event.pageY - size / 2}px`;

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.style.transform = "scale(0)";
    circle.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    circle.remove();
  }, 400);
});
