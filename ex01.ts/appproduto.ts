import { Produto } from "./Produto";


let p1: Produto; // aqui apenas declarei uma referencia a um carro , preciso criar o objeto
let p2: Produto;
p1 = new Produto(1,"teclado","branco grande bonito",100,5,"fotinha" ); // agora sim , aloquei (reservei ) memória para armazenar as coisas
p2 = new Produto(2,"copo","roxo grande bonito",5,200,"fotinha" );



console.log(p1.getInfo());
console.log(p2.getInfo());
