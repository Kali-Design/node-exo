'use strict'
/* Un état vous demande d'ecrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter*/

import readlineSync from 'readline-sync'
import chalk from 'chalk'

const findNumber = () => {
    let gameOver = false
    while (!gameOver) {
        let userNumber_str = readlineSync.question('Etez-vous en âge de voter : ')
        let userNumber = Number(userNumber_str)
        if (isNaN(userNumber)) {
            console.log(chalk.red('Veuillez vérifier cette information'))
        }

        if (userNumber > myNumber) {
            console.log(chalk.red('Nombre trop grand'))
        } else if (userNumber < myNumber) {
            console.log(chalk.red('Nombre trop petit'))
        } else {
            console.log(chalk.green('Bravo!'))
            gameOver = true
        }
    }
}

if (process.argv.length !== 3) {
    console.log(chalk.red('Usage: node guessNumber.js myNumber'))
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Veuillez verifier cette information`))
    process.exit(1)
}

let myNumber = process.argv[2]
findNumber()