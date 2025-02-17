//Tipos de Dados
//String, Number, Booblean, Date, ObjectID
//Array, Object
use('estoque')
db.categorias.insertOne({ nome: 'Bebidas', ativo: true })
//select*from categorias
use('estoque')
db.categorias.find()

use('estoque')
db.categorias.insertOne({ _id: '123', nome: 'Sobremesas', ativo: true })

use('estoque')
db.categorias.find({}, { _id: 0, nome: 1 })

use('estoque')
db.categorias.insertMany([
    { nome: 'Entradas', ativo: true },
    { nome: 'Pães', ativo: true }
])