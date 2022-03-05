
db.profesores.deleteMany({})

db.profesores.insertOne({
    "_id": "111ABC",
    "nombre": "Elena Muñoz Cuevas",
    "fechaNac": new Date("1982-04-02"),
    "sueldo": 620.18,
    "claseOnline": true,
    "imparte": "Inglés",
    "diasTutoria": [7, 14, 28]
})


db.profesores.insertMany([
    { "_id": "222DEF", "nombre": "Natalia Lázaro Pérez", "fechaNac": new Date("1988-02-17"), "sueldo": 620.18, "claseOnline": true, "imparte": "Matemáticas", "diasTutoria": [3, 25]},
    { "_id": "333RTE", "nombre": "Pablo Rodríguez Palacio", "fechaNac": new Date("1991-08-21"), "sueldo": 840.38, "claseOnline": false, "imparte": "Química", "diasTutoria": [8, 18, 26]},
    { "_id": "444YTE", "nombre": "Iker Aramburu Andueza", "fechaNac": new Date("1993-04-04"), "sueldo": 560, "claseOnline": true, "imparte": "Física", "diasTutoria": [12, 14, 27]},
    { "_id": "555POU", "nombre": "William Smith Andrews", "fechaNac": new Date("1997-11-02"), "sueldo": 632.35, "claseOnline": false, "imparte": "Inglés", "diasTutoria": [1, 10, 20]},
    { "_id": "666EEE", "nombre": "Abraham Robles Linares", "fechaNac": new Date("1982-04-27"), "sueldo": 810.50, "claseOnline": false, "imparte": "Historia", "diasTutoria": [5, 15, 25]},
    { "_id": "777III", "nombre": "Zarah Mnilui Alcaz", "fechaNac": new Date("1977-07-21"), "sueldo": 500.70, "claseOnline": true, "imparte": "Historia", "diasTutoria": [8, 18, 28]}
])


