(() => {
  //Variables, call the elements
  const sigils = document.querySelectorAll(".sigilContainer"),
        lbox = document.querySelector(".lightbox"),
        lboxclose = lbox.querySelector(".closebutton");

  //functions, what do you want to happen
  function showbox() {
    lbox.classList.add("showlightbox");
  }

  function closelightbox() {
    lbox.classList.remove('showlightbox');
  }

  //event listeners, what makes the function start
  sigils.forEach(sigil => sigil.addEventListener('click', showbox));
  lboxclose.addEventListener('click', closelightbox);
})();
