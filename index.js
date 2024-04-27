// navbar start

var iconNav = document.querySelector(".iconNav");
var iconNavCross = document.querySelector(".iconNavCross");

var innerNav = document.querySelector(".innerNav");

iconNav.addEventListener("click", () => {
  innerNav.classList.remove("innerNav");
  innerNav.classList.add("activeNav");
});
iconNavCross.addEventListener("click", () => {
  innerNav.classList.remove("activeNav");
  innerNav.classList.add("innerNav");
});

// navbar end

gsap.from(".stagger", {
  x: -200,
  opacity: 0,
  stagger: 0.5,
  duration: 2,
});

gsap.from(".scale", {
  opacity: 0,
  transform: "scale(0)",
  duration: 2,
});

gsap.from(".links", {
  duration: 2,
  opacity: 0,
  stagger: 0.6,
});

window.addEventListener("scroll", () => {
  var imgLeft = document.querySelector(".imgLeft");
  var textRight = document.querySelector(".textRight");
  var serviceTech = document.querySelector(".serviceTech");
  var cardSection = document.querySelector(".cardSection");
  var contactSection = document.querySelector(".contactSection");

  var imgLeftHeight = imgLeft.getBoundingClientRect().top;
  var textRightHeight = textRight.getBoundingClientRect().top;
  var serviceTechHeight = serviceTech.getBoundingClientRect().top;
  var cardSectionHeight = cardSection.getBoundingClientRect().top;
  var contactSectionHeight = contactSection.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var top = 150;

  if (imgLeftHeight < windowHeight - top) {
    imgLeft.style.transform = "translateX(0)";
    imgLeft.style.transition = "all 1.5s";
    imgLeft.style.opacity = "1";
  } else {
    imgLeft.style.transform = "translateX(-30vw)";
    imgLeft.style.transition = "all 1.5s";
    imgLeft.style.opacity = "0";
  }

  if (textRightHeight < windowHeight - top) {
    textRight.style.transform = "translateX(0)";
    textRight.style.transition = "all 1.5s";
    textRight.style.opacity = "1";
  } else {
    textRight.style.transform = "translateX(30vw)";
    textRight.style.transition = "all 1.5s";
    textRight.style.opacity = "0";
  }

  if (serviceTechHeight < windowHeight - top) {
    serviceTech.style.transform = "translateX(0)";
    serviceTech.style.transition = "all 1s";
    serviceTech.style.opacity = "1";
  } else {
    serviceTech.style.transform = "translateY(15vw)";
    serviceTech.style.transition = "all 1s";
    serviceTech.style.opacity = "0";
  }

  if (cardSectionHeight < windowHeight - top) {
    cardSection.style.transition = "all 3s";
    cardSection.style.opacity = "1";
  } else {
    cardSection.style.transition = "all 3s";
    cardSection.style.opacity = "0";
  }

  if (contactSectionHeight < windowHeight - top) {
    contactSection.style.transition = "all 1s";
    contactSection.style.transform = "scale(1)";
  } else {
    contactSection.style.transition = "all 1s";
    contactSection.style.transform = "scale(0.5)";
  }
});

var num1 = document.querySelector(".num1");
var num2 = document.querySelector(".num2");
var num3 = document.querySelector(".num3");

var a = 0;
var b = 0;
var c = 0;
setInterval(() => {
  if (a > 12378 || b > 32792 || c > 32154) {
    a = 12378;
    b = 32792;
    c = 32154;
    num1.innerHTML = `${a}+`;
    num2.innerHTML = `${b}+`;
    num3.innerHTML = `${c}+`;
  } else {
    num1.innerHTML = `${a}+`;
    num2.innerHTML = `${b}+`;
    num3.innerHTML = `${c}+`;
    a++;
    b++;
    c++;
  }
}, -0);

var blogCard = [
  {
    img: "car.png",
    title: "Latest Trends and New",
    body: `Whether you're an , a developer, or a business seeking tech solutions...`,
    btn: "Read More",
    btnP: "visibility.png",
    p1: "78.5k",
    p2: "57.2k",
  },
  {
    img: "aiWire.png",
    title: "Latest Trends and New",
    body: `Whether you're an , a developer, or a business seeking tech solutions...`,
    btn: "Read More",
    btnP: "favorite.png",
    p1: "78.5k",
    p2: "57.2k",
  },
  {
    img: "car.png",
    title: "Latest Trends and New",
    body: `Whether you're an , a developer, or a business seeking tech solutions...`,
    btn: "Read More",
    btnP: "favorite.png",
    p1: "78.5k",
    p2: "57.2k",
  },
];

var cardSection = document.querySelector(".cardSection");

var blogFunction = () => {
  blogCard.map((blog) => {
    var card1 = document.createElement("div");
    card1.classList.add("card1");
    card1.innerHTML = `
      <div class="cardChild1">
      <img src="${blog.img}" alt="">
      </div>
      <div class="cardChild2">
      <p>${blog.title}</p>
      <span>${blog.body}</span>
      
        <div class="blogBtn">
          <button>${blog.btn}</button>
          <p><img src="${blog.btnP}">${blog.p1}</p>
          <p><img src="${blog.btnP}">${blog.p2}</p>
        </div>
       </div> 
    `;
    cardSection.appendChild(card1);
  });
};

blogFunction();
