// Business rules for animal adoption agency

var Animal = function(name, age, species, gender, color) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.gender = gender;
  this.color = color;
}

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
