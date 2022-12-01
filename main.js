
console.log("connected");

const tbody = document.getElementsByTagName('tbody')[0];
const alerts = document.getElementsByClassName('alert')[0];
class book{
    constructor(bookname,author,booktype){
        this.bookname=bookname;
        this.author=author;
        this.booktype=booktype;
    }
}

const getData = document.getElementsByClassName("submit_btn")[0];

getData.addEventListener('click',submitted);
getData.addEventListener('keyup',submitted);

function submitted(e){
    e.preventDefault();
    const bookname =document.getElementsByClassName("bookname")[0].value;
    const author = document.getElementsByClassName('author')[0].value;
    const adventure = document.getElementsByClassName('adventure')[0].checked;
    const action = document.getElementsByClassName('action')[0].checked;
    const romantic = document.getElementsByClassName('romantic')[0].checked;
   


var booktype
if (adventure){
    booktype='adventure'
}
else if (romantic){
    booktype='romantic'
}
else{
    booktype='action'
}

const bookdata = new book (bookname,author,booktype);
console.log(bookdata);
if(bookname.length>2 && author.length>2){
addrow(bookdata);
}
else{
    alerts.classList.remove('hidden')
    setTimeout(()=>{
        alerts.classList.add('hidden')
    },1000)
}
document.getElementsByTagName('form')[1].reset();
}

var counter=0
function addrow(data){
    counter++;
    const newrow =document.createElement('tr');
    newrow.innerHTML = `<th scope="row">${counter}</th>
                        <td> ${data.bookname}</td>
                        <td> ${data.author}</td>
                        <td> ${data.booktype}</td>`
                        
                tbody.append(newrow)
}