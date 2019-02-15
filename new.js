function fruit(color , taste){
    this.color =color ;
    this.taste=taste;

}
let mango ={
    color: "yellow",
    taste:"sweet"
}
let orange=new fruit("orange","sour");
let apple=new fruit ("red" ,"sweet");
console.log(apple);
console.log(orange);
console.log(mango);
