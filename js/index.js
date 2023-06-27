let ratingOption = document.querySelectorAll(".option");
let submit = document.querySelector(".cta-button");
let cardRating = document.querySelector(".card-rating");
let thankYouCard = document.querySelector(".thank-you-card");
let ratingValue;
let previousOption = null;


ratingOption.forEach(option=> {
      option.addEventListener('click', function() {
        if (previousOption) {
          previousOption.classList.remove("clicked");
        }
        
        option.classList.add("clicked");
        previousOption = option;
        
        ratingValue = option.textContent;
      });

    });



submit.addEventListener('click', function(){
    cardRating.style.display = "none";
    thankYouCard.style.display = "block";
    let message = document.querySelector(".option-note");
    message.textContent = `You selected ${ratingValue} out of 5`;
});