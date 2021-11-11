// Chiedo all’utente il suo nome
const userFirstName = prompt('Inserisci il tuo nome');
console.log(userFirstName);


// Chiedo il suo cognome
const userLastName = prompt('Inserisci il tuo cognome');
console.log(userLastName);


// Chiedo il suo colore preferito
const userFavoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(userFavoriteColor);


// Genero la password
const userPassword = `${userFirstName}${userLastName}${userFavoriteColor}` + "21";
console.log(userPassword);


// La scrivo sulla pagina
document.getElementById('password').innerHTML = userPassword;
