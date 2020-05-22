document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("yu").addEventListener("click", openYt);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("in").addEventListener("click", openIn);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("wa").addEventListener("click", openWa);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("git").addEventListener("click", openGit);
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("refresh").addEventListener("click", refreshPage);
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("restart").addEventListener("click", start);
  });
  var myWindow
  var prevWindow

   var h=0;
   var m=0;
   var s=0;

   var myVar;

   var myVar = setInterval(refreshPage, 300000);

  function start(){
    m=0; h=0; s=0;
    clearInterval(myVar);
    myVar= setInterval(refreshPage, 300000);
  }
  

  function openYt()
  {
    myWindow = window.open("https://www.youtube.com", "_blank", "width=100%", "height=100%");
    prevWindow="https://www.youtube.com"
  }
  function openIn() {
    myWindow = window.open("https://www.instagram.com", "_blank", "width=800, height=900");
    prevWindow="https://www.instagram.com"
  }
  function openWa() {
    myWindow = window.open("https://web.whatsapp.com", "_blank", "width=800, height=700");
    prevWindow="https://web.whatsapp.com"
  }
  function openGit()
  {
    myWindow = window.open("https://www.github.com/robotic7o7", "_blank", "width=100%", "height=100%");
    prevWindow="https://www.github.com/robotic7o7"
  }
  function refreshPage()
  {
    myWindow.close()
    if(prevWindow==="https://www.instagram.com")
    {
      openIn()
    }
    else if(prevWindow==="https://www.youtube.com")
    {
      openYt()
    }
    else if(prevWindow==="https://web.whatsapp.com")
    {
      openWa()
    }
    else if(prevWindow==="https://www.github.com/robotic7o7")
    {
      openGit()
    }
    else{
      alert("Invalid Selection")
    }
  }
  
  function clock(){ 
    s++;
    if(s===60){
      m++;
      s=0;
    }
    if(m===5){
      m=0;
    }
    var ho= document.getElementById('hour');
    var mi= document.getElementById('minutes');
    var se= document.getElementById('seconds');
   
    ho.innerHTML = h;
    mi.innerHTML = m;
    se.innerHTML = s;  

}


var interval = setInterval(clock, 1000);



  