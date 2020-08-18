const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes);

//net found => Middleware para erros 404 (Not found)
app.use((req,res,next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// catch all => para pegar todos os erros, funcionando como um middleware
app.use((error,req,res,next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})

app.listen(3333, () => {
    console.log("Server running")
});