
/* Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande. Le programme s'éxecutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument du programe à son lancement, les messages suivant lui appaitront:

    si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
    si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
    si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert
*/

import readlineSync from 'readline-sync'
import chalk from 'chalk'

const majority = () => {

    let lastname = readlineSync.question('Votre nom: ')
    if (!isNaN(lastname)) {
        console.log(chalk.red('Veuillez vérifier cette information'))
        process.exit(1)
    }
    let firstname = readlineSync.question('Votre prénom: ')
    if (!isNaN(firstname)) {
        console.log(chalk.red('Veuillez vérifier cette information'))
        process.exit(1)
    }
    let age_str = readlineSync.question('Votre age: ')
    let age = Number(age_str)
    if (isNaN(age)) {
        console.log(chalk.red('Veuillez vérifier cette information'))
        process.exit(1)
    }

    if (age < 18) {
        console.log(
            `${firstname} ${lastname}, vous êtes mineur, vous ne pouvez pas voter`
        )
    } else {
        console.log(
            chalk.green(
                `${firstname} ${lastname}, vous êtes majeur, vous pouvez voter`
            )
        )
    }
}

majority()