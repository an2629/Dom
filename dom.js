// console.dir(document);

//Examine the Document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello';

//GetElementByID

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// header.title.textContent='hello';
// headerTitle.innerText='Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML=<h3>Hello</h3>;


//GetElementByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items)
items[1].textContent='Hello-2';
items[2].style.fontweight='bold';
items[1].style.fontweight='bold';
items[1].style.backgroundColor='yellow';

for(var i=0;i< items.length; i++)
{
    items[i].style.backgroundColor='yellow';
}