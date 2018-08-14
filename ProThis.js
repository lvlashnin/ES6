  // elem.ontransitionend = function() {
  //   alert( "ontransitionend" ); // не сработает
  // };

  // elem.addEventListener("transitionend", function() {
  //   console.log( "addEventListener" ); // сработает по окончании анимации
  // });
//   var elem1 = document.getElementById('elem1');
// elem1.addEventListener('blur', func); //тут this - это первый элемент

// var elem2 = document.getElementById('elem2');
// elem2.addEventListener('blur', func); //тут this - это второй элемент

// function func() {
// 	alert(this.value); //а тут this не еще определен
var list = {
	'text':false,
	'id':true,
	'srting':'hello',
	'comments':[
            {
                "id": "qwerqwertyy",
                "user": "Gilliam Underwood",
                "text": "Velit anim deserunt elit velit est fugiat duis eiusmod eu do incididunt ut tempor voluptate. Officia dolor aliqua id anim mollit pariatur id commodo. Laborum minim non ut aliquip commodo est consectetur. Mollit eu aliqua tempor est nulla ullamco irure. Sit non amet et eiusmod cillum ex cillum anim incididunt ad laboris mollit. Sunt quis incididunt elit ea qui non ullamco aliquip consequat voluptate eiusmod est. Irure laboris amet culpa sit aliquip."
            },
            {
                "id": "sdfgsdfghu7u7urtv",
                "user": "Jodi Humphrey",
                "text": "Non amet amet ut magna culpa dolore consequat occaecat. Commodo adipisicing laboris voluptate enim mollit mollit anim aliquip deserunt nostrud deserunt cillum est. Ad eu cupidatat dolor nostrud et minim id in dolor occaecat ad magna elit. Laboris elit laboris aliquip Lorem reprehenderit id amet reprehenderit laborum minim incididunt cupidatat eiusmod."
            }
        ]
}


console.log(list.comments)       