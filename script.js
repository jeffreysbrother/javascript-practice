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






// some fiddle faddle here just for testing purposes
