
let sharecontainer = document.querySelector(".sharecontainer");
let triangle = document.querySelector(".triangle");
let button = document.querySelector(".shareicondiv");
let icon = document.querySelector(".shareicon");

 button.addEventListener("click", function(){
   if ( sharecontainer.style.display=='none') {
      sharecontainer.style.display='grid';
      triangle.style.display='block';
      button.classList.add("shareicondivactive");
      icon.classList.add("shareiconactive");}
   else {
      sharecontainer.style.display='none';
      triangle.style.display='none';
      button.classList.remove("shareicondivactive");
      icon.classList.remove("shareiconactive");}
   });

