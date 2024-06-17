/*
function main() {
    const vetor = [100, 90, 50, 70, 20, 110, 40, 30, 95, 25, 120, 1, 0, 4, 5, 9, 32, 8];
    
    console.log("Vetor desordenado: " + vetor);
    // console.table(vetor);
    
    ordenar(vetor);
    
    console.log("Vetor ordenado: " + vetor);
    // console.table(vetor);
}

function ordenar(vetor) {
    const passar = vetor.length;
    for (let i = 0; i < passar; i++) {
        for (let j = 0; j < passar - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
            }
        }
    }
}


main();


//busca linear

function buscaLinear(array, itemProcurado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === itemProcurado) {
            return i; // Retorna o índice onde o item foi encontrado
        }
    }
    return -1; // Retorna -1 se o item não for encontrado
}

// Exemplo de uso
const array1 = [10, 3, 5, 7, 49, 4, 72, 55, 20, 100, 1372];
const item1 = 72;
const resultado1 = buscaLinear(array1, item1);

console.log(resultado1 !== -1 ? `Item encontrado no índice ${resultado1}` : "Item não encontrado");

//busca binária
function buscaBinaria(array, itemProcurado) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);

        if (array[meio] === itemProcurado) {
            return meio; // Retorna o índice onde o item foi encontrado
        } else if (array[meio] < itemProcurado) {
            esquerda = meio + 1; // Continua a busca na metade direita
        } else {
            direita = meio - 1; // Continua a busca na metade esquerda
        }
    }

    return -1; // Retorna -1 se o item não for encontrado
}

// Exemplo de uso
const array2 = [0, 1, 3, 4, 5, 7, 8, 9, 10, 20, 25, 30, 32, 40, 50, 55, 70, 90, 95, 100, 110, 120, 1372];
const item2 = 55;
const resultado2 = buscaBinaria(array2, item2);

console.log(resultado2 !== -1 ? `Item encontrado no índice ${resultado2}` : "Item não encontrado");
*/

//! Lógica do algoritimo de ordem

document.addEventListener('DOMContentLoaded', () => {

document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();
    
    let numbers = document.getElementById('ordenar').value.split(',').map(function(item) {
        return parseInt(item);
    });

    let percorrer = numbers.length;
    for (let i = 0; i < percorrer; i++) {

        for (let j = 0; j < percorrer - i; j++) {

            if (numbers[j] < numbers[j - 1]) {

                const troca = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = troca;
            }
        }
    }
    
    document.getElementById('saida_order').value = numbers.join(', ');
    
    // console.log('senhor, pq não funciona?')
});

//* Lógica do algoritimo de busca

document.getElementById('button').addEventListener('click', function() {
    let numeroBusca = parseInt(document.getElementById('name').value);
    let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    if (numeros.includes(numeroBusca)) {
        document.getElementById('saida_busca').value = 'O número ' + numeroBusca + ' está presente na lista.';
    } else {
        document.getElementById('saida_busca').value = 'O número ' + numeroBusca + ' não está presente na lista.';
    }
});


});


























