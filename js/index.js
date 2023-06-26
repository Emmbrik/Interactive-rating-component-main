let ratingOption = document.querySelectorAll(".option");
let submit = document.querySelector(".cta-button");
let cardRating = document.querySelector(".card-rating");
let thankYouCard = document.querySelector(".thank-you-card");
let ratingValue;


ratingOption.forEach(option=> {
    option.addEventListener('click', function(){
        ratingValue = option.textContent;
        console.log(ratingValue);
    });
});


submit.addEventListener('click', function(){
    console.log('The btn is working');
    cardRating.style.display = "none";
    thankYouCard.style.display = "block";
    let message = document.querySelector(".option-note");
    message.textContent = `You selected ${ratingValue} out of 5`;
});