const url="http:localhost:3000/clientes"

const telefone=document.getElementById("telefone");
const senha=document.getElementById("senha");


const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");


mensagem.style.display="none";

async function Logando(coment){

  if(telefone.value!="" && senha.value!="" )
    {

   
  const response = await fetch(`${url}/${coment}`,
    {
      method:'POST',
      body:coment,
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();
  console.log(data);

  ms.style.display="block";
  mensagem.style.display="block";
  ms.innerText="Logado com sucesso!";
  const $id=1;
  telefone.value="";
  senha.value="";
  window.location.href = 'index.html?id='+$id;
  /*senha.value="";
  telefone.value="";*/

    }
    else
    {
      ms.innerText="Preencha os campos vasios";
      mensagem.style.display="block";
    }
}
async function logar(){

  /*
  
  const response = await fetch(url,{method:'GET'})
  console.log(response);

*/

 let coment={
   telefone:telefone.value,
   senha:senha.value
 }
  

 coment = JSON.stringify(coment);


Logando(coment);

console.log(coment);
telefone.value="";
senha.value="";

}


function fecharMensagem(){
  mensagem.style.display="none";
}


