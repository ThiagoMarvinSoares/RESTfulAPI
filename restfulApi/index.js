const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.json());

app.get('/Cars',(req, res) => {
    res.status(200).send({
        model: 'Uno Mille',
    })
});

app.post('/Cars/:id',(req, res) => {
    const { id } = req.params;
    const { model } = req.body;

    res.send({
        Cars: `${model}`
    })
})