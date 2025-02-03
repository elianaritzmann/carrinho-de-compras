function quantidade(acao, produto){

    const qntd = document.getElementById("qntd_" + produto)
    const valor = document.getElementById("valor_"+ produto)
    const total = document.getElementById("total_" + produto)
 if(acao == '-' && qntd.innerHTML <=0){
    alert('adicione uma quantidade')
 }else{
    acao == '+' ? qntd.innerHTML++ : qntd.innerHTML--
    total.innerHTML = valor.innerHTML*qntd.innerHTML
    soma()

 }
    


}

function soma (){
    
  let subtotal=0

    for (i=1; i<4 ; i++){
        subtotal += Number(document.getElementById("total_"+i).innerHTML)

       

    }

  document.getElementById('subtotal').innerHTML = `Subtotal R$ ${subtotal}`

}