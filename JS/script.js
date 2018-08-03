//console.log ("test");

//var nom = prompt ("Quel est ton nom?");
//alert("Bonjour" + nom);


//document.getElementById("banane").style.borderColor = "red";
//document.getElementById("pomme").style.borderColor = "red";
//document.getElementById("kiwi").style.borderColor = "red";

//var a = prompt ("Saisir le pseudo");
//var b = prompt ("Saisir MDP");

//if (a===b){
//    alert('Conexion réussie !');
//}
//else {
//alert('Erreur, veuillez recommencer');
//}
var resultat = document.getElementById('banane');
var jeu = prompt ("Choisisez un chiffre entre 1 et 4");
switch (jeu){
    case '1':
    document.getElementById('photo').style.display="block";
    break;

    case '2':
    resultat.innerHTML = "Fait chier !";
    break;
    
    case '3':
    resultat.innerHTML = "Encore !";
    break;
    
    case '4':
    resultat.innerHTML = "Brrrrrr !";
    break;

    default:
    resultat.innerHTML = "Pas compris !";
}
