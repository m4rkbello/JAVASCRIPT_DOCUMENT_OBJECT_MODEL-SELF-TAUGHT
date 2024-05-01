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
