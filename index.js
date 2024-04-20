const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

app.use(express.json());

// Ruta para registrar un nuevo deporte
app.get("/deportes", (req, res) => {

    // Se extraen parámetros de la URL
    const { nombre, precio } = req.query;
  
    // Validar que se reciban los parámetros necesarios
    if (!nombre || !precio) {
      return res.status(400).json({ error: "Faltan parámetros requeridos." });
    }
  
    // Validar que no se repita el nombre del deporte
    // (Implementación de la lógica para verificar si ya existe)
  
    // Persistir la información en el archivo JSON
    // (Escribir el código para agregar el deporte al archivo)
  
    res.status(201).json({ message: "Deporte registrado exitosamente." });
  });

  // Ruta para obtener todos los deportes registrados
app.get("/deportes", (req, res) => {
    // (Leer el archivo JSON y devolver los deportes)
    
  
    res.status(200).json(deportes);
  });

  // Ruta para editar el precio de un deporte
app.put("/deportes/:nombre", (req, res) => {
    const { nombre } = req.params;
    const { nuevoPrecio } = req.query;
  
    // Validar que se reciba el parámetro y que exista el deporte
    // (Implementar la lógica para buscar y actualizar el precio)
    
  
    res.status(200).json({ message: "Precio actualizado exitosamente." });
  });

  // Ruta para eliminar un deporte
app.delete("/deportes/:nombre", (req, res) => {
    const { nombre } = req.params;
  
    // Validar que exista el deporte solicitado
    // (Implementar la lógica para buscar y eliminar el deporte)
   
  
    res.status(200).json({ message: "Deporte eliminado exitosamente." });
  });
  