document.body.onload = createGallery;

function createGallery() {
  
  for(let i = 0; i < 5; i++){
    
    var TestItem = document.createElement("testDiv");
    var TestContent = document.createTextNode(i);
    TestItem.appendChild(TestContent);
    
    var ActualDiv = document.getElementById('h1');
    document.body.insertBefore(TestItem, ActualDiv);
  }
  
}