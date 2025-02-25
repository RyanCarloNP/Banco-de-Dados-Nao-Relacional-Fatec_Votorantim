use('estoque')
const usuarios = [
    { nome: 'José', idade: 22, sexo: 'M', hobbis: ['surf', 'animes'] },
    { nome: 'Maria', idade: 24, sexo: 'F', hobbis: ['judô', 'volley'] }
]
db.usuarios.insertMany(usuarios)

use('estoque')
db.usuarios.find()

use('estoque')
db.usuarios.updateOne(
    { nome: { $eq: "Maria" } },
    { $set: { nome: 'Maria Silva' } }
)
//Para incrementar ou decrementar um valor na alteração
use('estoque')
db.usuarios.updateMany(
    {}, //Todos pois está vazio
    { $inc: { idade: + 1 } }
    //{ $inc: { idade: - 1 } }
)
//$push - Adiciona um novo elemento a um array
use('estoque')
db.usuarios.updateOne(
    { nome: 'José' },
    { $push: { hobbis: 'Fotografia' } }
)
//$pull - Remove um elemento de um array
use('estoque')
db.usuarios.updateOne(
    { sexo: { $eq: 'F' } },
    { $pull: { hobbis: 'judô' } }
)
