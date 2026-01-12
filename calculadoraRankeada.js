function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    
    for (let i = 0; i < 1; i++) {

        switch (true) {
            case (vitorias <= 10):
                nivel = "Ferro";
                break;

            case (vitorias >= 11 && vitorias <= 20):
                nivel = "Bronze";
                break;

            case (vitorias >= 21 && vitorias <= 50):
                nivel = "Prata";
                break;

            case (vitorias >= 51 && vitorias <= 80):
                nivel = "Ouro";
                break;

            case (vitorias >= 81 && vitorias <= 90):
                nivel = "Diamante";
                break;

            case (vitorias >= 91 && vitorias <= 100):
                nivel = "Lendário";
                break;

            case (vitorias >= 101):
                nivel = "Imortal";
                break;
        }
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
