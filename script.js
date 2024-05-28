/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
8. Удалите тег h6 на странице.
*/

//1
const super_link = document.getElementById("super_link");
console.log(super_link);

//2
let cardlink = document.getElementsByClassName("card-link");
cardlink = Array.from(cardlink);
cardlink.forEach(item => item.textContent = "ссылка");

//3
const crLinkInCrBody = document.querySelectorAll(".card-body .card-link");
console.log(crLinkInCrBody);

//4
const dataNumber = document.querySelector("[data-number='50']");
console.log(dataNumber);

//5
const title = document.getElementsByTagName("title");
console.log(title[0].textContent);

//6
const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);

//7
const p = document.createElement("p");
p.textContent = "Привет";
const card = document.querySelector(".card");
card.firstChild.before(p);

//8
document.querySelector("h6").remove();