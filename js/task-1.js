const liElems = document.querySelectorAll('.item');;
console.log(`Numbers of categories: ${liElems.length}`);

liElems.forEach(liElem => {
const message = `Category: ${liElem.querySelector("h2").textContent}`;
const message1 = `Elements: ${liElem.querySelectorAll("ul li").length}`;
console.log(message)
console.log(message1)
});