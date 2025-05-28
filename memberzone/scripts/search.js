const searchbar = document.querySelector(".search > input");
const pageContent = document.querySelector(".page-content");

const results = document.querySelectorAll(".book-box");
const resultContent = document.querySelector(".result-search-content");
const resultContainer = document.querySelector(".result-search-content > .books-list");

const isResultTagSelected = document.querySelector(".result-tag-content");
const isTagsSelected = document.querySelectorAll(".tag");

searchbar.addEventListener("input", () => {
  if(!isResultTagSelected.classList.contains("invisible")) {
    isResultTagSelected.classList.add("invisible");

    isTagsSelected.forEach(isTagSelected => {
      const allTagToSelect = document.querySelector(".tag:first-child");

      if(isTagSelected.querySelector("p").textContent != "All") {
        isTagSelected.classList.remove("selected-tag");
        allTagToSelect.classList.add("selected-tag");
      }
    });
  }

  if(!pageContent.classList.contains("invisible")) {
    pageContent.classList.add("invisible");
  }

  const searchQuery = searchbar.value.trim().toLowerCase();

  if (searchQuery === "") {
    resultContent.classList.add("invisible");
    pageContent.classList.remove("invisible");
    resultContainer.innerHTML = "";
    
    return;
  }

  resultContent.classList.remove("invisible");
  pageContent.classList.add("invisible");

  resultContainer.innerHTML = "";

  results.forEach(result => {
    const trendingContainer = result.closest(".trending-books").querySelector("h2");
    if (trendingContainer && trendingContainer?.textContent.trim().toLowerCase() === "trending books") return;

    const bookName = result.dataset.bookName?.toLowerCase() || "";
    
    if (bookName.includes(searchQuery)) {
      const copyBook = result.cloneNode(true);
      resultContainer.appendChild(copyBook);
    }
  });
});