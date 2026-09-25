const prompt = require('prompt-sync')();

let T_candidat=[];

//=========================================ajouter  candidat

/*
let Candidat ={

    cin:"",
    nom:"",
    prenom:"",
    politiq:"",
    age:"",
    electeurs:[],

}
console.log("==================================================================================")
console.log("===================================== Entrer le Candidat=============================================")
console.log("==================================================================================")

Candidat.cin=prompt("entrer CIN de Candidat : ")
Candidat.nom=prompt("entre le Nom de Candidat : ")
Candidat.prenom=prompt("entre le prenom de Candidat : ")
Candidat.prenom=prompt("entrer la partie politique de Candidat:")
Candidat.age=Number(prompt("entrer l'age de Candidat: "))
Candidat.electeurs=prompt("entrer electeur de Candidat : ")

T_candidat.push(Candidat)
console.log("==================================================================================")
console.log("=====================================  le Candidat est =============================================")
console.log("==================================================================================")
console.log(T_candidat)

*/
// =================================Ajouter plusier Candidat====================
console.log("==================================================================================")
console.log("===================================== entrer plusieur Candidatsr =============================================")
console.log("==================================================================================")

let nombre =Number(prompt("Combien des personne tu veux ajoute : "))
for(let i=0;i<nombre;i++){


let Candidat ={

    cin:"",
    nom:"",
    prenom:"",
    politiq:"",
    age:"",
    electeurs:[],

}

Candidat.cin=prompt("entrer CIN de Candidat : ")
//Candidat.nom=prompt("entre le Nom de Candidat : ")
//Candidat.prenom=prompt("entre le prenom de Candidat : ")
Candidat.politiq=prompt("entrer la partie politique de Candidat:")
//Candidat.age=Number(prompt("entrer l'age de Candidat: "))
Candidat.electeurs=prompt("entrer electeur de Candidat : ")

T_candidat.push(Candidat)
}
console.log("==================================================================================")
console.log("===================================== les Candidats sont ============================================")
console.log("==================================================================================")

console.log(T_candidat)
//====================================================================================================
//===============================================Affichage===========================================
/*for(let i=0; i<T_candidat.length ;i++){

    console.log ("les candidat sont :")
    console.log(Candidat[i].cin)
    console.log(Candidat[i].nom)
    console.log(Candidat[i].prenom)
    console.log(Candidat[i].politiq)
    console.log(Candidat[i].age)
    console.log(Candidat[i].electeurs)


}*//*
//=================================================================================================
//=================================Trie============================================================
for (let i=0;i<T_candidat.length;i++){

    for (let j=i+1;j<T_candidat.length;j++){

        if(T_candidat[i].electeurs>T_candidat[j].electeurs){
            let reserve=T_candidat[i]
            T_candidat[i]=T_candidat[j]
            T_candidat[j]=reserve
        }


    }
}console.log("==================================================================================")
console.log("===================================== Le trie=============================================")
console.log("==================================================================================")

console.table(T_candidat)
*/
//=================================================================================================
//=================================filtrage ==========================================================
/*
let poli=prompt("la politique recherche ? ") 


let result =[]
    for (let i=0;i<T_candidat.length;i++){
    if(T_candidat[i].politiq===poli){
   
    result.push(T_candidat[i].politiq)
 
}
   


} console.log("==================================================================================")
    console.log("=====================================filtrage =============================================")
    console.log("==================================================================================")
    console.table(result)
*/
    console.log("==================================================================================")
    console.log("=====================================vote  =============================================")
    console.log("==================================================================================")

   let askCin = prompt("Entrer votre CIN : ");
let cin = false;

// Vérifier si l'électeur a déjà voté
for (let i = 0; i < T_candidat.length; i++) {

    for (let j = 0; j < T_candidat[i].electeurs.length; j++) {

        if (T_candidat[i].electeurs[j] === askCin) {
            cin = true;
            console.log("Tu as déjà voté");
            break;
        }
    

    if (cin === true) {
        break;
    }
}
}
// Si l'électeur n'a pas encore voté
if (cin === false) {

    let vote = prompt("Entrer CIN de candidat : ");
    let candidatExiste = false;

    for (let i = 0; i < T_candidat.length; i++) {

        if (T_candidat[i].cin === vote) {

            candidatExiste = true;

            T_candidat[i].electeurs.push(askCin);

            console.log("Vote enregistré");
            break;
        }
    }

    if (candidatExiste === false) {
        console.log("CIN du candidat introuvable");
    }
}

console.log(T_candidat); 

 
/////////////////////////////////////////////////Modification /////////////////////////
/*
let modify=prompt("entrer CIN de Candidat que veux modifie: ")
 for(let i=0;i<T_candidat.length;i++){
    if(T_candidat[i].cin===modify){

        let nv=prompt("nouveau partie politique ")

        T_candidat[i].politiq=nv
    }
 }console.log(T_candidat)

 ////////////////////////////////////////////Suppression 
 
 let supp =prompt("entrer CIN suppresion  :")
 for(let i=0; i<T_candidat.length ;i++){
 if(T_candidat[i].cin===supp){
    T_candidat.splice(i,1)
 }

 }console.log(T_candidat)
*/
 //Recherche
 let recherche=prompt("entrer nom a rechercher : ")
 for(let i=0; i<T_candidat.length; i++){

    if(T_candidat[i].cin===recherche){
        console.log(T_candidat[i])
    }else{
        console.log("introuvable")  }
 }

