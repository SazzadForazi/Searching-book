const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-button');
const errorDiv = document.getElementById('error-div');
const searchBook = () => {
    const searchText = searchField.value;


    if (searchText === '') {
        errorDiv.innerText = "Search field can't be empty";

    }

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));

}

const displaySearchResult = (book) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    errorDiv.innerText = '';

    // console.log(book.docs);
    const bookDocs = book.docs;
    bookDocs.forEach(books => {
        // console.log(books);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
           <img src=" https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
           <div class="card-body">

             <p style=" font-weight: bold; font-family: cursive;">Title:<span style="color:tomato;font-family: cursive;"> ${books.title}</span></p>
             <p style=" font-weight: bold; font-family: cursive;">Publisher:<span style="color:tomato;font-family: cursive;"> ${books.publisher}</span></p>
             <p style=" font-weight: bold; font-family: cursive;">Author Name:<span style="color:tomato;font-family: cursive;"> ${books.author_name}</span></p>
             <p style=" font-weight: bold; font-family: cursive;">Published Date:<span style="color:tomato;font-family: cursive;"> ${books.publish_date}</span></p>
             <p style=" font-weight: bold; font-family: cursive;">First Publish Year:<span style="color:tomato;font-family: cursive;"> ${books.first_publish_year}</span></p>
             <p style=" font-weight: bold; font-family: cursive;">Publish year:<span style="color:tomato;font-family: cursive;"> ${books.publish_year}</span></p>
           </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}