
/* ----------------------------------------------------------------------------------------------

Crear una colección en la que se incluya una ficha de cada alumno en cada academia,
además tendrá un nuevo campo que incluye el coste final que ha de pagar.

-------------------------------------------------------------------------------------------------*/ 

db.alumnos.aggregate( [
    {  
        $unwind : "$academias"
    },
    {
        $project:
        {
            _id: 0,
            nombre: 1,
            academia: "$academias.nombre",
            beca: "$academias.beca",
            fechaNacimiento: 1,
            id_tutor: 1,
            vivienda: 1,
        }
    },
    {
        $lookup: 
        
            { 
                from: "academias", 
                localField: "academia", 
                foreignField: "nombre",
                as: "academiaDatos"
            }
    },
    {
        $addFields: 
            { 
                datAc: 
                {$arrayElemAt: ["$academiaDatos",0]}
            }   
    },
    {
        $project:
                { 
                   academiaDatos: 0,
                }   
    },
    {
        $project:
                { 
                    nombre: 1,
                    fechaNacimiento: 1,
                    vivienda: 1,
                    id_tutor: 1,
                    academia: 1,
                    beca: 1,
                    precio: "$datAc.precio",
                    costefinal: {$subtract: ["$datAc.precio","$beca"]},
                    id_academia: "$datAc._id",
                    edificio: "$datAc.edificio"     
                }   
    },
    { 
        $out: 
            { 
                db: "academias",
                coll: "fichaAlumnoAcademia" 
            } 
    }
])





/* ----------------------------------------------------------------------------------------------

Necesitamos saber que alumnos se encuentran a más de 5 km de la academia de Inglés para poder darles 20 euros más de beca.

Sólo nos interesa saber el nombre, las distancia a la que está y la cantidad de beca antigua y nueva. Ordenar los alumnos por lejanía. 

-------------------------------------------------------------------------------------------------*/ 


        // Primero necesitamos crear un Index 2dsphere en mongo Compass para utlizar la geolocalización



db.fichaAlumnoAcademia.createIndex( {vivienda : "2dsphere"} )



        //Tener en cuenta que primero se especifica la longitud y luego la latitud 

db.fichaAlumnoAcademia.aggregate([
            {
              $geoNear: {
                 near: { type: "Point", coordinates: [ -5.996100 , 37.399090 ] },
                 distanceField: "Distancia",
                 maxDistance: 90000,
                 minDistance: 5000,
                 query: { academia: "Inglés" },
                 spherical: true
              }
            },
             {
                $project: {
                    _id: 0,
                    nombre: 1,
                    Distanciakm: {$round : [{ $divide: [ "$Distancia", 1000 ] } , 2]},
                    becaAntigua: "$beca",
                    becaActualizaa: {$sum: ["$beca", 20]}
                }
            }
         ]).pretty()

        


/* ----------------------------------------------------------------------------------------------

Contar la cantidad de alumnos por año de nacimiento que tengan una beca superior o igual a 50 €

-------------------------------------------------------------------------------------------------*/

db.fichaAlumnoAcademia.aggregate([   
{
    $match:
    { 
        $expr: {$gte: [ "$beca", 50]}
    },
},

{
    $group:
    { 
        _id:  {$year: "$fechaNacimiento"},
        cantidad: {$sum: 1}
    }
},
  {
    $project:{
        _id:0,
      añoNacimiento: "$_id",
      cantidad: 1
    }
  }
])



/* ----------------------------------------------------------------------------------------------

Media de edad del alumnado de cada profesor. 

-------------------------------------------------------------------------------------------------*/


db.profesores.aggregate([
    {
        $lookup: 
        
            { 
                from: "alumnos", 
                localField: "_id", 
                foreignField: "id_tutor",
                as: "alumnos"
            }
    },
    {  
        $unwind : "$alumnos"
    },
    {
        $project: 
        {
            _id: 0,
            id_profesor: 1,
            nombre: 1,
            imparte: 1,
            alumnoNombre: "$alumnos.nombre",
            alumnoAño: {$year: "$alumnos.fechaNacimiento"}
        }
    },
    {
        $group: 
        {
            _id: {idProfesor: "$id_profesor", nombre: "$nombre"},
            mediaAñoNac: {$avg: "$alumnoAño"}
        }
    },
    {
        $project:
        {
            _id: 0,
            idProfesor: "$_id.idProfesor",
            nombre: "$_id.nombre",
            edadMediaAlumnos: {$subtract: [2022, "$mediaAñoNac"]}
        }
    }
]).pretty()


/* ----------------------------------------------------------------------------------------------

Se necesita una colecion actualizada de los profesores que tienen clases online.

Hay que crear un campo que incluya el id de la academia y otro campo que incluya los días que se imparten clases.

La nueva colección se guardará bajo el nombre "profesoresOnlineActualizado" dentro de la base de datos "Academias"

-------------------------------------------------------------------------------------------------*/

db.profesores.aggregate([
    {
        $match: {
            claseOnline: true
        }
    },
    {
        $lookup: 
        
            { 
                from: "academias", 
                localField: "imparte", 
                foreignField: "nombre",
                as: "datosAcademia"
            }
    },
    {
        $project: {
            _id: 0,
            id_profesor: 1,
            nombre: 1,
            fechaNac: 1,
            sueldo: 1,
            claseOnline: 1,
            imparte: 1,
            diasTutoria: 1,
            id_Academia: "$datosAcademia._id",
            díasClase: "$datosAcademia.clases"
           }
    },
    { 
        $out: 
            { 
                db: "academias",
                coll: "profesoresOnlineActualizado" 
            } 
    }
]).pretty()




