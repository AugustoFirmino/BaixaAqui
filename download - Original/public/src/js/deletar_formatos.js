
const url="http:localhost:3000/delete/formatos"



//serve para pegar dados da variavel do parametro
const  urlSearchParams = new URLSearchParams(window.location.search);

//utiliza-se o get para pegar os dados que precisamos
const postID=urlSearchParams.get('id');

console.log(postID);

async function Deletar_Formatos($id){


  const response = await fetch(`${url}/${$id}`,
    {
      method:'DELETE',
      headers:{
        "Content-type":"application/json",
      },
    }
  );

  const  data = await response.json();

  console.log(data);


  /*Serve para direcionar a janela que o windows deve abrir */
  window.location.href = 'formatos.html';

  

}

Deletar_Formatos(postID);
