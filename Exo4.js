// exo 4
function additionner(...nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++){
        somme = somme + nombres[i];
    }
    return somme;
}
console.log(additionner(5,7));
console.log(additionner(10,17));
console.log(additionner(15,2,9));

function afficherPremierEtAutres(premier, ...autres){
    console.log("Premier argument : ",premier);
    console.log("Autres arguments :", autres);

}
afficherPremierEtAutres("Awa", "Moussa", "Fatou", "Ibra");

function creerFiche(nom, filiere, ...competences) {
    return {
        nom: nom,
        filiere: filiere,
        competences: competences
    };
}

console.log(creerFiche("Awa", "IAGE", "JavaScript", "Algo"));