
//const url="http:localhost:3000/criar_conta/clientes"

const nome=document.getElementById("nome");
const senha=document.getElementById("senha");
const nascimento=document.getElementById("nascimento");
const telefone=document.getElementById("telefone");

const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");
const login=document.getElementById("login");

mensagem.style.display="none";



async function Resgistando(coment){
  const url="http:localhost:3000/criar_conta/clientes"
  if(nome.value!="" && senha.value!="" && nascimento.value!="" && telefone.value!="")
    {

   
  const response = await fetch(`${url}/${coment}`,
    {
      method:'post',
      body:coment,
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();
  console.log(data);

  ms.innerText="Cadastrado com sucesso!";
  nome.value="";
  senha.value="";
  nascimento.value="";
  telefone.value="";
  window.location.href = 'registro.html'; //live server - 
  mensagem.style.display="block";

    }
    else
    {
      ms.innerText="Preencha os campos vasios";
      mensagem.style.display="block";
    }
}




function Registar(){


      let coment={
        nome:nome.value,
        nascimento:nascimento.value,
        senha:senha.value,
        telefone:telefone.value
      }
       
     
      coment = JSON.stringify(coment);
     
     Resgistando(coment);
     console.log(coment);
  

     
    
    
  


}



function fecharMensagem(){
  mensagem.style.display="none";
}




