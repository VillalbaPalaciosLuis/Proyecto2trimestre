
db.alumnos.deleteMany({})
db.alumnos.insertOne({
    "id_tutor": "111ABC",
    "nombre": "Laura Cuevas Robles",
    "fechaNacimiento": new Date("2000-04-09"),
    "academias": 
        [
            {
                "nombre": "Inglés",
                "beca": 200
            }, 
            { 
                "nombre": "Matemáticas",
                "beca":100
            }
        ],
    "vivienda": 
    { 
        "type": "Point", 
        "coordinates": [-5.896100, 37.599090 ] 
    }
})

db.alumnos.insertMany([
    { "id_tutor": "555POU",  "nombre": "Juan Galán Pérez", "fechaNacimiento": new Date("2000-01-19"), "academias": [ { "nombre": "Inglés", "beca": 140 }, { "nombre": "Historia", "beca":20 } ], "vivienda": { "type": "Point", "coordinates": [-5.876100, 37.569090 ] } },
    { "id_tutor": "333RTE",  "nombre": "Encarnación Alcántara Robles", "fechaNacimiento": new Date("2000-02-02"), "academias": [ { "nombre": "Inglés", "beca": 15 }, { "nombre": "Física", "beca":120 } ], "vivienda": { "type": "Point", "coordinates": [-5.656100, 37.60090 ] } },
    { "id_tutor": "666EEE",  "nombre": "Mohammed Jadrán Albil", "fechaNacimiento": new Date("2004-10-09"), "academias": [ { "nombre": "Matemáticas", "beca":50 } ], "vivienda": { "type": "Point", "coordinates": [-5.896100, 37.599090 ] } },
    { "id_tutor": "111ABC",  "nombre": "Desiree Cabrera Muñoz", "fechaNacimiento": new Date("2004-06-01"), "academias": [ { "nombre": "Física", "beca": 70 }, { "nombre": "Inglés", "beca":20 } ], "vivienda": { "type": "Point", "coordinates": [-5.896100, 37.599090 ] } },
    { "id_tutor": "666EEE",  "nombre": "Javier López Zabala", "fechaNacimiento": new Date("2006-02-10"), "academias": [ { "nombre": "Química", "beca": 49 }, { "nombre": "Física", "beca":28 } ], "vivienda": { "type": "Point", "coordinates": [-5.896100, 37.599090 ] } },
    { "id_tutor": "777III",  "nombre": "Marta Alonso Sánchez", "fechaNacimiento": new Date("2006-08-29"), "academias": [ { "nombre": "Inglés", "beca": 80 }, { "nombre": "Matemáticas", "beca": 20 } ], "vivienda": { "type": "Point", "coordinates": [-5.896100, 37.599090 ] } },
])
