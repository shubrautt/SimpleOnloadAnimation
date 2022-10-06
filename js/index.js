const heading = document.querySelector(".heading");
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

const addClass = (className, newClass) => {
  className.classList.add(newClass);
};

setTimeout(() => {
  addClass(heading, "active");
  addClass(para, "active");
  addClass(btn, "active");
}, 500);

setTimeout(() => {
  addClass(heading, "opac1");
  addClass(para, "opac1");
  addClass(btn, "opac1");
}, 1000);
