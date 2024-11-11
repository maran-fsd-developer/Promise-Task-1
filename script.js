  // Define a function to fetch a random dog image from an external API
document.addEventListener("DOMContentLoaded", function () {
  function fetchDogImage() {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const dogImg = document.getElementById("dogImg");

        dogImg.src = data.message;
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }

  // Use Promise.all to handle the completion of the fetchDogImage function (useful for multiple promises)
  Promise.all(fetchDogImage())
    .then(() => {
      console.log("All data fetched successfully");
    })
    .catch((error) => {
      console.error("Error in Promise.all:", error);
    });
});

// Add an event listener to the "refreshButton" button to reload the page when clicked
document.getElementById("refreshButton").addEventListener("click", () => {
  location.reload();
});
