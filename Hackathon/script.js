let url = "https://api.jikan.moe/v4/anime";

async function getData() {
  let res = await fetch(url);
  let actualdata = await res.json();

  //Elements for displaying the data on the page

  actualdata.data.forEach((ele) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.setAttribute("value", ele.title);
    card.appendChild(cardBody);

    //A function to display the Genre which is in an array
    function displayGenres(ele) {
      let genre = ele.genres.map((e) => {
        return " " + e.name;
      });
      return [...genre];
    }

    let genre = displayGenres(ele);

    //Inserting the Data on the page to be displayed
    cardBody.innerHTML = `
    <div class = "myImageContainer container-fluid"><img src=${ele.images.jpg.image_url} alt="An image of " ${ele.title}/></div>
    <h3><a href=${ele.url}><span class ="animeName">${ele.title}</span></a></h3>
    <p>Genre: ${genre}</p>
    <p>Aired: ${ele.aired.string}</p>
    <p>Episodes: ${ele.episodes}</p>
    <p>Type: ${ele.type}</p>
    <p>Rating: ${ele.rating}</p>
 `;

    //Displaying the data for each card

    container.append(card);
  });

}

let body = document.querySelector("body");

let navBar = document.createElement("nav");
navBar.setAttribute("class", "navbar navbar-dark");

let searchContainer = document.createElement("input");
searchContainer.setAttribute("type", "search");
searchContainer.setAttribute("class", "search-box form-control mr-sm-2");
let searchButton = document.createElement("button");
searchButton.setAttribute(
  "class",
  "btn btn-outline-success search-button my-2 my-sm-0"
);
searchButton.setAttribute("type", "submit");
searchButton.innerText = `Search`;

navBar.append(searchContainer);
navBar.append(searchButton);
body.appendChild(navBar);
body.appendChild(navBar);

let container = document.createElement("div");
container.setAttribute("class", "container-fluid myContainer");
body.append(container);

let myData = getData();
console.log(myData);


//event listener for searchbox
searchContainer.addEventListener("keyup", function Search(data){
    let enteredText = "";
    enteredText = searchContainer.value;
    enteredText = enteredText.toLowerCase();
    console.log("hello");
    console.log(enteredText);

    console.log(data);
    if(enteredText === ""){
        console.log("Text is empty");
    }
});