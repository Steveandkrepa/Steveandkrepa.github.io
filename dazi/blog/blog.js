window.addEventListener("load", function () {
  document.querySelectorAll(".toggle-nav").forEach((el) => {
    const targetEl = el.parentNode.parentNode;
    el.addEventListener("click", function () {
      if (targetEl.className.indexOf("unfold") !== -1) {
        targetEl.className = targetEl.className.replace("unfold", "fold");
        el.querySelector("use").setAttribute("href", "#down");
      } else {
        targetEl.className = targetEl.className.replace("fold", "unfold");
        el.querySelector("use").setAttribute("href", "#up");
      }
    });
  });
});
