//testing the createDogObject function
var newDog = createDogObject();

if (newDog && typeof newDog === 'object') {
  renderDogObject(newDog)
}

function renderDogObject(obj) {
  var name = document.getElementById('name');
  name.textContent = obj.name

  var type = document.getElementById('type');
  type.textContent = obj.type

  var description = document.getElementById('description');
  description.textContent = obj.description

  var img = document.getElementById('img');
  img.src = obj.imageUrl
}

//testing the updateDogObject function
var updateButton = document.getElementById('update');

//when button gets clicked, update view
updateButton.addEventListener('click', function() {
  var updatedDog = updateDogObject(newDog);
  renderDogObject(updatedDog)
})

//testing the addUpdateDescription function
var updateDescriptionButton = document.getElementById('update-description');

updateDescriptionButton.addEventListener('click', function() {
  var updatedDog = updateDogObject(newDog);
  console.log('updatedDog', updatedDog)
  updatedDog2 = addUpdateDescription(updatedDog);
  console.log('updatedDog2', updatedDog2)
  var newDescription = updatedDog2.updateDescription();

  var description = document.getElementById('description');
  description.textContent = newDescription
})