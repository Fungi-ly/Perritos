const getDogPhoto = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random?';
  try {
  const response = await fetch(url);
  const photo = await response.json();
  console.log(photo.message);
  document.getElementById("espacioimagen").src=photo.message
  } catch (err) {
  console.log(err);   } }
let boton = document.getElementById("txt")
txt.addEventListener( 'click',  ()=>{getDogPhoto()}) 


