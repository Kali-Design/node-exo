'use strict'
/* Un état vous demande d'ecrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter*/

import readlineSync from 'readlineSync'
import chalk from 'chalk'

//console.log('Pas la majorité')
while(true) {
    let name = readlineSync.question(`Votre nom :`)
    if (!isNaN(lastname)){
        console.log(chalk.red(`erreur: Pas la majorité`))
        process.exit(1)
    }
    let prenom = readlineSync.question(`Votre prénom`)
    f (!isNaN(firstname)){
        console.log(chalk.red(`erreur: Veuillez vérifier votre prénom`))
        process.exit(1)

    let age = readlineSync.question(`Votre age`)
    if(age < 18) {
        console.log(`${firstname} ${lastname}, vous êtes mineur, vous ne pouvez pas voter`)
    }
    else (nb > 18) {
        console.log(${firstname} ${lastname}, vous êtes majeur, vous pouvez voter)
        break
    }
}
console.log('Veuillez poursuivre votre inscription')