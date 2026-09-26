
const prompt = require("prompt-sync")();


let T_candidat = [];
/*
let candidat = { 
cin : "AB123456", 
nom : "Boushaba", 
prenom : "Soufiane", 
partiPolitique : "Indépendant", 
age: 40, 
electeurs: [] 
}; */

// Add Candidzt
function AddCandidat(){
let Candidat = {
    cin: "",
    nom: "",
    prenom: "",
    politiq: "",
    age: "",
    electeurs: []
};
// Candidat deja Inscrit 
Candidat.cin = prompt("Entrer CIN du candidat : ");

let exist = false;

for (let i = 0; i < T_candidat.length; i++) {
    if (T_candidat[i].cin === Candidat.cin) {
        exist = true;
    }
}

if (exist === true) {

    console.log("Ce candidat existe déjà !");

} else {

    Candidat.nom = prompt("Entrer le nom du candidat : ");
    Candidat.prenom = prompt("Entrer le prénom du candidat : ");
    Candidat.politiq = prompt("Entrer le parti politique : ");
    Candidat.age = Number(prompt("Entrer l'âge : "));

    T_candidat.push(Candidat);

    console.log("Candidat ajouté avec succès !");
}

// Vérifier si le CIN existe déjà
let existe = false;

for (let i = 0; i < T_candidat.length; i++) {
    if (T_candidat[i].cin === Candidat.cin) {
        existe = true;
    }
}

if (existe === true) {
    console.log("Ce candidat existe déjà !");
} else {

    T_candidat.push(Candidat);
    console.log("Candidat ajouté avec succès !");
}


console.log("==================================================================================");
console.log("                         Le Candidat est");

console.log(T_candidat);
}
//Add+ Candidat
function AddPlusieursCandidats() {
console.log("==================================================================================");
console.log("                         Ajoutes des Candidats");

let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

for (let i = 0; i < nombre; i++) {
    console.log("Candidat " + (i + 1) );
    let Candidat = {
        cin: "",
        nom: "",
        prenom: "",
        politiq: "",
        age: "",
        electeurs: []
    };

    Candidat.cin = prompt("Entrer CIN du candidat : ");

    // Vérifier si le CIN existe déjà
    let existe = false;

    for (let j = 0; j < T_candidat.length; j++) {
        if (T_candidat[j].cin === Candidat.cin) {
            existe = true;
        }
    }

    if (existe === true) {

        console.log("Ce candidat existe déjà !");

    } else {

        Candidat.nom = prompt("Entrer le nom du candidat : ");
        Candidat.prenom = prompt("Entrer le prénom du candidat : ");
        Candidat.politiq = prompt("Entrer le parti politique du candidat : ");
        Candidat.age = Number(prompt("Entrer l'âge du candidat : "));


        T_candidat.push(Candidat);

        console.log("Candidat ajouté avec succès !");
    }
}

console.log("====================================================");
console.log("             Liste des Candidars");

console.table(T_candidat);

}
// Affichage
function afficherCandidats() {

console.log("====================================================");
console.log("             Affichade des candidat");

for (let i = 0; i < T_candidat.length; i++) {

    console.log("Candidat " + (i + 1));
    console.log("CIN : " + T_candidat[i].cin);
    console.log("Nom : " + T_candidat[i].nom);
    console.log("Prénom : " + T_candidat[i].prenom);
    console.log("Parti politique : " + T_candidat[i].politiq);
    console.log("Âge : " + T_candidat[i].age);
    console.log("Nombre de votes : " + T_candidat[i].electeurs.length);
}

console.log("Tableau complet :");
console.table(T_candidat);

}
// trie
function affN_Votes() {
for (let i = 0; i < T_candidat.length; i++) {
    for (let j = i + 1; j < T_candidat.length; j++) {
        if ( T_candidat[i].electeurs.length > T_candidat[j].electeurs.length ) {

            let reserve = T_candidat[i];
            T_candidat[i] = T_candidat[j];
            T_candidat[j] = reserve;
        }
    }
}

console.log("====================================================");
console.log("              Trie par Vote");


console.table(T_candidat);
}




// 4. filt polit


