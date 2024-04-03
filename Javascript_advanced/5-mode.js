function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const para = document.createElement("p");
  const text = document.createTextNode("Welcome Holberton!");
  para.appendChild(text);
  document.body.appendChild(para);

  const spanSpooky = document.createElement("span");
  spanSpooky.innerHTML = "Spooky";
  const button1 = document.createElement("button");
  button1.addEventListener("click", function(event) {
    spooky();
  });
  button1.appendChild(spanSpooky);
  document.body.appendChild(button1);

  const spanDark = document.createElement("span");
  spanDark.innerHTML = "Dark mode";
  const button2 = document.createElement("button");
  button2.addEventListener("click", function(event) {
    darkMode();
  });
  button2.appendChild(spanDark);
  document.body.appendChild(button2);

  const spanScream = document.createElement("span");
  spanScream.innerHTML = "Scream mode";
  const button3 = document.createElement("button");
  button3.addEventListener("click", function(event) {
    screamMode();
  });
  button3.appendChild(spanScream);
  document.body.appendChild(button3);
}

main();
