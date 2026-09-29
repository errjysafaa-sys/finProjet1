const prompt = require("prompt-sync")();

//clr
const couleurs = {
    reset: "\x1b[0m",
    rouge: "\x1b[31m",
    vert: "\x1b[32m",
    jaune: "\x1b[33m",
    bleu: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    gras: "\x1b[1m"
};


function colorer(texte, code) { return code + texte + couleurs.reset}

let T_candidat = [];
T_candidat.push(
    {
        cin: "AB123456",
        nom: "Alaoui",
        prenom: "Sara",
        PartiPolitique: "PAM",
        age: 35,
        electeurs: ["V1001", "V1002", "V1003"]
    },
    {
        cin: "CD234567",
        nom: "Amrani",
        prenom: "Youssef",
        PartiPolitique: "Istiqlal",
        age: 42,
        electeurs: ["V1004", "V1005"]
    },
    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Salma",
        PartiPolitique: "RNI",
        age: 31,
        electeurs: ["V1006", "V1007", "V1008", "V1009"]
    },
    {
        cin: "GH456789",
        nom: "El Idrissi",
        prenom: "Omar",
        PartiPolitique: "PJD",
        age: 48,
        electeurs: ["V1010"]
    },
    {
        cin: "IJ567890",
        nom: "Fassi",
        prenom: "Imane",
        PartiPolitique: "USFP",
        age: 29,
        electeurs: ["V1011", "V1012", "V1013"]
    },
    {
        cin: "KL678901",
        nom: "Chraibi",
        prenom: "Hamza",
        PartiPolitique: "PAM",
        age: 39,
        electeurs: ["V1014", "V1015", "V1016", "V1017", "V1018"]
    },
    {
        cin: "MN789012",
        nom: "Berrada",
        prenom: "Nour",
        PartiPolitique: "RNI",
        age: 34,
        electeurs: ["V1019", "V1020"]
    },
    {
        cin: "OP890123",
        nom: "Tahiri",
        prenom: "Anas",
        PartiPolitique: "Istiqlal",
        age: 45,
        electeurs: ["V1021", "V1022", "V1023", "V1024"]
    },
    {
        cin: "QR901234",
        nom: "Mansouri",
        prenom: "Aya",
        PartiPolitique: "Independant",
        age: 27,
        electeurs: ["V1025", "V1026"]
    },
    {
        cin: "ST012345",
        nom: "Ouazzani",
        prenom: "Mehdi",
        PartiPolitique: "USFP",
        age: 51,
        electeurs: ["V1027", "V1028", "V1029", "V1030", "V1031", "V1032"]
    },
    {
        cin: "UV123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        PartiPolitique: "Independant",
        age: 40,
        electeurs: []
    }

);
function AddCandidat() {
    console.log(couleurs.jaune + "                  -----------------------------                 " + couleurs.reset);
    console.log(couleurs.jaune +"                         Ajouter un Candidat " + couleurs.reset);
    console.log(couleurs.jaune + "                  -----------------------------                 " + couleurs.reset);

    let Candidat = {
        cin: "",
        nom: "",
        prenom: "",
        PartiPolitique: "",
        age: "",
        electeurs: []

    };
    Candidat.cin = prompt("Entrer CIN du candidat : ");
    let existe = false;

    for (let i = 0; i < T_candidat.length; i++) {
        if (T_candidat[i].cin === Candidat.cin) {
            existe = true;

        }
    }


    if (existe === true) {
        console.log(couleurs.rouge + "Ce candidat existe déjà !" + couleurs.reset );

    } else {
        Candidat.nom = prompt("Entrer le nom du candidat : ");
        Candidat.prenom = prompt("Entrer le prénom du candidat : ");
        Candidat.PartiPolitique = prompt("Entrer le parti politique : ");
        Candidat.age = Number(prompt("Entrer l'âge : "));
        T_candidat.push(Candidat);
          console.log( couleurs.vert + "Candidat ajouté avec succès !" + couleurs.reset );
    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                         Liste des Candidats " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.table(T_candidat);
}

//Add Candidat

function AddPlusieursCandidats() {

    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune +"                         Ajouter des Candidats " + couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));
    for (let i = 0; i < nombre; i++) {
        console.log(couleurs.cyan + "Candidat " + (i + 1) +couleurs.reset);

        let Candidat = {
            cin: "",
            nom: "",
            prenom: "",
            PartiPolitique: "",
            age: "",
            electeurs: []

        };
        Candidat.cin =prompt("Entrer CIN du candidat : ");

        let existe = false;
        for (let j = 0; j < T_candidat.length; j++) {
            if (T_candidat[j].cin === Candidat.cin) {
                existe = true;
            }
        }
        if (existe === true) {
            console.log(couleurs.rouge + "Ce candidat existe déjà !" + couleurs.reset );

        } else {
            Candidat.nom =prompt("Entrer le nom du candidat : ");
            Candidat.prenom =prompt("Entrer le prénom du candidat : ");
            Candidat.PartiPolitique =prompt("Entrer le parti politique du candidat : ");
            Candidat.age =Number(prompt("Entrer l'âge du candidat : "));
            T_candidat.push(Candidat);
              console.log(couleurs.vert + "Candidat ajouté avec succès !" +couleurs.reset );
        }
    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan + couleurs.gras + "                         Liste des Candidats " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.table(T_candidat);
}

