const routes = require('express').Router();

routes.get('/languages', (req, res) => {
    res.send('todos los lenguajes');
});

routes.get('/language/:id', (req, res) => {
    const id = req.params.id;    
    res.send('id del lenguaje es: ' + id);
});

module.exports = routes;