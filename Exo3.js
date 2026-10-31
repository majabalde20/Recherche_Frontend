// exo 3
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = {
    nom: "Diop",
    filiere: "IAGE",
    niveau: "L2"
};

const tousLesEtudiants = [...groupeA, ...groupeB];
console.log(tousLesEtudiants);

const copieGroupeA = [...groupeA];
copieGroupeA.push("Cheikh");
console.log(copieGroupeA);
console.log(groupeA);

const etudiantComplet = {
    ...etudiantBase,
    age: 22,
    ville: "Dakar"
};

console.log(etudiantComplet);

const nouvelEtudiant = {
    ...etudiantBase,
    niveau: "L3"
};

console.log(nouvelEtudiant);
console.log(etudiantBase);

const coordonnees = {
    nom: "Balde",
    ville: "Dakar",
    telephone: "778009988"
};
const contact = {
    email: "Balde01@gmail.com",
    telephone: "778009988"
};

const profil = {
    ...coordonnees,
    ...contact
};
console.log(profil);
