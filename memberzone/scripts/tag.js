const tags = document.querySelectorAll(".tag");
const pageTagContent = document.querySelector(".page-content");
const resultTagContainer = document.querySelector(".result-tag-content");
const isResultSearchSelected = document.querySelector(".result-search-content");

tags.forEach(tag => {
    tag.addEventListener("click", () => {
        if(!isResultSearchSelected.classList.contains("invisible")) {
            isResultSearchSelected.classList.add("invisible");
        }

        if(!pageTagContent.classList.contains("invisible")) {
            pageTagContent.classList.add("invisible");
        }

        tags.forEach(checkTag => {
            checkTag.classList.remove("selected-tag");
        });

        const categoryTagName = tag.querySelector("p").textContent.toLowerCase();

        tag.classList.add("selected-tag");

        if (categoryTagName.includes("all")) {
            pageTagContent.classList.remove("invisible");
            resultTagContainer.classList.add("invisible");
            return;
        }

        pageTagContent.classList.add("invisible");
        resultTagContainer.classList.remove("invisible");

        resultTagContainer.innerHTML = "";

        const categorySections = pageTagContent.querySelectorAll(".trending-books");

        categorySections.forEach(section => {
            const sectionTitle = section.querySelector("h2")?.textContent.toLowerCase();

            if (sectionTitle === categoryTagName) {
                // Create a new Container
                const categoryTagContainer = document.createElement('div');
                categoryTagContainer.classList.add('trending-books');

                // Title
                const tagTitle = document.createElement('h2');
                tagTitle.textContent = categoryTagName.charAt(0).toUpperCase() + categoryTagName.slice(1);
                categoryTagContainer.appendChild(tagTitle);

                // Books List
                const booksList = section.querySelector(".books-list");
                if (booksList) {
                    const clonedBooksList = booksList.cloneNode(true);
                    categoryTagContainer.appendChild(clonedBooksList);
                }

                // Add Result
                resultTagContainer.appendChild(categoryTagContainer);
            }
        });
    });
});