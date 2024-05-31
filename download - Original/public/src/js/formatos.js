
const url="http:localhost:3000/formatos"

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
async function Buscar_Todos_Formatos(){
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
  
  

  
  $headTIPO=document.createElement('th');
  $headTIPO.innerText="TIPO";
  $headDESCRICAO=document.createElement('th');
  $headDESCRICAO.innerText="DESCRIÇÃO";
  $headPUBLICACAO=document.createElement('th');
  $headPUBLICACAO.innerText="PUBLICAÇÃO";
 

  $headOPCOES=document.createElement('th');
  $headOPCOES.innerText="OPÇÕES";
  $headOPCOES.style.colSpan="2";

  $thead.appendChild($headTIPO);
  $thead.appendChild($headDESCRICAO);
  $thead.appendChild($headPUBLICACAO);

  $thead.appendChild($headOPCOES);
  
  $mensagem.innerText="Nenhum formato adicionado";
  data.map((post)=>{

   
    
    $mensagem.innerText="";
    $tr=document.createElement('tr');
    $id=document.createElement('td');
    $tipo=document.createElement('td');
    $descricao=document.createElement('td');
    $data=document.createElement('td');
    $editar=document.createElement('td');
    $excluir=document.createElement('td');

    $editar.id="editar";
    $excluir.id="excluir";

    $linkEdite =document.createElement('a');
    $linkDelete =document.createElement('a');
   

    $id.innerText=post.id;
    $tipo.innerText=post.formato;
    $descricao.innerText=post.descricao;


    //replace serve para subdstituir valor2 para valor1
    $data.innerText=post.data_publicacao.replace('T23:00:00.000Z', '');// post.nascimento;
   
   
   // $linkEdite.setAttribute("href",`clientes.html?id=${post.id}`);
  
    $linkEdite.innerText="Editar";
    $linkEdite.onclick=function(){
      
      window.location.href = (`formatos.html?id=${post.id}`);//.replace('T23:00:00.000Z', '');
      $actualizar_conta.style.display="block";
    
   }


    $linkDelete.setAttribute("href",`deletar_formatos.html?id=${post.id}`);
    $linkDelete.innerText="Excluir";


    //Para as colunas de uma linha
  
    $tr.appendChild($tipo);
    $tr.appendChild($descricao);
    $tr.appendChild($data);
    $tr.appendChild($editar);

    $editar.appendChild($linkEdite);
    $tr.appendChild($editar);


    $excluir.appendChild($linkDelete);
    $tr.appendChild($excluir);

  
    
    // para as linhas
    $table.appendChild($tr);


      
  
      if($mensagem.value=="Nenhum cliente cadastrado"){
        $table.style.display="none";

      }
      else
      {
        $table.style.display="block";
      }
  });
};



    Buscar_Todos_Formatos()







//---------------------------------funcao para criar conta--------------------------------------------

const nome=document.querySelector("#login #nome");
const descricao=document.querySelector("#login #descricao");
const lancamento=document.querySelector("#login #data");


const mensagem=document.getElementById("mensagem");
const ms=document.getElementById("ms");
const sair=document.getElementById("sair");
const login=document.getElementById("login");

mensagem.style.display="none";



async function Resgistando(coment){
  const url="http:localhost:3000/criar_formatos/formatos"
  if(nome.value!="" && descricao.value!="" && lancamento.value!="" )
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
  descricao.value="";
  lancamento.value="";
 ;
  window.location.href = 'formatos.html';
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
 

  // codigo utilizado para validar datas
  var data_recebida=lancamento.value;
  var data= new Date();
  var ano_actual=data.getFullYear();
  var mes_actual=data.getTime(); 
  var dia_actual=data.getDate();
  var idadeMinima=12;
  var ano_maximo=1960;
  console.log("actual"+data.getFullYear());
  console.log("mes"+(data.getTime()));
  console.log("dia"+data.getDate());
  var dataAux=data_recebida.split('/');
  var ano=parseInt(dataAux[0]);
  var mes=parseInt(dataAux[1]);
  var dia=parseInt(dataAux[2]);

  
       if(ano==ano_actual  && mes==mes_actual && dia==dia_actual)
        {

      let coment={
        formato:nome.value,
        descricao:descricao.value,
        publicacao:lancamento.value
      
      }
       
     
      coment = JSON.stringify(coment);
     
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



async function Update_Formatos($id){

  const url="http:localhost:3000/update/formatos"
  
  
  const nome=document.querySelector("#actualizar #nome");
  const descricao=document.querySelector("#actualizar #descricao");
  const lancamento=document.querySelector("#actualizar #data");

  var data_recebida=lancamento.value;
  var data= new Date();
  var ano_actual=data.getFullYear();
 /* var mes_actual=data.getDate();
  var dia_actual=data.getDate();*/
  var idadeMinima=12;
  var ano_maximo=1960;

  
  console.log("actual"+data.getFullYear())
  console.log("Mes"+data.getDate())

  var dataAux=data_recebida.split('/');
  var ano=parseInt(dataAux[0]);
  var mes=parseInt(dataAux[1]);
  var dia=parseInt(dataAux[2]);

  
  if(ano==ano_actual)
    {


  
  /*comentei agora
  const mensagem=document.getElementById("mensagem");
  const ms=document.getElementById("ms");
  const sair=document.getElementById("sair");
  
  const registar=document.getElementById("registar");
  */
  
  mensagem.style.display="none";
  
  
  console.log(postID);
   
  let coment={
    nome:nome.value,
    descricao:descricao.value,
    lancamento:lancamento.value
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
  console.log(coment);

  const  data = await response.json();

  console.log(data);
  window.location.href = 'formatos.html';

 }
 else
 {
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


