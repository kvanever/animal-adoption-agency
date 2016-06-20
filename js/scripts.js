// Business rules for animal adoption agency

var Animal = function(name, age, species, gender, color, adopted) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.gender = gender;
  this.color = color;
  this.adopted = false;
}

Animal.prototype.adopt(adopted) {
  this.adopted = true;
  return this;
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
