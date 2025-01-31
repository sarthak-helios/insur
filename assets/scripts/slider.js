document.addEventListener("DOMContentLoaded", () => {
  wrapper = document.querySelector("#wrapper");
  wrapper2 = document.querySelector("#wrapper2");
  progressBar = document.querySelector("#progressBar");
  progressBar.style.width = "1%";
  startSlide();
});

function pauseSlide() {
  try {
    clearInterval(interval);
  } catch (error) {}
}

function startSlide() {
  pauseSlide();
  interval = setInterval(() => {
    if (
      wrapper.clientWidth * wrapper.children.length - 1 <=
      wrapper.scrollLeft + wrapper.clientWidth
    ) {
      wrapper.scrollLeft = 0;
    } else {
      wrapper.scrollLeft += wrapper.clientWidth;
    }
  }, 3000);
}

function left() {
  pauseSlide();
  try {
    clearTimeout(timer);
  } catch (error) {}
  if (wrapper.scrollLeft > 0) {
    wrapper.scrollLeft -= wrapper.clientWidth;
  } else {
    wrapper.scrollLeft = wrapper.clientWidth * wrapper.children.length;
  }
  timer = setTimeout(startSlide(), 1000);
}

function right() {
  pauseSlide();
  try {
    clearTimeout(timer);
  } catch (error) {}
  if (
    wrapper.scrollLeft + wrapper.clientWidth <=
    wrapper.clientWidth * wrapper.children.length - 2
  ) {
    wrapper.scrollLeft += wrapper.clientWidth;
  } else {
    wrapper.scrollLeft = 0;
  }
  timer2 = setTimeout(startSlide(), 1000);
}

function moveServices(v) {
  switch (v) {
    case 0:
      wrapper2.scrollLeft -= 200;
      break;
    case 1:
      wrapper2.scrollLeft += 200;
      break;
    default:
      break;
  }
}

wrapper2.addEventListener("scroll", () => {
  progressBar.style.width = `${
    (wrapper2.scrollLeft / (wrapper2.clientWidth * 2)) * 100 * 3
  }%`;
});