function afficherPolitique() {
let poli = prompt("Entrer le parti politique à rechercher : ");
let result = [];
for (let i = 0; i < T_candidat.length; i++) {
    if (T_candidat[i].politiq === poli) {

        result.push(T_candidat[i]);
    }
}

console.log("====================================================");
console.log("              Filtrage");

if (result.length === 0) {

    console.log("Politique introuvable");
} else {

    console.log("Candidats du parti " + poli);
    console.table(result);
}

}
// vote

function voter() {

console.log("====================================================");
console.log("                    Vote");

let askCin = prompt("Entrer votre CIN : ");

let dejaVote = false;


// Vérifier si l'électeur a déjà voté
for (let i = 0; i < T_candidat.length; i++) {

    for (let j = 0; j < T_candidat[i].electeurs.length; j++) {

        if (T_candidat[i].electeurs[j] === askCin) {

            dejaVote = true;
            break;
        }
    }

    if (dejaVote === true) {
        break;
    }
}


// Si l'électeur a déjà voté
if (dejaVote === true) {

    console.log("Tu as déjà voté !");
}


// Si l'électeur n'a pas encore voté
else {

    let vote = prompt("Entrer le CIN du candidat pour lequel vous voulez voter : ");

    let candidatExiste = false;

    for (let i = 0; i < T_candidat.length; i++) {

        if (T_candidat[i].cin === vote) {
            candidatExiste = true;
            T_candidat[i].electeurs.push(askCin);
            console.log("Vote enregistré avec succès !");

            break;
        }
    }

    if (candidatExiste === false) {

        console.log("CIN du candidat introuvable.");
    }
}
}

// aff apr vote

console.log("====================================================");
console.log("              RESULTAT DES VOTES");

for (let i = 0; i < T_candidat.length; i++) {
    console.log( T_candidat[i].nom +" " +T_candidat[i].prenom +" : " +T_candidat[i].electeurs.length +" vote(s)" );
}

// modify cand


function MCandidat() {

let modify = prompt("Entrer le CIN du candidat à modifier : ");

for (let i = 0; i < T_candidat.length; i++) {
    if (T_candidat[i].cin === modify) {
        let choix =prompt("Vouler -vous modifier Parie Politique ou age ? ")
        if (choix === "Politique"){
            T_candidat[i].poli= prompt("Entrer le nouveau Politique : ")
        }
        else if(choix=== "age"){
            T_candidat[i].age= Number(prompt("Entrer le nouvel age : "))
        }else{
            console.log("choix invalide ")
        }
        
    }
    }
}
// suppression

function splice(arr, i) {
  for (i ; i < arr.length; i++) {
      arr[i] = arr[i + 1]

    }
   arr.length -= 1
    return (arr);
}


function SCandidat() {
    
let supp = prompt("Entrer le CIN du candidat à supprimer : ");
/*
let Tabp=[]


for (let i = 0; i < T_candidat.length; i++) {

    if (T_candidat[i].cin !== supp) {
       Tapb.push(T_candidat[i])
        console.log("Candidat supprimé avec succès !");

    
    }
}
T_candidat=Tabp*/

for (let i = 0; i < T_candidat.length; i++) {

    if (T_candidat[i].cin === supp) {

        let index= T_candidat[i].cin.length
        console.log ("bien supprimer ")
        splice(T_candidat,index)


    }}


}
// recherc

function RCandidat() {

let recherche = prompt("Entrer le CIN du candidat à rechercher : ");

let CanExist = false;

for (let i = 0; i < T_candidat.length; i++) {

    if (T_candidat[i].nom === recherche) {

        console.log("Candidat trouvé :");

        console.log("CIN : " + T_candidat[i].cin);
        console.log("Nom : " + T_candidat[i].nom);
        console.log("Prénom : " + T_candidat[i].prenom);
        console.log("Parti : " + T_candidat[i].politiq);
        console.log("Âge : " + T_candidat[i].age);
        console.log("Nombre de votes : " + T_candidat[i].electeurs.length);

        CanExist = true;

        break;
    }
}

if (CanExist === false) {

    console.log("Candidat introuvable.");
}
}

//  stat

function statistiques() {

let Tcan = 0;

for (let i = 0; i < T_candidat.length; i++) {

    Tcan++;
}

console.log("====================================================");
console.log("                 STATISTIQUE");

console.log("Nombre total de candidats : " + Tcan);

}
//=========================================================================================================
//================================================Statique 2=========================================================
//=========================================================================================================
function TotalV(){
let total=0
    
for (let i = 0; i < T_candidat.length; i++) {
    total=total+ T_candidat[i].electeurs.length

} 

console.log("====================================================");
console.log("                 Nombre Total de vote ");
console.log("Nombre total de vote est :"+total );
}

