//object literal
var automobile = {
  engine: "V8",
  topSpeed: 187,
  run: function(){
    console.log("My name is Ford");
  }
};

// an example of delegation
var auto2 = Object.create(automobile);
auto2.engine = "V6";
auto2.name = "Camry";

//constructor function
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var james = new Person("James", "Cool");
