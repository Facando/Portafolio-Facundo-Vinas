var layerCount = 5;
var starCount = 400;
var maxTime = 30;

var universe = document.getElementById("universe");


function makeStars() {
  // Limpia las estrellas anteriores (importante si se re-ejecuta)
  universe.innerHTML = "";

  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName("body")[0];

  var width = w.innerWidth || e.clientWidth || g.clientWidth;
  var height = w.innerHeight || e.clientHeight || g.clientHeight;

  for (var i = 0; i < starCount; ++i) {
    var xpos = Math.round(Math.random() * width); // X fijo
    var star = document.createElement("div");
    var speed = 5000 * (Math.random() * maxTime + 1);

    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
    star.style.backgroundColor = 'rgba(125, 92, 255, 1)';

    universe.appendChild(star);

    // Vertical: Y cambia (arriba -> abajo)
    star.animate(
      [
        {
          transform: "translate3d(" + xpos + "px, -" + (Math.random() * 256) + "px, 0)"
        },
        {
          transform: "translate3d(" + xpos + "px, " + height + "px, 0)"
        }
      ],
      {
        delay: Math.random() * -speed,
        duration: speed,
        iterations: 1000
      }
    );
  }
}

// crea estrellas al cargar
makeStars();

// opcional: si cambiás tamaño de ventana, recalcula (vertical correcto)
window.addEventListener("resize", makeStars);

// ---- Pulse (solo si existe el elemento) ----
var elem = document.querySelector(".pulse");
if (elem) {
  elem.animate(
    {
      opacity: [0.5, 1],
      transform: ["scale(0.5)", "scale(1)"]
    },
    {
      direction: "alternate",
      duration: 500,
      iterations: Infinity
    }
  );
}

