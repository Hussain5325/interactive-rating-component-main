const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".display");
const submitButton = document.querySelector("#submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".number_rating");

submitButton.addEventListener("click", () => {
    thanksContainer.style.display = "flex"
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

