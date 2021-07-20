(() => {
  //Variables, call the elements
  const sigils = document.querySelectorAll(".sigilContainer"),
        lbox = document.querySelector(".lightbox"),
        lboxclose = lbox.querySelector(".closebutton"),
        housevideo = document.querySelector('video'),
        bannerbox = document.querySelector("#houseImages");

  //functions, what do you want to happen
  function showbox() {
    //get the house name from clicking each shield
    //split between classes, sigilcontainer and the actual name
            //this.classname.split between 0 and 1 over the blank space, choose the 1
    let targetvideo = this.className.split(" ")[1];
    //change name to uppercase
    let targetvidcap = targetvideo.charAt(0).toUpperCase() + targetvideo.slice(1);
        //targetpath = `video/house-${targetvideo}.mp4`;

    housevideo.src = `video/house-${targetvideo}.mp4`;
    housevideo.load();

    lbox.classList.add("showlightbox");
    housevideo.play();
  }

  function closelightbox() {
    //stop and rewind the video
    housevideo.currentTime = 0;
    housevideo.pause();
    lbox.classList.remove('showlightbox');
  }

  function bannerscroll() {
    //move the banner to match the flag we click on //
    // each banner is 600px wide //
    const bannerwidth = 600;
    let multiplier = this.dataset.offset,
        finaloffset = bannerwidth * multiplier;

    bannerbox.style.right = finaloffset + "px";
  }

  //event listeners, what makes the function start
  sigils.forEach(sigil => sigil.addEventListener('click', bannerscroll));
  lboxclose.addEventListener('click', closelightbox);
  housevideo.addEventListener('ended', closelightbox);
})();
