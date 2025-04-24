const searchText = document.querySelector("#search-text");
const listUser = document.querySelector(".list-user ul");
const noResultsMsg = document.getElementById("no-results");
const storeUser = [];

searchText.addEventListener("input", (e) => {
  filterUserData(e.target.value);
});

const fetchUsers = async () => {
  try {
    const response = await fetch("api.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data.results);
    ////

    listUser.innerHTML = "";

    data.results.forEach((dr) => {
      const li = document.createElement("li");

      li.innerHTML = `
               
                    <img src="${dr.picture.large}" alt="">
                    <h4>${dr.name.first} ${dr.name.last}</h4>
                    <span>${dr.location.city}, ${dr.location.country}</span>
                   
            `;
      listUser.appendChild(li);
      storeUser.push(li);
    });

    console.log("-----");
    console.log(storeUser);

    // updateUsersDisplay(storeUser)
  } catch (error) {
    console.error(error);
  }
};

const filterUserData = (searchTerm) => {
  let anyVisible = false;

  storeUser.forEach((item) => {
    const isMatch = item.innerText
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    item.classList.toggle("hide", !isMatch);
    if (isMatch) {
      anyVisible = true;
    }
  });

  // Show/hide the no results message
  noResultsMsg.style.display = anyVisible ? "none" : "block";
};

fetchUsers();