//============================================================================================================
//============================================================================================================
//============================================================================================================
function Top(){

    for (let i = 0; i < T_candidat.length; i++) {
    for (let j = i + 1; j < T_candidat.length; j++) {
        if ( T_candidat[i].electeurs.length < T_candidat[j].electeurs.length ) {

            let reserve = T_candidat[i];
            T_candidat[i] = T_candidat[j];
            T_candidat[j] = reserve;
        }
    }
}


        console.log("Le premier top est : "+T_candidat[0].cin)
        console.log("Le deuxieme top est : "+T_candidat[1].cin)
        console.log("Le dernier top est :"+T_candidat[2].cin)

}

function politique(){

let poli = prompt("Entrer le parti politique à rechercher : ");
let result = [];
let sm=0
for (let i = 0; i < T_candidat.length; i++) {
    if (T_candidat[i].politiq === poli) {

        result.push(T_candidat[i]);
        sm=sm+T_candidat[i].politiq.length
    }
       

}

console.log("====================================================");
console.log("              Politique"); 
console.log("nombre de  "+ poli+" est "+sm)


if (result.length === 0) {

    console.log("Politique introuvable");
} else {

    console.log("Candidats du parti " + poli);

    console.table(result);

}
}





let choix;

do {

    console.log("================================");
    console.log("     GESTION DE L'ÉLECTION");

    console.log("1.Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats");
    console.log("3. Afficher les candidats");
    console.log("4. Trier par nombre de votes");
    console.log("5. Filtrer par parti politique");
    console.log("6. Voter pour un candidat");
    console.log("7. Modifier un candidat");
    console.log("8. Supprimer un candidat");
    console.log("9. Rechercher par nom");
    console.log("10. Statistiques");
    console.log("11. Statistique Total")
    console.log("12. 3 Top des candidats")
    console.log("13. Nombre de candidat ")
    console.log("0. Quitter");

    choix = parseInt(prompt("Votre choix : "));

    switch (choix) {

        case 1:
            AddCandidat();
            break;

        case 2:
            AddPlusieursCandidats();
            break;

        case 3:
            afficherCandidats();
            break;

        case 4:
            affN_Votes();
            break;

        case 5:
            afficherPolitique();
            break;

        case 6:
            voter();
            break;

        case 7:
            MCandidat();
            break;

        case 8:
            SCandidat();
            break;

        case 9:
            RCandidat();
            break;

        case 10:
            statistiques();
            break;

        case 11:
            TotalV();
            break;


        case 12:
            Top();
            break;

        case 13:
            politique();
            break;

        case 0:
            console.log("Au revoir !");
            break;

        default:
            console.log("Choix invalide !");
    }

} while (choix !== 0);



// ============================================================
// OUTILS DE STYLE POUR LE TERMINAL
// ============================================================

// 1. Un dictionnaire des codes d'échappement ANSI
// Ces codes indiquent au terminal de changer la couleur du texte.
const couleurs = {
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};

// 2. La fonction d'aide (Helper function)
// Elle prend votre texte, ajoute la couleur au début, 
// et ajoute le code "reset" à la fin pour ne pas colorer la suite.
function colorer(texte, code) {
  return code + texte + couleurs.reset;
}

// ============================================================
// EXEMPLES D'UTILISATION
// ============================================================

// Exemple A : Couleur simple
console.log(colorer("Opération réussie !", couleurs.vert));
console.log(colorer("Fichier introuvable.", couleurs.rouge));
console.log(colorer("Menu Principal", couleurs.jaune));

// Exemple B : Combiner des styles (Couleur + Gras)
// Vous pouvez additionner les codes avec le signe "+"
console.log(colorer("TITRE IMPORTANT", couleurs.cyan + couleurs.gras));

// Exemple C : Mélanger du texte normal et du texte coloré dans une phrase
const nom = "Alice";
const score = 95;
console.log(
  "Le joueur " + 
  colorer(nom, couleurs.bleu) + 
  " a obtenu " + 
  colorer(score + " points", couleurs.magenta + couleurs.gras) + 
  " !"
);
