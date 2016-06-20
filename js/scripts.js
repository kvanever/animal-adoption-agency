// Business rules for animal adoption agency

var Animal = function(name, age, species, gender, color, adopted) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.gender = gender;
  this.color = color;
  this.adopted = false;
}

Animal.prototype.adopt = function(adopted) {
  this.adopted = true;
  return this;
}

var findAnimal = function (animalId) {

}

// Calls input from form-input.html

function images(images){
  $(".col-md-6").text(newAnimal.name);
  $("div#images").empty();
  if (species==="cat"){
    $('div#images').append("<img class='animal-species' src=''/>")
  } else if (species==="dog"){
    $('div#images').append("img class='' src='' />")

  }else if (species==="frog"){
    $('div#images').append("img class='' src='' />")

  }else if (species==="snake"){
    $('div#images').append("img class='' src='' />")
  }
}
    $(document).ready(function(){

      $("#input").submit(function(event){
        event.preventDefault();
        var newName = $("#name").val();
        var newAge = parseInt($("#age").val());
        var newSpecies = $("input[name=species]:checked").val();
        var newGender = $("input[name=gender]:checked").val();
        var newColor = $("input[name=color]:checked").map(function () {
          return $(this).val()
        }).get()
        var newAnimal = new Animal(newName, newAge, newSpecies, newGender, newColor);
        $('#animal-listing').append("<div>" +
        "<h3 class='animal-name' id='" + newAnimal.name + "'>" + newAnimal.name + "</h3>" +
        "<ul class='animal-listing'>" +
        "<li id='" + newAnimal.species + "'>" + newAnimal.species + "</li>" +
        "<li id='" + newAnimal.gender + "'>" + newAnimal.gender + "</li>" +
        "</ul>" + "</div>");
      });

      $(document).on('click', "h3.animal-name", function() {
        var animalId = $(this).attr("id");
        findAnimal(animalId);
      });
});
