import { setSearchFocus } from "./searchBar";
import { getSearchTerm } from "./dataFunctions";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readystate === "complete") {
    initApp();
  }
});

const initApp = () => {
  //set the focus
  setSearchFocus();
  //33 listeners to clear text

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

//Procedural 'workflow' function

const submitTheSearch = (event) => {
  event.preventDefault();
  //delete search results
  //process the search
  processTheSearch();
  //set the focus
  setSearchFocus();
};

//Procedural

const processTheSearch = async () => {
  //clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
};