//Affichage
function afficherCandidats() {
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune +"                         Affichage des Candidats  " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);

    for (let i = 0; i < T_candidat.length; i++) {
        console.log( couleurs.bleu + "Candidat " + (i + 1) + couleurs.reset );
        console.log( "CIN : " + T_candidat[i].cin);
        console.log("Nom : " + T_candidat[i].nom);
        console.log("Prénom : " + T_candidat[i].prenom);
        console.log("Parti politique : " +T_candidat[i].PartiPolitique );
        console.log("Âge : " + T_candidat[i].age);
        console.log("Nombre de votes : " +T_candidat[i].electeurs.length);
        console.log("------------------------------------");

    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan + couleurs.gras +"                         Tableau Complet  " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.table(T_candidat);
}

//Trie par Vt

function affN_Votes() {

    for (let i = 0; i < T_candidat.length; i++) {
        for (let j = i + 1; j < T_candidat.length; j++) {
            if (T_candidat[i].electeurs.length <T_candidat[j].electeurs.length ) {
                let reserve = T_candidat[i];
                T_candidat[i] = T_candidat[j];
                T_candidat[j] = reserve;

            }
        }
    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                         Tri par Votes  " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.table(T_candidat);
}
//Filtre Tri
function afficherPolitique() {
    let poli =prompt("Entrer le parti politique à rechercher : ");
    let result = [];

    for (let i = 0; i < T_candidat.length; i++) {
        if (T_candidat[i].PartiPolitique === poli ) {
            result.push(T_candidat[i]);
        }
    }

    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune +"                         Affichage  " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);

    if (result.length === 0) {
        console.log(couleurs.rouge +"Parti politique introuvable" +couleurs.reset);

    } else {
        console.log( couleurs.vert + "Candidats du parti " +poli + couleurs.reset );
        console.table(result);
    }
}
//Vote
function voter() {
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras + "                              Vote  " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);

    let askCin = prompt("Entrer votre CIN : ");
    let dejaVote = false;
    for (let i = 0; i < T_candidat.length; i++) {
        for (let j = 0; j < T_candidat[i].electeurs.length;j++ ) {
            if ( T_candidat[i].electeurs[j] === askCin ) {
                dejaVote = true;
                break;
            }
        }
       if (dejaVote === true) {
            break;
        }
    }
    if (dejaVote === true) {
        console.log(couleurs.rouge +"Tu as déjà voté !" +couleurs.reset );
    }else {
         let vote = prompt( "Entrer le CIN du candidat pour lequel vous voulez voter : " );
        let candidatExiste = false;
        for (let i = 0; i < T_candidat.length; i++) {
            if (T_candidat[i].cin === vote) {
                candidatExiste = true;
                T_candidat[i].electeurs.push(askCin);
                console.log(couleurs.vert +"Vote enregistré avec succès !" + couleurs.reset );
                break;
            }
        }
        if (candidatExiste === false) {
            console.log(couleurs.rouge +"CIN du candidat introuvable." +couleurs.reset);
        }
    }
}

//Reslt VT
function afficherResultatVote() {

    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras + "                         Resultat de Vote  " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    for (let i = 0; i < T_candidat.length; i++) {
        console.log(T_candidat[i].nom + " " + T_candidat[i].prenom +" : " +T_candidat[i].electeurs.length +" vote(s)");

    }

}

//Modifz

function MCandidat() {
    let modify = prompt("Entrer le CIN du candidat à modifier : ");
    let candidatExiste = false;
    for (let i = 0; i < T_candidat.length; i++) {
        if (T_candidat[i].cin === modify) {
            candidatExiste = true;
            let choix =parseFloat( prompt("Voulez-vous modifier : 1. Parti Politique ou 2. Age ? "));
                        if (choix === 1) {
                T_candidat[i].PartiPolitique = prompt("Entrer le nouveau Parti Politique : ");
                console.log(couleurs.vert +"Parti politique modifié avec succès !" +couleurs.reset);

            } else if (choix === 2) {
                 T_candidat[i].age = Number(prompt("Entrer le nouvel âge : "));
                console.log(couleurs.vert +"Âge modifié avec succès !" + couleurs.reset );
            }else {
                console.log(couleurs.rouge +"Choix invalide !" +  couleurs.reset);
            }
            break;

        }

    }


    if (candidatExiste === false) {
        console.log(couleurs.rouge + "Candidat introuvable." + couleurs.reset );
    }
}
//Suppressiom
function supprimerTableau(arr, i) {
    for (let j = i; j < arr.length - 1; j++) { 
        arr[j] = arr[j + 1];
    }
    arr.length -= 1;
    return arr;
}


