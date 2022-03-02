module.exports = app => {
    const Tasks = app.models.tasks;

    app.route('/tasks')
        .all((req, res, next) => {
            //Middleware de pré-execução das rotas
            next();
        })
        .get(async (req, res) => {
            try {
                const tasks = await Tasks.findAll();
                res.json({ tasks });
            } catch (err) {
                res.status(412).json({ msg: err.message });
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Tasks.create(req.body);
                res.json(result);
            } catch (err) {
                res.status(412).json({ msg: err });
            }
        });
    app.route('/tasks/:id')
        .get(async (req, res) => {
            try {
                const { id } = req.params;
                const where = { id };

                const task = await Tasks.findOne({ where });
                if (task) {
                    res.json(task);
                } else {
                    res.sendStatus(404);
                }
            } catch (err) {
                res.status(412).json({ msg: err });
            }
        })
        .put(async (req, res) => {
            try {
                const { id } = req.params;
                const where = { id };
                await Tasks.update(req.body, { where });
                res.sendStatus(204);
            } catch (err) {
                res.status(412).json({ msg: err });
            }
        })
        .delete(async (req, res) => {
            try {
                const { id } = req.params;
                const where = { id };
                await Tasks.destroy({ where });
                res.sendStatus(204);
            } catch (err) {
                res.status(412).json({ msg: err });
            }
        });
}