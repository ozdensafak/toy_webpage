d3.select("svg")
  .on("mousemove", doSomething);

function doSomething(event){
    var myPointer = d3.pointer(event);
    
    var x = myPointer[0];
    var y = myPointer[1];
    
    d3.select("p").text(x + "," + y);
}