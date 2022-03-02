module.exports = app => {
    const Users = app.models.users;

    app.get('/users/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const attributes = ['id', 'name', 'email'];
            const options = { attributes };
            const user = await Users.findByPk(id, options);
            if (user) {
                res.json(user);
            } else {
                res.sendStatus(404);
            }
        } catch (err) {
            res.status(412).json({ msg: err });
        }
    });

    app.delete('/users/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const where = { id };
            await Users.destroy({ where });
            res.sendStatus(204);
        } catch (err) {
            res.status(412).json({ msg: err });
        }
    });

    app.post('/users/', async (req, res) => {
        try {
            const user = await Users.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(412).json({ msg: err });
        }
    });
}