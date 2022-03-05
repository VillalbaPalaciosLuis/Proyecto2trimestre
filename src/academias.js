db.academias.deleteMany({})
db.academias.insertOne({
    "_id": 1,
    "nombre": "Inglés",
    "edificio": 
    { 
        "type": "Point", 
        "coordinates": [-5.996100, 37.399090 ] 
    },
    "clases": ["Lunes", "Jueves", "Viernes"],
    "clasesTarde": false,
    "precio": 280.20
})


db.academias.insertMany([
    { "_id": 2,  "nombre": "Matemáticas",  "edificio":  { "type": "Point",  "coordinates": [-6.876100, 36.459090 ] }, "clases": ["Martes", "Jueves"], "clasesTarde": true, "precio": 315 },
    { "_id": 3,  "nombre": "Historia",  "edificio":  { "type": "Point",  "coordinates": [-6.466100, 37.459090 ] }, "clases": ["Martes", "Jueves", "Viernes"], "clasesTarde": true, "precio": 130.30 },
    { "_id": 4,  "nombre": "Física",  "edificio":  { "type": "Point",  "coordinates": [-5.873100, 37.459090 ] }, "clases": ["Martes", "Jueves"], "clasesTarde": false, "precio": 110 },
    { "_id": 5,  "nombre": "Química",  "edificio":  { "type": "Point",  "coordinates": [-6.676100, 36.459890 ] }, "clases": ["Lunes", "Miércoles", "Jueves"], "clasesTarde": false, "precio": 240.50 }
])