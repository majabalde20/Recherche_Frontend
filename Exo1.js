// exo1
function calculerMoyenne(note1,note2,note3){
    return (note1+note2+note3)/3;
}

console.log(calculerMoyenne(14,15,16));
console.log(calculerMoyenne(16,17,18));

function estAdmis(moyenne){
    return (moyenne >= 10);
}
console.log(estAdmis(16));
console.log(estAdmis(10));
console.log(estAdmis(9.5));

function calculerPrixTTC(prixHT, tauxTVA=0.18){
    return prixHT*(1+tauxTVA);
}
console.log(calculerPrixTTC(10000));
console.log(calculerPrixTTC(10000,0.20));

const convertirEnMinutes = heures => heures * 60;
console.log(convertirEnMinutes(4));
convertirEnMinutes(convertirEnMinutes(0));
