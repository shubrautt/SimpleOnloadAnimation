const heading = document.querySelector(".heading"),
  para = document.querySelector(".para"),
  btn = document.querySelector(".btn"),
  mainImg = document.querySelector(".main__img"),
  section2Img = document.querySelector(".section2__img"),
  section2Content = document.querySelector(".section2___content");

window.navigator.vibrate(200);

const addClass = (className, newClass) => className.classList.add(newClass);

const handleTimeOut = (time, classList, newClass) =>
  setTimeout(() => classList.forEach((e) => addClass(e, newClass)), time);

handleTimeOut(500, [heading, para, btn], "active");
handleTimeOut(1000, [heading, para, btn], "opac1");

const applyClipPath = (classNameList, value) =>
  (classNameList.style.clipPath = value);

window.addEventListener("scroll", (e) => {
  applyClipPath(mainImg, `circle(${70.7 - window.scrollY / 10}% at 50% 50%)`);
  applyClipPath(section2Img, `circle(${0 + window.scrollY / 8}% at 50% 100%)`);
});
