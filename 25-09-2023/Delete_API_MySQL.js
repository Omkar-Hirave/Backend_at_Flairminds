const express = require('express');
const con = require('./config');
const app = express();

app.delete('/:studentsId', (req, res) => {
    con.query("DELETE FROM students WHERE studentsId = ?", req.params.studentsId, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.listen(4040, () => {
    console.log('Server is running on http://localhost:4040');
});
