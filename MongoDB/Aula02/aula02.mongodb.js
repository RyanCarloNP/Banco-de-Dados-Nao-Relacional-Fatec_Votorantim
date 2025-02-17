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

use('estoque')
db.produtos.insertOne({
    _id: '124',
    nome: 'Hámburger Gourmet',
    preco: 35.99,
    ingredientes: ["pão", "carne", "queijo", "alface", "tomate"],
    vegetariano: false,
    dataCadastr: new Date(),
    calorias: {
        total: 780,
        porcoes: 1
    }
})
use('estoque')
db.produtos.find()
use('estoque')
db.produtos.insertOne({ abobrinha: "tem" })
use('estoque')
db.produtos.drop()  //drop da collection
use('estoque')
db.createCollection('produtos',{
    validator:{
        $jsonSchema:{
            'bsonType':'object',
            'required':['_id','nome','preco','ingredientes','vegetariano','dataCadastro']
        }
    }
})