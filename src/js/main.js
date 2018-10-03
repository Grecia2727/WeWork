// Conectanto ID del HTML con el JS
const registerVisitatorButton = document.getElementById('register-Visitator-Button');
const registerAdministratorButton = document.getElementById('register-Administrator-Button');
const registerVisited = document.getElementById('register-visited');
const registerAdmin = document.getElementById('register-admin');
const registerVisitor = document.getElementById('register-visitor');


// Botones al ingresar
const visitorButton = document.getElementById('visitor-Button');
const adminButton = document.getElementById('admin-Button');
const registerChoose = document.getElementById('register-choose');



// registerAdmin.classList.replace('block', 'none');
// registerVisitor.classList.replace('block', 'none');

// Boton como Visitante
// visitorButton.addEventListener('click', () => {
//   registerVisitor.classList.remove('none');
//   registerVisitor.classList.add('block');
//   registerAdmin.classList.replace('block', 'none');
// })

// boton como Administrador
// adminButton.addEventListener('click', () => {
//   registerAdmin.classList.remove('none');
//   registerAdmin.classList.add('block');
//   registerVisitor.classList.replace('block', 'none');
// })


// Registro del visitante
registerVisitatorButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const celular = document.getElementById('celular').value;
  const aQuienVisita = document.getElementById('workerInput').value;
  const company = document.getElementById('company').value;
  const photo = document.getElementById('snap').value;

  console.log(name.value);
  console.log(company);
  const data = firebase.database().ref().child('visitator');
  data.push({
    name: name,
    celular: celular,
    aQuienVisita: aQuienVisita,
    company: company,
    photo: photo,
  })
  // console.log(name);
  alert("Estimado visitante su Registro fue exitoso")
})

// Registro del Administrador
registerAdministratorButton.addEventListener('click', () => {
  const nameAdmin = document.getElementById('name-admin').value;
  const celularAdmin = document.getElementById('celular-admin').value;
  const emailAdmin = document.getElementById('email-admin').value;
  const passwordAdmin = document.getElementById('password-admin').value;
  console.log(nameAdmin, celularAdmin, emailAdmin, passwordAdmin);
  const data = firebase.database().ref().child('administrator');
  data.push({
    nameAdmin: nameAdmin,
    celularAdmin: celularAdmin,
    emailAdmin: emailAdmin,
    password: passwordAdmin
  })
  alert("Estimado colaborador su Registro fue exitoso")
})


// const imagen = () => {
//   return hidden_canvas.toDataURL('image/png');
//   const storageRef = firebase.storage().ref();
//   const mountainImagesRef = storageRef.child('image/png');
//   // const mountainImagesRef = storageRef.child('images/mountains.jpg');
// }
