
const url="http:localhost:3000/desenvolvedores"





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

  $headTELEFONE=document.createElement('th');
  $headTELEFONE.innerText="TELEFONE";
  $headNASCIMENTO=document.createElement('th');
  $headNASCIMENTO.innerText="NASCIMENTO";

  $headOPCOES=document.createElement('th');
  $headOPCOES.innerText="OPÇÕES";
  $headOPCOES.style.colSpan="2";

  $thead.appendChild($headNOME);
  $thead.appendChild($headTELEFONE);

  $thead.appendChild($headNASCIMENTO);
  $thead.appendChild($headOPCOES);
  
  $mensagem.innerText="Nenhum Desenvolvedor cadastrado";
  data.map((post)=>{

   
    
    $mensagem.innerText="";
    $tr=document.createElement('tr');
    $id=document.createElement('td');
    $nome=document.createElement('td');
    $telefone=document.createElement('td');
    $nascimento=document.createElement('td');
    $editar=document.createElement('td');
    $excluir=document.createElement('td');

    $editar.id="editar";
    $excluir.id="excluir";

    $linkEdite =document.createElement('a');
    $linkDelete =document.createElement('a');
   

    $id.innerText=post.id;
    $nome.innerText=post.nome;
    $telefone.innerText=post.telefone;

    //replace serve para subdstituir valor2 para valor1
    $nascimento.innerText= post.nascimento.replace('T23:00:00.000Z', '');// post.nascimento;
   
   
   // $linkEdite.setAttribute("href",`clientes.html?id=${post.id}`);
  
    $linkEdite.innerText="Editar";
    $linkEdite.onclick=function(){
      
      window.location.href = (`desenvolvedores.html?id=${post.id}`);//.replace('T23:00:00.000Z', '');
      $actualizar_conta.style.display="block";
    
   }


    $linkDelete.setAttribute("href",`deletar_desenvolvedor.html?id=${post.id}`);
    $linkDelete.innerText="Excluir";


    //Para as colunas de uma linha
  
    $tr.appendChild($nome);
    $tr.appendChild($telefone);
    $tr.appendChild($nascimento);
    $tr.appendChild($editar);

    $editar.appendChild($linkEdite);
    $tr.appendChild($editar);


    $excluir.appendChild($linkDelete);
    $tr.appendChild($excluir);

  
    
    // para as linhas
    $table.appendChild($tr);


      
  
      if($mensagem.value=="Nenhum desenvolvedor cadastrado"){
        $table.style.display="none";

      }
      else
      {
        $table.style.display="block";
      }
  });
};
Buscar_Todos_Clientes();




//---------------------------------funcao para criar conta--------------------------------------------

const nome=document.getElementById("nome");
const nascimento=document.getElementById("nascimento");
const telefone=document.getElementById("telefone");


const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");
const login=document.getElementById("login");

mensagem.style.display="none";



async function Resgistando(coment){
  const url="http:localhost:3000/criar_desenvolvedor/desenvolvedor"
  if(nome.value!=""  && nascimento.value!="" && telefone.value!="")
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
  nascimento.value="";
  telefone.value="";
  window.location.href = 'desenvolvedores.html';
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


      var data_recebida=nascimento.value;
      var data= new Date();
      var ano_actual=data.getFullYear();
      var idadeMinima=12;
      var ano_maximo=1960;
      console.log("actual"+data.getFullYear())
    
      var dataAux=data_recebida.split('/');
      var ano=parseInt(dataAux[0]);
      var mes=parseInt(dataAux[1]);
      var dia=parseInt(dataAux[2]);
    
      
           if(ano>ano_maximo && ano<ano_actual-idadeMinima)
            {

              let coment={
                nome:nome.value,
                nascimento:nascimento.value,
                telefone:telefone.value
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

  const url="http:localhost:3000/update/desenvolvedor"
  
  
  const nome=document.querySelector("#actualizar #nome");
  const nascimento=document.querySelector("#actualizar #nascimento");
  const telefone=document.querySelector("#actualizar #telefone");
  
  
  const mensagem=document.getElementById("mensagem");
  const ms=document.getElementById("ms");
  const sair=document.getElementById("sair");
  
  const registar=document.getElementById("registar");
  
  mensagem.style.display="none";
  
  
  console.log(postID);
   
  let coment={
    nome:nome.value,
    telefone:telefone.value,
    nascimento:nascimento.value
  }
   
  var data_recebida=nascimento.value;
  var data= new Date();
  var ano_actual=data.getFullYear();
  var idadeMinima=12;
  var ano_maximo=1960;
  console.log("actual"+data.getFullYear())

  var dataAux=data_recebida.split('/');
  var ano=parseInt(dataAux[0]);
  var mes=parseInt(dataAux[1]);
  var dia=parseInt(dataAux[2]);

  
       if(ano>ano_maximo && ano<ano_actual-idadeMinima)
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
  window.location.href = 'desenvolvedores.html';

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



/*
function validar_data(data_recebida){

  var dataAux=data_recebida.split('/');
  var ano=parseInt(dataAux[0]);
  var mes=parseInt(dataAux[1]);
  var dia=parseInt(dataAux[2]);

  
       if(ano<2024 || ano>2024)
        {
          console.log(ano);
        }
        else
        {
          console.log("Erro ao validar data");
        }
    
}

validar_data("2024-05-01");

*/