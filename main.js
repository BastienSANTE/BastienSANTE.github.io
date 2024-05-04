const name = "Bastien SANTE"



let image_count = 8;
let image_ident = [];
  
workgrid = document.getElementById("work_grid");
persgrid = document.getElementById("pers_grid");

  for(let i = 0; i  < image_count; i++){
    image_ident.push(Math.floor(Math.random()*image_count));
    console.log(i);
  }

  for (i in image_ident){
    workgrid.innerHTML += `<div><img src="./Thumbnails/Work/${i}.png"></img></div>`;
    persgrid.innerHTML += `<div><img src="./Thumbnails/Pers/${i}.png"></img></div>`;
  }