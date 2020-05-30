//função para arrumar a moeda
function formataMoeda(numeroMoeda){
    return numeroMoeda.toFixed(2).replace(".",",")
};
  
function calcular(){
  let txtkm = document.querySelector("#inputDistancia")
  let txtmin = document.querySelector("#inputTempo")

  let km = Number(txtkm.value)
  let min = Number(txtmin.value)

  if(txtkm.value.length == 0 || txtmin.value.length == 0){
    alert('[ERROR] Preencha os dados corretamente e tente novamente!')

  }else{
    //2 + 1.4*km + min*0.26    
    
    valortotal = 2 + 1.4*km + min*0.26  
    botaoCalcular.innerHTML = 'Total: R$'+ formataMoeda(valortotal);
  }
};