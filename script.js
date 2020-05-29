//função para arrumar a moeda
function formataMoeda(numeroMoeda){
    return numeroMoeda.toFixed(2).replace(".",",")
  };
  
  
  function calcular(){
    
    //2 + 1.4*km + min*0.26
    km = inputDistancia.value
  
    min = inputTempo.value
  
    valortotal = 2 + 1.4*km + min*0.26
  
   botaoCalcular.innerHTML = 'Total: R$'+ formataMoeda(valortotal);
  };