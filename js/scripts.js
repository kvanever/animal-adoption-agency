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
  for (i=0; i <= animalArray.length; i++) {
    if (animalArray[i].name === animalId)
      return animalArray[i];
  }
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Calls input from form-input.html
var animalArray = [];

// function images(images){
//   $(".col-md-6").text(newAnimal.name);
//   $("div#images").empty();
//   if (species==="cat"){
//     $('div#images').append("<img class='animal-species' src=''/>")
//   } else if (species==="dog"){
//     $('div#images').append("img class='' src='' />")
//
//   }else if (species==="frog"){
//     $('div#images').append("img class='' src='' />")
//
//   }else if (species==="snake"){
//     $('div#images').append("img class='' src='' />")
//   }
// }
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
        animalArray.push(newAnimal);
        $('#animal-listing').append("<div>" +
        "<h3 class='animal-name' id='" + newAnimal.name + "'>" + newAnimal.name + "</h3>" +
        "<ul class='animal-listing'>" +
        "<li id='" + newAnimal.species + "'>Species: " + newAnimal.species.capitalizeFirstLetter() + "</li>" +
        "<li id='" + newAnimal.gender + "'>Gender: " + newAnimal.gender.capitalizeFirstLetter() + "</li>" +
        "</ul>" + "</div>");
      });

      $(document).on('click', "h3.animal-name", function() {
        var animalId = $(this).attr("id");
        var animalDetails = findAnimal(animalId);
        $("h3.name").text(animalDetails.name.capitalizeFirstLetter());
        $("li.species").text(animalDetails.species.capitalizeFirstLetter());
        $("li.age").text(animalDetails.age);
        $("li.gender").text(animalDetails.gender.capitalizeFirstLetter());
        $("li.color").text(animalDetails.color.join(" ").capitalizeFirstLetter());
        $("#details").show();
      });
});
