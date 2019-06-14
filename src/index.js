const codificar=()=>{
    let texto = document.getElementById("usermsg").value;
    let asciis = texto.charCodeAt(0)+2;
    let texto2 = String.fromCharCode(asciis);
    alert(texto.length);
  };
  
  const code=()=>{
    let text = document.getElementById("usermsg").value;
    let text2 = ""; 
    let coder = document.getElementById("mySelect").selectedIndex+2;
    let i;
   
    for (i = 0; i < text.length; i++){
        if (text.charCodeAt(i)==32){
         
            text2+String.fromCharCode(text.charCodeAt(i));  
        }else{
            
            text2+String.fromCharCode(text.charCodeAt(i)+coder);
        }        
    }
  
    let chatb = document.getElementById("chatbox");
    chatb.innerHTML = chatb.innerHTML+text2+"</br>";
  };
  
  
  const decode=()=>{
    let text = 
    document.getElementById("usermsg").value;
    let text2 = ""; 
    let coder = document.getElementById("mySelect").selectedIndex+2;
    let i;
    for (i = 0; i< text.length; i++){
        if (text.charCodeAt(i)==32){
            text2 = i;
            text2+String.fromCharCode(text.charCodeAt(i));  
        }else{
            text2 = text2+String.fromCharCode(text.charCodeAt(i)-coder);
        }    
    }
   
    let chatb = document.getElementById("chatbox");
    chatb.innerHTML = chatb.innerHTML+text2+"</br>";
  };

  let botonCodificar;
  botonCodificar = document.getElementById("code");
  botonCodificar.addEventListener("click",Codificar);

  let botonDecodificar;
  botonDecodificar = document.getElementById("decode");
  botonDecodificar.addEventListener("click",Decodificar);

  