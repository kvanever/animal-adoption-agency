// Business rules for animal adoption agency

var Animal = function(name, age, species, gender, color, adopted) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.gender = gender;
  this.color = color;
  this.adopted = false;
}

Animal.prototype.adopt=function(adopted) {
  this.adopted = true;
  return this;
}

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    debugger;
    var newName = $("#name").val();
    var newAge = parseInt($("#age").val());
    var newSpecies = $("input[name=species]:checked").val();
    var newGender = $("input[name=gender]:checked").val();
    var newColor = $("input[name=color]:checked").map(function () {
      return $(this).val()
    }).get()
    var newAnimal = new Animal(newName, newAge, newSpecies, newGender, newColor)

    $('#output').text(output);

  });
});
