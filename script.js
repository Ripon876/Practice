document.querySelector("#searchIcon").addEventListener("click", function() {

  var show = document.querySelector(".search");
   // var hideIcon =  document.querySelector(".MyIcon");
  if(show.style.display === "none"){
  	show.style.display = "block" ;
  }else{
  		show.style.display = "none" ;
  }

});

