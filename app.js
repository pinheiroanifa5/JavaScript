
const valorInicial=0;

let resultadoAtual=0;

resultadoAtual=valorInicial;
let descricaoCalculo='';
function buscarValor(){
    return parseInt(userInput.value);
}
//let descricaoCalculo='(${resultadoAtual}+10)*2/2-1';
function adicionar(){
    const valorDigitado=buscarValor();
    descricaoCalculo= `${resultadoAtual} + ${valorDigitado}` ;
    resultadoAtual=resultadoAtual+valorDigitado;
    outputResult(resultadoAtual,descricaoCalculo);
    Registoentradas.push(valorDigitado);
    //outputResult(resultadoAtual,descricaoCalculo);
}
function subtrair(){
    const valorDigitado=buscarValor();
    descricaoCalculo= `${resultadoAtual} - ${valorDigitado}` ;
    resultadoAtual=resultadoAtual-valorDigitado;
    outputResult(resultadoAtual,descricaoCalculo);
    Registoentradas.push(valorDigitado);

}
function multipicar(){
    const valorDigitado=buscarValor();
    descricaoCalculo=`${resultadoAtual} * ${valorDigitado}` ;
    resultadoAtual=resultadoAtual*valorDigitado;
    outputResult(resultadoAtual,descricaoCalculo);
    Registoentradas.push(valorDigitado);
}

function dividir(){
    const valorDigitado=buscarValor();
    descricaoCalculo=`${resultadoAtual} / ${valorDigitado}` ;
    resultadoAtual=resultadoAtual/valorDigitado;
    outputResult(resultadoAtual,descricaoCalculo);
    Registoentradas.push(valorDigitado);
}
//adicionar funçao para multipicar e dividir
addBtn.addEventListener("click",adicionar);
//addEventListener('click',adicionar)
subtractBtn.addEventListener("click",subtrair);
multiplyBtn.addEventListener("click",multipicar);
divideBtn.addEventListener("click",dividir);

//TPC declarar uma variavel tipo array:resgisto entradas
//cada valor digitado dve ser adicionado ao array
let Registoentradas=[];

//usar push num.push(5);, adicionar 5 ao array 

