const heading = document.querySelector(".heading"),
  para = document.querySelector(".para"),
  btn = document.querySelector(".btn");

const addClass = (className, newClass) => className.classList.add(newClass);

const handleTimeOut = (time, classList, newClass) =>
  setTimeout(() => classList.forEach((e) => addClass(e, newClass)), time);

handleTimeOut(500, [heading, para, btn], "active");
handleTimeOut(1000, [heading, para, btn], "opac1");
