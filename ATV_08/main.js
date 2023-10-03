let matrizQuadradaMagica = function () {
    console.log("Quantidade de Parâmetros: " + arguments.length);
  
    // Verificando se todos os parâmetros são números
    for (let i = arguments.length - 1; i >= 0; i--) {
      if (isNaN(arguments[i])) {
        console.log("O parâmetro de nº" + (i + 1) + " não é um número");
        return false;
      }
    }
  
    // Tirando a raiz quadrada da quantidade de termos para ver o número de linhas e colunas
    let calc = Math.sqrt(arguments.length);
  
    // Transformando a raiz em um número inteiro
    let calc2 = Math.round(calc);
  
    // Fazendo a comparação entre a raiz e o número inteiro tirado a partir dela
    if (calc !== calc2) {
      console.log(
        "Raiz Quadrada do tamanho da matriz: " + calc + " não é um número inteiro!! \nLogo a matriz não é quadrada."
      );
      return false;
    }
  
    console.log("Número de linhas e colunas: " + calc);
  
    // Transformando os parâmetros passados em uma matriz quadrada
    let matriz = [];
    let arr = [];
    let cont = 0;
    let cont2 = 0;
  
    for (let i = arguments.length - 1; i >= 0; i--) {
      if (cont < calc) {
        arr[cont] = arguments[i];
      }
  
      if (cont == calc - 1) {
        matriz[cont2] = arr.reverse();
        let arr = [];
        cont2++;
        cont = -1;
      }
  
      cont++;
    }
  
    console.log("Matriz: " + matriz.reverse().toString());
  
    // Fazendo a soma dos lados, colunas e diagonal principal
    let m = matriz;
    let somad = 0;
    let somad2 = 0;
    let somal = [];
    let somac = [];
    let retorno = 1;
  
    for (let i = 0; i < m.length; i++) {
      somad += m[i][i];
      somal[i] = 0;
      somac[i] = 0;
  
      for (let j = 0; j < m[0].length; j++) {
        somal[i] += m[i][j];
        somac[i] += m[j][i];
      }
  
      console.log("Soma da Linha nº" + (i + 1) + ": " + somal[i]);
      console.log("Soma da Coluna nº" + (i + 1) + ": " + somac[i]);
    }
  
    // Fazendo a soma da diagonal secundária
    for (let i = m.length - 1; i >= 0; i--) {
      somad2 += m[i][i];
    }
  
    console.log("Soma da Diagonal Principal: " + somad);
    console.log("Soma da Diagonal Secundária: " + somad2);
  
    // Verificando se as somas das diagonais são iguais
    if (somal[0] !== somad || somad !== somad2) {
      retorno = 0;
    }
  
    // Pegando o retorno para definir se é uma matriz quadrada ou não
    if (retorno) {
      return true;
    } else {
      return false;
    }
  };
  
 // Exemplos de chamada da função
  matrizQuadradaMagica(2, 7, 6, 9, 5, 1, 4, 3, 8);
  matrizQuadradaMagica(2, 3, 4, 9, 3, 1, 1, 3, 3);
  matrizQuadradaMagica(1, 1, 1, 1, 1, 1, 1, 1, 1);
  matrizQuadradaMagica(1, 7, 1, 3, 1, 56, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 3);
  