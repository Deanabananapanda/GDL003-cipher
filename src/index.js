function  codificar(){
  var texto = document.getElementById("usermsg").value;
  var asciis = texto.charCodeAt(0)+2;
  var texto2 = String.fromCharCode(asciis);
  alert(texto.length);
}

var code = function(text){
  var text = document.getElementById("usermsg").value;
  var text2 = ""; 
  var coder = document.getElementById("mySelect").selectedIndex+2;
  //alert(index);
  for (i = 0; i < text.length; i++){
      if (text.charCodeAt(i)==32){
          text2 = text2+String.fromCharCode(text.charCodeAt(i));  
      }else{
          text2 = text2+String.fromCharCode(text.charCodeAt(i)+coder);
      }        
  }
  //alert(text2);
  var chatb = document.getElementById("chatbox");
  chatb.innerHTML = chatb.innerHTML+text2+"</br>";
}


var decode = function(text){
  var text = document.getElementById("usermsg").value;
  var text2 = ""; 
  var coder = document.getElementById("mySelect").selectedIndex+2;
  //alert(index);
  for (i = 0; i < text.length; i++){
      if (text.charCodeAt(i)==32){
          text2 = text2+String.fromCharCode(text.charCodeAt(i));  
      }else{
          text2 = text2+String.fromCharCode(text.charCodeAt(i)-coder);
      }        
  }
  //alert(text2);
  var chatb = document.getElementById("chatbox");
  chatb.innerHTML = chatb.innerHTML+text2+"</br>";
}