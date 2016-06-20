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

    var newName = $("").val();
    var newAge = parseInt($("").val());
    var newSpecies = $("input[name=]:checked").val();
    var newGender = $("input[name=]:checked").val();
    var newColor = $("input:checkbox:checked").map(function () {
      return $(this).val()
    }).get()
    var newAnimal = new Animal(newName, newAge, newSpecies, newGender, newColor)

    $('#output').text(output);

  });
});
