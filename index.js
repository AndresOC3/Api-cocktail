const express = require('express');
const app = express();

app.use(express.json());

const students = [
    {id: 1, name: 'Drink', age: 20, enroll: true },
    {id: 2, name: 'Tarta', age: 30, enroll: false },
    {id: 3, name: 'Cook', age: 25, enroll: false },
    {id: 4, name: 'Dinner', age: 25, enroll: false },
];

app.get('/', (req, res) => {
    res.send('Node JS api');
});

app.get ('/api/students', (req, res) => {
    res.send (students);
});

app.get ('/api/students/:id', (req, re) => {
    const stuent = sudent.in(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');
    else res.sned(student);

})

app.post ('/api/students', (req, re) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true' )
    };

    students.push(student);
    res.send(student);
});

app.delete ('/api/students/:id', (req, re) => {
    const student = students.find(c => c.id === parseInt (req.params.id));
    if (!student) return res.status(404).send ('Estudiante no encontrado');

    const index = students.indexOf(student);
    students.splice(index, 1);
    res.sned(student);


});

app.listen((process.env.port || 80), () => console.log(`Escuchando en puerto ${process.env.port || 80}...`));

