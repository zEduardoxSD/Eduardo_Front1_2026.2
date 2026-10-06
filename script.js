function soma(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total;
}


function media(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total / numeros.length;
}


function menorElemento(numeros) {
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return menor;
}


function segundoMaior(numeros) {
    let maior = numeros[0];
    let segundo = numeros[1];

    if (segundo > maior) {
        let temp = maior;
        maior = segundo;
        segundo = temp;
    }

    for (let i = 2; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            segundo = maior;
            maior = numeros[i];
        } else if (numeros[i] > segundo) {
            segundo = numeros[i];
        }
    }

    return segundo;
}


function filtrarImpares(numeros) {
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {
            impares.push(numeros[i]);
        }
    }

    return impares;
}


function inverso(numeros) {
    let resultado = [];

    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado.push(numeros[i]);
    }

    return resultado;
}


function histograma(numeros) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let faixa4 = 0;
    let faixa5 = 0;

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] >= 1 && numeros[i] <= 20) {
            faixa1++;
        } else if (numeros[i] <= 40) {
            faixa2++;
        } else if (numeros[i] <= 60) {
            faixa3++;
        } else if (numeros[i] <= 80) {
            faixa4++;
        } else if (numeros[i] <= 100) {
            faixa5++;
        }
    }

    console.log("[01, 20]: " + "*".repeat(faixa1));
    console.log("[21, 40]: " + "*".repeat(faixa2));
    console.log("[41, 60]: " + "*".repeat(faixa3));
    console.log("[61, 80]: " + "*".repeat(faixa4));
    console.log("[81, 100]: " + "*".repeat(faixa5));
}


function verificarNome(nomes) {
    let nome = prompt("Digite um nome:");

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] == nome) {
            return true;
        }
    }

    return false;
}


function compararArrays(array1, array2) {

    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}


function remover(array, indice) {
    array.splice(indice, 1);

    return array;
}


function palindromo(texto) {
    let invertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        invertido = invertido + texto[i];
    }

    return texto === invertido;
}


function intercalar(array1, array2) {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i]);
        resultado.push(array2[i]);
    }

    return resultado;
}


function compactar(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {

        if (i == 0 || array[i] != array[i - 1]) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}