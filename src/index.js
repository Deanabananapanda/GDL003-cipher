const code=()=>{
  let text = document.getElementById("usermsg").value;
  let text2 = ""; 
  let coderindex = document.getElementById("mySelect").selectedIndex;
  let coder = document.getElementById("mySelect").options;
  let i;
 
  for (i = 0; i < text.length; i++){
      if (text.charCodeAt(i)==32){
          text2+=" ";            
      }else{
         text2 =text2+String.fromCharCode(text.charCodeAt(i)+parseInt(coder[coderindex].text)); 
      }        
  }

  let chatb = document.getElementById("chatbox");
  chatb.innerHTML = chatb.innerHTML+text2+"</br>";
};


const decode=()=>{
  let text = document.getElementById("usermsg").value;
  let text2 = ""; 
  let coderindex = document.getElementById("mySelect").selectedIndex;
  let coder = document.getElementById("mySelect").options;
  let i;
 
  for (i = 0; i < text.length; i++){
      if (text.charCodeAt(i)==32){
          text2+=" ";            
      }else{
         text2 =text2+String.fromCharCode(text.charCodeAt(i)-parseInt(coder[coderindex].text)); 
      }        
  }

  let chatb = document.getElementById("chatbox");
  chatb.innerHTML = chatb.innerHTML+text2+"</br>";
};
  window.onload= function (){
  let botonCodificar;
  botonCodificar = document.getElementById("code");
  botonCodificar.addEventListener("click",code);

  let botonDecodificar;
  botonDecodificar = document.getElementById("decode");
  botonDecodificar.addEventListener("click",decode);
};