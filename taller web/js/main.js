class Persona{
  #edad;
  constructor(nombre){
    this.nombre=nombre;
    this.#edad =25;
  }
  sayhello(){
    setTimeout(function(){
      console.log("Hola mi nombre es "+this.nombre);
    },3000)
  }

  sayhello2(){
    setTimeout(()=>{
      console.log("Hola mi nombre es "+this.nombre);
    },2000) 
  }
}
//varias lineas de codigo
/*const f1= (nombre) => {
  console.log("Hola "+nombre);
};*/

const promesa = new Promise((resolve, reject)=>{
  const sum=1+1;
  if(sum==2)
  {
    resolve("todo gud ");
  }else{
    reject("algo esta mal");
  }
});

promesa.then((mensaje)=>{
  console.log(mensaje);
}).catch(error=>{
  console.log(error);
});

//una linea
const f1= (nombre) =>console.log("Hola "+nombre);
const p1  =new Persona("juan cachetes");
//f1("Sonia Blade");
p1.sayhello();
p1.sayhello2();