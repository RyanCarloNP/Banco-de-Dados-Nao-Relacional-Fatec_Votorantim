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
/*
  {
    "_id": {
      "$oid": "67cf6d0c04b4e1387ad9caf8"
    },
    "codigo_uf": 11,
    "uf": "RO",
    "nome": "Rondônia",
    "latitude": -10.83,
    "longitude": -63.34
  }
*/
use('estoque')
db.estados.find({},{local:1})