const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
}

const player4 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
}

const player5 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result
    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`); 
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
    console.log(`🚗🚦🚦🚦 Rodada ${round} 🏁`);
        // sorteaR BLOCOS 
        let block = await getRandomBlock();
        console.log(`Bloco sorteado: ${block}`);
        //Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
        if (block === "RETA") {
            totalTestSkill1 = character1.VELOCIDADE + diceResult1;
            totalTestSkill2 = character2.VELOCIDADE + diceResult2;
            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }          
        if (block === "CURVA"){
            totalTestSkill1 = character1.MANOBRABILIDADE + diceResult1;
            totalTestSkill2 = character2.MANOBRABILIDADE + diceResult2;
            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;
        }
        // verificado o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou 1 ponto 🏁`);
            character1.PONTOS ++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.NOME} marcou 1 ponto 🏁`);
            character2.PONTOS ++;
        }
        console.log('-----------------------------------------------------------')
    }   
}

(async function main() {
    let dice = await rollDice();
    console.log(
        `🏁 🚨 Corrida entre ${player1.NOME} e ${player4.NOME} começando ... \n`
    );
    await playRaceEngine(player1, player4);
})(); // função auto invocada não precisa de chamar a função
// main();