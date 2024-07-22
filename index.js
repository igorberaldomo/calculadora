let operaçãoPretendida = window.document.getElementById("operaçãoPretendida")
let listacalculos = window.document.getElementById("listacalculos")
let arrayContas =["","","","",];
let arrayDatas =["","","","",];

function adicionar(value){
    if (value == "c") operaçãoPretendida.innerText = "";
    else if (value != "=") operaçãoPretendida.innerText += value;
    else {
      try { 
        texto = `${operaçãoPretendida.innerText} = ${eval(operaçãoPretendida.innerText).toFixed(2)}`
        adicionaArrayContas(texto)
        operaçãoPretendida.innerText = ""
      } catch {
        alert("operação não pode ser realizada");
      }
    }
}

function adicionaArrayContas(texto){
  let datas = getDate();
  arrayDatas.pop()
  arrayDatas.unshift(`${datas}`)
  arrayContas.pop()
  arrayContas.unshift(`${texto}`)
  createTable(arrayContas, arrayDatas)
}


function getDate(){
  let data = new Date();
  let horas =  data.getHours();
  let minutos = data.getMinutes();
  if(minutos < 10){
    minutos = `0${minutos}`
  }
  let segundos = data.getSeconds();
  let dias = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  data =  dias + '/' + mes + '/' + ano;
  horas = horas + ":" + minutos+":"+segundos
  let stringDate = `${data} ${horas} `
  return stringDate
}

createTable(arrayContas, arrayDatas)

function createTable(arrayContas , arrayDatas){

  let tabela = document.getElementById("tabela")
  tabela.innerHTML = ""
  for(let i =0; i <arrayContas.length; i++){
    let row = `<tr>
    <td>${arrayDatas[i]}</td>
    <td>${arrayContas[i]}</td>
    </tr>
    `
    tabela.innerHTML += row

  }
  console.log(arrayContas)
}