module.exports = app => {
    async function start(port) {
        try {
            await app.db.authenticate();
            await app.db.sync();
            if (process.env.NODE_ENV !== 'test') {
                app.listen(port, () => {
                    console.log(`NTask API - porta ${app.get('port')}`);
                });
            }
        } catch (err) {
            console.log('Erro de conexao com banco de dados...');
            console.error(err);
        }
    }

    start(app.get('port'));
}