const ratingButtons = document.getElementsByClassName("rating-button");
const submitButton = document.getElementsByClassName("submit-button")[0];
const container = document.getElementById("card");

let rating;

const setRating = (event) => {
  for (let index = 0; index < ratingButtons.length; index++) {
    const element = ratingButtons[index];
    element.classList.remove("active");
    console.log(index);
    console.log(element.classList);
  }
  rating = event.target.textContent;
  event.target.classList.add("active");
  submitButton.disabled = false;
};

for (let index = 0; index < ratingButtons.length; index++) {
  const ratingButton = ratingButtons[index];
  console.log(index);
  console.log(ratingButton.classList);

  ratingButton.addEventListener("click", setRating);
}

const setThankYouHtml = (ratingsValue) => `<img
src="./images/illustration-thank-you.svg"
alt="thank you illustration"
width="100"
/>

<p class="selection-paragraph">
You selected <span id="selected">${ratingsValue}</span> out of 5
</p>

<h3 class="heading">Thank you!</h3>
<p class="response-message thank-you">
We appreciate you taking the time to give a rating. If you ever need
more support, don't hesitate to get in touch!
</p>`;

submitButton.onclick = () => {
  container.innerHTML = setThankYouHtml(rating);
};
