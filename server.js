const express = require('express');
const path = require('path');
const app = express();

// Render y la mayoría de hostings asignan el puerto dinámicamente mediante variables de entorno
const PORT = process.env.PORT || 3000;

// Habilitar la carpeta 'public' para recursos estáticos (CSS, JS, imágenes de Figma)
app.use(express.static(path.join(__dirname, 'public')));

// RUTA 1: Inicio (Landing Page / Hero Banner / Bloques de Confianza)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// RUTA 2: Lista de Útiles (Buscador Integrado y Catálogo por Filtros)
app.get('/lista-de-utiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'utiles.html'));
});

// Manejo global para páginas no encontradas (Error 404)
app.use((req, res) => {
    res.status(404).send(`
        <div style="text-align:center; padding:50px; font-family:sans-serif;">
            <h1 style="color:#0A46E4;">404 - Página no encontrada</h1>
            <p>La sección solicitada no existe en el servidor de Papelería Villa.</p>
            <a href="/" style="color:#0A46E4; font-weight:bold;">Regresar al Inicio</a>
        </div>
    `);
});

// Inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor de Papelería Villa corriendo en http://localhost:${PORT}`);
});