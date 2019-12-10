import { Carro } from "./carro";


let c1: Carro; // aqui apenas declarei uma referencia a um carro , preciso criar o objeto
let c2: Carro;
c1 = new Carro(); // agora sim , aloquei (reservei ) memória para armazenar as coisas
c2 = new Carro();


// vamos preencher os dados 
//c1
c1.setAno(1968);
c1.setModelo("Fusca");
c1.setPlaca("ABC1234");
c1.getLigado();
c1.setCor("preto");


//c2
c2.setAno(2019)
c2.setModelo("tesla");
c2.setPlaca("eua2019");
c2.getLigado();
c2.setCor("branco");

//vamos manipular o carro com suas operações 
console.log(c1.getInfo());
console.log(c2.getInfo());



c1.andar();
c1.parar();

c2.ligar();
c2.andar();
c2.parar();
c2.desligar();

console.log(c1.getInfo());
console.log(c2.getInfo());

