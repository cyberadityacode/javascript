/* const user = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }

 */

/*   let userData
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) =>{ 
    console.log('got the data') 
    console.log(json)
    userData = json
  }); */

const dogContainer = document.querySelector(".dog-container");
const button = document.querySelector("button");
const dogRandom = document.createElement("img");

/* 
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((json) => {
    if (json.status === "success") {
      const dogRandom = document.createElement("img");
      dogRandom.src = json.message;
      dogRandom.classList.add("dog-random");
      dogContainer.appendChild(dogRandom);
    }else{
      alert('Dog Not Found')
    }
  });
 */

//XHR - XML Http Request

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  // console.log(xhr);
 /*  xhr.addEventListener("load", () => {
    // console.log(JSON.parse(xhr.response));
    console.log(xhr.response); //specify response type to json if you dont want to parse

    // const dogRandom = document.createElement("img");
    dogRandom.src = xhr.response.message;
    dogRandom.classList.add("dog-random");
    dogContainer.appendChild(dogRandom);
  }); */

  xhr.onload = ()=>{
    dogRandom.src = xhr.response.message;
    dogRandom.classList.add("dog-random");
    dogContainer.appendChild(dogRandom);
  }
  // xhr.open('GET', 'https://httpbin.org/anything')
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
