$(document).ready(function(){
    $('.first_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        centerMode: true,
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev.svg"></button>',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true
              }
            }
          ]
    });
});


const images = document.querySelectorAll(".slide_img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        const parentHasClass = img.closest('.slick-active') !== null;
        // console.log(parentHasClass)
        imgModal(imgSrc, parentHasClass);
    });
});
//creating the modal
let imgModal = (src,isActive) => {
  if (isActive) {
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      //add the modal to the main section or the parent element
      document.querySelector(".galery").append(modal);
      //adding image to modal
      const newImage = document.createElement("img");
      newImage.setAttribute("src", src);
      //creating the close button
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");
      //close function
      closeBtn.onclick = () => {
          modal.remove();
      };
      modal.append(newImage, closeBtn);
  }
};

const gallery_pic = document.querySelectorAll(".gallery_img")
let galleryImgSrc;
// get images src onclick
gallery_pic.forEach((img) => {
    img.addEventListener("click", (e) => {
      galleryImgSrc = e.target.src;
        //run modal function
        const parentHasClass = img.closest('.slick-active') !== null;
        console.log(galleryImgSrc)
        imgModalGallery(galleryImgSrc);
    });
});

let imgModalGallery = (src) => {
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      //add the modal to the main section or the parent element
      document.querySelector(".galery").append(modal);
      //adding image to modal
      const newImage = document.createElement("img");
      newImage.setAttribute("src", src);
      //creating the close button
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");
      //close function
      closeBtn.onclick = () => {
          modal.remove();
      };
      modal.append(newImage, closeBtn);
};
