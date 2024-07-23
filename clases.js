// ejemplo de clase con metodos y variables
/*class nombreDeMiClase{
    constructor(parametrosDeCreacion){          // metodo(funcion)se ejecuta cada vez que se instancie un objeto 
        console.log("Nuevo metodo creado");
        this.variableInterna = 2;
    }
    static variableEstatica = 4;      // static (variable)puede utilizarse SIN NECESITAR UNA INSTANCIA
    metodo1(){
        console.log("soy un metodo de la clase");
    }
    metodo2 =()=>{
        console.log(`soy una funcion flecha, puedo incrustar variables: ${this.variableInterna}, todo dentro de una clase`)
    }
}

let instancia = new nombreDeMiClase();      // creo nuevo objeto
console.log(instancia.variableInterna);    // instancia cuenta con metodos y variables definidos en la clase previamente
instancia.metodo1();
instancia.metodo2();

nombreDeMiClase.variableEstatica;           // no necesita instancia, se llama de la clase
let instancia_2 = new nombreDeMiClase();    // nuevo objeto creado
let instancia_3 = new nombreDeMiClase(); */


// Ejemplo Clase 1
class Persona{                        
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // metodos
    saludar = ()=>{
        console.log(`hola, soy ${this.nombre},tengo ${this.edad}años, mucho gusto`);
    }
    /*getEspecie = ()=>{
        console.log(`aunque no lo creas soy un ${Persona.especie}`);
    }*/

    // propiedad estatica :
    static planeta = "Tierra";

    // metodo estatico :
    static especie(){
        console.log("soy un ser humano");
    }

}
let persona1 = new Persona("Luis",35);
let persona2 = new Persona("Ana",19);
persona1.saludar();
persona2.saludar();
/*persona1.getEspecie();
persona2.getEspecie(); */
console.log(`soy del planeta ${Persona.planeta}`);


// PRINCIPIO DE HERENCIA
class Estudiante extends Persona{

    //Si yo quiero generar una variable o propiedad privada. La tengo que mencionar en la clase con el #.
    #promedio = 8;
    
    constructor(nombre,edad,carrera,promedio){
        super(nombre,edad);                           // nombre y edad hereda del padre (Persona)
        this.carrera = carrera;
        this.promedio = promedio;
    }
    // metodos propios :
    miCarrera(){
        console.log(`Hola, mi carrera es ${this.carrera}`);
    }

    //Para poder revisar variables privadas, tengo que crear un método que me permita acceder a ellas: 
    get getPromedio() {
        return this.#promedio;
    }
}
let estudiante = new Estudiante("Alberto",24,"Informatica",9.5);
console.log(estudiante);
estudiante.saludar();
estudiante.miCarrera();
console.log(`Mi promedio es ${estudiante.promedio}`);

// Atencion, si uso el método get puedo revisar el dato privado: 
console.log(estudiante.getPromedio);


// EJERCICIO DE PRACTICA DE CLASE 1
// llevara cuentas individuales segun cada responsable

/*class Contador{
    constructor(miContador){
        this.miContador = miContador;
    }

    static contadorGlobal = 0;

    getResponsable = ()=>{
        console.log(this.miContador)
    }

    contar = ()=>{
        // incrementar cuenta individual como global
    }

    getCuentaIndividual = ()=>{
        console.log(`{contadorGlobal} + 1`);
    }

    getCuentaGlobal = ()=>{
        let global =
    }
}
// realizar prueba de individualidad entre instancias
let miContador1 = new Contador("Anibal");
let miContador2 = new Contador("Andrea");

miContador1.getResponsable();
miContador1.getCuentaIndividual();

miContador2.getResponsable();
miContador2.getCuentaIndividual();*/

