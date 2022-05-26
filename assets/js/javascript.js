/* 
1. DOM selection
2. Event listener
3. Basic Validation
4. Creating Elements
5. Append

*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('#button');
const bookList = document.querySelector('#book-list');


btn.addEventListener('click', function (e) {
    e.preventDefault()

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Enter Details');
    } else {
        const newRow = document.createElement('tr');

        //crate new title
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //crate new title
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        //crate new title
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
});

// console.log('hello bangladesh');