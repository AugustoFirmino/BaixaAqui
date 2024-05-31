


async function Update_Cliente($id){

  const url="http:localhost:3000/update/clientes"



  //serve para pegar dados da variavel do parametro
  const  urlSearchParams = new URLSearchParams(window.location.search);
  
  //utiliza-se o get para pegar os dados que precisamos
  const postID=urlSearchParams.get('id');
  
  
  const nome=document.getElementById("nome");
  const senha=document.getElementById("senha");
  const nascimento=document.getElementById("nascimento");
  const telefone=document.getElementById("telefone");
  
  
  const mensagem=document.getElementById("mensagem");
  const ms=document.getElementById("ms");
  const sair=document.getElementById("sair");
  
  const registar=document.getElementById("registar");
  
  mensagem.style.display="none";
  
  
  console.log(postID);
   
  let coment={
    nome:nome.value,
    senha:senha.value,
    telefone:telefone.value,
    nascimento:nascimento.value
  }
   
 
  coment = JSON.stringify(coment);
  const response = await fetch(`${url}/${coment}/${$id}`,
    {
      method:'PUT',
      body:coment,
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  console.log(data);

 
  

}


function fecharMensagem(){
  mensagem.style.display="none";
}


