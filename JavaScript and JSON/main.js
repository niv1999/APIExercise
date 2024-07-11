let jsonString;
function createJSON() {
    const books = [
        {id: 1, name: "Python is Fun", price: 100},
        {id: 2, name: "JavaScript for Beginners", price: 120},
        {id: 3, name: "HTML for Experts", price: 80}
    ];

    jsonString = JSON.stringify(books);
    alert(jsonString);

    localStorage.setItem("books", jsonString);
}

function convertBack() {
    const books = JSON.parse(jsonString);
    for (const book of books) {
        document.write(`ID: ${book.id}<br>`);
        document.write(`Name: ${book.name}<br>`);
        document.write(`Price: ${book.price}<br>`);
        document.write("<hr>");
    }
}