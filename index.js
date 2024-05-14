//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
console.log(mainEl);
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>DOM Manipulation</h1>.

mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"

//Add a class of flex-ctr to mainEl.

mainEl[0].classList.toggle('flex-ctr')

//Part 2 : Creating a Menu Bar

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);





