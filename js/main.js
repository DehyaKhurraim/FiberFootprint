// GSAP ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

// Animate counters
document.addEventListener("DOMContentLoaded", function () {
  function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const countElem = counter.querySelector(".h2");
      let currentCount = 0;
      const increment = target / 100;

      function updateCount() {
        if (currentCount < target) {
          currentCount += increment;
          countElem.textContent = Math.ceil(currentCount);
          requestAnimationFrame(updateCount);
        } else {
          countElem.textContent = target;
        }
      }

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      if (isInViewport(counter)) {
        updateCount();
        counter.classList.add("animate");
      }

      window.addEventListener("scroll", function () {
        if (isInViewport(counter) && !counter.classList.contains("animate")) {
          updateCount();
          counter.classList.add("animate");
        }
      });
    });
  }

  animateCounters();
});
