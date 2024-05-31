
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
$actualizar_conta.style.display="block";
async function Buscar_Todos_Formatos(){


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


