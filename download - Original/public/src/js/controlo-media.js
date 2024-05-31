

var $todos_arquivos=[];
$todos_arquivos[0]="Matias Damásio - A Outra - Video Oficial.mp4";
$todos_arquivos[1]="Button Rose  Toda Tropa  Ft Anderson Mário Vídeo Oficial_1080p.mp4";
$todos_arquivos[2]="Delero King - Tempo Muito (Video Oficial).mp4";
$todos_arquivos[3]="DJ Khaled - I'm The One ft. Justin Bieber, Quavo, Chance the Rapper, Lil Wayne.mp4";
$todos_arquivos[4]="akon - ghetto (legendado).mp4";
$todos_arquivos[5]="Gerilson Insrael - Estou Paiado (Official Video).mp4";
$todos_arquivos[6]="Dabeleza feat Filho do zua - Jivunda (Vídeo Oficial)_2.mp4";
$todos_arquivos[7]="Tabua Video Original HD  ......Dada2  2Produçoes.mp4";
$todos_arquivos[8]="Joskar  Flamzy Faroter_v240P.mp4";

var $nomes=[];
$nomes[0]="matias damasio";
$nomes[1]="anderson";
$nomes[2]="delerio king";
$nomes[3]="justin bieber";
$nomes[4]="akon";
$nomes[5]="gerilson insrael";
$nomes[6]="dabeleza";
$nomes[7]="dada2";
$nomes[8]="faroter";

var $encontrou=false;

function pesquisar($pesquisa)
{

    var $busca=document.getElementById($pesquisa);
   for(var i=0;i<$nomes.length;i++)
   {
     if($busca.value==$nomes[i])
     {
       
       $div=document.querySelector('.sugestoes .itens');
        $div.innerHTML="";
      
        $resultado=document.createElement('div');
        $resultado.innerHTML="<div class='video'><video id='video' ></video><br><p></p><br><button> <a > Baixar Agora</a></button>   <button class='btn-play' id='btn' onclick=playpause('video','btn')>Play</button></div> ";
        
        $div.appendChild($resultado);
        $video=document.querySelector('.sugestoes .itens .video  video');
        $video.style.width="700px";
      
        $video.style.height="400px";
        $video.style.marginLeft="100px";
        $video.id="video";
        $video.src='../../assets/videos/'+$todos_arquivos[i];
        $link=document.querySelector('.sugestoes .itens .video  a');
         $link.href='../../assets/videos/'+$todos_arquivos[i];
   
        $titulo=document.querySelector('.sugestoes .itens .video  p');
        $titulo.innerHTML=$todos_arquivos[i];
        $botao.document.querySelector('.sugestoes .itens .video button');
        $botao.style.marginLeft="500px";
        $titulo.style.marginLeft="200px";

        var $btn_play_pause=document.querySelector('.sugestoes .itens .video #btn');
        $btn_play_pause.id="btn";
        $encontrou=true;

        $busca.value="";
        break;
     
     }
     else
     {
        $encontrou=false;
     }

   


   }

   if($encontrou==false)
   {
      alert("Pesquisa não encontrada");
      
   }
}


function playpause($arquivo,$btn)
{

   $media=document.getElementById($arquivo);
   $botao=document.getElementById($btn);
   if($media.paused)
   {
      $media.play();
      $botao.innerHTML="Pause";
   }
   else{
      $media.pause();
      $botao.innerHTML="Play";
   }
}
