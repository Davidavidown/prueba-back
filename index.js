// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
// Ruta para manejar la petición POST
app.post('/nuevo-usuario', (req, res) => {
  const { name, email, gender, dateOfBirth } = req.body;
  
  console.log('Datos recibidos:', req.body);

  // Aquí puedes procesar los datos o guardarlos en una base de datos
  
  // Enviar una respuesta sencilla
  res.json({
    message: 'Datos recibidos exitosamente',
    data: {
      name,
      email,
      gender,
      dateOfBirth
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