function SCandidat() {
    let supp = prompt("Entrer le CIN du candidat à supprimer : ");
    let candidatExiste = false;
    for (let i = 0; i < T_candidat.length; i++) {
        if (T_candidat[i].cin === supp) {
            candidatExiste = true;
            supprimerTableau(T_candidat, i);
            console.log(couleurs.vert +"Candidat supprimé avec succès !" + couleurs.reset );
            break;
        }
    }
    if (candidatExiste === false) {
        console.log(couleurs.rouge +"Candidat introuvable." + couleurs.reset
        );
    }
}
//Recherche
function RCandidat() {
    let recherche = prompt("Entrer le nom du candidat à rechercher : ");
    let CanExist = false;
    for (let i = 0; i < T_candidat.length; i++) {
        if (T_candidat[i].nom === recherche) {
            console.log(couleurs.vert +"Candidat trouvé :" +couleurs.reset );
            console.log(  "CIN : " + T_candidat[i].cin );
            console.log("Nom : " + T_candidat[i].nom);
            console.log("Prénom : " + T_candidat[i].prenom );
            console.log("Parti : " +T_candidat[i].PartiPolitique );
            console.log( "Âge : " + T_candidat[i].age);
            console.log("Nombre de votes : " +T_candidat[i].electeurs.length);
            CanExist = true;
            break;
        }
    }
    if (CanExist === false) {
        console.log(couleurs.rouge + "Candidat introuvable." +  couleurs.reset );

    }

}

//statique 1
function statistiques() {
    let Tcan = 0;
    for (let i = 0; i < T_candidat.length; i++) {
        Tcan++;
    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune + "                    Nombre Total de Candidats  " + couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log("Nombre total de candidats : " +Tcan +" Candidats");

}

//T de Vote

function TotalV() {
    let total = 0;
    for (let i = 0; i < T_candidat.length; i++) {
        total =total + T_candidat[i].electeurs.length;

    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log( couleurs.jaune +"                                     Nombre Total de Vote  " + couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log("Nombre total de votes est : " + total+" Votes");

}

//3Top
function Top() {
    for (let i = 0; i < T_candidat.length; i++) {
        for ( let j = i + 1; j < T_candidat.length; j++ ) {
            if ( T_candidat[i].electeurs.length < T_candidat[j].electeurs.length ) {
                let reserve = T_candidat[i];
                T_candidat[i] = T_candidat[j];
                T_candidat[j] = reserve;

            }

        }

    }

    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.cyan +couleurs.gras + "                         TOP 3 CANDIDATS  " + couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);

    if (T_candidat.length >= 1) {
        console.log(couleurs.vert +"1er : " +T_candidat[0].nom + " " + T_candidat[0].prenom +  " - " + T_candidat[0].electeurs.length + " votes" + couleurs.reset );
    }
    if (T_candidat.length >= 2) {
        console.log( couleurs.vert +     "2ème : " + T_candidat[1].nom +" " + T_candidat[1].prenom + " - " + T_candidat[1].electeurs.length + " votes" +  couleurs.reset);
    }
    if (T_candidat.length >= 3) {
        console.log( couleurs.vert + "3ème : " + T_candidat[2].nom + " " + T_candidat[2].prenom + " - " + T_candidat[2].electeurs.length +" votes" + couleurs.reset );
    }

}

function politique() {

    let poli = prompt("Entrer le parti politique à rechercher : ");
    let nombre = 0;
    for (let i = 0; i < T_candidat.length; i++) {
        if ( T_candidat[i].PartiPolitique === poli) {
            nombre++;
        }
    }
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune + "                              Le Nombre de Candidats par Parti Politique    " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);


    if (nombre === 0) {
        console.log(couleurs.rouge + "Parti politique introuvable." +  couleurs.reset );
    }else {
        console.log("Nombre de candidats du parti " + poli + " : " +nombre );
    }
}

let choix;
do {

    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);
    console.log(couleurs.jaune +"                      GESTION DE L'ÉLECTION  " +couleurs.reset );
    console.log(couleurs.cyan +couleurs.gras +"                  ...............................                " +couleurs.reset);



    console.log("1. Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats");
    console.log("3. Afficher les candidats");
    console.log("4. Trier par nombre de votes");
    console.log("5. Filtrer par parti politique");
    console.log("6. Voter pour un candidat");
    console.log("7. Modifier un candidat");
    console.log("8. Supprimer un candidat");
    console.log("9. Rechercher par nom");
    console.log("10. Nombre Total de Candidats");
    console.log("11. Nombre total de votes");
    console.log("12. Top 3 des candidats");
    console.log("13. Nombre de candidats par parti Politique");
    console.log(couleurs.rouge +"0. Quitter" +couleurs.reset);


    choix =parseInt( prompt( couleurs.cyan + couleurs.gras +"Votre choix : " + couleurs.reset ));


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
            console.log(couleurs.cyan +couleurs.gras +"Au revoir !" + couleurs.reset );
            break;

        default:
            console.log( couleurs.rouge +"Choix invalide !" + couleurs.reset );

    }
} while (choix !== 0);