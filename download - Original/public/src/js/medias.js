
const url="http:localhost:3000/medias"





//serve para pegar dados da variavel do parametro
const  urlSearchParams = new URLSearchParams(window.location.search);

//utiliza-se o get para pegar os dados que precisamos
const postID=urlSearchParams.get('id');


console.log(postID);

$mensagem=document.getElementById('msg');


$criar_conta=document.getElementById('login');

$actualizar_conta=document.getElementById('actualizar');

const mensage=document.getElementById("mensagem");
mensage.style.display="none";
$criar_conta.style.display="none";
$actualizar_conta.style.display="none";
async function Buscar_Todos_Clientes(){

  if(postID>0)
    {
      $actualizar_conta.style.display="block";
    }
  const response = await fetch(url,
    {
      method:'GET',
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  
  
  $table=document.getElementById('tabela');

  $thead=document.querySelector('thead tr');
  
  

  
  $headNOME=document.createElement('th');
  $headNOME.innerText="NOME";

  $headARTISTA=document.createElement('th');
  $headARTISTA.innerText="ARTISTA";
  $headPUBLICACAO=document.createElement('th');
  $headPUBLICACAO.innerText="PUBLICACAO";

  $headFORMATO=document.createElement('th');
  $headFORMATO.innerText="FORMATO";

  $headOPCOES=document.createElement('th');
  $headOPCOES.innerText="OPÇÕES";
  $headOPCOES.style.colSpan="2";

  $thead.appendChild($headNOME);
  $thead.appendChild($headFORMATO);
  $thead.appendChild($headPUBLICACAO);

  $thead.appendChild($headARTISTA);
  $thead.appendChild($headOPCOES);
  
  $mensagem.innerText="Nenhum media cadastrado";
  data.map((post)=>{

   
    
    $mensagem.innerText="";
    $tr=document.createElement('tr');
    $id=document.createElement('td');
    $nome=document.createElement('td');
    $artista=document.createElement('td');
    $formato=document.createElement('td');
    $publicacao=document.createElement('td');
    $editar=document.createElement('td');
    $excluir=document.createElement('td');

    $editar.id="editar";
    $excluir.id="excluir";

    $linkEdite =document.createElement('a');
    $linkDelete =document.createElement('a');
   

    $id.innerText=post.id;
    $nome.innerText=post.nome;
    $formato.innerText=post.formato;
    $artista.innerText=post.artista;

    //replace serve para subdstituir valor2 para valor1
    $publicacao.innerText= post.publicacao.replace('T23:00:00.000Z', '');// post.nascimento;
   
   
   // $linkEdite.setAttribute("href",`clientes.html?id=${post.id}`);
  
    $linkEdite.innerText="Editar";
    $linkEdite.onclick=function(){
      
      window.location.href = (`medias.html?id=${post.id}`);//.replace('T23:00:00.000Z', '');
      $actualizar_conta.style.display="block";
    
   }


    $linkDelete.setAttribute("href",`deletar_medias.html?id=${post.id}`);
    $linkDelete.innerText="Excluir";


    //Para as colunas de uma linha
  
    $tr.appendChild($nome);
    $tr.appendChild($formato);
    $tr.appendChild($publicacao);
    $tr.appendChild($artista);

    $editar.appendChild($linkEdite);
    $tr.appendChild($editar);


    $excluir.appendChild($linkDelete);
    $tr.appendChild($excluir);

  
    
    // para as linhas
    $table.appendChild($tr);


      
  
      if($mensagem.innerText=="Nenhuma media cadastrado"){
        $table.style.display="none";

      }
      else
      {
        $table.style.display="block";
      }
  });
};
Buscar_Todos_Clientes();




async function Buscar_Todos_Formatos_R(){

  const url="http:localhost:3000/formatos"
  const response = await fetch(url,
    {
      method:'GET',
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  
  
  $formatos=document.querySelector('.box-user #formato');




  data.map((post)=>{

  
    $opcao=document.createElement('option');
 
   

 
    $opcao.innerText=post.formato;
    $opcao.value=post.id;
  
  console.log(post.id);
    
    
    $formatos.appendChild($opcao);

 
  });
};


async function Buscar_Todos_Formatos_A(){

  const url="http:localhost:3000/formatos"
  const response = await fetch(url,
    {
      method:'GET',
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  
  
  $formatos=document.querySelector('#actualizar .box-user #formato');




  data.map((post)=>{

  
    $opcao=document.createElement('option');
 
   

 
    $opcao.innerText=post.formato;
    $opcao.value=post.id;
  
  console.log(post.id);
    
    
    $formatos.appendChild($opcao);

 
  });
};



Buscar_Todos_Formatos_R();
Buscar_Todos_Formatos_A();
//---------------------------------funcao para criar conta--------------------------------------------




const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");
const login=document.getElementById("login");

mensagem.style.display="none";



async function Resgistando(coment){
  
const nome=document.querySelector("#login .box-user #nome");
const publicacao=document.querySelector("#login .box-user #publicacao");
const formato=document.querySelector("#login .box-user #formato");
const artista=document.querySelector("#login .box-user #artista");

  const url="http:localhost:3000/criar_media/media"
  if(nome.value!=""  && publicacao.value!="" && formato.value!="" && artista.value!="")
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
  publicacao.value="";
  formato.value="";
  artista.value="";
  window.location.href = 'medias.html';
  $criar_conta.style.display="none";
  mensagem.style.display="block";
    }
    else
    {
      ms.innerText="Preencha os campos vasios";
      mensagem.style.display="block";
    }
}




function Registar(){

  const nome=document.querySelector("#login .box-user #nome");
  const publicacao=document.querySelector("#login .box-user #publicacao");
  const formato=document.querySelector("#login .box-user #formato");
  const artista=document.querySelector("#login .box-user #artista");

      var data_recebida=publicacao.value;
      var data= new Date();
      var ano_actual=data.getFullYear();
      var idadeMinima=0;
      var ano_maximo=1960;
      console.log("actual"+data.getFullYear())
    
      var dataAux=data_recebida.split('/');
      var ano=parseInt(dataAux[0]);
      var mes=parseInt(dataAux[1]);
      var dia=parseInt(dataAux[2]);
    
      
           if(ano>=ano_maximo && ano<=ano_actual-idadeMinima)
            {

              let coment={
                nome:nome.value,
                formato:formato.value,
                publicacao:publicacao.value,
                artista:artista.value
              }
               
             
              coment = JSON.stringify(coment);
              console.log(ano);
              Resgistando(coment);
              console.log(coment);
            }
            else
            {
              console.log("Erro ao validar data");
              ms.innerText="Erro ao validar data!";
              mensagem.style.display="block";
            }
   



     
     
    
  


}



async function Update_Cliente($id){

  const url="http:localhost:3000/update/media"
  
  
  const nome=document.querySelector("#actualizar .box-user #nome");
  const publicacao=document.querySelector("#actualizar .box-user  #publicacao");
  const formato=document.querySelector("#actualizar .box-user #formato");
  const artista=document.querySelector("#actualizar .box-user #artista");
  
  
  const mensagem=document.getElementById("mensagem");
  const ms=document.getElementById("ms");
  const sair=document.getElementById("sair");
  
  const registar=document.getElementById("registar");
  
  mensagem.style.display="none";
  
  
  console.log(postID);
   
  let coment={
    nome:nome.value,
    formato:formato.value,
    publicacao:publicacao.value,
    artista:artista.value
  }
  var data_recebida=publicacao.value;
  var data= new Date();
  var ano_actual=data.getFullYear();
  var idadeMinima=0;
  var ano_maximo=1960;
  console.log("actual"+data.getFullYear())

  var dataAux=data_recebida.split('/');
  var ano=parseInt(dataAux[0]);
  var mes=parseInt(dataAux[1]);
  var dia=parseInt(dataAux[2]);

  
       if(ano>=ano_maximo && ano<=ano_actual-idadeMinima)
        {
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
  console.log(coment);

  const  data = await response.json();

  console.log(data);
  window.location.href = 'medias.html';

}
else{
  console.log("Erro ao validar data");
  ms.innerText="Erro ao validar data!";
  mensagem.style.display="block";
}
  

}


function fecharMensagem(){
  mensagem.style.display="none";
}


function fechar_cadastro(){
  $criar_conta.style.display="none";
}
function abrir_cadastro(){
  $criar_conta.style.display="block";
}

function fechar_actualizar(){
  $actualizar_conta.style.display="none";
}
function abrir_actualizar(){
  $actualizar_conta.style.display="block";
}


