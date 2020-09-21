function getDogs(userNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      displayDogs(responseJson);
    })
    .catch((error) =>
      alert("Something went wrong. Try again later.")
    );
}
function getSpecificDog(userBreed) {
  fetch(`https://dog.ceo/api/breed/hound/images/random`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      displaySpecDog(responseJson);
    });
}

function displayDogs(responseJson) {
  let imgArr = responseJson.message;
  for (let i = 0; i < imgArr.length; i++) {
    console.log(imgArr[i]);
    $("section").append(`<img src="${imgArr[i]}">`);
  }
}
function displaySpecDog(responseJson) {
  let img = responseJson.message;
  console.log("img from within display spec dog", img)
  $("section").append(`<img src="${img}">`);
}

function watchForm() {
  $(".random-dogs").submit(function (event) {
    event.preventDefault();
    console.log("clicked random");
    console.log(event.currentTarget);

    let userNumber = $(this).find($("input")).val();
    console.log(userNumber);
    getDogs(userNumber);
  });
  $(".specific-dog").submit(function (evt) {
    evt.preventDefault();
    console.log("clicked specific");
    let userBreed = $(this).find($(".breed").val());
    console.log("user breed is:",userBreed);
    getSpecificDog(userBreed);
  });
}

function main() {
  watchForm();
}

$(main);
