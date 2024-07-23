// Clase 7  EXPRESS AVANZADO

import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());   // servidor puede recibir .json al momento de la peticion
/*app.use(express.urlencoded({extended:true}))  */       // permite enviar info desde url

const clientes = [
    {id:"1", nombre:"carlos", apellido:"gardel"},
    {id:"2", nombre:"laura", apellido:"gomez"}
    
    
];

// ruta raiz trae todos los clientes
app.get("/", (req, res) => {
    res.send(clientes);
})

// ruta get retorna cliente por id
app.get("/:id", (req, res) => {
    // recuperamos parametro y buscamos en el array
    let{id} = req.params;   // let id = req.params.id
    const clienteBuscado = clientes.find(cliente => cliente.id == id);
    if(clienteBuscado){
        return res.send(clienteBuscado);
    } else{
        return res.send("no se encuentra cliente con ese id");
    }
})

// cargamos nuevo cliente con post
app.post("/", (req, res) => {
    const clienteNuevo = req.body;
    try{
        clientes.push(clienteNuevo);
        console.log(clientes);
        res.send({status:"success", message:"cliente creado"});
    } catch(error){
        res.status(500).send("error interno del servidor");
    }
})

// actualizamos cliente con put
app.put("/:id", (req, res) => {
    const {id} = req.params;
    const{nombre, apellido} = req.body;
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id);
    // si no encuentra retorna -1
    if(clienteIndex !== -1){
        clientes[clienteIndex].nombre = nombre;
        clientes[clienteIndex].apellido = apellido;
        console.log(clientes);
        res.send({status:"success", message:"cliente actualizado correctamente"});
    } else {
        res.status(404).send({status:"error", message:"cliente no encontrado"});
    }
})

app.listen(PORT, ()=> console.log(`servidor escuchando en http://localhost:${PORT}`));












/*let users = [];
// metodo POST
app.post('api/user', (req, res) => {
    let user = req.body;                 // req.body es .json que envia usuario an la peticion
    // validar campos completos
    if(!user.first_name || !user.last_name){
        // si hay error del cliente devolvemos status (antes del .send)
        return res.status(400).send({status:"error", error:"incomplete values"})
    }
    users.push(user);
    res.send({status:"success", message:"user created"})       // status 200 viene implicito si no se nombra
})
// metodo DELETE
app.delete('api/user/:name', (req, res) => {
    let name = req.params.name;
    let currentLength = users.length;
    users = users.filter(user => user.first_name != name);
    if(users.length === currentLength){
        return res.status(404).send({status:"error", error:"user not found"})     // si no elimino nada
    }
    res.send({status:"success", message:"user deleted"})
}) */