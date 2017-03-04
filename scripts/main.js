/*
In this function, return an object with the properties:
- name (example value: 'Puggo')
- imageUrl (example value: 'https://s-media-cache-ak0.pinimg.com/originals/3b/f0/77/3bf0775b0d234545d14a5941be966ab2.jpg')
- type (example value: 'Pug')
- description (example value: 'Just a pug.')
*/
function createDogObject() {
  return {
    name: 'Puggo',
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/originals/3b/f0/77/3bf0775b0d234545d14a5941be966ab2.jpg',
    type: 'Pug',
    description: "I'm a pug."
  }
}

/*
In this function, taking an object as input (will be the same as the one
you returned in createDogObject()), update all the values with new values.
For example, you can update the the name of the object with:
obj.name = 'Corgo'
This changes the value of the name property to Corgo.
Do this for all the properties, and then return obj at the end.
*/
function updateDogObject(obj) {
  obj.name = 'Doggo';
  obj.type = 'Corgi';
  obj.description = "I'm a corgi!";
  obj.imageUrl = "http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg";
  return obj
}

/*
In this function, taking an object as input (will be the same as earlier),
add a function called updateDescription as a property of the object. This function
should return a string that accesses the name property of the object. 
Hint: you need to use the keyword `this` to access this property.
After adding the property, return the object.
*/
function addUpdateDescription(obj) {
  obj.updateDescription = function() {
    return 'My name is ' + this.name
  }
  return obj
}