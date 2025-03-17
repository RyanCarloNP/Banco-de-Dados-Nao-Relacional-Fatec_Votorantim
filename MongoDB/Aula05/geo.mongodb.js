use('estoque')
db.estados.find()
db.estados.find().forEach(function (estado) {
    db.estados.updateOne(
        { _id: estado._id },
        {
            $set: {
                local: {
                    type: "Point",
                    coordinates: [estado.longitude, estado.latitude]
                }
            },
            $unset: { longitude: "", latitude: "" }
        }
    )
})

use('estoque')
db.estados.find({}, { local: 1 })

//Criando o indece 2dSphere
use('estoque')
db.estados.createIndex({ local: "2dsphere" })

//Localizando os estados até 200km  próximos da Fatec
use('estoque')
db.estados.find({
    local: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-47.4495, -23.5313]   //Fatec
            },
            $maxDistance: 2000000 //Em metros (200km)
        }
    }
}, { nome: 1, _id: 0 })

use('estoque')
db.estados.find({
    local: {
        $geoWithin: {
            $centerSphere:
                [
                    [-47.4495, -23.5313], //Fatec
                    2000 / 6378.1 //Raio em radianos
                ]
        }
    }
}, { nome: 1, _id: 0 })
