const tags = document.querySelectorAll(".tag");
const books = document.querySelectorAll(".get-books");

function tagsEvents() {
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const isSelected = tag.classList.contains("tag-selected");
            
            if(isSelected) {
                tag.classList.remove("tag-selected");
                return;
            }

            let tagsSelected = document.getElementsByClassName("tag-selected").length;
            if (tagsSelected >= 3) return;

            tag.classList.add("tag-selected");
            tagsSelected++;

            const categorySelected = tag.querySelector("p").textContent.toLowerCase();

            if (tagsSelected === 1) {
                categoryChoice(1, "book2", categorySelected, "change-first-book-img", "adjust-book2")
            }

            if (tagsSelected === 2) {
                categoryChoice(0, "book1", categorySelected, "change-second-book-img", "adjust-book1")
            }

            if (tagsSelected === 3) {
                categoryChoice(2, "book3", categorySelected, "change-third-book-img", "adjust-book3")
            }
        });

        tag.addEventListener("mousedown", () => {
            tag.classList.add("tag-pressed");
        });

        tag.addEventListener("mouseup", () => {
            tag.classList.remove("tag-pressed");
        });
    });
}

function categoryChoice(selectedBook, bookClass, categorySelectText, changeBookImageClass, adjustBookClass) {
    const selectedTag = document.querySelectorAll(".get-books")[selectedBook];

    selectedTag.classList.remove(bookClass);

    const imgOptions = [
        'gene-egoista.jpg',
        'less.jpg',
        'cold-blood.jpg',
        'snafu.jpg',
        'the-shining.jpg',
        'spider-man.jpg',
        'naruto.jpg',
        'stop-overthining.jpg',
        'mr-wrong-number.jpg',
        'metal-storm.jpg',
        'clean-code.jpg',
        'the-resurrectionist.jpg'
    ];

    const categoriesAvailable = [
        'biology',
        'comedy',
        'criminal',
        'history',
        'horror',
        'hq',
        'manga',
        'psychology',
        'romance',
        'sci-fi',
        'technology',
        'terror'
    ];

    categoriesAvailable.forEach(category => {
        if(category === categorySelectText) {
            let folderName = category;
            let imgOptionIndex = categoriesAvailable.indexOf(folderName);

            selectedTag.classList.add(changeBookImageClass);
            selectedTag.classList.remove(adjustBookClass);
            selectedTag.style.backgroundImage = `url('./src/img/books/${folderName}/${imgOptions[imgOptionIndex]}')`;
            selectedTag.style.borderRadius = '8px';

            setTimeout(() => {
                selectedTag.classList.remove(changeBookImageClass);
                selectedTag.classList.add(adjustBookClass);
            }, 1500);
            return;
        }
    });
}

// Header Intro Code

const recommendationsHeader = document.querySelector(".recommendations > h2");

const recommendationsHeaderOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const recommendationsHeaderIntro = new IntersectionObserver(entries => {
    const entry = entries[0];

    if(!entry.isIntersecting) return;

    entry.target.classList.add("text-intro");
    entry.target.classList.remove("opacity-zero");

    recommendationsHeaderIntro.unobserve(entry.target);
}, recommendationsHeaderOptions);

recommendationsHeaderIntro.observe(recommendationsHeader);

// Content Intro Code

const recomendationsContent = document.querySelector(".recommendations-content");
const recomendationsTagsContainer = document.querySelector(".recommendations-tags");
const recomendationsBooksContainers = document.querySelectorAll(".books-box");

const recommendationsContentOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
};

const recommendationsContentIntro = new IntersectionObserver(entries => {
    const entry = entries[0];

    if(!entry.isIntersecting) return;

    recomendationsTagsContainer.classList.add("content-intro");
    recomendationsTagsContainer.classList.remove("invisible");

    recomendationsBooksContainers.forEach(bookBox => {
        bookBox.classList.remove("invisible");
    });

    setTimeout(() => {
        const classListToRemove = [
            "book-first-intro",
            "book-second-intro",
            "book-third-intro"
        ];

        books.forEach((book, index) => {
            book.classList.remove(classListToRemove[index]);
        });

        tagsEvents();
    }, 1500);

    recommendationsContentIntro.unobserve(entry.target);
}, recommendationsContentOptions);

recommendationsContentIntro.observe(recomendationsContent);