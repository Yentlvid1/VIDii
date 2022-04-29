// JavaScript Document

var teksten = [
    "1985, Super Mario Bros. Voor de Super Mario -videogameserie maakt Peach haar debuut in de Super Mario Bros. -game.",
    "1988, Super Mario Bros 2. Dit is de eerste keer in de algemene Mario -serie waarin Peach een speelbaar personage is.",
    "1991, Super Mario World. In Super Mario World hebben Mario, Luigi en Peach een vakantie in Dinosaur Land wanneer Bowser Peach opnieuw ontvoert.",
    "1993, Super Mario All-Stars. Na 8 werelden afzien krijgt Mario dan toch eindelijk die kus van Princess Peach...",
    "1996, Super Mario 64. In Super Mario 64 nodigt Peach Mario uit voor cake in het kasteel, maar voordat hij arriveert, vangt Bowser Peach.",
    "2006, Super Princess Peach. betekende een verandering van rollen, het was de beurt aan Princess Peach om Mario en Luigi te redden van Bowser.",
    "NOW"
];

var afbeeldingen = [
    "images/peach1.png",
    "images/peach2.png",
    "images/peach3.png",
    "images/peach4.png",
    "images/peach5.png",
    "images/peach6.png",
    "images/peach7.png"
];

teller = 0;

tijd = 4000;


var deButton = document.querySelector("button");

var deTekst = document.querySelector(".beginscherm");
var dePrinses = document.querySelector(".peach1-2");

var deDeurlinks = document.querySelector("div.deur.links");
var deDeurrechts= document.querySelector("div.deur.rechts");

deButton.addEventListener("click", volgendePrinsesEnTekst);


function volgendePrinsesEnTekst () {
    dePrinses.src = afbeeldingen[teller];

    deTekst.textContent = teksten[teller];

    teller = teller + 1;

    if (teller == afbeeldingen.length) {
        teller = 0;
    }

    deDeurlinks.classList.add("open");
    deDeurrechts.classList.add("open");


    setTimeout(function() {
        deDeurlinks.classList.remove("open");
        deDeurrechts.classList.remove("open");
    }, tijd);
}




// SNEEUW
var container = document.getElementById('animate');
var emoji = ['💕', '👑', '🌸'];
var circles = [];

for (var i = 0; i < 15; i++) {
  addCircle(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 800) {
        this.element.remove();
    //   _this.y = 80 + Math.random() * 4;
    //   _this.x = _this.range[0] + Math.random() * _this.range[1];
    } else {
        _this.y += _this.v.y;
        _this.x += _this.v.x;
        this.element.style.opacity = 1;
        this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    }
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();