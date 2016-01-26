//object literal
var automobile = {
  engine: "V8",
  topSpeed: 187,
  run: function(){
    console.log("I'm a brand new Ford; I started up just fine.");
  }
};

// an example of delegation (RECOMMENDED)
var auto2 = Object.create(automobile);
auto2.engine = "V6";
auto2.name = "Camry";
auto2.pastOwners = ["Karyn Cool", "Charles Frazer"];
auto2.currentOwner = "James Cool";
auto2.run = function() {
  console.log("I'm having a hard time starting!!");
}

//constructor function (not recommended)
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var james = new Person("James", "Cool");



//***********************************************************


//testing out Javascript-snippets
  //type "fun"
  //can easily tab to the function name, arguments, and function body

function test1(x > 1) {
  //something there
}



  //type "afn" for anonymous function
  // tab to the function name, arguments, and function body

var x = function(x === 3) {
  //nonsense here
}


  //type "iife" for an immediately-invoked function expression
  //cursor will appear immediately in the body

(function() {
  // cursor appears here
}());
