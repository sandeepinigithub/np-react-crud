const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const randomId = require('random-id');
const bodyParser = require("body-parser");
const { METHODS } = require('http');

const port = 3001;
const idlen = 10;
// place holder for the data
let users = [];


var corsOptions = {
    origin: 'http://localhost:3000', //Angular default port
    optionsSuccessStatus: 200,// For legacy browser support
    methods: "GET, PUT,POST,DELETE"
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/crud-ngrx-angular/build/index.html'));
});
app.get('/api/getUsers', (req, res) => {
    res.json(users)
});
app.post('/api/addUser', (req, res) => {
    const user = req.body;
    const id = randomId(idlen);
    user.id = id;
    console.log('Adding user:::::', user);
    users.push(user);
    res.json("User added successfully!");
});
app.put('/api/updateUser', (req, res) => {
    const user = req.body;
    users = users.map((usr) => {
        if (usr.id == user.id) {
            usr = user;
            console.log('Updating user:::::', user);
        }
        return usr
    })
    res.json("User updated successfully!");
});
app.delete('/api/deleteUser/:id', (req, res) => {
    console.log('deleting task:::', req.params.id);
    const id = req.params.id;
    users = users.filter(usr => usr.id !== id)
    res.json("User deleted successfully!");
});

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});