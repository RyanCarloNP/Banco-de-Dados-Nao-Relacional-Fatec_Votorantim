//Introdução
use('cinema')
db.filmes.insertOne({
    "titulo": "Guerra nas Estrelas",
    "ano": 1978,
    "diretor": "George Lucas",
    "classificação": "⭐⭐⭐⭐",
    "tituloGm": "Star Wars"
})

use('cinema')
db.filmes.insertOne({
    "titulo": "Guerra nas Estrelas 2",
    "ano": 1981,
    "diretor": "George Lucas",
    "classificação": "⭐⭐⭐⭐⭐",
    "tituloGm": "Star Wars 2"
})

use('cinema')
db.filmes.find()    //select*from filmes

use('cinema')   //select titulo, ano from filmes
db.filmes.find({}, { titulo: 1, ano: 1, _id: 0 })

use('cinema')   //select titulo, diretor from filmes where ano=1978
db.filmes.find({ ano: 1978 }, { titulo: 1, diretor: 1, _id: 0 })