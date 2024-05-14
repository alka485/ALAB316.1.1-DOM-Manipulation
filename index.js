//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl);
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = "var(--main-bg)";