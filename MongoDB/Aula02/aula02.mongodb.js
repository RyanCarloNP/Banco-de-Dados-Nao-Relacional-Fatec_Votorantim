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
    dataCadastro: new Date(),
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
db.createCollection('produtos', {
    validator: {
        $jsonSchema: {
            'bsonType': 'object',
            'required': ['_id', 'nome', 'preco', 'ingredientes', 'vegetariano', 'dataCadastro']
        }
    }
})
//Obter as informações da Collection
use('estoque')
db.getCollectionInfos({ name: 'produtos' })

use('estoque')
try {
    db.produtos.insertOne({ abobrinha: "tem" })
} catch (err) {
    printjson(err)
}

use('estoque')
db.estados.insertMany([
    { sigla: 'SP', nome: 'São Paulo', populacao: 12000000 },
    { sigla: 'AC', nome: 'Acre', populacao: 712000 },
    { sigla: 'RJ', nome: 'Rio de Janeiro', populacao: 2500000 }
])

use('estoque')
db.estados.find(
    {}, //Filtros
    {}, //Atributos a serem exibidos
)

use('estoque')  //select id, nome from estados where sigla='SP'
db.estados.find({ sigla: { $eq: 'SP' } }, { _id: 0, nome: 1 })

use('estoque')  //select id, nome from estados where sigla!='SP'
db.estados.find({ sigla: { $ne: 'SP' } }, { _id: 0, nome: 1 })

use('estoque')  //i = insensitive case
db.estados.find({ nome: /paulo/i }, { _id: 0, nome: 1 })

use('estoque')  //$ = que termine com
db.estados.find({ nome: /$paulo/i }, { _id: 0, nome: 1 })

use('estoque')  //^ = que começe com
db.estados.find({ nome: /^paulo/i }, { _id: 0, nome: 1 })

use('estoque')  //select * from estados where populacao >= 11000000
db.estados.find({ populacao: { $gte: 11000000 } })

use('estoque')  //select * from estados where sigla in ('AC', 'RJ')
db.estados.find({ sigla: { $in: ['AC', 'RJ'] } })

use('estoque')  //select * from estados where sigla not in ('AC', 'RJ')
db.estados.find({ sigla: { $nin: ['AC', 'RJ'] } })

use('estoque')  //select * from estados where sigla = 'RJ' or sigla = 'AC'
db.estados.find({ $or: [{ sigla: { $eq: 'RJ' } }, { sigla: { $eq: 'AC' } }] }, { _id: 0, nome: 1, sigla: 1 })

use('estoque')  //delete from estados where sigla = 'AC'
db.estados.deleteOne({ sigla: { $eq: 'AC' } })

use('estoque')  //delete from estados where character = 'o'
db.estados.deleteMany({ nome: /o/i })

use('estoque')  //update from estados set populacao = 1000
db.estados.updateOne({ sigla: { $eq: 'AC' } }, { $set: { populacao: 1000 } })

use('estoque')  //select * from estados where sigla = 'AC'
db.estados.find({ sigla: { $eq: 'AC' } })

use('estoque')  //update from estados set pais = 'Brasil'
db.estados.updateMany({}, { $set: { pais: 'Brasil' } })