(function() {
  var theImages = document.querySelectorAll('.image-holder'),
  theHeading = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  function ChangeElements(){
    //make sure event handling is working
    //debugger;

    let objectIndex = dynamicContent[this.id];
    let subImages = document.querySelector('.subImagesContainer');

    //remove all images
    while(subImages.firstChild){
      subImages.removeChild(subImages.firstChild);
    }
    //add some images at the bottom of the page
    objectIndex.images.forEach(function(image, index){
      // create a new image element
      let newSubImg = document.createElement('img');
      //add a css class
      newSubImg.classList.add('thumb');
      //add a source
      newSubImg.src = "images/" + objectIndex.images[index];

      //add event handling
      newSubImg.addEventListener('click', popLightbox, false);

      //add it to the page
      subImages.appendChild(newSubImg);
    });

    //change color of text (backwards)
    theSubhead.classList.remove(appliedClass);
    theHeading.classList.remove(appliedClass);

    //change color of text
    theSubhead.classList.add(this.id);
    theHeading.classList.add(this.id);

    //change content of page
    //firstChild.nodeValue is the same as innerHTML kind of
    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

  theImages.forEach(function(element, index){
    //Loop through the images and add event handling to each one
    element.addEventListener('click', ChangeElements, false);
  })

  //theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
  //theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
  //theHeading.classList.add('spring');

  function popLightbox(){
    debugger;
    let lightbox = document.querySelector('.lightbox');

    lightbox.style.display = "block";
  }

  changeElements.call(document.querySelector('#spring'))


})();
