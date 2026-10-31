// Exo 5

const etudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
};

function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant;

    return {
        prenom,
        nom,
        filiere
    };
}

console.log(extraireIdentite(etudiantL2));

function calculerMoyenneNotes(notes) {
    if (notes.length === 0) {
        return 0;
    }

    const somme = notes.reduce(
        (total, note) => total + note,
        0
    );

    return somme / notes.length;
}

console.log(calculerMoyenneNotes([13, 16, 12])); 
console.log(calculerMoyenneNotes([]));           


function ajouterNote(etudiant, nouvelleNote) {
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    };
}

const nouvelEtudiant = ajouterNote(etudiantL2, 18);

console.log("Original :", etudiantL2);
console.log("Nouvel étudiant :", nouvelEtudiant);

function creerResume(etudiant, ...options) {
    const identite = extraireIdentite(etudiant);
    const moyenne = calculerMoyenneNotes(etudiant.notes);

    return {
        identite,
        moyenne,
        options
    };
}

console.log(
    creerResume(etudiantL2, "Avec notes", "Format détaillé")
);


console.log(etudiantL2.notes); 
console.log(etudiantL2.notes.length === 3); 
