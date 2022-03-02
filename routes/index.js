module.exports = app => app.get('/', (req, res) => {
    res.json({ status: 'NTask API' })
});

// module.exports = app => app.get('/tasks', (req, res) => {
//     res.json({
//         tasks: [
//             { title: 'Fazer compras' },
//             { title: 'Fazer dinheiro' }
//         ]
//     });
// });