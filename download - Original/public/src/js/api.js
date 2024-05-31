
const url="http:localhost:3000/clientes"
fetch(url,{method:'GET'})


async function getAllPosts(){

  const response = await fetch(url)
  console.log(response);

  const data =await response.json()

  console.log(data);

  data.map((post)=>{

    const $id=document.createElement('p');
    const $nome=document.createElement('p');
    $id.innerHTML=post.id;
    $nome.innerHTML=post.nome;
    const $body=document.querySelector('.body');   
    $body.appendChild($id);
    $body.appendChild($nome);

  })
}
getAllPosts();