// exo2
const etudiant ={
    nom: "BALDE",
    prenom: "Mohamed",
    filiere: "GL",
    niveau: "L2"
 };
 const notes =[14,15,17,19,20];

const {nom,prenom,filiere}= etudiant;

console.log(nom);
console.log(prenom);
console.log(filiere);

const {niveau:classe}=etudiant;
console.log(classe);

const [premiereNote,deuxiemeNote, , , derniereNote] = notes;
console.log(premiereNote);
console.log(deuxiemeNote);
console.log(derniereNote);

const [premiere, , troisieme] = notes;
console.log(premiere);
console.log(troisieme);

const {email ="Non renseigné"} = etudiant;
console.log(email);

console.log(`je me nomme ${prenom} ${nom} , je fais la filiere de ${filiere} en ${classe}`);




