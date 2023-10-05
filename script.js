
let sharecontainer = document.querySelector(".sharecontainer");
let triangle = document.querySelector(".triangle");
let button = document.querySelector(".shareicondiv");
let icon = document.querySelector(".shareicon");
let share = document.querySelector(".sh");

 button.addEventListener("click", function(){
   if ( sharecontainer.style.display=='grid') {
      sharecontainer.style.display='none';
      triangle.style.display='none';
      button.classList.remove("shareicondivactive");
      icon.classList.remove("shareiconactive");}

      else {
         sharecontainer.style.display='grid';
         triangle.style.display='block';
         button.classList.add("shareicondivactive");
         icon.classList.add("shareiconactive");}
   });

   document.addEventListener("click", (e) => {
    if (e.target !== icon && e.target !== button && e.target !==sharecontainer && 
      e.target !== share && sharecontainer.style.display=='grid') {
  
     sharecontainer.style.display='none';
     triangle.style.display='none';    
     button.classList.remove("shareicondivactive");
     icon.classList.remove("shareiconactive");}
   
   });
