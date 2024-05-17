//getElementById
let id = document.getElementById('padayonLangId');
console.log(id);


//getElementByName - kuhaon ang list sa name
let name = document.getElementsByName('padayonLangClassName');
console.log(name);


//getElementsByTagName - kuhaon ang tagName
let tagName = document.getElementsByTagName('h3');
console.log(tagName);


//getElementByClassName - kuhaon ang ClassName 
let containerClassName = document.getElementById('containerClassName')
let className = containerClassName.getElementsByClassName('className');
console.log(className);


//document.querySelector - kuhaon lang niya ang pinakauna na classname
let queryselector = document.querySelector('.querySelector');
console.log(queryselector);


//document.querySelectorAll - kuhaon niya tanang id, classname, tags like div, h1, p ug daghan pa
let querySelectorAll = document.querySelectorAll("#querySelectorAll, .querySelectorAllName, section  h3 h2");
console.log(querySelectorAll);


//SELECTING PARTENT ELEMENT AND CHILD ELEMENT USING PARENTNODE
let selectingChildElement = document.querySelector('.childElement');
console.log(selectingChildElement.parentNode);


//SELECTING PARTENT ELEMENT AND FIRST CHILD ELEMENT - KUHAON ANG FIRST CHILD
let selectedParentElement = document.querySelector('.parentElementTest');
console.log(selectedParentElement.firstChild); //KUHAON ANG FIRST CHILD NA INLINE SA PARENT ELEMENT
console.log(selectedParentElement.firstElementChild); //E  DISPLAY ANG FIRST ELEMENT CHILD SULOD SA PARENT ELEMENT
console.log(selectedParentElement.lastChild); //KUHAON ANG LAST CHILD NA INLINE SA PARENT ELEMENT
console.log(selectedParentElement.lastElementChild) //E DISPLAY ANG LAST ELEMENT CHILD SULOD SA PARENT ELEMENT
console.log(selectedParentElement.childNodes); //KUHAON TANANG DATA SA ELEMENTS SULOD SA PARENT ELEMENT


//SELECTING SIBLINGS ELEMENTS - PREVIOUS-ELEMENT / NEXT-ELEMENT GAMIT QUERYSELECTOR
let selectingSiblings = document.querySelector('.secondSiblingElements');
console.log(selectingSiblings.previousElementSibling); //kuhaon niyang unang sibling element which is ( <h4 >AYAW KOL BATA PAKO KOL</h4>)
console.log(selectingSiblings.nextElementSibling); //kuhaon niyang sunod sa gigamit sa querySelector which is sibling element  ( <h4 ></h4>)


// DOCUMENT - createElement();
let divContainer = document.createElement('div');
divContainer.innerHTML = "PADAYON LANG MAGING JS DEVELOPER!";
document.body.appendChild(divContainer);
console.log(divContainer);


//AppendChild - E add niya sa pinakalast 
let divMenu = document.getElementById('menu');
let list = document.createElement('li');
list.innerHTML = "Links";
menu.appendChild(list);


//textContent - textContent - kuhaon niyang context sa content
let textData = document.getElementById("text-content");
console.log(textData.textContent); //

//innerText - kuhaon ang unorder list gamit id
console.log("GAMIT INNERHTML", menu.innerText);


//innerText - giapplyan ug css display:none;
console.log("GAMIT INNERHTML", innerTextData.innerText);


//textContect - insert ugg data gamit textContent
textcontentInsertData.textContent = "AYAW KOL!";


// innerHTML naay tag 
innerHtmlWithTags.innerHTML = "<h1>innerHTML naay tag! </h1>";
innerHtmlWithTags.textContent = "<h1>innerHTML naay tag! </h1>";


//after method
// const test = afterMethod1.afterBegin(node);
// console.log("after method", test);

//append menthod - isumpay niya
appendMethod1.append(appendMethod2);

//prepend method - isumpay niya
prepend1.prepend(prepend2);

// insertAdjacentElement - isumpay niya
// let insertAdjacentHtmlKunuhay = document.getElementById('insertAdjacentId');
// insertAdjacentHtmlKunuhay.insertAdjacentElement(insertAdjacent2, insertAdjacent3)


//replaceChild method - iyang ilisan base sa id na isapa
// let replacer = document.getElementById('mainReplacer')
// replacer.replaceChild(replaceChildChild, replaceChildParent);


//cloneNode method - from the root word itself clone  iyang kopyahon
let copy = cloneNode1.cloneNode(true);
// let copy2 = copy.cloneNode(true);

console.log("DATA SA CLONE NODE", copy);












