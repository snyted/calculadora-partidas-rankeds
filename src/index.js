let nivel = null;
let saldoVitorias;

quantVitoriaDerrota(50, 65);
console.log('O Herói tem de saldo de ' + saldoVitorias + ' vitórias, e está no nível de ' + nivel + '.');

function quantVitoriaDerrota(vitoria, derrota) {
    saldoVitorias = vitoria - derrota;
    if(saldoVitorias >= 0 && saldoVitorias <= 10 ){
        nivel = 'Ferro';
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = 'Bronze';
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = 'Prata';
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = 'Ouro';
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = 'Diamante';
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = 'Lendário';
    }else if(saldoVitorias > 100){
        nivel = 'Imortal';
    }else {
        console.log('Saldo de vitórias invalidado ou incorreto. Procure mais informações no site oficial do jogo.')
        nivel = '[Erro no Sistema]'
    }      
    return saldoVitorias;
}  