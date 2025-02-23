
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addbookbutton=document.getElementById("add-book-button")

addbookbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancelbook")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
})
cancelbutton.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var bookscontainer=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book title")
var bookauthor=document.getElementById("book author")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    bookscontainer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}