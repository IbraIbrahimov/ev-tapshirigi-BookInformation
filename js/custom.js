
window.addEventListener('load', function () {
    loadData();
});

let id=0;
let books=[];

function book(name,author,years,list,cildNo){
this.id = ++id;
this.name = name;
this.author = author;
this.years = years;
this.list = list;
this.cildNo = cildNo;


}

function addBook(){
    let bookName, bookAuthor, bookYear, listNo, cild;
    bookName = document.getElementById('bookName').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    bookYear = document.getElementById('bookYear').value;
    listNo = document.getElementById('listNo').value;
    cild = document.getElementById('cild').value;

let book1 = new book(bookName,bookAuthor, bookYear, listNo,cild);
books.push(book1);

addToTable(book1);
}

function addToTable(book){
let tBody = document.querySelector('#books > tbody');
let tr = document.createElement('tr');

let tdId = document.createElement('th');
tdId.textContent = book.id;
tr.appendChild(tdId);
tdId.classList.add('text');

let tdBookName = document.createElement('td');
tdBookName.textContent = book.name;
tr.appendChild(tdBookName);
tdBookName.classList.add('text');

let tdBookAuthor = document.createElement('td');
tdBookAuthor.textContent = book.author;
tr.appendChild(tdBookAuthor);
tdBookAuthor.classList.add('text');



let tdBookYear = document.createElement('td');
tdBookYear.textContent = book.years;
tr.appendChild(tdBookYear);
tdBookYear.classList.add('text');

let tdListNo = document.createElement('td');
tdListNo.textContent = book.list;
tr.appendChild(tdListNo);
tdListNo.classList.add('text');

let tdCild = document.createElement('td');
tdCild.textContent = book.cildNo;
tr.appendChild(tdCild);
tdCild.classList.add('text');



tBody.appendChild(tr);


}

function loadData() {
    
    try {
      let tBody = document.querySelector('#books > tbody');
      tBody.innerHTML='';
  
      //   let stList=JSON.stringify(students);
      let stList = localStorage.getItem('books');
      books=JSON.parse(stList);
      var ids= books.map(function(item,index)
      {
          addToTable(item);
          return item.id;
      });
    
      id=Math.max(...ids);
    } catch (error) {
      books=[];
    }
  
};
  

  function saveData() {
    let stList = JSON.stringify(books);
    localStorage.setItem('books', stList);
};

// function myDelete(){

//     // document.getElementById('books').deleteRow(1);
// }